"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export interface Slide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  tag: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <div className="relative w-full h-screen min-h-[600px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".hero-btn-prev",
          nextEl: ".hero-btn-next",
        }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative overflow-hidden">
            {/* Background image */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-transparent" />

            {/* Content — centered */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div className="max-w-3xl w-full">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-medium text-white/80 uppercase tracking-[0.18em]">
                    {slide.tag}
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white leading-none mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-9 max-w-xl mx-auto">
                  {slide.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/que-hacemos"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-primary/30"
                  >
                    Nuestros Servicios
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/30 bg-white/10 text-white text-sm font-semibold uppercase tracking-widest hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    Cotizar ahora
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Side navigation arrows */}
      <button
        aria-label="Slide anterior"
        className="hero-btn-prev absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 hover:scale-110 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Siguiente slide"
        className="hero-btn-next absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 hover:scale-110 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
