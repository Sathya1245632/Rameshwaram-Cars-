"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Compass } from "lucide-react";
import { businessInfo } from "@/data/travelData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello Rameshwaram Cars! I would like to inquire about cab packages and tour availability for my upcoming trip to Rameshwaram."
  );

  return (
    <>
      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1F33]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-[#D5AD65]/20"
            : "bg-[#0B1F33] py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D5AD65] to-[#B58D43] flex items-center justify-center text-[#0B1F33] shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F3] block leading-none">
                RAMESHWARAM<span className="text-[#D5AD65]">CARS</span>
              </span>
              <span className="text-[10px] sm:text-xs text-[#D5AD65]/90 tracking-wider uppercase font-medium mt-0.5 block">
                Pilgrimage & Coastal Tours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${
                    isActive ? "text-[#D5AD65] font-semibold" : "text-[#FAF8F3]/85 hover:text-[#D5AD65]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D5AD65] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call / WhatsApp CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#FAF8F3] border border-white/20 hover:border-[#D5AD65] hover:text-[#D5AD65] rounded-md transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D5AD65]" />
              <span>{businessInfo.phone}</span>
            </a>

            <a
              href={`https://wa.me/${businessInfo.whatsappRaw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1F33] bg-[#D5AD65] hover:bg-[#B58D43] rounded-md transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#0B1F33]" />
              <span>Book / Enquire</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FAF8F3] hover:text-[#D5AD65] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B1F33] border-t border-[#D5AD65]/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#123B56] text-[#D5AD65] font-semibold"
                        : "text-[#FAF8F3] hover:bg-[#123B56]/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#FAF8F3] bg-[#123B56] rounded-md"
              >
                <Phone className="w-4 h-4 text-[#D5AD65]" /> Call {businessInfo.phone}
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsappRaw}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#0B1F33] bg-[#D5AD65] rounded-md"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Instant Booking
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
