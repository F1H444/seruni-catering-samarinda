"use client";

import { useState, useEffect, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { testimonials, googleRatingSummary, type Testimonial } from "@/data/testimonials";

/* ============================================================
   TESTIMONIALS — Seruni Catering Samarinda
   Ulasan Resmi Google Maps: Rating 5,0 (13 Ulasan)
   Desain luas, lega (tidak desak-desakan), dan ultra-responsif:
   - Mobile: Carousel lega dengan tombol navigasi & indikator
   - Tablet & Desktop: 1 Kartu Unggulan (Col-span-2) + 4 Kartu Seimbang (2x2)
   ============================================================ */

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextTestimonial]);

  const featured = testimonials[0];
  const regularList = testimonials.slice(1);

  return (
    <section
      id="testimoni"
      className="bg-warm-white py-16 sm:py-20 lg:py-28 overflow-hidden"
      aria-label="Testimoni Google Maps"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Ulasan Google Maps"
          eyebrowColor="green"
          title={
            <>
              Kata Mereka tentang
              <br />
              Seruni <em className="italic text-green">Catering Samarinda</em>
            </>
          }
          description="Ulasan nyata dari pelanggan setia kami yang terverifikasi di Google Maps."
        />

        {/* Google Maps Summary Pill / Badge */}
        <ScrollReveal className="mt-8 mb-10 sm:mb-14 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 rounded-2xl border border-warm-gray-200/90 bg-white px-5 py-3.5 shadow-sm sm:rounded-full">
            <div className="flex items-center gap-2.5">
              {/* Google colored logo */}
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span className="text-sm font-bold text-warm-gray-900">
                Google Rating
              </span>
            </div>

            <span className="hidden sm:inline text-warm-gray-300">|</span>

            {/* Rating Stars & Score */}
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-base font-extrabold text-warm-gray-900">
                {googleRatingSummary.score}
              </span>
              <span className="text-xs font-medium text-warm-gray-500">
                ({googleRatingSummary.totalReviews} ulasan)
              </span>
            </div>

            <a
              href={googleRatingSummary.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-orange hover:text-orange-dark transition-colors"
            >
              Lihat di Maps
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* Mobile View: Spacious Single Card Carousel */}
        <div className="md:hidden">
          <div
            className="overflow-hidden rounded-3xl border border-warm-gray-200/90 bg-white p-6 shadow-sm transition-all"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={() => setIsAutoPlaying(false)}
            onTouchEnd={() => setIsAutoPlaying(true)}
          >
            <TestimonialCard testimonial={testimonials[activeIndex]} />

            {/* Carousel Controls */}
            <div className="mt-6 flex items-center justify-between border-t border-warm-gray-100 pt-4">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-8 bg-orange" : "w-2.5 bg-warm-gray-200"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ulasan ke-${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-warm-gray-200 bg-warm-white text-warm-gray-700 transition-all hover:border-orange hover:text-orange active:scale-95"
                  aria-label="Ulasan sebelumnya"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-warm-gray-200 bg-warm-white text-warm-gray-700 transition-all hover:border-orange hover:text-orange active:scale-95"
                  aria-label="Ulasan berikutnya"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet & Desktop: Breathable Non-Cramped Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Featured Highlight Card spanning 2 columns */}
          {featured && (
            <ScrollReveal className="md:col-span-2">
              <div className="group relative rounded-3xl border border-orange/25 bg-gradient-to-br from-white via-cream/40 to-white p-7 lg:p-9 shadow-md shadow-warm-gray-200/50 transition-all duration-300 hover:shadow-xl hover:border-orange/40">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-warm-gray-100 pb-5">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-warm-white shadow-sm"
                      style={{ backgroundColor: featured.avatarColor }}
                    >
                      {featured.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-warm-gray-900">
                          {featured.name}
                        </h3>
                        {featured.isLocalGuide && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-orange/10 px-2.5 py-0.5 text-xs font-semibold text-orange">
                            Local Guide
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-warm-gray-500 mt-0.5">
                        {featured.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start lg:self-center">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-orange"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-warm-gray-400">
                      {featured.relativeTime}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-base lg:text-lg leading-relaxed text-warm-gray-800 font-medium">
                    &ldquo;{featured.text}&rdquo;
                  </p>
                </div>

                {featured.reaction && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-warm-gray-500">
                    <span className="inline-flex items-center rounded-full bg-warm-gray-100 px-2 py-0.5">
                      {featured.reaction}
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Cards 2-5: 4 Balanced Cards in 2x2 Grid */}
          {regularList.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Single Testimonial Card (Spacious & Clean) ---- */
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-warm-gray-200/90 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5">
      <div>
        {/* Header: Rating & Date */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 text-orange"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs font-bold text-warm-gray-700">5,0</span>
          </div>

          <span className="text-xs text-warm-gray-400">
            {testimonial.relativeTime}
          </span>
        </div>

        {/* Text */}
        <p className="mt-5 text-sm sm:text-base leading-relaxed text-warm-gray-700">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {testimonial.reaction && (
          <div className="mt-3">
            <span className="inline-flex items-center rounded-full bg-warm-gray-50 border border-warm-gray-200/60 px-2 py-0.5 text-xs text-warm-gray-600">
              {testimonial.reaction}
            </span>
          </div>
        )}
      </div>

      {/* Author Footer */}
      <div className="mt-7 flex items-center gap-3.5 border-t border-warm-gray-100 pt-5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-warm-white shadow-sm"
          style={{ backgroundColor: testimonial.avatarColor }}
        >
          {testimonial.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h4 className="truncate text-sm font-bold text-warm-gray-900">
              {testimonial.name}
            </h4>
            {testimonial.isLocalGuide && (
              <span className="shrink-0 rounded bg-orange/10 px-1.5 py-0.5 text-[10px] font-semibold text-orange">
                Local Guide
              </span>
            )}
          </div>
          <p className="truncate text-xs text-warm-gray-500 mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
