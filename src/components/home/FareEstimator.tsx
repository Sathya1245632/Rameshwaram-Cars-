"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, MessageCircle, Phone, Sparkles } from "lucide-react";
import { businessInfo } from "@/data/travelData";

export default function FareEstimator() {
  const [selectedRoute, setSelectedRoute] = useState("one-day");
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [travelDate, setTravelDate] = useState("");
  const [passengers, setPassengers] = useState(3);

  // Pricing matrix
  const pricingMatrix: Record<string, Record<string, { price: number; duration: string; details: string }>> = {
    "one-day": {
      sedan: { price: 2200, duration: "8-10 Hours", details: "Temple, Kalam Memorial, Ramar Patham, Dhanushkodi" },
      ertiga: { price: 2900, duration: "8-10 Hours", details: "Temple, Kalam Memorial, Ramar Patham, Dhanushkodi" },
      innova: { price: 3800, duration: "8-10 Hours", details: "Temple, Kalam Memorial, Ramar Patham, Dhanushkodi" },
      tempo: { price: 5400, duration: "8-10 Hours", details: "Temple, Kalam Memorial, Ramar Patham, Dhanushkodi" },
    },
    "theertham": {
      sedan: { price: 1800, duration: "5-6 Hours", details: "Agni Theertham, 22 Wells assistance & Temple Drop" },
      ertiga: { price: 2400, duration: "5-6 Hours", details: "Agni Theertham, 22 Wells assistance & Temple Drop" },
      innova: { price: 3200, duration: "5-6 Hours", details: "Agni Theertham, 22 Wells assistance & Temple Drop" },
      tempo: { price: 4600, duration: "5-6 Hours", details: "Agni Theertham, 22 Wells assistance & Temple Drop" },
    },
    "dhanushkodi": {
      sedan: { price: 1900, duration: "4-5 Hours", details: "Arichal Munai, Ghost Town, Kothandaramaswamy Temple" },
      ertiga: { price: 2600, duration: "4-5 Hours", details: "Arichal Munai, Ghost Town, Kothandaramaswamy Temple" },
      innova: { price: 3400, duration: "4-5 Hours", details: "Arichal Munai, Ghost Town, Kothandaramaswamy Temple" },
      tempo: { price: 4900, duration: "4-5 Hours", details: "Arichal Munai, Ghost Town, Kothandaramaswamy Temple" },
    },
    "madurai-oneway": {
      sedan: { price: 4200, duration: "3-3.5 Hours (175 km)", details: "Door-to-door transfer via NH 87, Tolls included" },
      ertiga: { price: 5100, duration: "3-3.5 Hours (175 km)", details: "Door-to-door transfer via NH 87, Tolls included" },
      innova: { price: 6200, duration: "3-3.5 Hours (175 km)", details: "Door-to-door transfer via NH 87, Tolls included" },
      tempo: { price: 8900, duration: "3.5-4 Hours (175 km)", details: "Door-to-door transfer via NH 87, Tolls included" },
    },
    "madurai-round": {
      sedan: { price: 5500, duration: "Full Day (350 km)", details: "Madurai pickup, island tour & drop back to Madurai" },
      ertiga: { price: 6800, duration: "Full Day (350 km)", details: "Madurai pickup, island tour & drop back to Madurai" },
      innova: { price: 8200, duration: "Full Day (350 km)", details: "Madurai pickup, island tour & drop back to Madurai" },
      tempo: { price: 11500, duration: "Full Day (350 km)", details: "Madurai pickup, island tour & drop back to Madurai" },
    },
  };

  const currentSelection = pricingMatrix[selectedRoute]?.[selectedVehicle] || {
    price: 2200,
    duration: "Full Day",
    details: "All island sightseeing",
  };

  const routeNames: Record<string, string> = {
    "one-day": "Rameshwaram One-Day Complete Island Tour",
    "theertham": "Sacred 22 Theerthams & Temple Darshan",
    "dhanushkodi": "Dhanushkodi Land's End & Ghost Town Safari",
    "madurai-oneway": "Madurai Airport / Junction to Rameshwaram (One Way)",
    "madurai-round": "Madurai to Rameshwaram Same-Day Round Trip",
  };

  const vehicleNames: Record<string, string> = {
    sedan: "AC Sedan (Swift Dzire / Etios - 4 Seater)",
    ertiga: "Maruti Ertiga (MPV - 6 Seater)",
    innova: "Toyota Innova Crysta (Luxury SUV - 7 Seater)",
    tempo: "Force Tempo Traveller (14 Seater Van)",
  };

  const bookingText = encodeURIComponent(
    `Hello Rameshwaram Cars! I would like to book a cab with the following details:
• Route: ${routeNames[selectedRoute]}
• Vehicle: ${vehicleNames[selectedVehicle]}
• Travel Date: ${travelDate || "Flexible / Upcoming"}
• Passengers: ${passengers}
• Estimated Fare: ₹${currentSelection.price}
Please confirm availability and booking procedure.`
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-[#0B1F33] p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#D5AD65] text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Instant Trip Fare Estimator</span>
          </div>
          <h3 className="font-heading text-2xl font-bold">Calculate Your Transparent Journey Fare</h3>
          <p className="text-xs text-slate-300 mt-1">Zero hidden toll charges, driver bata, or surprise island surge rates.</p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B56] border border-[#D5AD65]/30 text-xs text-[#D5AD65] font-medium self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5" /> Guaranteed Fixed Pricing
        </div>
      </div>

      {/* Calculator Body */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Columns */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Route Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Select Your Travel Route or Package:
            </label>
            <select
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              className="w-full bg-[#F2F4F6] border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#0B1F33] font-medium focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
            >
              <option value="one-day">Rameshwaram One-Day Complete Island Tour (8-10 Hrs)</option>
              <option value="theertham">Sacred 22 Theerthams & Temple Darshan (5-6 Hrs)</option>
              <option value="dhanushkodi">Dhanushkodi Land&apos;s End &amp; Ghost Town Safari (4-5 Hrs)</option>
              <option value="madurai-oneway">Madurai Airport / Junction ➔ Rameshwaram (One Way)</option>
              <option value="madurai-round">Madurai ⇄ Rameshwaram Same-Day Round Trip</option>
            </select>
          </div>

          {/* 2. Vehicle Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
              Choose Vehicle Class:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="group" aria-label="Vehicle Class Selection">
              {[
                { id: "sedan", name: "Swift / Etios", cap: "4 Seater" },
                { id: "ertiga", name: "Ertiga Tour", cap: "6 Seater" },
                { id: "innova", name: "Innova Crysta", cap: "7 Seater" },
                { id: "tempo", name: "Tempo Traveller", cap: "14 Seater" },
              ].map((veh) => (
                <button
                  key={veh.id}
                  type="button"
                  onClick={() => setSelectedVehicle(veh.id)}
                  aria-pressed={selectedVehicle === veh.id}
                  className={`p-3 rounded-lg border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5AD65] focus-visible:ring-offset-1 ${
                    selectedVehicle === veh.id
                      ? "border-[#D5AD65] bg-[#FAF8F3] shadow-sm ring-1 ring-[#D5AD65]"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <span className="text-xs font-bold text-[#0B1F33] block">{veh.name}</span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">{veh.cap}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Date & Passenger Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Travel Date (Optional):
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-[#F2F4F6] border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Number of Travellers:
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full bg-[#F2F4F6] border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
              >
                <option value={1}>1-2 Passengers</option>
                <option value={3}>3-4 Passengers</option>
                <option value={5}>5-6 Passengers</option>
                <option value={7}>7+ Passengers (SUV / Group)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing & Output Summary Box */}
        <div className="lg:col-span-5 bg-[#FAF8F3] rounded-xl p-6 border border-[#D5AD65]/30 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Estimated Transparent Fare:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#0B1F33]">
                ₹{currentSelection.price.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-slate-600 font-medium">/ Complete Private Vehicle</span>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 space-y-1.5 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Trip Duration:</span>
                <span className="font-semibold text-[#0B1F33]">{currentSelection.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Vehicle Assigned:</span>
                <span className="font-semibold text-[#0B1F33]">{vehicleNames[selectedVehicle]}</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-start gap-1.5 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{currentSelection.details}</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> AC Vehicle + Clean Interiors
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Fuel, Highway Tolls & Parking Included
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Driver Bata & Allowance Included
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <a
              href={`https://wa.me/${businessInfo.whatsappRaw}?text=${bookingText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Lock Fare on WhatsApp</span>
            </a>

            <div className="mt-3 text-center">
              <span className="text-[11px] text-slate-500">
                Or call our local dispatch desk directly at{" "}
                <a href={`tel:${businessInfo.phoneRaw}`} className="text-[#0B1F33] font-bold hover:underline">
                  {businessInfo.phone}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
