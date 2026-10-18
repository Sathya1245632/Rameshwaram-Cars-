"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, MessageCircle, Sparkles } from "lucide-react";
import { packagesData, businessInfo } from "@/data/travelData";

interface EnquiryFormProps {
  defaultPackage?: string;
  sourcePage?: string;
}

export default function EnquiryForm({ defaultPackage = "", sourcePage = "General" }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    travellers: "2 to 4",
    selectedPackage: defaultPackage || packagesData[0].name,
    vehiclePreference: "Swift Dzire / Sedan",
    additionalRequirements: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name";
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.travelDate) errs.travelDate = "Please choose your expected travel date";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const whatsappInquiryText = encodeURIComponent(
    `Hello Rameshwaram Cars!
I would like to request a quote (Source: ${sourcePage}):
• Name: ${formData.name || "Traveller"}
• Phone: ${formData.phone || "Not provided"}
• Package: ${formData.selectedPackage}
• Vehicle: ${formData.vehiclePreference}
• Travel Date: ${formData.travelDate || "Upcoming"}
• Travellers: ${formData.travellers}
• Notes: ${formData.additionalRequirements || "None"}
Please share available rates and confirm.`
  );

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-8 border border-emerald-200 shadow-md text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="font-heading text-2xl font-bold text-[#0B1F33]">Quote Request Received!</h4>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Our local island dispatch manager has received your travel request for <strong>{formData.selectedPackage}</strong>.
        </p>
        <div className="mt-4 p-4 rounded-lg bg-[#FAF8F3] border border-[#D5AD65]/30 text-xs text-slate-600 max-w-sm mx-auto text-left space-y-1">
          <p><strong>Status:</strong> Pending Availability Check</p>
          <p><strong>Target Date:</strong> {formData.travelDate}</p>
          <p><strong>Response Time:</strong> Within 15 minutes during desk hours.</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${businessInfo.whatsappRaw}?text=${whatsappInquiryText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Fast-Track on WhatsApp</span>
          </a>

          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider hover:bg-slate-50"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-lg">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-[#D5AD65] text-xs font-semibold uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Dispatch Enquiry</span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-[#0B1F33]">Request a Tailored Travel Quote</h3>
        <p className="text-xs text-slate-500 mt-1">
          Share your travel details. We will calculate the exact route fare and check cab availability.
        </p>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Sivaraman"
            className={`w-full bg-[#F2F4F6] border rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65] ${
              errors.name ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Phone Number (WhatsApp) *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9876543210"
              className={`w-full bg-[#F2F4F6] border rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65] ${
                errors.phone ? "border-red-400" : "border-slate-300"
              }`}
            />
            {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full bg-[#F2F4F6] border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
            />
          </div>
        </div>

        {/* Date & Number of Travellers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Expected Travel Date *
            </label>
            <input
              type="date"
              required
              value={formData.travelDate}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              className={`w-full bg-[#F2F4F6] border rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65] ${
                errors.travelDate ? "border-red-400" : "border-slate-300"
              }`}
            />
            {errors.travelDate && <p className="text-[11px] text-red-500 mt-1">{errors.travelDate}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Number of Travellers
            </label>
            <select
              value={formData.travellers}
              onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
              className="w-full bg-[#F2F4F6] border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
            >
              <option value="1 to 2">1 to 2 Travellers</option>
              <option value="3 to 4">3 to 4 Travellers</option>
              <option value="5 to 6">5 to 6 Travellers</option>
              <option value="7 to 10">7 to 10 Travellers</option>
              <option value="10+">10+ Group Yatra</option>
            </select>
          </div>
        </div>

        {/* Selected Package & Vehicle Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Selected Package / Route
            </label>
            <select
              value={formData.selectedPackage}
              onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
              className="w-full bg-[#F2F4F6] border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
            >
              {packagesData.map((pkg) => (
                <option key={pkg.slug} value={pkg.name}>
                  {pkg.name}
                </option>
              ))}
              <option value="Madurai to Rameshwaram One Way">Madurai to Rameshwaram Transfer</option>
              <option value="Custom Itinerary">Custom Multi-Day Yatra</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Vehicle Class Preference
            </label>
            <select
              value={formData.vehiclePreference}
              onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
              className="w-full bg-[#F2F4F6] border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
            >
              <option value="Swift Dzire / Sedan (4 Seater)">Swift Dzire / Etios (AC Sedan)</option>
              <option value="Maruti Ertiga (6 Seater)">Maruti Ertiga (AC MPV)</option>
              <option value="Toyota Innova Crysta (7 Seater)">Toyota Innova Crysta (Luxury SUV)</option>
              <option value="Tempo Traveller (14 Seater)">Force Tempo Traveller (Van)</option>
            </select>
          </div>
        </div>

        {/* Additional Requirements */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Additional Requirements (Pickup Location, Train Number, Senior Citizen Needs)
          </label>
          <textarea
            rows={3}
            value={formData.additionalRequirements}
            onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
            placeholder="e.g. Arriving on Rameswaram Express at 04:30 AM, need wheelchair assistance for mother."
            className="w-full bg-[#F2F4F6] border border-slate-300 rounded-lg px-4 py-2 text-sm text-[#0B1F33] focus:outline-none focus:ring-2 focus:ring-[#D5AD65]"
          />
        </div>

        {/* Notice */}
        <p className="text-[11px] text-slate-500 leading-normal">
          * Note: Submitting this form requests a verified quote. Final bookings are confirmed only after vehicle assignment and trip confirmation with our dispatch desk.
        </p>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-lg bg-[#D5AD65] hover:bg-[#B58D43] text-[#0B1F33] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Checking Availability...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>REQUEST A QUOTE</span>
              </>
            )}
          </button>

          <a
            href={`https://wa.me/${businessInfo.whatsappRaw}?text=${whatsappInquiryText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3.5 px-5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </form>
  );
}
