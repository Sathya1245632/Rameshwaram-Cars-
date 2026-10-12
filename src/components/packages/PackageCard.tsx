"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { TourPackage, businessInfo } from "@/data/travelData";

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello Rameshwaram Cars! I am interested in booking the "${pkg.name}" (${pkg.duration}). Could you share cab availability and final price?`
  )}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#D5AD65]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Package Image & Badges */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-900">
        <Image
          src={pkg.featuredImage}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0B1F33]/85 text-[#D5AD65] border border-[#D5AD65]/30 backdrop-blur-md">
            {pkg.category}
          </span>
        </div>

        {/* Duration Pill */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#D5AD65]" />
            {pkg.duration}
          </span>
        </div>

        {/* Price Tag in Image */}
        <div className="absolute bottom-3 left-4 right-4 z-10 flex items-baseline justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-300 block font-medium">Starting from</span>
            <span className="font-heading text-2xl font-bold text-white">
              ₹{pkg.startingPrice.toLocaleString("en-IN")}
              <span className="text-xs font-normal text-slate-300 ml-1">/ Private Cab</span>
            </span>
          </div>
          <span className="text-[11px] text-[#D5AD65] font-semibold bg-[#0B1F33]/80 px-2.5 py-1 rounded border border-[#D5AD65]/40">
            All Inclusive
          </span>
        </div>
      </div>

      {/* Package Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold text-[#0B1F33] group-hover:text-[#123B56] transition-colors leading-snug">
            <Link href={`/packages/${pkg.slug}`}>{pkg.name}</Link>
          </h3>

          <p className="mt-2.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {pkg.shortDescription}
          </p>

          {/* Places Covered Highlights */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D5AD65]" /> Key Landmarks Covered:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {pkg.placesCovered.slice(0, 4).map((place) => (
                <span
                  key={place}
                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F2F4F6] text-[#123B56] border border-slate-200"
                >
                  {place}
                </span>
              ))}
              {pkg.placesCovered.length > 4 && (
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FAF8F3] text-[#D5AD65]">
                  +{pkg.placesCovered.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5">
          <Link
            href={`/packages/${pkg.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md border border-[#123B56] text-[#123B56] hover:bg-[#123B56] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
