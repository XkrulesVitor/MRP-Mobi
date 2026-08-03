"use client";

import React from "react";
import Image from "next/image";
import CTAButton from "./ui/CTAButton";
import { OFFICIAL_SITE_URL } from "@/lib/constants";
import { ExternalLink, Shield, Lock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05060A] text-gray-400 border-t border-white/10 pt-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-center">
          <div className="lg:col-span-7">
            <div className="relative w-[160px] sm:w-[180px] h-[45px] sm:h-[50px] mb-4">
              <Image
                src="/cropped-logo-novo-recorte-mrp.png"
                alt="MRP Mobi Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-gray-300 max-w-lg leading-relaxed">
              MRP Mobi é a plataforma inovadora de mobilidade urbana que une economia em corridas para passageiros, lucratividade justa para motoristas e renda recorrente vitalícia via indicação.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
            <CTAButton text="Cadastre-se Gratuitamente" size="lg" showSparkle />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-white/10 text-sm">
          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="hover:text-[#FF6B00] transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#FF6B00] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#FF6B00] transition-colors">
                  Sobre a MRP Mobi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Oportunidade</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="hover:text-[#FF6B00] transition-colors">
                  App para Passageiros
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-[#FF6B00] transition-colors">
                  App para Motoristas
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#FF6B00] transition-colors">
                  Comissões Vitalícias
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Oficial</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6B00] transition-colors flex items-center gap-1"
                >
                  <span>Site Oficial MRP Mobi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://mrpmobi.app.br/faq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6B00] transition-colors flex items-center gap-1"
                >
                  <span>FAQ Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Segurança</h4>
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Conexão Criptografada SSL</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <Lock className="w-4 h-4 text-[#FF6B00]" />
              <span>Cadastro Oficial Seguro</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} MRP Mobi. Todos os direitos reservados. Landing Page Oficial de Indicação.</p>
        </div>
      </div>
    </footer>
  );
}
