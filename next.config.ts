import type { NextConfig } from "next";

const securityHeaders = [
  // HSTS: Wajibkan koneksi HTTPS yang aman (2 tahun + preload)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Cegah serangan Clickjacking
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Cegah MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Lindungi privasi pengguna pada header referrer
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Batasi akses sensor perangkat sensitif
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Aktifkan DNS Prefetching yang aman
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // Cegah XSS di browser lawas
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  // Sembunyikan header 'x-powered-by: Next.js' agar attacker tidak bisa fingerprint stack web
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
