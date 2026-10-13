import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Compass, ShieldCheck, Heart } from "lucide-react";
import { businessInfo, packagesData, destinationsData } from "@/data/travelData";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    "Hi Rameshwaram Cars! I would like to enquire about your tour packages and taxi services."
  )}`;

  return (
    <footer className="bg-[#0B1F33] text-[#FAF8F3] border-t border-[#D5AD65]/30">
      {/* Editorial Trust Banner */}
      <div className="bg-[#123B56]/50 py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D5AD65]/20 flex items-center justify-center text-[#D5AD65] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold text-[#FAF8F3]">Govt. Approved & Verified Drivers</h4>
              <p className="text-xs text-slate-300 mt-0.5">Experienced local chauffeurs with complete island knowledge.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D5AD65]/20 flex items-center justify-center text-[#D5AD65] shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold text-[#FAF8F3]">Transparent All-Inclusive Pricing</h4>
              <p className="text-xs text-slate-300 mt-0.5">Fixed quotes including fuel, driver bata, tolls, and parking.</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D5AD65]/20 flex items-center justify-center text-[#D5AD65] shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold text-[#FAF8F3]">Devotee & Senior Citizen Care</h4>
              <p className="text-xs text-slate-300 mt-0.5">Wheelchair assistance and ritual guidance for elderly yatris.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D5AD65] shadow-lg shrink-0 bg-[#0B1F33]">
                <Image
                  src="/images/logo-v2.jpg"
                  alt="Rameshwaram Cars & Tours Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-tight text-[#FAF8F3]">
                  RAMESHWARAM<span className="text-[#D5AD65]">CARS</span>
                </span>
                <span className="text-[10px] text-[#D5AD65] tracking-widest uppercase block font-semibold">
                  Tours & Pilgrimages
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-body">
              Premier taxi, private car rental, and personalized pilgrimage tour operator based in Rameshwaram. Crafting meaningful temple journeys, scenic Dhanushkodi expeditions, and reliable Madurai airport transfers.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded bg-[#D5AD65] text-[#0B1F33] hover:bg-[#B58D43] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded border border-white/20 text-[#FAF8F3] hover:border-[#D5AD65] hover:text-[#D5AD65] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Call Driver Desk
              </a>
            </div>
          </div>

          {/* Featured Tour Packages */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-[#D5AD65] mb-5 tracking-wide">
              Curated Tour Packages
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {packagesData.map((pkg) => (
                <li key={pkg.slug}>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="hover:text-[#D5AD65] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#D5AD65] text-xs">✦</span>
                    <span>{pkg.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Destinations */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-[#D5AD65] mb-5 tracking-wide">
              Sacred & Coastal Sites
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {destinationsData.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="hover:text-[#D5AD65] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#D5AD65] text-xs">✦</span>
                    <span>{dest.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="hover:text-[#D5AD65] transition-colors flex items-center gap-2">
                  <span className="text-[#D5AD65] text-xs">✦</span>
                  <span>Rameshwaram Travel Blog & Guides</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-[#D5AD65] mb-5 tracking-wide">
              Contact & Booking Desk
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D5AD65] shrink-0 mt-1" />
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D5AD65] shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-[#D5AD65]">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D5AD65] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-[#D5AD65]">
                  {businessInfo.email}
                </a>
              </div>
              <div className="pt-2 text-xs text-slate-400 border-t border-white/10">
                <strong className="text-slate-200 block mb-0.5">Operating Hours:</strong>
                {businessInfo.operatingHours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 {businessInfo.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/packages" className="hover:text-[#D5AD65]">Packages</Link>
            <Link href="/destinations" className="hover:text-[#D5AD65]">Destinations</Link>
            <Link href="/blog" className="hover:text-[#D5AD65]">Travel Blog</Link>
            <Link href="/contact" className="hover:text-[#D5AD65]">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
