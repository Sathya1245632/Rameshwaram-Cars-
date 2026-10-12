import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/image";
import {
  Clock,
  MapPin,
  CheckCircle2,
  XCircle,
  HelpCircle,
  MessageCircle,
  Phone,
  ArrowLeft,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { packagesData, businessInfo, TourPackage } from "@/data/travelData";
import EnquiryForm from "@/components/common/EnquiryForm";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.name} | Rameshwaram Cars`,
    description: pkg.shortDescription,
  };
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const whatsappInquiryUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello Rameshwaram Cars! I would like to book the "${pkg.name}" (${pkg.duration}). Please confirm availability and exact pricing for my dates.`
  )}`;

  return (
    <div className="w-full bg-[#FAF8F3]">
      {/* Hero Header with Imagery */}
      <section className="relative h-[48vh] min-h-[380px] w-full bg-[#0B1F33] flex items-end overflow-hidden">
        <Image
          src={pkg.featuredImage}
          alt={pkg.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <a
            href="/packages"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D5AD65] hover:underline uppercase tracking-wider mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Packages
          </a>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#123B56] text-[#D5AD65] border border-[#D5AD65]/30">
              {pkg.category} Tour
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-[#D5AD65]" />
              {pkg.duration}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-4xl">
            {pkg.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-baseline gap-4">
            <span className="text-sm text-slate-300 font-medium">Starting from:</span>
            <span className="font-heading text-3xl font-bold text-[#D5AD65]">
              ₹{pkg.startingPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-slate-300">/ Complete Private AC Cab</span>
          </div>
        </div>
      </section>

      {/* Main Content & Booking Form Sidebar */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0B1F33] mb-4">
                Package Overview
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-body">
                {pkg.overview}
              </p>

              {/* Places Covered List */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                  Places & Temples Visited:
                </span>
                <div className="flex flex-wrap gap-2">
                  {pkg.placesCovered.map((place) => (
                    <span
                      key={place}
                      className="px-3 py-1 rounded-md bg-[#F2F4F6] text-[#0B1F33] text-xs font-medium border border-slate-200 flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-[#D5AD65]" />
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Itinerary */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0B1F33] mb-6">
                Detailed Tour Itinerary
              </h2>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                {pkg.itinerary.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-4 pl-8">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#D5AD65] ring-4 ring-white" />
                    <div>
                      <span className="text-xs font-bold text-[#D5AD65] uppercase tracking-wider block">
                        {item.time}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-[#0B1F33] mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-lg font-bold text-emerald-800 flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  What is Included
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-slate-700 flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-slate-400" />
                  What is Excluded
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Package FAQs */}
            {pkg.faqs && pkg.faqs.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-[#0B1F33] mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#D5AD65]" />
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {pkg.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-lg bg-[#FAF8F3] border border-slate-200">
                      <h4 className="font-heading font-bold text-sm text-[#0B1F33] mb-1.5">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-body">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Enquiry Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* WhatsApp Quick Book Card */}
              <div className="bg-[#0B1F33] text-white rounded-xl p-6 border border-[#D5AD65]/30 shadow-lg text-center">
                <h3 className="font-heading text-xl font-bold mb-2">
                  Fast-Track WhatsApp Booking
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  Check immediate cab availability and get an instant confirmation from our local manager.
                </p>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <span className="text-[11px] text-slate-400 block mt-3">
                  Or call directly:{" "}
                  <a href={`tel:${businessInfo.phoneRaw}`} className="text-[#D5AD65] font-semibold">
                    {businessInfo.phone}
                  </a>
                </span>
              </div>

              {/* Dedicated Enquiry Form */}
              <EnquiryForm defaultPackage={pkg.name} sourcePage={pkg.name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
