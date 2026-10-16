/* ============================================================
   DATA PLACEHOLDER — Menu Seruni Catering
   Menu masih kosong. Tambahkan data menu asli Anda di sini.
   ============================================================ */

export type MenuCategory =
  | "Semua"
  | "Nasi Box"
  | "Prasmanan"
  | "Snack Box"
  | "Tumpeng"
  | "Paket coffee break"
  | "Paket arisan";

export interface MenuItem {
  id: number;
  name: string;
  category: MenuCategory;
  description: string;
  price: string;
  image: string;
  featured: boolean;
}

export const menuCategories: MenuCategory[] = [
  "Semua",
  "Nasi Box",
  "Prasmanan",
  "Snack Box",
  "Tumpeng",
  "Paket coffee break",
  "Paket arisan",
];

export const allMenuItems: MenuItem[] = [];

export const featuredMenuItems = allMenuItems.filter((m) => m.featured);
