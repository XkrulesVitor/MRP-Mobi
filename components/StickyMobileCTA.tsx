"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "./ui/CTAButton";
import { Sparkles } from "lucide-react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:hidden bg-[#0A0B10]/95 backdrop-blur-2xl border-t border-[#FF6B00]/40 shadow-[0_-10px_30px_rgba(255,107,0,0.2)]"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                MRP Mobi
              </span>
              <span className="text-[10px] text-gray-400">Cadastro 100% Gratuito</span>
            </div>

            <CTAButton
              text="Quero me cadastrar"
              size="sm"
              showSparkle
              className="py-2.5 px-5 text-xs shadow-lg"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
