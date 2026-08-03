"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { CAROUSEL_SLIDES } from "@/lib/constants";
import CTAButton from "./ui/CTAButton";

export default function FeaturesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play interval every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const currentItem = CAROUSEL_SLIDES[activeSlide];

  return (
    <section className="relative py-12 bg-[#090A0F] overflow-hidden border-y border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF852A] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#FF6B00]" />
            <span>Destaques da Plataforma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conheça os <span className="text-gradient-orange">Pilares da MRP Mobi</span>
          </h2>
        </div>

        {/* Main Carousel Display Box */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            type="button"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 sm:p-4 rounded-full bg-[#1F2233] hover:bg-[#FF6B00] text-white border-2 border-white/30 transition-all cursor-pointer shadow-2xl flex items-center justify-center active:scale-95 pointer-events-auto"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            type="button"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 sm:p-4 rounded-full bg-[#1F2233] hover:bg-[#FF6B00] text-white border-2 border-white/30 transition-all cursor-pointer shadow-2xl flex items-center justify-center active:scale-95 pointer-events-auto"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>

          {/* Slide Display Card */}
          <div className="rounded-3xl border border-white/20 bg-[#121422] shadow-2xl p-6 sm:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Box */}
              <div className="lg:col-span-7 relative h-[240px] sm:h-[340px] w-full rounded-2xl overflow-hidden bg-[#0A0B10] border border-white/10">
                <Image
                  key={currentItem.image}
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121422] via-transparent to-transparent opacity-70" />
                <span className="absolute top-4 left-4 bg-[#FF6B00] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                  {currentItem.tag}
                </span>
              </div>

              {/* Content Box */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full text-left">
                <div>
                  <span className="text-xs font-bold text-[#FF852A] uppercase tracking-widest mb-2 block">
                    Destaque 0{activeSlide + 1} de 0{CAROUSEL_SLIDES.length}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                    {currentItem.title}
                  </h3>

                  <p className="text-base text-gray-200 leading-relaxed mb-6">
                    {currentItem.subtitle}
                  </p>
                </div>

                <div>
                  <CTAButton text="Quero Me Cadastrar" size="md" showSparkle />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Dots Pagination */}
          <div className="flex justify-center items-center gap-3 mt-6 relative z-30">
            {CAROUSEL_SLIDES.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                type="button"
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx
                    ? "w-10 bg-[#FF6B00] shadow-lg shadow-[#FF6B00]/50"
                    : "w-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Ir para ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
