/* ============================================================
   GALERI FOTO — Seruni Catering
   Foto dokumentasi asli dari folder public/photo.
   Urutan span disusun agar bento grid terisi penuh tanpa celah.
   ============================================================ */

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  span: "small" | "large" | "wide" | "tall";
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/photo/foto2.webp",
    alt: "Kemasan kraft Seruni Box dengan motip bulan sabit",
    span: "large",
    caption: "Kemasan Eksklusif Seruni Box",
  },
  {
    id: 2,
    src: "/photo/foto4.jpg",
    alt: "Stand prasmanan Seruni Catering dengan papan tulis menu tradisional",
    span: "tall",
    caption: "Prasmanan Menu Tradisional",
  },
  {
    id: 3,
    src: "/photo/foto1.webp",
    alt: "Nasi box Seruni Box berisi nasi, lauk, sayur, dan buah segar",
    span: "small",
    caption: "Nasi Box Seruni Box",
  },
  {
    id: 4,
    src: "/photo/foto3.webp",
    alt: "Snack box berisi roti isi, gorengan, dan kue manis",
    span: "small",
    caption: "Snack Box Manis & Gurih",
  },
  {
    id: 5,
    src: "/photo/foto8.webp",
    alt: "Aneka hidangan seafood berbumbu dengan kepiting di atas daun pisang",
    span: "wide",
    caption: "Hidangan Seafood Spesial",
  },
  {
    id: 6,
    src: "/photo/foto6.jpg",
    alt: "Porsi salad dengan telur di atas daun pisang dalam tampah bambu",
    span: "small",
    caption: "Sajian Segar di Atas Daun Pisang",
  },
  {
    id: 7,
    src: "/photo/foto7.jpg",
    alt: "Meja prasmanan mewah dengan chafing dish tembaga berhiaskan lampu penghangat",
    span: "tall",
    caption: "Prasmanan Mewah Chafing Dish Tembaga",
  },
  {
    id: 8,
    src: "/photo/foto5.jpg",
    alt: "Station bakso dengan mangkuk bakso, kuah hangat, dan pelengkap",
    span: "large",
    caption: "Station Bakso Live Counter",
  },
  {
    id: 9,
    src: "/photo/foto10.webp",
    alt: "Dessert cup creamy dengan garnish daun di atas nampan putih",
    span: "small",
    caption: "Dessert Cup Elegan",
  },
  {
    id: 10,
    src: "/photo/foto9.webp",
    alt: "Aneka pastry dessert berbentuk apel dan tart buah segar",
    span: "wide",
    caption: "Dessert Pastry untuk Coffee Break",
  },
];
