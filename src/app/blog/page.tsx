"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Filter, BookOpen, MessageCircle } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPostsData, businessInfo } from "@/data/travelData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Sightseeing Guide",
    "Itineraries",
    "Travel Guide",
    "Travel Tips",
    "Road Trips",
  ];

  const featuredPost = blogPostsData[0];
  const remainingPosts = blogPostsData.slice(1);

  const filteredPosts =
    selectedCategory === "All"
      ? remainingPosts
      : blogPostsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#FAF8F3]">
      {/* Editorial Header */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-20 border-b border-[#D5AD65]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123B56] border border-[#D5AD65]/40 text-[#D5AD65] text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Island Travel Journal</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF8F3]">
            Rameshwaram Travel Blog & Guides
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-body">
            Well-researched insights, step-by-step darshan itineraries, highway navigation tips, and local secrets from our veteran island travel team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Featured Story (Only when 'All' selected) */}
        {selectedCategory === "All" && (
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D5AD65] block mb-4">
              Featured Editorial
            </span>
            <BlogCard post={featuredPost} featured={true} />
          </div>
        )}

        {/* Category Filters */}
        <div className="border-b border-slate-200 pb-4 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#D5AD65]" />
            <span>Categories:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#0B1F33] text-[#D5AD65] shadow-sm"
                    : "bg-[#F2F4F6] text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "All" ? "All Articles" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Cards Grid */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#0B1F33] mb-8">
            {selectedCategory === "All" ? "Latest Travel Guides" : `${selectedCategory} Articles`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Custom Advice Banner */}
      <section className="py-16 bg-[#F2F4F6] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B1F33]">
            Have a Specific Question About Darshan or Traveling to Rameshwaram?
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our local managers are available on WhatsApp to answer any question regarding crowd status, train timings, theertham bathing sequence, or hotel recommendations.
          </p>
          <div className="mt-6">
            <a
              href={`https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
                "Hello Rameshwaram Cars! I read your travel blog and had a question about planning my trip."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask a Local Guide on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
