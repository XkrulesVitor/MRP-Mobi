"use client";

import React from "react";
import { CheckCircle2, User, Car, Sparkles } from "lucide-react";
import { PASSENGER_BENEFITS, DRIVER_BENEFITS } from "@/lib/constants";
import CTAButton from "./ui/CTAButton";

function BenefitCard({
  title,
  subtitle,
  icon: Icon,
  benefits,
  badge,
  isHighlight = false,
}: {
  title: string;
  subtitle: string;
  icon: any;
  benefits: string[];
  badge: string;
  isHighlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
        isHighlight
          ? "bg-gradient-to-b from-[#181A28] via-[#12141D] to-[#0A0B10] border-2 border-[#FF6B00] shadow-[0_0_40px_rgba(255,107,0,0.25)]"
          : "glass-panel border border-white/15 bg-[#10121D]"
      }`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Header Badge & Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00]">
              <Icon className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF852A] border border-[#FF6B00]/30 text-xs font-bold uppercase tracking-wider">
              {badge}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-300 mb-6">{subtitle}</p>

          {/* Benefits Checkmarks */}
          <div className="space-y-3 mb-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-base text-gray-200 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <CTAButton
            text="Quero me cadastrar"
            variant={isHighlight ? "primary" : "secondary"}
            size="lg"
            className="w-full shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default function Benefits3D() {
  return (
    <section id="beneficios" className="py-12 bg-[#0A0B10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF852A] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#FF6B00]" />
            <span>Benefícios Exclusivos MRP Mobi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Feito para <span className="text-gradient-orange">Passageiros</span> e{" "}
            <span className="text-gradient-orange">Motoristas</span>
          </h2>

          <p className="text-base text-gray-300">
            Escolha como você deseja se beneficiar. Seja economizando nas suas corridas ou lucrando como motorista parceiro, todos ganham com o sistema de indicações.
          </p>
        </div>

        {/* 2 Massive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <BenefitCard
            title="App MRP Mobi para Passageiros"
            subtitle="Viaje com economia real e ganhe dinheiro indicando amigos."
            icon={User}
            benefits={PASSENGER_BENEFITS}
            badge="Para Passageiros"
            isHighlight={true}
          />

          <BenefitCard
            title="Aplicativo MRP Mobi para Motoristas"
            subtitle="Lucratividade máxima com repasse justo de 79% por corrida."
            icon={Car}
            benefits={DRIVER_BENEFITS}
            badge="Para Motoristas"
            isHighlight={false}
          />
        </div>
      </div>
    </section>
  );
}
