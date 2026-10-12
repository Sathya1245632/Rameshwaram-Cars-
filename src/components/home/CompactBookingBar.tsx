"use client";

import React, { useState } from "react";
import { MessageCircle, Calendar, Car, MapPin, ArrowRight } from "lucide-react";
import { businessInfo } from "@/data/travelData";

export default function CompactBookingBar() {
  const [selectedRoute, setSelectedRoute] = useState("one-day");
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [travelDate, setTravelDate] = useState("");

  const pricingMap: Record<string, Record<string, number>> = {
    "one-day": { sedan: 2200, ertiga: 2900, innova: 3800, tempo: 5400 },
    "theertham": { sedan: 1800, ertiga: 2400, innova: 3200, tempo: 4600 },
    "dhanushkodi": { sedan: 1900, ertiga: 2600, innova: 3400, tempo: 4900 },
    "madurai-oneway": { sedan: 4200, ertiga: 5100, innova: 6200, tempo: 8900 },
    "madurai-round": { sedan: 5500, ertiga: 6800, innova: 8200, tempo: 11500 },
  };

  const routeNames: Record<string, string> = {
    "one-day": "Rameshwaram One-Day Island Tour",
    "theertham": "22 Theerthams & Temple Darshan",
    "dhanushkodi": "Dhanushkodi Land's End Tour",
    "madurai-oneway": "Madurai Airport/Station to Rameshwaram",
    "madurai-round": "Madurai ⇄ Rameshwaram Round Trip",
  };

  const vehicleNames: Record<string, string> = {
    sedan: "AC Sedan (Dzire / Etios)",
    ertiga: "Maruti Ertiga (6 Seater)",
    innova: "Innova Crysta (7 Seater)",
    tempo: "Tempo Traveller (14 Seater)",
  };

  const currentPrice = pricingMap[selectedRoute]?.[selectedVehicle] || 2200;

  const whatsappInquiryUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello Rameshwaram Cars! I would like to book the ${routeNames[selectedRoute]} with ${vehicleNames[selectedVehicle]} on ${travelDate || "upcoming dates"} (Estimated Fare: ₹${currentPrice}). Please confirm availability.`
  )}`;

  return (
    <div id="booking-bar" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-30">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-4 sm:p-6 lg:p-7">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappInquiryUrl, "_blank");
          }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 items-center"
        >
          {/* 1. Destination / Tour Selector */}
          <div className="lg:col-span-4">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D5AD65]" /> Select Tour or Route
            </label>
            <select
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#0B1F33] font-medium focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
            >
              <option value="one-day">Rameshwaram One-Day Island Tour</option>
              <option value="theertham">22 Theerthams & Temple Darshan</option>
              <option value="dhanushkodi">Dhanushkodi Land's End & Ghost Town</option>
              <option value="madurai-oneway">Madurai Airport to Rameshwaram (One Way)</option>
              <option value="madurai-round">Madurai ⇄ Rameshwaram Round Trip</option>
            </select>
          </div>

          {/* 2. Vehicle Class */}
          <div className="lg:col-span-3">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-[#D5AD65]" /> Preferred Vehicle
            </label>
            <select
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#0B1F33] font-medium focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
            >
              <option value="sedan">Swift Dzire / Etios (4 Seater)</option>
              <option value="ertiga">Maruti Ertiga (6 Seater)</option>
              <option value="innova">Toyota Innova Crysta (7 Seater)</option>
              <option value="tempo">Tempo Traveller (14 Seater)</option>
            </select>
          </div>

          {/* 3. Travel Date */}
          <div className="lg:col-span-2">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D5AD65]" /> Travel Date
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-[#0B1F33] font-medium focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
            />
          </div>

          {/* 4. Price & Single Action Button */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between gap-3 pt-2 lg:pt-0">
            <div className="text-left lg:text-right">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                Transparent All-Inclusive Fare
              </span>
              <span className="font-heading text-xl sm:text-2xl font-bold text-[#0B1F33]">
                ₹{currentPrice.toLocaleString("en-IN")}
                <span className="text-[11px] font-normal text-slate-500 ml-1">/ Cab</span>
              </span>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
