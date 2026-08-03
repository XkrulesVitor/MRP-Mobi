"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { CAROUSEL_SLIDES } from "@/lib/constants";
import CTAButton from "./ui/CTAButton";

export default function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = CAROUSEL_SLIDES[currentIndex];

  return (
    <section className="py-12 bg-[#090A0F] overflow-hidden border-y border-white/5">
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

          {/* Carousel Control Buttons */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              type="button"
              className="p-3.5 rounded-full bg-[#1F2233] text-white hover:bg-[#FF6B00] hover:text-white transition-all border border-white/20 active:scale-90 cursor-pointer shadow-lg z-20"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="p-3.5 rounded-full bg-[#1F2233] text-white hover:bg-[#FF6B00] hover:text-white transition-all border border-white/20 active:scale-90 cursor-pointer shadow-lg z-20"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Card Box */}
        <div className="relative rounded-3xl overflow-hidden border border-white/20 p-6 sm:p-10 bg-[#121422] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Box */}
            <div className="lg:col-span-7 relative h-[260px] sm:h-[360px] w-full rounded-2xl overflow-hidden bg-[#0A0B10] border border-white/10">
              <Image
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121422] via-transparent to-transparent opacity-70" />
              <span className="absolute top-4 left-4 bg-[#FF6B00] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                {slide.tag}
              </span>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-[#FF852A] uppercase tracking-widest mb-2 block">
                  Destaque 0{currentIndex + 1} de 0{CAROUSEL_SLIDES.length}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                  {slide.title}
                </h3>

                <p className="text-base text-gray-200 leading-relaxed mb-6">
                  {slide.subtitle}
                </p>
              </div>

              <div>
                <CTAButton text="Quero Me Cadastrar" size="md" showSparkle />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-6">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(idx);
              }}
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
