"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { nav, REGISTRATION_URL } from "@/app/content/copy";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#EFEDE8]/95 backdrop-blur-md border-b border-[#22262B]/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Brand — real logo */}
          <a
            href="#"
            className="flex items-center focus-visible:outline-[#C97A3D] focus-visible:outline-offset-2"
            aria-label="TechBridge for Africa home"
          >
            <Image
              src="/images/logo4.png"
              alt="TechBridge 4 Africa's Future"
              width={180}
              height={54}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-7"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#22262B]/70 hover:text-[#1E4A5F] transition-colors duration-150 focus-visible:outline-[#C97A3D]"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal text-sm py-2 px-5"
            >
              {nav.cta}
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded text-[#22262B] focus-visible:outline-[#C97A3D]"
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t-2 border-[#22262B] bg-[#EFEDE8]"
        >
          <nav
            role="navigation"
            aria-label="Mobile navigation"
            className="flex flex-col px-5 py-5 gap-4"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base text-[#22262B] hover:text-[#1E4A5F] transition-colors py-1 focus-visible:outline-[#C97A3D]"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-brutal self-start mt-2"
            >
              {nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
