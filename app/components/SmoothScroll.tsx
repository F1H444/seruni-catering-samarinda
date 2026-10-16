"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/* ============================================================
   SMOOTH SCROLL (LENIS)
   Memberikan efek gulir halus (momentum / inertia scroll)
   yang terasa elegan, lembut, dan sedikit lambat (buttery smooth).
   ============================================================ */

export default function SmoothScroll({
  children,
}: {
  children?: React.ReactNode;
}) {
  useEffect(() => {
    // Cek preferensi aksesibilitas pengguna (reduced motion)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      // Durasi 1.6 detik memberi rasa scroll yang lebih santai & lambat (buttery inertia)
      duration: 1.6,
      // Easing eksponensial halus untuk deselerasi alami
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      // wheelMultiplier 0.82 memberikan resistensi lembut agar terasa agak lambat saat digulir
      wheelMultiplier: 0.82,
      touchMultiplier: 1.3,
      infinite: false,
    });

    // Simpan instance di global window agar komponen lain bisa memicu scroll bila perlu
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Tangani navigasi link anchor internal (#beranda, #tentang, dll) dengan Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Tangani format /#section atau #section
      const hashMatch = href.match(/(?:\/)?#([a-zA-Z0-9_-]+)/);
      if (hashMatch && hashMatch[1]) {
        const id = hashMatch[1];
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, {
            offset: -80,
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}

