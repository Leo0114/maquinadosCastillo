#!/usr/bin/env bash
# Genera versiones web de videos para el sitio.
#
# Los originales NO viven en el repo. Colócalos en una carpeta con subcarpetas
# `horizontal/` y `vertical/` y pásala como argumento:
#
#   bash scripts/optimize-videos.sh ~/Videos/castillo-originales [MAX_SECONDS]
#
# Salida → src/assets/videos/web/<orientación>/<nombre>.mp4 + <nombre>.jpg (poster)
# Videos ambientales (muted/loop): sin audio, 30 fps, H.264 High, faststart.
set -euo pipefail
shopt -s nullglob

if [[ $# -lt 1 ]]; then
  echo "Uso: bash scripts/optimize-videos.sh <carpeta-originales> [MAX_SECONDS]" >&2
  exit 1
fi

SRC_DIR="$1"
MAX_SECONDS="${2:-20}"
OUT_DIR="src/assets/videos/web"

for orientation in horizontal vertical; do
  mkdir -p "$OUT_DIR/$orientation"
  for input in "$SRC_DIR/$orientation"/*.mp4; do
    name="$(basename "$input" .mp4)"
    out="$OUT_DIR/$orientation/$name.mp4"
    poster="$OUT_DIR/$orientation/$name.jpg"

    if [[ ! -f "$out" || "$input" -nt "$out" ]]; then
      echo "→ $out"
      ffmpeg -loglevel error -y -i "$input" -t "$MAX_SECONDS" -an \
        -vf "fps=30,scale='min(720,iw)':-2" \
        -c:v libx264 -preset slow -crf 26 -profile:v high -pix_fmt yuv420p \
        -movflags +faststart "$out"
    fi

    # Poster = primer fotograma, para que el cambio poster → video sea imperceptible
    if [[ ! -f "$poster" || "$out" -nt "$poster" ]]; then
      ffmpeg -loglevel error -y -i "$out" -frames:v 1 -q:v 3 "$poster"
    fi
  done
done

du -sh "$OUT_DIR"
