// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

export default defineConfig({
  site: "https://mscastillo.com.mx/",
  output: "server",
  adapter: netlify({
    imageCDN: false,
  }),

  integrations: [
    react(),
    icon(),
    robotsTxt(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
