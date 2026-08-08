"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, REGISTRATION_URL } from "@/app/content/copy";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/98 backdrop-blur-sm shadow-sm border-b border-black/6"
          : "bg-white border-b border-black/6"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">

          {/* Logo */}
          <a
            href="#"
            aria-label="TechBridge for Africa home"
            className="flex items-center shrink-0 focus-visible:outline-[#4CAF50]"
          >
            <Image
              src="/images/logo4.png"
              alt="TechBridge 4 Africa's Future"
              width={160}
              height={48}
              className="h-10 lg:h-11 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374151] hover:text-[#011341] transition-colors duration-150 focus-visible:outline-[#4CAF50]"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5"
            >
              {nav.cta}
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-[#011341] focus-visible:outline-[#4CAF50] rounded"
          >
            {open
              ? <X size={22} strokeWidth={1.75} />
              : <Menu size={22} strokeWidth={1.75} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden bg-white border-t border-black/6"
        >
          <nav
            aria-label="Mobile navigation"
            className="section-container flex flex-col py-5 gap-1"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#374151] hover:text-[#011341] hover:bg-[#F7F9F6] px-3 py-2.5 rounded-md transition-colors focus-visible:outline-[#4CAF50]"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-black/6">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                {nav.cta}
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
