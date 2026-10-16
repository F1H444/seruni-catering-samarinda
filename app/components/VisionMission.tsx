"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

/* ============================================================
   VISION, MISSION & MOTTO — Seruni Catering Samarinda
   Tampilan lega, berjarak nyaman (spacious & breathable),
   dan responsif di semua perangkat.
   ============================================================ */

const visionMissionData = [
  {
    label: "Visi",
    title: "Visi Kami",
    content:
      "Menjadi penyedia jasa catering terdepan dan paling terpercaya di Samarinda dan Kalimantan Timur yang dikenal karena kualitas hidangan lezat, inovasi kuliner, dan standar pelayanan yang melampaui ekspektasi pelanggan.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accentColor: "bg-orange",
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
    cardClass: "border border-warm-gray-200/90 bg-white shadow-sm hover:border-orange/40 hover:shadow-xl hover:shadow-orange/5",
    titleClass: "text-warm-gray-900",
    textClass: "text-warm-gray-600",
  },
  {
    label: "Misi",
    title: "Misi Kami",
    content:
      "Menyajikan hidangan berkualitas tinggi dengan bahan segar harian, menjaga konsistensi cita rasa autentik Nusantara di setiap pesanan, memberikan pelayanan ramah & tepat waktu, serta menjaga standar kebersihan dapur yang ketat.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    accentColor: "bg-green",
    iconBg: "bg-green/10",
    iconColor: "text-green",
    cardClass: "border border-warm-gray-200/90 bg-white shadow-sm hover:border-green/40 hover:shadow-xl hover:shadow-green/5",
    titleClass: "text-warm-gray-900",
    textClass: "text-warm-gray-600",
  },
  {
    label: "Motto",
    title: "Motto Kami",
    content:
      '"Setiap Hidangan, Sebuah Cerita." Kami percaya setiap kotak nasi dan sajian prasmanan yang kami hantarkan membawa kebahagiaan serta menjadi bagian dari kesuksesan momen berharga keluarga dan instansi Anda.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    accentColor: "bg-gold",
    iconBg: "bg-gold/15",
    iconColor: "text-gold",
    cardClass: "bg-warm-gray-900 border border-warm-gray-800 shadow-md hover:border-gold/40 hover:shadow-2xl hover:shadow-black/30",
    titleClass: "text-warm-white",
    textClass: "text-warm-gray-300",
  },
];

export default function VisionMission() {
  return (
    <section
      id="visi-misi"
      className="bg-warm-white py-20 sm:py-24 lg:py-32"
      aria-label="Visi, Misi, dan Motto"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section dengan jarak yang rapi */}
        <SectionHeader
          eyebrow="Fondasi Kami"
          eyebrowColor="gold"
          align="center"
          title={
            <>
              Visi, Misi, dan <em className="italic text-gold">Motto</em>
            </>
          }
          description="Landasan utama yang membimbing komitmen dan kualitas layanan kami dalam melayani masyarakat Samarinda."
        />

        {/* Jarak lega antara judul dan kartu (mt-12 sm:mt-16 lg:mt-20) */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 gap-7 sm:gap-8 lg:grid-cols-3 lg:gap-9">
          {visionMissionData.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1} className="h-full">
              <div
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:p-9 lg:p-10 transition-all duration-300 hover:-translate-y-2 ${item.cardClass}`}
              >
                {/* Top accent bar dengan lengkungan halus */}
                <div className={`absolute top-0 left-8 sm:left-10 h-1.5 w-16 sm:w-20 rounded-b-full ${item.accentColor}`} />

                <div>
                  {/* Icon dengan margin bawah yang lega */}
                  <div
                    className={`mb-7 sm:mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>

                  {/* Label Kategori */}
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-warm-gray-400">
                    {item.label}
                  </span>

                  {/* Judul Kartu */}
                  <h3 className={`mt-2.5 font-display text-xl sm:text-2xl font-bold tracking-tight ${item.titleClass}`}>
                    {item.title}
                  </h3>

                  {/* Isi Konten dengan line height yang rileks & lega */}
                  <p className={`mt-4 sm:mt-5 text-sm sm:text-[15px] leading-relaxed sm:leading-loose ${item.textClass}`}>
                    {item.content}
                  </p>
                </div>

                {/* Garis dekoratif bawah kartu */}
                <div className="mt-8 pt-4 border-t border-warm-gray-100/60 dark:border-warm-gray-800">
                  <span className="text-xs font-semibold text-warm-gray-400 group-hover:text-warm-gray-600 transition-colors">
                    Seruni Catering Samarinda
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
