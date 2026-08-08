"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, REGISTRATION_URL } from "@/app/content/copy";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handle = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <header
      role="banner"
      style={{ backgroundColor: "#08233F" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* ── Top bar ── */}
      <div className="rp-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            height: "64px",
            gap: "16px",
          }}
        >
          {/* Col 1: Logo */}
          <a
            href="#"
            aria-label="TechBridge for Africa home"
            style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <Image
              src="/images/logo4.png"
              alt="TechBridge 4 Africa's Future"
              width={140}
              height={42}
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
              priority
            />
          </a>

          {/* Col 2: Desktop nav links — centred, hidden on mobile */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "28px",
            }}
            className="hidden md:flex"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.80)",
                  textDecoration: "none",
                  fontFamily: "var(--font-body), sans-serif",
                  transition: "color 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Col 2 placeholder on mobile — empty so grid keeps logo left, toggle right */}
          <span className="md:hidden" aria-hidden="true" />

          {/* Col 3: Desktop CTA / Mobile hamburger */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            {/* Desktop CTA */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden md:inline-flex"
              style={{ padding: "10px 16px", fontSize: "13px", gap: "8px" }}
            >
              {nav.cta}
              <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
            </a>

            {/* Mobile toggle — ONLY shown on mobile */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden"
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile drawer — only mounts when open ── */}
      {open && (
        <div
          id="mobile-menu"
          style={{
            backgroundColor: "#08233F",
            borderTop: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <nav
            aria-label="Mobile navigation"
            className="rp-container"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "16px",
              paddingBottom: "20px",
              gap: "0",
            }}
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.80)",
                  textDecoration: "none",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "var(--font-body), sans-serif",
                  display: "block",
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile register CTA */}
            <div style={{ paddingTop: "16px" }}>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-gold"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {nav.cta}
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
