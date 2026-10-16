"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-warm-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-20"
      aria-label="Hero Section"
    >
      {/* Background glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[1000px] sm:h-[1200px] bg-[radial-gradient(ellipse_at_top,_rgba(240,235,220,0.6),_rgba(251,250,247,1))]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        {/* Left Column: Headline & Action */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-orange/20 bg-warm-white px-4 py-1.5 sm:px-5 sm:py-2 shadow-sm transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-orange">
              Catering Terpercaya di Samarinda
            </span>
          </div>

          <h1
            className={`mt-5 sm:mt-6 text-3xl font-semibold tracking-tight text-warm-gray-900 transition-all delay-100 duration-700 sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.12] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Hidangan lezat yang
            <br />
            bikin momen terasa spesial
          </h1>

          <p
            className={`mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-warm-gray-600 transition-all delay-200 duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Seruni Catering siap bantu kamu menyajikan makanan lezat, higienis,
            dan tepat waktu untuk acara kantor, syukuran, pernikahan, hingga rapat di Samarinda.
          </p>

          <div
            className={`mt-6 sm:mt-8 flex w-full flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all delay-300 duration-700 lg:justify-start ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="#menu"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-warm-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark active:scale-[0.98]"
            >
              Lihat Menu Kami
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
            <a
              href="https://wa.me/6281345010033"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-warm-gray-200 bg-warm-white px-7 py-3.5 text-sm font-semibold text-warm-gray-800 transition-all hover:border-orange hover:text-orange hover:shadow-sm active:scale-[0.98]"
            >
              <svg className="h-4 w-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Konsultasi via WhatsApp
            </a>
          </div>

          <div
            className={`mt-8 sm:mt-10 grid w-full max-w-lg grid-cols-3 gap-2 sm:gap-6 border-t border-warm-gray-200/70 pt-6 transition-all delay-500 duration-700`}
          >
            {[
              { value: "5,0 ★", label: "Google Rating" },
              { value: "50+", label: "Pilihan Menu" },
              { value: "100%", label: "Bahan Segar" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-warm-gray-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-warm-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Visual */}
        <div
          className={`relative transition-all delay-300 duration-1000 ${
            mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="relative mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:ml-auto lg:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2rem] border border-warm-gray-200/80 bg-warm-white shadow-2xl shadow-warm-gray-300/40">
              <Image
                src="/photo/foto8.webp"
                alt="Aneka hidangan prasmanan Seruni Catering Samarinda"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
