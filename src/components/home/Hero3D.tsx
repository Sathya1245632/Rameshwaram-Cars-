"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Sparkles, Star, ShieldCheck } from "lucide-react";
import { businessInfo } from "@/data/travelData";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Gentle parallax effect capped for performance
      if (window.scrollY < 800) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#0B1F33]">
      {/* Full-Width Stunning High-Res Photography with Subtle Parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.06)`,
          transition: "transform 0.1s cubic-bezier(0, 0, 0.2, 1)",
        }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Rameshwaram Pamban Bridge and Coastal Sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Subtle Refined Dark Gradient Overlay for Maximum Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/65 to-[#0B1F33]/40 pointer-events-none" />

      {/* Editorial Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Curated Sub-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#123B56]/85 border border-[#D5AD65]/40 text-[#D5AD65] text-xs uppercase tracking-widest font-semibold mb-6 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D5AD65]" />
          <span>Curated Pilgrimages & Coastal Chauffeurs</span>
        </div>

        {/* Bold Editorial Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FAF8F3] tracking-tight leading-[1.12] max-w-4xl drop-shadow-md">
          Discover Rameshwaram. <br />
          <span className="text-[#D5AD65] italic font-normal">Experience the Journey.</span>
        </h1>

        {/* Refined Supporting Body Text */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-lg text-slate-200 font-body max-w-2xl leading-relaxed drop-shadow px-2">
          Explore sacred temples, breathtaking coastlines, and unforgettable destinations with thoughtfully planned travel experiences.
        </p>

        {/* Single Clear Gold Action Button (Avoiding Competing CTAs) */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Discreet Editorial Trust Strip */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-[#D5AD65] font-bold text-sm">4.9 ★</span>
            <span>1,280+ Reviews</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D5AD65]" />
            <span>Verified Local Drivers</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#D5AD65]" />
            <span>100% Transparent Fixed Rates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
