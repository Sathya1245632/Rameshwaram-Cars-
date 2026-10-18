import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/travelData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#D5AD65]/50 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
        <div className="relative h-72 lg:h-full lg:col-span-7 overflow-hidden bg-slate-900 min-h-[300px]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0B1F33]/85 text-[#D5AD65] border border-[#D5AD65]/40 backdrop-blur-md">
              Featured Story
            </span>
          </div>
        </div>

        <div className="p-8 lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
              <span className="text-[#D5AD65] font-semibold uppercase tracking-wider">{post.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.publishedDate}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readingTime}</span>
            </div>

            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-[#0B1F33] group-hover:text-[#123B56] transition-colors leading-tight">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed font-body">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <div className="w-7 h-7 rounded-full bg-[#123B56] text-[#D5AD65] flex items-center justify-center font-bold">
                {post.author.name[0]}
              </div>
              <span>{post.author.name}</span>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D5AD65] hover:text-[#B58D43]"
            >
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#D5AD65]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#0B1F33]/85 text-[#D5AD65] backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] text-slate-400 mb-2">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.publishedDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readingTime}</span>
          </div>

          <h3 className="font-heading text-lg font-bold text-[#0B1F33] group-hover:text-[#123B56] transition-colors leading-snug">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-medium">{post.author.name}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#D5AD65] hover:text-[#B58D43]"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
