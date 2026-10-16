"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { galleryItems } from "@/data/gallery";

/* ============================================================
   GALLERY — Seruni Catering
   Bento grid gallery with masonry/asymmetric layout and
   a lightbox modal when clicking on an image.
   All solid colors, no gradients.
   ============================================================ */

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryItems.length
    );
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, []);

  /* Keyboard navigation for lightbox */
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  /* Bento grid span mapping for asymmetric layout */
  const spanClasses: Record<string, string> = {
    large: "col-span-2 row-span-2",
    wide: "col-span-2 row-span-1",
    tall: "col-span-1 row-span-2",
    small: "col-span-1 row-span-1",
  };

  return (
    <section
      id="galeri"
      className="bg-cream py-16 sm:py-20 lg:py-28"
      aria-label="Galeri Foto"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange">
              Galeri Kami
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-warm-gray-900 sm:text-4xl lg:text-5xl">
              Dokumentasi
              <br />
              Hasil Kerja Kami di Samarinda
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-warm-gray-500">
              Dokumentasi hidangan nasi box, prasmanan acara, tumpeng, dan snack box Seruni Catering di berbagai momen spesial.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 grid-flow-dense gap-3 sm:gap-4 md:grid-cols-4 lg:gap-5 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[240px]">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={index * 0.04}
              className={spanClasses[item.span]}
            >
              <button
                type="button"
                className="group relative flex h-full w-full cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Lihat foto: ${item.caption}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end bg-warm-gray-900/0 p-4 transition-all duration-300 group-hover:bg-warm-gray-900/40">
                  <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-warm-white">
                      {item.caption}
                    </p>
                  </div>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-warm-white/0 opacity-0 transition-all duration-300 group-hover:bg-warm-white/90 group-hover:opacity-100">
                  <svg className="h-4 w-4 text-warm-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-warm-gray-900/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galeri lightbox"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 md:top-6 md:right-6"
            onClick={closeLightbox}
            aria-label="Tutup lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            type="button"
            className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Foto sebelumnya"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-warm-white/10 text-warm-white transition-colors hover:bg-warm-white/20 md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Foto berikutnya"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-h-[80vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              width={1200}
              height={900}
              className="rounded-xl object-contain"
              style={{ maxHeight: "80vh" }}
              sizes="90vw"
            />
            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-warm-gray-300">
                {galleryItems[lightboxIndex].caption}
              </p>
              <p className="mt-1 text-xs text-warm-gray-500">
                {lightboxIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
