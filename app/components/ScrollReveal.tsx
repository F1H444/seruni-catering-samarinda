"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

/* ============================================================
   SCROLL REVEAL WRAPPER
   Uses IntersectionObserver for reliable viewport detection
   and CSS transitions for the animation. No GSAP dependency
   for scroll detection — works in all rendering contexts
   including Next.js App Router.

   Variants: up | down | left | right | fade | blur | zoom
   ============================================================ */

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "blur" | "zoom";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  /* Hidden-state style per variant */
  const hiddenStyles: Record<string, CSSProperties> = {
    up: { transform: "translateY(40px)" },
    down: { transform: "translateY(-40px)" },
    left: { transform: "translateX(40px)" },
    right: { transform: "translateX(-40px)" },
    fade: {},
    blur: { transform: "scale(0.98)", filter: "blur(8px)" },
    zoom: { transform: "scale(0.92)" },
  };

  const hiddenStyle = hiddenStyles[direction] ?? hiddenStyles.up;

  const visibleStyle: CSSProperties =
    direction === "blur" ? { filter: "blur(0px)" } : {};

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? (visibleStyle.transform ?? "none")
      : hiddenStyle.transform,
    filter: isVisible
      ? (visibleStyle.filter ?? "none")
      : (hiddenStyle.filter ?? "none"),
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
