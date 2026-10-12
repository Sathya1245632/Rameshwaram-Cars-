import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { businessInfo } from "@/data/travelData";
import EnquiryForm from "@/components/common/EnquiryForm";

export const metadata = {
  title: "Contact & Bookings | Rameshwaram Cars",
  description:
    "Contact Rameshwaram Cars & Tours for cab bookings, temple pilgrimage packages, Dhanushkodi tours, and Madurai airport transfers. 24/7 Helpline.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    "Hello Rameshwaram Cars! I would like to inquire about cab availability and tour rates."
  )}`;

  return (
    <div className="w-full bg-[#FAF8F3]">
      {/* Editorial Header */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-20 border-b border-[#D5AD65]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123B56] border border-[#D5AD65]/40 text-[#D5AD65] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Island Dispatch Desk</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF8F3]">
            Plan Your Rameshwaram Journey
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            Get in touch with our local island coordinators for instant quotes, customized itineraries, and guaranteed transparent fares.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Business Presence (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-2">
                Local Office & Dispatch
              </span>
              <h2 className="font-heading text-3xl font-bold text-[#0B1F33]">
                We Are Based Right at the Heart of Rameshwaram
              </h2>
              <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Whether arriving by train at Rameshwaram Railway Station or bus at the Central Bus Stand, our chauffeurs provide seamless pickups with verified name placards.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#D5AD65]/30 flex items-center justify-center text-[#D5AD65] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Direct Phone Line (24/7)
                  </span>
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="font-heading font-bold text-lg text-[#0B1F33] hover:text-[#123B56] block"
                  >
                    {businessInfo.phone}
                  </a>
                  <span className="text-[11px] text-slate-500">Immediate telephone assistance</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    WhatsApp Quick Desk
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading font-bold text-lg text-[#0B1F33] hover:text-[#25D366] block"
                  >
                    +91 88076 19273
                  </a>
                  <span className="text-[11px] text-slate-500">Fast quotes & booking confirmations</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#D5AD65]/30 flex items-center justify-center text-[#D5AD65] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="font-heading font-bold text-base text-[#0B1F33] hover:text-[#123B56] block"
                  >
                    {businessInfo.email}
                  </a>
                  <span className="text-[11px] text-slate-500">For corporate yatras & multi-vehicle tours</span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#D5AD65]/30 flex items-center justify-center text-[#D5AD65] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Dispatch Location
                  </span>
                  <p className="text-xs text-slate-700 leading-snug font-medium">
                    {businessInfo.address}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#D5AD65]/30 flex items-center justify-center text-[#D5AD65] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Operating Schedule
                  </span>
                  <p className="text-xs text-slate-700 leading-snug font-medium">
                    {businessInfo.operatingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Assurance Badge */}
            <div className="p-5 rounded-xl bg-[#0B1F33] text-white border border-[#D5AD65]/30">
              <div className="flex items-center gap-2 text-[#D5AD65] font-semibold text-xs mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Advance Commitment Risk</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Confirm your ride in advance with peace of mind. Pay the driver after service completion. Transparent billing guarantee.
              </p>
            </div>
          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm sourcePage="Contact Page" />
          </div>
        </div>
      </section>

      {/* Interactive Location Map Banner */}
      <section className="py-12 bg-[#F2F4F6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D5AD65] block mb-1">
                Pickup Coverage
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#0B1F33]">
                Island-Wide & Highway Pickup Available
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                We provide prompt doorstep pickups across all Rameshwaram hotels, resorts, the Railway Station, Ramanathaswamy Temple gates, Mandapam, Ramanathapuram, and Madurai Airport.
              </p>
            </div>

            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0B1F33] hover:bg-[#123B56] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow"
            >
              <Phone className="w-4 h-4 text-[#D5AD65]" />
              <span>Call For Immediate Cab</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
