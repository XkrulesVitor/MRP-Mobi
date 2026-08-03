"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Smartphone, CheckCircle2, Copy } from "lucide-react";
import CTAButton from "./ui/CTAButton";
import { REFERRAL_LINK } from "@/lib/constants";

export default function QRCodeCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(REFERRAL_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-12 bg-[#07080D] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-2 border-[#FF6B00]/40 orange-glow text-center relative overflow-hidden bg-[#0F111E]">
          
          <div className="max-w-3xl mx-auto relative z-10">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-lg shadow-[#FF6B00]/40">
              <Sparkles className="w-4 h-4" />
              <span>Oportunidade Exclusiva</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              Cadastre-se <span className="text-gradient-orange">Agora Mesmo</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Escaneie o QR Code oficial abaixo com a câmera do seu celular ou clique no botão para criar sua conta gratuita em menos de 2 minutos.
            </p>

            {/* QR Code Container using /QRcode.png */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="bg-white p-4 rounded-3xl shadow-2xl border-4 border-[#FF6B00] flex flex-col items-center justify-center relative group">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52">
                  <Image
                    src="/QRcode.png"
                    alt="QR Code MRP Mobi"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#090A0F] mt-2 tracking-wider uppercase flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-[#FF6B00]" />
                  Aponta a câmera para cadastrar
                </span>
              </div>

              {/* Direct Action Card */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-xs space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Link 100% Verificado</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Seu cadastro é realizado diretamente na plataforma oficial MRP Mobi utilizando nosso convite verificado.
                </p>

                {/* Copy Link Button */}
                <button
                  onClick={handleCopyLink}
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? "Link Copiado!" : "Copiar Link de Convite"}</span>
                </button>
              </div>
            </div>

            {/* Giant Registration CTA Button */}
            <div>
              <CTAButton
                text="Quero criar minha conta"
                size="xl"
                showSparkle
                className="w-full sm:w-auto shadow-2xl shadow-[#FF6B00]/40 text-lg sm:text-xl py-5 px-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
