"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, REGISTRATION_URL } from "@/app/content/copy";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      role="banner"
      style={{ backgroundColor: "#08233F", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      {/* ── Single top bar ── */}
      <div className="rp-container">
        <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo — always left */}
          <a href="#" aria-label="TechBridge for Africa home" style={{ flexShrink: 0, lineHeight: 0 }}>
            <Image
              src="/images/logo4.png"
              alt="TechBridge 4 Africa's Future"
              width={140}
              height={42}
              style={{ height: "36px", width: "auto", objectFit: "contain", display: "block" }}
              priority
            />
          </a>

          {/* Desktop: nav links centred + CTA right — hidden on mobile */}
          <nav aria-label="Main navigation" className="hidden md:flex" style={{ alignItems: "center", gap: "28px" }}>
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.80)", textDecoration: "none", whiteSpace: "nowrap", transition: "color 0.15s", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.80)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA — hidden on mobile */}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden md:inline-flex"
            style={{ padding: "10px 18px", fontSize: "13px" }}
          >
            {nav.cta}
            <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
          </a>

          {/* Mobile: single hamburger — hidden on desktop */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "8px", lineHeight: 0 }}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" style={{ backgroundColor: "#08233F", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div className="rp-container" style={{ paddingTop: "12px", paddingBottom: "20px" }}>
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ paddingTop: "16px" }}>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-gold"
                style={{ display: "flex", width: "100%", justifyContent: "center" }}
              >
                {nav.cta}
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
