import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingLeadBar from "@/components/common/FloatingLeadBar";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rameswaramcars.com"),
  title: {
    default: "Rameshwaram Cars & Tours | Premier Taxi, Pilgrimage & Coastal Tour Service",
    template: "%s | Rameshwaram Cars",
  },
  description:
    "Experience Rameshwaram with the island's top-rated cab service. Thoughtfully planned 22 Theerthams pilgrimage tours, Dhanushkodi ghost town safaris, and Madurai airport transfers.",
  keywords: [
    "Rameshwaram taxi",
    "Rameshwaram car rental",
    "Dhanushkodi cab package",
    "Rameshwaram 22 theerthams tour",
    "Madurai to Rameshwaram cab",
    "Pamban bridge tour",
    "Innova Crysta Rameshwaram",
  ],
  authors: [{ name: "Rameshwaram Cars & Tours" }],
  openGraph: {
    title: "Rameshwaram Cars & Tours | Curated Pilgrimages & Coastal Journeys",
    description:
      "Explore sacred temples, breathtaking coastlines, and Dhanushkodi with verified local chauffeurs and transparent fixed pricing.",
    url: "https://rameswaramcars.com",
    siteName: "Rameshwaram Cars",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Rameshwaram Pamban Bridge and Coastal Tours",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rameshwaram Cars & Tours",
    description: "Curated Pilgrimages, Dhanushkodi Safaris, and Madurai Transfers.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F3] text-[#1C2B38] font-body selection:bg-[#D5AD65] selection:text-[#0B1F33] pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingLeadBar />
      </body>
    </html>
  );
}
