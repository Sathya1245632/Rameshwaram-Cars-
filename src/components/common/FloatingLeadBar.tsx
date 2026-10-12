"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { businessInfo } from "@/data/travelData";

export default function FloatingLeadBar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    "Hello Rameshwaram Cars! I want to check taxi package availability and rates for my travel."
  )}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#123B56] text-[#FAF8F3] hover:bg-[#D5AD65] hover:text-[#0B1F33] flex items-center justify-center shadow-lg transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all transform hover:-translate-y-0.5"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wide uppercase">
            WhatsApp Booking
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (One-Handed Navigation Ergonomics) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1F33] border-t border-[#D5AD65]/30 px-3 py-2.5 shadow-2xl flex items-center gap-2.5">
        <a
          href={`tel:${businessInfo.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#123B56] text-[#FAF8F3] text-xs font-semibold uppercase tracking-wider active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#D5AD65]" />
          <span>Call Desk</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
