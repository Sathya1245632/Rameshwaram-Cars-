import { MetadataRoute } from "next";
import { packagesData, destinationsData, blogPostsData } from "@/data/travelData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rameswaramcars.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const packagePages: MetadataRoute.Sitemap = packagesData.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const destinationPages: MetadataRoute.Sitemap = destinationsData.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPostsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticPages, ...packagePages, ...destinationPages, ...blogPages];
}
