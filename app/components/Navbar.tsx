"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Beranda", href: "/#beranda", id: "beranda" },
  { label: "Tentang", href: "/#tentang", id: "tentang" },
  { label: "Menu", href: "/#menu", id: "menu" },
  { label: "Testimoni", href: "/#testimoni", id: "testimoni" },
  { label: "Galeri", href: "/#galeri", id: "galeri" },
  { label: "Kontak", href: "/#kontak", id: "kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-4 lg:px-6">
        <nav
          className={`flex w-full max-w-7xl items-center justify-between gap-2 sm:gap-4 rounded-full border px-3.5 py-2 shadow-lg transition-all duration-500 sm:px-5 sm:py-2.5 md:px-5 lg:px-8 xl:px-10 ${
            scrolled
              ? "border-orange/30 bg-orange/95 backdrop-blur-xl shadow-[0_20px_80px_-30px_rgba(242,140,32,0.9)]"
              : "border-orange/25 bg-orange/90 backdrop-blur-md shadow-[0_30px_120px_-40px_rgba(242,140,32,0.95)]"
          }`}
          aria-label="Navigasi utama"
        >
          <Link href="/" className="flex items-center shrink-0" aria-label="Seruni Catering Samarinda">
            <Image
              src="/logo.jpeg"
              alt="Seruni Catering Samarinda"
              width={119}
              height={40}
              priority
              className="h-10 sm:h-11 md:h-12 w-auto rounded-full"
            />
          </Link>

          {/* Desktop & Tablet Navigation */}
          <div className="hidden items-center gap-0.5 md:flex lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 py-1.5 text-xs font-medium transition-colors md:text-xs lg:px-3.5 lg:py-2 lg:text-sm xl:px-4 ${
                    isActive
                      ? "text-white font-semibold underline underline-offset-4 decoration-2"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="https://wa.me/6281345010033"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-orange shadow-sm transition-all hover:bg-white active:scale-[0.98] md:flex lg:px-5 lg:py-2.5 lg:text-sm"
          >
            Pesan Sekarang
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[90] flex flex-col transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-warm-gray-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-x-3 sm:inset-x-4 top-4 max-h-[calc(100vh-2rem)] overflow-y-auto flex flex-col rounded-[2rem] border border-white/15 bg-orange p-5 sm:p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src="/logo.jpeg"
                alt="Seruni Catering Samarinda"
                width={107}
                height={36}
                loading="eager"
                className="h-10 sm:h-11 w-auto rounded-full"
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
              aria-label="Tutup menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="mt-5 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-white/20 text-white font-semibold"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/6281345010033"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-orange shadow-md transition-all hover:bg-white/95 active:scale-[0.98]"
          >
            Pesan Sekarang via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
