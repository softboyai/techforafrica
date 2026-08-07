import Image from "next/image";
import BridgeLineArt from "./BridgeLineArt";
import { hero, REGISTRATION_URL } from "@/app/content/copy";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Background bridge line-art — behind everything */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <BridgeLineArt className="w-full max-w-5xl opacity-10 lg:opacity-15 pb-0" />
      </div>

      {/* Faint dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1E4A5F18 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Two-column layout: copy left, photo right */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow */}
            <p
              className="mb-5 text-xs tracking-widest uppercase text-[#1E4A5F] font-medium"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {hero.eyebrow}
            </p>

            {/* Badge */}
            <div className="inline-flex items-center mb-6">
              <span
                className="px-3 py-1 text-xs font-medium border-2 border-[#22262B] bg-[#C97A3D] text-[#EFEDE8]"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  boxShadow: "3px 3px 0 #22262B",
                }}
              >
                {hero.badge}
              </span>
            </div>

            {/* Logo in hero */}
            <div className="mb-6">
              <Image
                src="/images/logo4.png"
                alt="TechBridge 4 Africa's Future"
                width={320}
                height={96}
                className="h-16 lg:h-20 w-auto object-contain"
                priority
              />
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              className="text-base lg:text-lg text-[#22262B]/68 leading-relaxed mb-9 max-w-xl"
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
            >
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#courses"
                className="btn-brutal btn-brutal-ghost"
              >
                {hero.secondaryCta}
              </a>
            </div>

            {/* Trust line */}
            <p
              className="mt-8 text-xs text-[#22262B]/40 tracking-wide"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Operated by Pathway to Salesforce · London, UK · Delivered across Africa
            </p>
          </div>

          {/* ── Right: student photo ── */}
          <div className="relative hidden lg:block" aria-hidden="false">
            {/* Brutalist offset frame */}
            <div
              className="relative"
              style={{ filter: "drop-shadow(8px 8px 0 #22262B)" }}
            >
              {/* Coloured accent block behind the photo */}
              <div
                className="absolute -top-3 -left-3 w-full h-full border-2 border-[#1A237E]"
                aria-hidden="true"
                style={{ backgroundColor: "#4CAF5015" }}
              />
              {/* The photo itself */}
              <div className="relative border-2 border-[#22262B] overflow-hidden">
                <Image
                  src="/images/people image.png"
                  alt="TechBridge for Africa participants working on laptops"
                  width={480}
                  height={600}
                  className="w-full h-auto object-cover object-top"
                  priority
                />
                {/* Gradient overlay at bottom for legibility */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, #22262Baa, transparent)",
                  }}
                  aria-hidden="true"
                />
                {/* Caption badge over the photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p
                    className="text-[0.65rem] text-[#EFEDE8]/80 tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    TechBridge for Africa participants
                  </p>
                </div>
              </div>
            </div>

            {/* Logo colour accent strip */}
            <div className="flex mt-4 gap-1" aria-hidden="true">
              <div className="h-1 flex-1 bg-[#4CAF50]" />
              <div className="h-1 flex-1 bg-[#1A237E]" />
              <div className="h-1 flex-[0.4] bg-[#F5A623]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #EFEDE8)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
