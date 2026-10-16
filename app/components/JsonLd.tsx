import { testimonials, googleRatingSummary } from "@/data/testimonials";

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seruni-catering.vercel.app";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment", "CateringService"],
    "@id": `${baseUrl}/#business`,
    name: "Seruni Catering Samarinda",
    alternateName: [
      "Seruni Box Samarinda",
      "Seruni Food Samarinda",
      "Catering Seruni Samarinda",
      "CV. Seruni Catering",
    ],
    description:
      "Jasa catering dan nasi box terbaik No. 1 di Samarinda. Melayani paket pernikahan, syukuran, nasi box rapat kantor, snack box, tumpeng, dan prasmanan dengan bahan segar dan higienis.",
    url: baseUrl,
    telephone: "+6281345010033",
    email: "serunicatering.smd@gmail.com",
    priceRange: "$$",
    servesCuisine: ["Indonesian", "Nusantara", "Tradisional", "Halal"],
    image: [
      `${baseUrl}/logo.jpeg`,
      `${baseUrl}/photo/foto8.webp`,
      `${baseUrl}/photo/foto1.webp`,
      `${baseUrl}/photo/foto7.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Komplek Pasundan Permai, Jl. Pasundan No. 9",
      addressLocality: "Samarinda Ulu",
      addressRegion: "Kalimantan Timur",
      postalCode: "75243",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.4950,
      longitude: 117.1350,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Samarinda",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kalimantan Timur",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/seruniboxsamarinda/",
      "https://www.facebook.com/p/Serunifoodcateringsamarinda-100069744123776/",
      googleRatingSummary.mapsUrl,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
      },
      reviewBody: item.text,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paket Catering Seruni Samarinda",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nasi Box / Rice Box Samarinda",
            description: "Paket nasi kotak higienis dengan aneka pilihan lauk khas Nusantara untuk acara kantor & syukuran.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prasmanan Pernikahan & Gathering",
            description: "Paket prasmanan lengkap dengan chafing dish tembaga mewah, tim standby, dan dekorasi elegan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tumpeng Nusantara Samarinda",
            description: "Nasi tumpeng hias cantik untuk syukuran, ulang tahun, peresmian, dan tasyakuran.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Snack Box & Coffee Break",
            description: "Kudapan manis dan gurih tradisional pilihan untuk rapat dinas, instansi, dan seminar kampus.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

