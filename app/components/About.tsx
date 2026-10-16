"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";

const stats = [
  { end: 99, suffix: "%", label: "Klien Puas" },
  { end: 50, suffix: "+", label: "Jenis Menu" },
  { end: 100, suffix: "%", label: "Bahan Segar" },
];

const highlights = [
  "Bahan segar pilihan yang dibeli dan diolah setiap hari",
  "Rasa khas Nusantara konsisten dan bumbu meresap",
  "Dapur higienis, bersih, dan kemasan box rapi",
  "Ketepatan waktu pengantaran ke seluruh area Samarinda",
];

export default function About() {
  return (
    <section
      id="tentang"
      className="bg-warm-white py-16 sm:py-20 lg:py-28"
      aria-label="Tentang Kami"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tentang Kami"
          eyebrowColor="orange"
          title={
            <>
              Kami hadir menyajikan catering yang higienis, lezat, dan terpercaya di Samarinda
            </>
          }
        />

        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left">
            <p className="text-sm sm:text-base leading-relaxed text-warm-gray-600">
              Seruni Catering lahir di Kota Samarinda dari komitmen sederhana: membantu Anda
              menghidangkan makanan istimewa untuk setiap momen berharga tanpa perlu repot di dapur.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-warm-gray-600">
              Kami memadukan bumbu khas Nusantara yang gurih meresap dengan standar kebersihan tinggi.
              Mulai dari pesanan harian nasi box, snack box rapat kantor, tumpeng syukuran, hingga prasmanan
              pernikahan, tim kami siap melayani dengan penuh dedikasi.
            </p>

            <ul className="mt-6 sm:mt-8 flex flex-col gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-orange/30 bg-orange/10">
                    <svg className="h-3.5 w-3.5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm text-warm-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none pb-6 sm:pb-8">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] md:aspect-[5/4] w-[90%] ml-auto overflow-hidden rounded-2xl border border-warm-gray-200/80 shadow-md">
                <Image
                  src="/photo/foto7.jpg"
                  alt="Stand prasmanan Seruni Catering Samarinda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-2 left-0 w-[50%] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <div className="relative aspect-square">
                  <Image
                    src="/photo/foto1.webp"
                    alt="Nasi box Seruni Catering Samarinda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Row */}
        <ScrollReveal className="mt-12 sm:mt-16">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 sm:gap-2 rounded-2xl border border-warm-gray-200/80 bg-white p-3 sm:p-5 lg:p-7 text-center shadow-sm"
              >
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  className="text-xl sm:text-2xl lg:text-4xl font-bold text-warm-gray-900"
                />
                <p className="text-[11px] sm:text-xs lg:text-sm font-medium text-warm-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
