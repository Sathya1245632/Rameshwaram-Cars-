import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Tag,
  Share2,
} from "lucide-react";
import { blogPostsData, businessInfo, packagesData } from "@/data/travelData";
import BlogCard from "@/components/blog/BlogCard";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((b) => b.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Rameshwaram Travel Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Related articles
  const relatedPosts = blogPostsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const whatsappInquiryUrl = `https://wa.me/${businessInfo.whatsappRaw}?text=${encodeURIComponent(
    `Hello Rameshwaram Cars! I was reading your article "${post.title}" and would like to ask about cab booking.`
  )}`;

  return (
    <div className="w-full bg-[#FAF8F3]">
      {/* Header Banner */}
      <section className="bg-[#0B1F33] text-white py-16 lg:py-20 border-b border-[#D5AD65]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D5AD65] hover:underline uppercase tracking-wider mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>

          <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#123B56] text-[#D5AD65] font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.publishedDate}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readingTime}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF8F3] leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#D5AD65] text-[#0B1F33] flex items-center justify-center font-bold">
                {post.author.name[0]}
              </div>
              <div>
                <span className="text-xs font-bold text-white block">{post.author.name}</span>
                <span className="text-[11px] text-slate-400 block">{post.author.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-800 leading-relaxed font-body">
          {/* Excerpt Lead */}
          <p className="text-base sm:text-lg font-heading italic text-[#123B56] pb-6 border-b border-slate-100 leading-relaxed">
            "{post.excerpt}"
          </p>

          {/* HTML Content Container */}
          <div
            className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-[#0B1F33] prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-sm prose-p:leading-relaxed prose-p:text-slate-700"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tags */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-2">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-[#F2F4F6] text-[#0B1F33] text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* WhatsApp CTA inside article */}
          <div className="mt-8 p-6 rounded-xl bg-[#0B1F33] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading text-lg font-bold">Planning a trip to Rameshwaram?</h4>
              <p className="text-xs text-slate-300 mt-0.5">Book a sanitized AC cab with a knowledgeable island chauffeur.</p>
            </div>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-[#F2F4F6] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-bold text-[#0B1F33] mb-8">
            You Might Also Like
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rPost) => (
              <BlogCard key={rPost.slug} post={rPost} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
