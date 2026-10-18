"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Ticket, ArrowRight, MessageCircle } from "lucide-react";
import { Destination, businessInfo } from "@/data/travelData";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello Rameshwaram Cars! I would like to plan a visit to ${destination.name}. Could you provide a cab quote and timing suggestions?`
  )}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#D5AD65]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      {/* Consistent 16:10 Visual Header */}
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-black/20 to-transparent" />

          <div className="absolute bottom-3 left-4 right-4 z-10">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D5AD65] block mb-0.5">
              Must-Visit Landmark
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white drop-shadow">
              {destination.name}
            </h3>
          </div>
        </div>

        {/* Body Info with Clean Whitespace */}
        <div className="p-6">
          <p className="text-xs text-slate-500 italic mb-2.5 font-heading">
            &ldquo;{destination.tagline}&rdquo;
          </p>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-body">
            {destination.brief}
          </p>

          {/* Quick Details */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#D5AD65] shrink-0" />
              <span className="truncate"><strong>Timings:</strong> {destination.visitorInformation.timings}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ticket className="w-3.5 h-3.5 text-[#D5AD65] shrink-0" />
              <span><strong>Ideal Duration:</strong> {destination.visitorInformation.idealDuration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Single Clear Action Button */}
      <div className="px-6 pb-6 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Plan Visit via WhatsApp</span>
        </a>

        <div className="mt-2.5 text-center">
          <Link
            href={`/destinations/${destination.slug}`}
            className="text-[11px] font-semibold text-slate-500 hover:text-[#0B1F33] transition-colors inline-flex items-center gap-1"
          >
            <span>Read Visitor Guide & Tips</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
