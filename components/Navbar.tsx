"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CTAButton from "./ui/CTAButton";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Benefícios", href: "#beneficios" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Sobre", href: "#sobre" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0B10]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-xl"
          : "bg-[#0A0B10]/80 backdrop-blur-sm py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo MRP Mobi */}
        <a href="#" className="relative flex items-center gap-2 group">
          <div className="relative w-[140px] sm:w-[170px] h-[40px] sm:h-[48px] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/cropped-logo-novo-recorte-mrp.png"
              alt="MRP Mobi Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 glass-panel px-6 py-2 rounded-full border border-white/10 bg-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-200 hover:text-[#FF6B00] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <CTAButton text="Cadastre-se" size="sm" showSparkle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-3">
          <CTAButton text="Cadastrar" size="sm" showIcon={false} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white rounded-lg glass-panel focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B00]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0D0E15] border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-200 hover:text-[#FF6B00] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <CTAButton text="Quero me cadastrar agora" size="md" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
