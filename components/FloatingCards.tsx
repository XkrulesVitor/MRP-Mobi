"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, DollarSign, Users } from "lucide-react";

export default function FloatingCards() {
  return (
    <>
      {/* Floating Card 1: Live Commission Notification */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: -20 }}
        animate={{ opacity: 1, y: [0, -12, 0], x: 0 }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8, delay: 0.4 },
        }}
        className="absolute top-12 -left-6 sm:-left-12 z-20 glass-panel px-4 py-3 rounded-2xl border border-emerald-500/30 shadow-xl shadow-emerald-950/40 flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
          <DollarSign className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <p className="text-xs text-gray-400 font-medium">Comissão Recorrente</p>
          <p className="text-sm font-bold text-white flex items-center gap-1.5">
            <span className="text-emerald-400">+ R$ 84,90</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full">
              PIX
            </span>
          </p>
        </div>
      </motion.div>

      {/* Floating Card 2: Driver Earnings Guarantee */}
      <motion.div
        initial={{ opacity: 0, y: -30, x: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0], x: 0 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          opacity: { duration: 0.8, delay: 0.7 },
        }}
        className="absolute top-[45%] -right-4 sm:-right-10 z-20 glass-panel px-4 py-3 rounded-2xl border border-[#FF6B00]/40 shadow-xl shadow-[#FF6B00]/20 flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00]">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-400 font-medium">Repasse aos Motoristas</p>
          <p className="text-sm font-bold text-white">
            <span className="text-[#FF6B00]">79%</span> do valor bruto
          </p>
        </div>
      </motion.div>

      {/* Floating Card 3: Network Growth */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          opacity: { duration: 0.8, delay: 0.9 },
        }}
        className="absolute bottom-10 left-4 sm:left-2 z-20 glass-panel px-4 py-2.5 rounded-2xl border border-sky-500/30 shadow-xl flex items-center gap-3 backdrop-blur-xl"
      >
        <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
          <Users className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs text-white font-semibold">Novo Indicado Ativo!</p>
          <p className="text-[11px] text-gray-400">Viagens gerando comissão</p>
        </div>
      </motion.div>
    </>
  );
}
