"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

export default function MenuSection() {
  const [isOpenFull, setIsOpenFull] = useState(false);

  return (
    <section
      id="menu"
      className="bg-cream py-16 sm:py-20 lg:py-28"
      aria-label="Menu Seruni Catering"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Menu Kami"
          eyebrowColor="orange"
          title="Daftar Menu & Paket Catering Samarinda"
          description="Pilihan lengkap mulai dari Nasi Box, Snack Box, Tumpeng, hingga Prasmanan. Siap disesuaikan dengan kebutuhan dan anggaran acara Anda."
          align="center"
        />

        <ScrollReveal className="mt-10 sm:mt-14 lg:mt-16">
          {/* Menu Card Container */}
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-warm-gray-200/80 bg-white p-3 sm:p-5 shadow-lg shadow-warm-gray-200/40">
            <div
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-warm-gray-50"
              onClick={() => setIsOpenFull(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setIsOpenFull(true)}
              aria-label="Buka menu lengkap ukuran penuh"
            >
              <Image
                src="/menu.jpeg"
                alt="Daftar menu Seruni Catering Samarinda"
                width={1600}
                height={2400}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
              />

              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-xs sm:text-sm font-semibold text-warm-gray-900 shadow-xl">
                  <svg className="h-4 w-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                  Ketuk untuk Perbesar Menu
                </div>
              </div>
            </div>

            {/* Mobile tip */}
            <p className="mt-3 text-center text-xs text-warm-gray-500 md:hidden">
              💡 Ketuk gambar menu di atas untuk memperbesar
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setIsOpenFull(true)}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-warm-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-warm-gray-800 shadow-sm transition-all hover:border-orange hover:text-orange active:scale-[0.98]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
              Perbesar Menu
            </button>

            <a
              href="https://wa.me/6281345010033?text=Halo%20Seruni%20Catering%20Samarinda,%20saya%20ingin%20tanya%20detail%20menu%20dan%20harga%20paket."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-warm-white shadow-lg shadow-green/20 transition-all hover:bg-green-dark active:scale-[0.98]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Tanya & Kustomisasi Menu via WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Fullscreen Lightbox Modal for Menu */}
      {isOpenFull && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Menu ukuran penuh"
          onClick={() => setIsOpenFull(false)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
            onClick={() => setIsOpenFull(false)}
            aria-label="Tutup tampilan menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-h-[92vh] max-w-[95vw] overflow-auto rounded-2xl bg-white p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/menu.jpeg"
              alt="Daftar menu Seruni Catering Samarinda ukuran penuh"
              width={1600}
              height={2400}
              className="h-auto max-h-[88vh] w-auto object-contain rounded-xl"
              sizes="95vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}