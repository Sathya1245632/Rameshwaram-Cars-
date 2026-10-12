import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Clock,
  Star,
  MapPin,
  Car,
  MessageCircle,
  Phone,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import Hero3D from "@/components/home/Hero3D";
import FareEstimator from "@/components/home/FareEstimator";
import PackageCard from "@/components/packages/PackageCard";
import DestinationCard from "@/components/destinations/DestinationCard";
import BlogCard from "@/components/blog/BlogCard";
import EnquiryForm from "@/components/common/EnquiryForm";
import {
  packagesData,
  destinationsData,
  blogPostsData,
  whyChooseUsData,
  travelServices,
  testimonials,
  fleetData,
  businessInfo,
} from "@/data/travelData";

export default function HomePage() {
  const featuredPackages = packagesData.slice(0, 3);
  const featuredDestinations = destinationsData.slice(0, 3);
  const featuredBlogs = blogPostsData.slice(0, 3);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-6 h-6 text-[#D5AD65]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#D5AD65]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#D5AD65]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#D5AD65]" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-[#D5AD65]" />;
      case "Star":
        return <Star className="w-6 h-6 text-[#D5AD65]" />;
      default:
        return <Compass className="w-6 h-6 text-[#D5AD65]" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Immersive 3D Hero Section */}
      <Hero3D />

      {/* 2. Interactive Trip Fare Estimator & Instant Booking (Bento Section) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-10 relative z-30 w-full">
        <FareEstimator />
      </section>

      {/* 3. Featured Tour Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#D5AD65] text-xs font-semibold uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Thoughtfully Planned Itineraries</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33]">
              Featured Tour Packages
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl font-body">
              Whether you are here for a sacred early morning holy bath or a scenic coastal sunset at Dhanushkodi, explore our verified fixed-rate packages.
            </p>
          </div>

          <Link
            href="/packages"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B56] hover:text-[#D5AD65] transition-colors group"
          >
            <span>View All 6 Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 4. Popular Destinations Section */}
      <section className="py-20 bg-[#F2F4F6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-2">
              The Soul of the Island
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33]">
              Popular Destinations
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-body">
              Historic temples with thousand-pillar corridors, legendary engineering landmarks, and untouched shorelines where two oceans merge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#123B56] hover:bg-[#0B1F33] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow"
            >
              <span>Explore All Destination Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-2">
              The Rameshwaram Cars Advantage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-body">
              Traveling to a holy pilgrimage town should bring peace of mind, not stress about bargaining, confusing temple queues, or unexpected fare surges.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-[#0B1F33] text-white border border-[#D5AD65]/30">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-6 h-6 text-[#D5AD65]" />
                <h4 className="font-heading text-lg font-bold">100% Transparent Price Guarantee</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                What we quote on your booking inquiry is your final invoice. We never ask for additional driver charges, fuel escalations, or hidden waiting fees.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUsData.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#D5AD65]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#FAF8F3] border border-[#D5AD65]/20 flex items-center justify-center mb-4">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0B1F33] mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Travel Services & Fleet Preview */}
      <section className="py-20 bg-[#0B1F33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-2">
              Our Professional Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F3]">
              Available Travel & Cab Services
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base font-body">
              Tailored transportation solutions for solo yatris, nuclear families, and large spiritual groups.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {travelServices.map((service, idx) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-[#123B56]/40 border border-white/10 hover:border-[#D5AD65]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-2xl font-bold text-[#D5AD65] block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fleet Specs Row */}
          <div className="bg-[#123B56]/30 rounded-2xl p-6 sm:p-8 border border-[#D5AD65]/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">Our Maintained AC Fleet</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Commercial yellow-board cabs with speed governors, verified drivers, and chilled dual AC.
                </p>
              </div>
              <a
                href={`https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
                  "Hello Rameshwaram Cars! I would like to enquire about vehicle availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#D5AD65] text-[#0B1F33] text-xs font-bold uppercase tracking-wider hover:bg-[#B58D43] transition-colors self-start md:self-auto"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire Any Vehicle</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {fleetData.map((car) => (
                <div key={car.name} className="p-3.5 rounded-lg bg-[#0B1F33]/70 border border-white/10 text-center">
                  <span className="text-xs font-bold text-white block truncate">{car.name}</span>
                  <span className="text-[11px] text-[#D5AD65] block mt-0.5">{car.type}</span>
                  <div className="mt-2 text-[11px] text-slate-400">
                    <span>{car.passengers} Seats • ₹{car.ratePerKm}/km</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Genuine Customer Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-2">
            Pilgrim Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33]">
            What Our Travelers Say
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-body">
            Real experiences from families, senior citizens, and travelers who trusted us with their Rameshwaram journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.name}
              className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D5AD65] mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-body italic mb-6">
                  "{test.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="font-heading font-bold text-sm text-[#0B1F33] block">{test.name}</span>
                <span className="text-[11px] text-slate-500 block">{test.location}</span>
                <span className="text-[11px] text-[#D5AD65] font-medium block mt-1">
                  Booked: {test.package}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Featured Travel Blog Articles */}
      <section className="py-20 bg-[#F2F4F6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#D5AD65] text-xs font-semibold uppercase tracking-widest block mb-2">
                Traveler's Knowledge Hub
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F33]">
                Featured Travel Guides & Articles
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl font-body">
                Insider advice on darshan timing hacks, 22 theerthams rules, Dhanushkodi permits, and scenic routes.
              </p>
            </div>

            <Link
              href="/blog"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B56] hover:text-[#D5AD65] transition-colors group"
            >
              <span>Visit Travel Blog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Prominent Booking & Quote Enquiry Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <EnquiryForm sourcePage="Homepage Bottom" />
      </section>
    </div>
  );
}
