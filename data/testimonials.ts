/* ============================================================
   DATA TESTIMONI RESMI — Seruni Catering Samarinda
   Sumber: Google Maps (Rating 5,0 dari 13 Ulasan)
   Hanya menyertakan ulasan asli yang memiliki pesan teks.
   ============================================================ */

export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  role: string;
  rating: number;
  text: string;
  avatarColor: string;
  relativeTime: string;
  isLocalGuide?: boolean;
  reaction?: string;
}

export const googleRatingSummary = {
  score: "5,0",
  scoreNumeric: 5.0,
  totalReviews: 13,
  mapsUrl: "https://www.google.com/maps/search/Seruni+Catering+Samarinda",
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Yudho Utomo",
    initials: "YU",
    role: "Local Guide · 151 ulasan · 914 foto",
    rating: 5,
    text: "Catering Seruni, salah satu catering terbaik yang ada di kota Samarinda. Memiliki citarasa dan berbagai jenis menu masakan baik nasional maupun tradisional menu yang dapat dipesan untuk berbagai macam acara dan kegiatan.",
    avatarColor: "#E8763A",
    relativeTime: "2 tahun lalu",
    isLocalGuide: true,
    reaction: "❤️ 1",
  },
  {
    id: 2,
    name: "Megalia Pratiwi",
    initials: "MP",
    role: "Pelanggan Setia · 7 ulasan",
    rating: 5,
    text: "Saya sudah langganan disini sejak nikahan adik saya di tahun 2012, makanannya enak dan servicenya bagus.",
    avatarColor: "#2D6A4F",
    relativeTime: "8 bulan lalu",
    isLocalGuide: false,
  },
  {
    id: 3,
    name: "Novy 3ifana",
    initials: "N3",
    role: "Local Guide · 232 ulasan · 343 foto",
    rating: 5,
    text: "Asli .... enak bangett ... terima kasih Seruni Catering .... 100 kotak abis seketika!",
    avatarColor: "#D97706",
    relativeTime: "3 tahun lalu",
    isLocalGuide: true,
    reaction: "🤯 1",
  },
  {
    id: 4,
    name: "Jimmy Bharata",
    initials: "JB",
    role: "Kontributor · 155 ulasan · 1.295 foto",
    rating: 5,
    text: "Catering Samarinda rekomendasi untuk yang punya acara resepsi, pernikahan, tasmiyahan atau acara keluarga lainnya.",
    avatarColor: "#C4663A",
    relativeTime: "5 tahun lalu",
    isLocalGuide: false,
  },
  {
    id: 5,
    name: "Rhesa Arisy",
    initials: "RA",
    role: "Local Guide · 25 ulasan · 44 foto",
    rating: 5,
    text: "Best Catering in Town!",
    avatarColor: "#4A7C59",
    relativeTime: "4 tahun lalu",
    isLocalGuide: true,
    reaction: "🙏 1",
  },
];
