"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Top Center Glow (MRP Orange Blob) */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#FF6B00]/30 via-[#FF6B00]/10 to-transparent rounded-full blur-[140px]" />

      {/* Right Glow */}
      <div className="absolute top-[40%] -right-[150px] w-[500px] h-[500px] bg-gradient-to-br from-[#FF852A]/20 via-amber-600/5 to-transparent rounded-full blur-[120px]" />

      {/* Left Glow */}
      <div className="absolute top-[70%] -left-[150px] w-[600px] h-[600px] bg-gradient-to-tr from-[#FF6B00]/15 via-orange-950/15 to-transparent rounded-full blur-[150px]" />
    </div>
  );
}
