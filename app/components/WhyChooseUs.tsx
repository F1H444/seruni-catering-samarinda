"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

/* ============================================================
   WHY CHOOSE US — Seruni Catering
   Uniform 3-column grid with ghost serif numbers and
   hover-lift cards. All solid colors, no gradients.
   ============================================================ */

const advantages = [
  {
    title: "Bahan Segar Pilihan",
    description:
      "Kami hanya menggunakan bahan-bahan segar dan berkualitas tinggi yang dibeli langsung dari supplier terpercaya setiap hari.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    textColor: "text-orange",
    bgColor: "bg-orange/10",
  },
  {
    title: "Higienis & Terjamin",
    description:
      "Dapur kami berstandar ISO dengan prosedur kebersihan ketat. Setiap hidangan diolah dengan standar keamanan pangan tertinggi.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    textColor: "text-green",
    bgColor: "bg-green/10",
  },
  {
    title: "Tepat Waktu",
    description:
      "Komitmen kami adalah pengantaran tepat waktu sesuai jadwal. Tim logistik terlatih memastikan hidangan sampai dengan sempurna.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    textColor: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Semua paket kami tercantum dengan jelas, sehingga Anda bisa merencanakan budget dengan pasti.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    textColor: "text-orange-dark",
    bgColor: "bg-orange-dark/10",
  },
  {
    title: "Tim Profesional",
    description:
      "Koki berpengalaman dan tim pelayanan terlatih siap memberikan yang terbaik untuk acara Anda, dari awal hingga akhir.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    textColor: "text-green",
    bgColor: "bg-green/10",
  },
  {
    title: "Kustomisasi Fleksibel",
    description:
      "Kami siap menyesuaikan menu sesuai keinginan Anda — dari pilihan lauk, skala porsi, hingga tema penyajian khusus.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    textColor: "text-gold",
    bgColor: "bg-gold/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="keunggulan"
      className="bg-cream py-16 sm:py-20 lg:py-28"
      aria-label="Mengapa Memilih Kami"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Keunggulan Kami"
          eyebrowColor="green"
          title={
            <>
              Mengapa Memilih
              <br />
              Seruni <em className="italic text-green">Catering</em>
            </>
          }
        />

        {/* Uniform Grid */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {advantages.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-warm-gray-100 bg-warm-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl hover:shadow-warm-gray-200/60 lg:p-8">
                {/* Ghost serif number */}
                <span
                  className="pointer-events-none absolute -top-2 right-5 font-display text-7xl font-bold text-warm-gray-100 select-none transition-colors duration-300 group-hover:text-orange/20"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${item.bgColor} ${item.textColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-warm-gray-900">
                  {item.title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-warm-gray-500">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className="relative mt-6 h-0.5 w-12 rounded-full bg-warm-gray-200 transition-all duration-300 group-hover:w-20 group-hover:bg-orange" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
