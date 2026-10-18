"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Filter, MessageCircle } from "lucide-react";
import PackageCard from "@/components/packages/PackageCard";
import { packagesData, fleetData, businessInfo } from "@/data/travelData";

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "One-Day",
    "Two-Day",
    "Pilgrimage",
    "Sightseeing",
    "Family",
    "Custom",
  ];

  const filteredPackages =
    selectedCategory === "All"
      ? packagesData
      : packagesData.filter((p) => p.category === selectedCategory);

  const customWhatsAppUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    "Hello Rameshwaram Cars! I would like to design a customized multi-day tour package for my family. Please assist."
  )}`;

  return (
    <div className="w-full bg-[#FAF8F3]">
      {/* Editorial Header */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-20 border-b border-[#D5AD65]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123B56] border border-[#D5AD65]/40 text-[#D5AD65] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Island Itineraries</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF8F3]">
            Rameshwaram Tour Packages
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            Transparently priced, private air-conditioned cab packages with experienced local chauffeurs who guide you through holy rituals and coastal treasures.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#D5AD65]" />
            <span>Filter By:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#0B1F33] text-[#D5AD65] shadow-sm"
                    : "bg-[#F2F4F6] text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? "All Packages" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Fleet & Rate Transparency Section */}
      <section className="py-16 bg-[#F2F4F6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-1">
              Vehicle Comparison
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0B1F33]">
              Fleet Pricing & Specifications
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Every package can be upgraded to your preferred car model. All vehicles include air conditioning, luggage storage, and sanitized seats.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-[#0B1F33] text-white uppercase text-[11px] tracking-wider font-semibold">
                <tr>
                  <th className="py-4 px-6">Car Model</th>
                  <th className="py-4 px-6">Vehicle Class</th>
                  <th className="py-4 px-6">Passengers</th>
                  <th className="py-4 px-6">Luggage Boot</th>
                  <th className="py-4 px-6">Rate / Km</th>
                  <th className="py-4 px-6">Local 8h/80km Approx</th>
                  <th className="py-4 px-6">Quick Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {fleetData.map((v) => (
                  <tr key={v.name} className="hover:bg-[#FAF8F3] transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0B1F33]">{v.name}</td>
                    <td className="py-4 px-6 text-[#123B56] font-medium">{v.type}</td>
                    <td className="py-4 px-6">{v.passengers} Adults</td>
                    <td className="py-4 px-6">{v.luggage} Bags</td>
                    <td className="py-4 px-6 font-semibold text-[#D5AD65]">₹{v.ratePerKm}/km</td>
                    <td className="py-4 px-6 font-semibold">₹{v.localPackageRate}</td>
                    <td className="py-4 px-6">
                      <a
                        href={`https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
                          `Hello Rameshwaram Cars! I want to check availability for ${v.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#25D366] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#20ba59]"
                      >
                        <MessageCircle className="w-3 h-3 fill-current" />
                        <span>Enquire</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Itinerary Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1F33] rounded-2xl p-8 sm:p-12 text-white border border-[#D5AD65]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-2">
              Need Something Special?
            </span>
            <h3 className="font-heading text-3xl font-bold">
              Custom Multi-Day Yatras & Tour Planning
            </h3>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
              Planning a South Indian spiritual circuit covering Madurai Meenakshi, Tiruchendur Murugan, Kanyakumari, and Rameshwaram? We craft personalized multi-day itineraries with vehicle dispatch and dedicated driver coordinators.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] text-xs font-bold uppercase tracking-wider transition-all shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Design Custom Package</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10"
            >
              <span>Contact Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
