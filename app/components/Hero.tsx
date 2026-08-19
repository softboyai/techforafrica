import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero, REGISTRATION_URL } from "@/app/content/copy";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{ backgroundColor: "#002098", paddingTop: "56px", minHeight: "100svh", display: "flex", flexDirection: "column" }}
    >
      {/* ── DESKTOP: side-by-side, copy bottom-left, photo right ── */}
      <div className="hidden md:flex hero-grid" style={{ flex: 1 }}>

        {/* Left copy — pinned to bottom */}
        <div
          className="hero-copy rp-container"
          style={{ paddingLeft: "clamp(24px,4vw,80px)", paddingBottom: "clamp(48px,7vh,80px)", paddingRight: "40px", gap: "20px" }}
        >
          <span className="eyebrow-tag eyebrow-tag-dark" style={{ alignSelf: "flex-start" }}>
            {hero.eyebrow}
          </span>

          <h1
            className="heading-display heading-display-white"
            style={{ fontSize: "clamp(36px,4.8vw,58px)", lineHeight: "1.1em", maxWidth: "560px" }}
          >
            Build a tech career<br />
            <span style={{ color: "#F88000" }}>that crosses borders.</span>
          </h1>

          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.68)", lineHeight: "1.6", maxWidth: "460px" }}>
            {hero.subheadline}
          </p>

          {/* Application status badge */}
          <span
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              backgroundColor: "#96C0D8",
              color: "#FFFFFF",
              borderRadius: "4px",
              padding: "3px 10px",
              fontFamily: "var(--font-body)",
            }}
          >
            {hero.badge}
          </span>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "15px", padding: "14px 26px" }}>
              {hero.primaryCta}
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="#courses" className="btn-ghost">
              {hero.secondaryCta}
            </a>
          </div>

          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.30)", letterSpacing: "0.05em", fontFamily: "var(--font-body)" }}>
            Operated by Pathway to Salesforce · London, UK
          </p>
        </div>

        {/* Right photo */}
        <div className="hero-photo">
          <Image
            src="/images/people image.png"
            alt="TechBridge for Africa participants working on laptops"
            fill
            className="object-cover object-center"
            sizes="45vw"
            priority
          />
          {/* Left fade into navy */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "120px", background: "linear-gradient(to right, #002098, transparent)" }} aria-hidden="true" />
          {/* Bottom fade */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to top, #002098, transparent)" }} aria-hidden="true" />
          {/* Accent bar at bottom-left */}
          <div
            style={{ position: "absolute", bottom: "20px", left: "24px", display: "flex", gap: "4px" }}
            aria-hidden="true"
          >
            <div style={{ width: "24px", height: "3px", backgroundColor: "#96C0D8", borderRadius: "2px" }} />
            <div style={{ width: "24px", height: "3px", backgroundColor: "#F88000", borderRadius: "2px" }} />
            <div style={{ width: "12px", height: "3px", backgroundColor: "rgba(255,255,255,0.4)", borderRadius: "2px" }} />
          </div>
        </div>
      </div>

      {/* ── MOBILE: stacked — copy then photo ── */}
      <div className="flex flex-col md:hidden" style={{ flex: 1 }}>
        <div className="rp-container" style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "18px", paddingBottom: "32px" }}>
          <span className="eyebrow-tag eyebrow-tag-dark" style={{ alignSelf: "flex-start" }}>
            {hero.eyebrow}
          </span>
          <h1 className="heading-display heading-display-white" style={{ fontSize: "clamp(28px,8vw,40px)", lineHeight: "1.1em" }}>
            Build a tech career{" "}
            <span style={{ color: "#F88000" }}>that crosses borders.</span>
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6" }}>
            {hero.subheadline}
          </p>
          <span style={{ alignSelf: "flex-start", display: "inline-flex", fontSize: "11px", fontWeight: 700, backgroundColor: "#96C0D8", color: "#002098", borderRadius: "4px", padding: "3px 10px", fontFamily: "var(--font-body)" }}>
            {hero.badge}
          </span>
          <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ alignSelf: "flex-start" }}>
            {hero.primaryCta}
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
          <Image src="/images/people image.png" alt="TechBridge for Africa participants" fill className="object-cover object-top" sizes="100vw" priority />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50px", background: "linear-gradient(to bottom, #002098, transparent)" }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
