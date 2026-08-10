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
      style={{ backgroundColor: "#002098", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <div className="rp-container">
        <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="#" aria-label="TechBridge for Africa home" style={{ flexShrink: 0, lineHeight: 0 }}>
            <Image
              src="/images/logo4.png"
              alt="TechBridge 4 Africa's Future"
              width={150}
              height={46}
              style={{ height: "38px", width: "auto", objectFit: "contain", display: "block" }}
              priority
            />
          </a>

          {/* Desktop nav links */}
          <nav aria-label="Main navigation" className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F88000")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.78)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA — orange button, navy text */}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: "10px 18px", fontSize: "13px" }}
          >
            {nav.cta}
            <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
          </a>

          {/* Mobile hamburger — only on mobile */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
            style={{ background: "none", border: "none", color: "#F88000", cursor: "pointer", padding: "8px", lineHeight: 0 }}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" style={{ backgroundColor: "#002098", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div className="rp-container" style={{ paddingTop: "12px", paddingBottom: "20px" }}>
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.82)",
                  textDecoration: "none",
                  padding: "13px 0",
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
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
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
