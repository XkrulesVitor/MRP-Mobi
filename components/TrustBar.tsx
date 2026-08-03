"use client";

import React from "react";
import { TRUST_BAR_ITEMS } from "@/lib/constants";
import { ShieldCheck, Zap, Coins, TrendingDown, Car, Repeat } from "lucide-react";

export default function TrustBar() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#FF6B00]" />;
      case "Coins":
        return <Coins className="w-5 h-5 text-[#FF6B00]" />;
      case "TrendingDown":
        return <TrendingDown className="w-5 h-5 text-[#FF6B00]" />;
      case "Car":
        return <Car className="w-5 h-5 text-[#FF6B00]" />;
      case "Repeat":
        return <Repeat className="w-5 h-5 text-[#FF6B00]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="trustbar" className="py-6 border-y border-white/10 bg-[#0C0E16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TRUST_BAR_ITEMS.map((item) => (
            <div
              key={item.label}
              className="glass-panel p-3.5 rounded-2xl flex flex-col items-center text-center group hover:border-[#FF6B00]/40 transition-all duration-300 bg-[#12141F]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center mb-2 text-[#FF6B00]">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xs font-bold text-white mb-0.5">
                {item.label}
              </h3>
              <p className="text-[11px] text-gray-300 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
