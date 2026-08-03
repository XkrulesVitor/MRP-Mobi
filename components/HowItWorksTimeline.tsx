"use client";

import React from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { UserPlus, Download, Share2, Wallet } from "lucide-react";
import CTAButton from "./ui/CTAButton";

export default function HowItWorksTimeline() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UserPlus className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />;
      case 1:
        return <Download className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />;
      case 2:
        return <Share2 className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />;
      case 3:
        return <Wallet className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />;
      default:
        return <UserPlus className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors duration-300" />;
    }
  };

  return (
    <section id="como-funciona" className="py-12 bg-[#090A0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-4 py-1.5 rounded-full border border-[#FF6B00]/30 inline-block mb-3">
            Simples, Rápido & Lucrativo
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Como Funciona em <span className="text-gradient-orange">4 Passos</span>
          </h2>

          <p className="text-base text-gray-300">
            Em poucos minutos você cria sua conta, ativa seu link exclusivo e começa a acumular benefícios e comissões vitalícias.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative z-10 glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#FF6B00] transition-all duration-300 group shadow-xl flex flex-col justify-between bg-[#121420] hover:shadow-[0_0_25px_rgba(255,107,0,0.2)]"
            >
              <div>
                {/* Step Number Badge & Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/20 border border-[#FF6B00]/40 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00]/30 flex items-center justify-center transition-all duration-300 shadow-md">
                    {getStepIcon(index)}
                  </div>
                  <span className="text-2xl font-black text-white/30 group-hover:text-[#FF6B00] transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#FF852A] bg-[#FF6B00]/10 rounded-full mb-3 border border-[#FF6B00]/20">
                  {item.badge}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6B00] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Section CTA */}
        <div className="mt-10 text-center">
          <CTAButton text="Iniciar o Passo 1 Agora" size="lg" showSparkle />
        </div>
      </div>
    </section>
  );
}
