"use client";

import React from "react";
import Image from "next/image";
import { Target, Compass, Zap, Award } from "lucide-react";
import CTAButton from "./ui/CTAButton";

export default function AboutCompany() {
  return (
    <section id="sobre" className="py-12 bg-[#090A0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF852A] text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-[#FF6B00]" />
              <span>Sobre a MRP Mobi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              A Inovação que veio para <span className="text-gradient-orange">Transformar</span> a Mobilidade
            </h2>

            <p className="text-base text-gray-200 leading-relaxed mb-4">
              A <strong className="text-white">MRP Mobi</strong> nasceu com a missão de redefinir o mercado de aplicativos de transporte no Brasil. Combinamos tecnologia de ponta, tarifas justas para motoristas e economia real para passageiros com um modelo revolucionário de indicação remunerada.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Diferente das plataformas convencionais que retêm margens abusivas, a MRP Mobi repassa a maior parte dos ganhos para quem produz e distribui renda com quem indica novos usuários.
            </p>

            <CTAButton text="Faça Parte da Nossa Rede" size="lg" showSparkle />
          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 p-3 shadow-2xl bg-[#121422]">
              <div className="relative h-[300px] sm:h-[360px] w-full rounded-2xl overflow-hidden bg-black/50">
                <Image
                  src="/mercado.png"
                  alt="Mercado MRP Mobi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-black/20 to-transparent" />

                {/* Overlaid Pill Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-2xl border border-white/20 bg-[#0A0B10]/90">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center font-bold text-lg">
                      100%
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Transparência Total</h4>
                      <p className="text-xs text-gray-300">Sem mensalidades, sem pegadinhas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#121422]">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Nossa Missão</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Proporcionar viagens econômicas para passageiros e ganhos dignos para motoristas, retribuindo a comunidade através da distribuição de comissões.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#121422]">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Nosso Objetivo</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Expandir em todo o Brasil criando uma rede sólida de pessoas que economizam e geram renda mensal recorrente compartilhando o aplicativo.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#121422]">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">O Diferencial</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Tarifa fixa de 21% para motoristas (79% de repasse) e comissão vitalícia para cada pessoa que se cadastrar pelo seu convite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
