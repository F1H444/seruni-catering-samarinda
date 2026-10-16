"use client";

import { useEffect, useState } from "react";

/* ============================================================
   SCROLL PROGRESS — bar tipis di atas layar yang menunjukkan
   progres scrolling halaman (transform scaleX, hemat performa).
   ============================================================ */

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[80] h-1 bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-orange"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
