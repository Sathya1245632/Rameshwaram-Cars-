"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { TourPackage, businessInfo } from "@/data/travelData";

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello Rameshwaram Cars! I would like to book the "${pkg.name}" (${pkg.duration}, starting ₹${pkg.startingPrice}). Please confirm availability.`
  )}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#D5AD65]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      {/* Consistent 16:10 Image Container */}
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
          <Image
            src={pkg.featuredImage}
            alt={pkg.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-black/20 to-transparent" />

          {/* Category Pill */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#0B1F33]/90 text-[#D5AD65] border border-[#D5AD65]/30 backdrop-blur-md">
              {pkg.category}
            </span>
          </div>

          {/* Duration Pill */}
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-[#D5AD65]" />
              {pkg.duration}
            </span>
          </div>

          {/* Price Tag in Image */}
          <div className="absolute bottom-3 left-4 right-4 z-10 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-300 block font-medium">Starting from</span>
              <span className="font-heading text-2xl font-bold text-white">
                ₹{pkg.startingPrice.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-slate-300 ml-1">/ Private Cab</span>
              </span>
            </div>
            <span className="text-[10px] text-[#D5AD65] font-semibold bg-[#0B1F33]/80 px-2 py-0.5 rounded border border-[#D5AD65]/30">
              All Inclusive
            </span>
          </div>
        </div>

        {/* Card Content with Generous Whitespace */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-[#0B1F33] group-hover:text-[#123B56] transition-colors leading-snug">
            <Link href={`/packages/${pkg.slug}`}>{pkg.name}</Link>
          </h3>

          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed font-body">
            {pkg.shortDescription}
          </p>

          {/* Places Covered */}
          <div className="mt-4 pt-3.5 border-t border-slate-100">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D5AD65]" /> Landmarks Covered:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {pkg.placesCovered.slice(0, 4).map((place) => (
                <span
                  key={place}
                  className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#FAF8F3] text-[#0B1F33] border border-slate-200"
                >
                  {place}
                </span>
              ))}
              {pkg.placesCovered.length > 4 && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#FAF8F3] text-[#D5AD65]">
                  +{pkg.placesCovered.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Single Clear Action Button per Card (Avoiding Competing CTAs) */}
      <div className="px-6 pb-6 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Enquire via WhatsApp</span>
        </a>

        <div className="mt-2.5 text-center">
          <Link
            href={`/packages/${pkg.slug}`}
            className="text-[11px] font-semibold text-slate-500 hover:text-[#0B1F33] transition-colors inline-flex items-center gap-1"
          >
            <span>View Full Itinerary & Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
