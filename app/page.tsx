import React from "react";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";
import Benefits3D from "@/components/Benefits3D";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import AboutCompany from "@/components/AboutCompany";
import QRCodeCTA from "@/components/QRCodeCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090A0F] text-gray-100 overflow-x-hidden selection:bg-[#FF6B00] selection:text-white">
      {/* Dynamic Background Glow Elements */}
      <AnimatedBackground />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Bar Guarantee Metrics */}
      <TrustBar />

      {/* How it Works Step-by-Step Timeline */}
      <HowItWorksTimeline />

      {/* Benefits Showcase (Passengers vs Drivers) */}
      <Benefits3D />

      {/* Features Showcase Carousel (Infinite Loop) */}
      <FeaturesCarousel />

      {/* About Company & Mission */}
      <AboutCompany />

      {/* High-Conversion QR Code & Final Callout */}
      <QRCodeCTA />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Footer Bar */}
      <StickyMobileCTA />
    </main>
  );
}
