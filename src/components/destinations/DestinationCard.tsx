"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Ticket, ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { Destination, businessInfo } from "@/data/travelData";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello Rameshwaram Cars! I would like to plan a visit to ${destination.name}. Could you provide a cab quote and timing suggestions?`
  )}`;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#D5AD65]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Visual Header */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-900">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent opacity-90" />

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D5AD65] block mb-1">
            Must-Visit Landmark
          </span>
          <h3 className="font-heading text-2xl font-bold text-white drop-shadow">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Body Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-slate-500 italic mb-3 font-heading">
            "{destination.tagline}"
          </p>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {destination.brief}
          </p>

          {/* Quick Details Chips */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
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

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5">
          <Link
            href={`/destinations/${destination.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md border border-[#123B56] text-[#123B56] hover:bg-[#123B56] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <span>Visitor Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Plan Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
}
