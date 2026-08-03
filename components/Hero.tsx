"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CTAButton from "./ui/CTAButton";
import FloatingCards from "./FloatingCards";
import { Sparkles, ShieldCheck, ArrowDown, Info } from "lucide-react";

export default function Hero() {
  const [showCar, setShowCar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal car smoothly after scrolling slightly (30px)
      if (window.scrollY > 30) {
        setShowCar(true);
      } else {
        setShowCar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheadline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B00]/25 via-[#FF6B00]/10 to-transparent border border-[#FF6B00]/40 text-[#FF852A] text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-[#FF6B00]/10">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              <span>Oportunidade Única de Economia & Ganhos Vitalícios</span>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Economize em suas viagens e ainda{" "}
              <span className="text-gradient-orange">
                ganhe renda
              </span>{" "}
              indicando a MRP Mobi.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl font-normal leading-relaxed mb-8">
              Descubra uma nova forma de economizar nas corridas diárias e receber{" "}
              <strong className="text-white font-semibold underline decoration-[#FF6B00]/60 decoration-2">
                comissões vitalícias
              </strong>{" "}
              pelas viagens realizadas por todas as pessoas que você indicar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <CTAButton
                text="Quero me cadastrar"
                size="xl"
                showSparkle
                className="w-full sm:w-auto shadow-2xl shadow-[#FF6B00]/30"
              />

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                  <Info className="w-4 h-4" />
                </div>
                <span>Saiba como funciona</span>
              </a>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
                <span>Cadastro 100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>Saques via PIX em tempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Sem mensalidade</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup + Floating Car Reveal on Scroll */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            <FloatingCards />

            {/* Smartphone Container */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[540px] sm:h-[600px] z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 rounded-[48px] p-3 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#0A0B10] border border-white/10">
                  <Image
                    src="/mrp-cel-1-576x1024.png"
                    alt="MRP Mobi App Interface"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Cutout Car with Scroll Reveal Animation */}
            <div
              className={`absolute -bottom-8 -right-8 sm:-right-16 w-[280px] sm:w-[380px] z-30 pointer-events-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out ${
                showCar
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-12 scale-95"
              }`}
            >
              <Image
                src="/carro-mobi-recort.fw_-2048x761.png"
                alt="Carro MRP Mobi"
                width={800}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-[#FF6B00] transition-colors cursor-pointer">
        <a href="#trustbar" className="animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
