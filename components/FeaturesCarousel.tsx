"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { CAROUSEL_SLIDES } from "@/lib/constants";
import CTAButton from "./ui/CTAButton";

export default function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  return (
    <section className="relative py-12 bg-[#090A0F] overflow-hidden border-y border-white/5 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF852A] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              <span>Destaques da Plataforma</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Conheça os <span className="text-gradient-orange">Pilares da MRP Mobi</span>
            </h2>
          </div>

          {/* Carousel Control Buttons (Explicit Header Controls) */}
          <div className="flex items-center gap-3 mt-4 md:mt-0 relative z-30">
            <button
              onClick={goToPrev}
              type="button"
              className="p-3.5 rounded-full bg-[#1F2233] hover:bg-[#FF6B00] text-white transition-all border border-white/20 active:scale-95 cursor-pointer shadow-xl flex items-center justify-center"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={goToNext}
              type="button"
              className="p-3.5 rounded-full bg-[#1F2233] hover:bg-[#FF6B00] text-white transition-all border border-white/20 active:scale-95 cursor-pointer shadow-xl flex items-center justify-center"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-[#121422] shadow-2xl p-6 sm:p-10">
          
          {/* Overlay Arrow Buttons inside the Card for Maximum Usability */}
          <button
            onClick={goToPrev}
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#FF6B00] text-white border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center shadow-2xl backdrop-blur-md"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#FF6B00] text-white border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center shadow-2xl backdrop-blur-md"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slides Content */}
          {CAROUSEL_SLIDES.map((item, idx) => {
            if (idx !== currentIndex) return null;

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-500 animate-fadeIn"
              >
                {/* Image Box */}
                <div className="lg:col-span-7 relative h-[260px] sm:h-[360px] w-full rounded-2xl overflow-hidden bg-[#0A0B10] border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121422] via-transparent to-transparent opacity-70" />
                  <span className="absolute top-4 left-4 bg-[#FF6B00] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Content Box */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold text-[#FF852A] uppercase tracking-widest mb-2 block">
                      Destaque 0{idx + 1} de 0{CAROUSEL_SLIDES.length}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-base text-gray-200 leading-relaxed mb-6">
                      {item.subtitle}
                    </p>
                  </div>

                  <div>
                    <CTAButton text="Quero Me Cadastrar" size="md" showSparkle />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-6 relative z-30">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              type="button"
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#FF6B00] shadow-md shadow-[#FF6B00]/40"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
