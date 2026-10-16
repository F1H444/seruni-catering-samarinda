"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

/* ============================================================
   CONTACT & LOCATION — Seruni Catering Samarinda
   ============================================================ */

const contactInfo = [
  {
    title: "Telepon & WhatsApp",
    value: "0813-4501-0033 / 0823-5099-5660",
    href: "https://wa.me/6281345010033",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    bgColor: "bg-green/10",
    iconColor: "text-green",
  },
  {
    title: "Alamat Dapur & Kantor",
    value: "Komplek Pasundan Permai, Jawa, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75243",
    href: "https://www.google.com/maps/search/Seruni+Catering+Samarinda",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    bgColor: "bg-gold/10",
    iconColor: "text-gold",
  },
  {
    title: "Jam Operasional",
    value: "Senin - Sabtu: 08.00 - 17.00 WITA (Pesanan catering tetap dilayani sesuai jadwal acara)",
    href: null,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bgColor: "bg-orange-dark/10",
    iconColor: "text-orange-dark",
  },
];

export default function Contact() {
  return (
    <section
      id="kontak"
      className="bg-cream py-16 sm:py-20 lg:py-28"
      aria-label="Kontak dan Lokasi"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Hubungi Kami"
          eyebrowColor="orange"
          title={
            <>
              Kontak dan Lokasi <em className="italic text-orange">Seruni Catering</em>
            </>
          }
          description="Konsultasikan menu, jadwal pengantaran, atau request paket kustom untuk acara Anda di Samarinda dan sekitarnya."
        />

        {/* Content Grid */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Contact Info Cards */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {contactInfo.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div className="group flex items-start gap-4 rounded-2xl border border-warm-gray-200/80 bg-warm-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-lg hover:shadow-warm-gray-200/50 lg:p-7">
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bgColor} ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-warm-gray-400">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm font-semibold text-warm-gray-800 transition-colors hover:text-orange"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-semibold text-warm-gray-800">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* CTA Card */}
            <ScrollReveal delay={0.3}>
              <div className="rounded-3xl bg-green p-7 sm:p-8 shadow-lg shadow-green/15">
                <h3 className="font-display text-xl font-bold text-warm-white">
                  Siap Melayani Acara Anda di Samarinda
                </h3>
                <p className="mt-2 text-sm text-warm-white/90 leading-relaxed">
                  Hubungi kami via WhatsApp untuk konsultasi tanggal, menu, dan penawaran terbaik.
                </p>
                <a
                  href="https://wa.me/6281345010033?text=Halo%20Seruni%20Catering%20Samarinda,%20saya%20ingin%20konsultasi%20pemesanan%20catering."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-green shadow-sm transition-all hover:bg-warm-white hover:shadow-md active:scale-[0.98]"
                >
                  Chat via WhatsApp (Admin)
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Google Maps Embed */}
          <ScrollReveal direction="right">
            <div className="h-full min-h-[350px] sm:min-h-[420px] overflow-hidden rounded-3xl border border-warm-gray-200/80 bg-white shadow-lg shadow-warm-gray-200/40">
              <iframe
                src="https://maps.google.com/maps?q=Komplek+Pasundan+Permai+Samarinda+Ulu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Seruni Catering Samarinda di Google Maps"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}