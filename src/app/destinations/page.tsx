import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, Ticket, ArrowRight, MessageCircle, MapPin, Compass } from "lucide-react";
import DestinationCard from "@/components/destinations/DestinationCard";
import { destinationsData, businessInfo } from "@/data/travelData";

export const metadata = {
  title: "Destinations in Rameshwaram | Sacred Temples & Coastal Landmarks",
  description:
    "Explore the top destinations in Rameshwaram including Ramanathaswamy Temple, Pamban Bridge, Dhanushkodi Land's End, Agni Theertham, and APJ Abdul Kalam Memorial.",
};

export default function DestinationsPage() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    "Hello Rameshwaram Cars! I would like to plan a sightseeing tour to visit Rameshwaram's top destinations."
  )}`;

  return (
    <div className="w-full bg-[#FAF8F3]">
      {/* Editorial Header */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-20 border-b border-[#D5AD65]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123B56] border border-[#D5AD65]/40 text-[#D5AD65] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover the Sacred Island</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF8F3]">
            Rameshwaram Destinations & Landmarks
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            From the sacred Jyotirlinga and thousand-pillar corridors to the roaring ocean waves of Dhanushkodi and the engineering brilliance of the Pamban Sea Bridge.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      {/* Island Visitor Tips Banner */}
      <section className="py-16 bg-[#F2F4F6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1F33] rounded-2xl p-8 sm:p-12 text-white border border-[#D5AD65]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-2">
                Expert Island Knowledge
              </span>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                Want to See Everything Efficiently?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-body">
                Navigating island temple dress codes, 22 theerthams sequences, and Dhanushkodi police checkpoint gate hours can be challenging. Our local drivers coordinate your entire day with punctual pickups and zero hassles.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#D5AD65]" /> Spatika Linga Darshan: 05:00 AM – 06:00 AM</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D5AD65]" /> Dhanushkodi Checkpost: 06:00 AM – 05:00 PM</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Plan Your Day on WhatsApp</span>
              </a>

              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10"
              >
                <Compass className="w-4 h-4 text-[#D5AD65]" />
                <span>View Matching Tour Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
