"use client";

import React from "react";
import { REFERRAL_LINK } from "@/lib/constants";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTAButtonProps {
  text?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showIcon?: boolean;
  showSparkle?: boolean;
  href?: string;
}

export default function CTAButton({
  text = "Quero me cadastrar",
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
  showSparkle = false,
  href = REFERRAL_LINK,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full cursor-pointer focus:outline-none shimmer-btn group active:scale-95";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-6 py-3.5 text-base gap-2.5",
    lg: "px-8 py-4 text-lg gap-3",
    xl: "px-10 py-5 text-xl gap-3.5 shadow-2xl",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#FF6B00] via-[#FF7B1A] to-[#E05D00] text-white orange-glow hover:orange-glow-pulse hover:brightness-110 hover:scale-[1.02] border border-[#FF984D]/40",
    secondary:
      "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20 hover:border-white/40 hover:scale-[1.02]",
    outline:
      "bg-transparent text-[#FF6B00] border-2 border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white hover:scale-[1.02]",
    white:
      "bg-white text-[#090A0F] font-extrabold hover:bg-neutral-100 hover:scale-[1.02] shadow-xl",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {showSparkle && <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />}
      <span>{text}</span>
      {showIcon && (
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
    </a>
  );
}
