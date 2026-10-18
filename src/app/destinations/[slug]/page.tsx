import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  MapPin,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { destinationsData, packagesData, businessInfo } from "@/data/travelData";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinationsData.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { slug } = await params;
  const dest = destinationsData.find((d) => d.slug === slug);
  if (!dest) return { title: "Destination Not Found" };

  return {
    title: `${dest.name} Travel Guide | Rameshwaram Cars`,
    description: dest.brief,
  };
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const dest = destinationsData.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  // Find related packages
  const relatedPackages = packagesData.filter((pkg) =>
    dest.relatedPackageSlugs.includes(pkg.slug)
  );

  const whatsappInquiryUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello Rameshwaram Cars! I want to visit ${dest.name}. Can you arrange an AC cab and driver for this trip?`
  )}`;

  return (
    <div className="w-full bg-[#FAF8F3]">
      {/* Hero Header with Photography */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-[#0B1F33] flex items-end overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D5AD65] hover:underline uppercase tracking-wider mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Destinations
          </Link>

          <span className="text-xs font-semibold uppercase tracking-widest text-[#D5AD65] block mb-2">
            Rameshwaram Destination Guide
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl">
            {dest.name}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 font-heading italic max-w-2xl">
            &ldquo;{dest.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0B1F33] mb-4">
                About {dest.name}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-body">
                {dest.description}
              </p>
            </div>

            {/* Historical Significance */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0B1F33] mb-4">
                Historical & Mythological Significance
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-body">
                {dest.historicalSignificance}
              </p>
            </div>

            {/* Photography Tips */}
            <div className="bg-[#FAF8F3] rounded-xl p-6 border border-[#D5AD65]/40 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#123B56] text-[#D5AD65] flex items-center justify-center shrink-0 mt-0.5">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#0B1F33] mb-1">
                  Photography & Visitor Advisory
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {dest.photographyTips}
                </p>
              </div>
            </div>

            {/* Nearby Attractions */}
            {dest.nearbyAttractions && dest.nearbyAttractions.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-[#0B1F33] mb-4">
                  Nearby Attractions to Club Together
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {dest.nearbyAttractions.map((att) => (
                    <span
                      key={att}
                      className="px-3.5 py-1.5 rounded-lg bg-[#F2F4F6] text-[#123B56] text-xs font-medium border border-slate-200 flex items-center gap-1.5"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#D5AD65]" />
                      {att}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Visitor Information & Booking Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Visitor Information Card */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md">
                <h3 className="font-heading text-xl font-bold text-[#0B1F33] mb-5 pb-3 border-b border-slate-100">
                  Visitor Information
                </h3>

                <div className="space-y-4 text-xs text-slate-700">
                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Visiting Timings:
                    </span>
                    <span className="font-medium text-[#0B1F33] block">
                      {dest.visitorInformation.timings}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Entry Tickets:
                    </span>
                    <span className="font-medium text-[#0B1F33] block">
                      {dest.visitorInformation.entryFee}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Dress Code / Attire:
                    </span>
                    <span className="font-medium text-[#0B1F33] block">
                      {dest.visitorInformation.dressCode}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Ideal Visit Duration:
                    </span>
                    <span className="font-medium text-[#0B1F33] block">
                      {dest.visitorInformation.idealDuration}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Best Time of Day:
                    </span>
                    <span className="font-medium text-[#0B1F33] block">
                      {dest.visitorInformation.bestTimeToVisit}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Plan Your Visit via WhatsApp</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0B1F33] hover:bg-[#123B56] text-white text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <span>Request Custom Cab Quote</span>
                  </Link>
                </div>
              </div>

              {/* Related Tour Packages */}
              {relatedPackages.length > 0 && (
                <div className="bg-[#FAF8F3] rounded-xl p-6 border border-[#D5AD65]/30">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D5AD65] block mb-1">
                    Recommended Tours
                  </span>
                  <h4 className="font-heading text-lg font-bold text-[#0B1F33] mb-4">
                    Packages Covering This Site
                  </h4>

                  <div className="space-y-3">
                    {relatedPackages.map((pkg) => (
                      <Link
                        key={pkg.slug}
                        href={`/packages/${pkg.slug}`}
                        className="p-3 bg-white rounded-lg border border-slate-200 hover:border-[#D5AD65] transition-all block group"
                      >
                        <h5 className="font-heading font-bold text-xs text-[#0B1F33] group-hover:text-[#123B56]">
                          {pkg.name}
                        </h5>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
                          <span>{pkg.duration}</span>
                          <span className="font-semibold text-[#D5AD65]">₹{pkg.startingPrice} onwards</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
