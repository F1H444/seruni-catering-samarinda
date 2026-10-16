import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import JsonLd from "./components/JsonLd";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F28C20",
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seruni-catering.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Seruni Catering Samarinda | Jasa Catering & Nasi Box No. 1 Samarinda",
    template: "%s | Seruni Catering Samarinda",
  },
  description:
    "Rekomendasi catering terbaik di Samarinda dengan rating 5,0 di Google Maps. Melayani nasi box, prasmanan pernikahan, tumpeng syukuran, snack box, dan coffee break. Higienis, porsi mantap, rasa lezat bumbu meresap.",
  keywords: [
    "catering samarinda",
    "seruni catering samarinda",
    "seruni catering",
    "seruni box samarinda",
    "seruni food samarinda",
    "nasi box samarinda",
    "nasi kotak samarinda",
    "prasmanan samarinda",
    "catering pernikahan samarinda",
    "wedding catering samarinda",
    "tumpeng samarinda",
    "snack box samarinda",
    "coffee break samarinda",
    "catering aqiqah samarinda",
    "catering kantor samarinda",
    "catering samarinda ulu",
    "catering terbaik di samarinda",
    "jasa catering kalimantan timur",
  ],
  authors: [{ name: "Seruni Catering Samarinda" }],
  creator: "Seruni Catering Samarinda",
  publisher: "Seruni Catering Samarinda",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Seruni Catering Samarinda | Jasa Catering & Nasi Box No. 1 Samarinda",
    description:
      "Pilihan utama catering terpercaya di Kota Samarinda. Porsi pas, rasa nikmat, bahan segar, rating sempurna 5,0 di Google Maps.",
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: "Seruni Catering Samarinda",
    images: [
      {
        url: "/photo/foto8.webp",
        width: 1200,
        height: 800,
        alt: "Seruni Catering Samarinda - Aneka Hidangan Prasmanan & Nasi Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seruni Catering Samarinda | Jasa Catering & Nasi Box No. 1 Samarinda",
    description:
      "Catering terpercaya di Kota Samarinda. Nasi box, prasmanan, tumpeng, snack box untuk setiap acara Anda.",
    images: ["/photo/foto8.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "ID-KI",
    "geo.placename": "Samarinda",
    "geo.position": "-0.4950;117.1350",
    ICBM: "-0.4950, 117.1350",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
