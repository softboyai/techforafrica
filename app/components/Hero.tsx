import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero, REGISTRATION_URL } from "@/app/content/copy";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        backgroundColor: "#08233F",
        paddingTop: "64px",        /* exact nav height */
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="rp-container"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >

        {/* ─── Two-column grid on desktop, single column on mobile ─── */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr",   /* mobile: 1 col */
            gridTemplateRows: "auto auto",
            alignItems: "end",
          }}
          className="md:grid-cols-hero"  /* overridden below via inline on md */
        >

          {/* ── Copy — left on desktop, top on mobile ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              paddingTop: "clamp(40px, 8vh, 100px)",
              paddingBottom: "clamp(40px, 6vh, 64px)",
            }}
          >
            {/* Eyebrow pill */}
            <span
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.75)",
                borderRadius: "4px",
                padding: "3px 10px",
                fontFamily: "var(--font-body)",
              }}
            >
              {hero.eyebrow}
            </span>

            {/* Logo */}
            <Image
              src="/images/logo4.png"
              alt="TechBridge 4 Africa's Future"
              width={280}
              height={84}
              style={{ height: "clamp(44px, 5.5vw, 68px)", width: "auto", objectFit: "contain" }}
              priority
            />

            {/* Headline */}
            <h1
              className="heading-display heading-display-white"
              style={{ fontSize: "clamp(28px, 4.5vw, 54px)", lineHeight: "1.1em", maxWidth: "560px" }}
            >
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6", maxWidth: "480px" }}>
              {hero.subheadline}
            </p>

            {/* Badge */}
            <span
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                backgroundColor: "#FBB934",
                color: "#08233F",
                borderRadius: "4px",
                padding: "3px 10px",
              }}
            >
              {hero.badge}
            </span>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
                {hero.primaryCta}
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </a>
              <a href="#courses" className="btn-ghost-gold">
                {hero.secondaryCta}
              </a>
            </div>

            {/* Trust note */}
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.30)", letterSpacing: "0.05em" }}>
              Operated by Pathway to Salesforce · London, UK
            </p>
          </div>

          {/* ── Photo — below copy on mobile, right side on desktop ── */}
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "8px 8px 0 0",
              overflow: "hidden",
              /* mobile: fixed aspect */
              aspectRatio: "4 / 3",
              alignSelf: "end",
            }}
            className="md:self-end"
          >
            <Image
              src="/images/people image.png"
              alt="TechBridge for Africa participants working on laptops"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 45vw, 100vw"
              priority
            />
            {/* Bottom fade */}
            <div
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
                background: "linear-gradient(to top, #08233F, transparent)",
              }}
              aria-hidden="true"
            />
            <p
              style={{
                position: "absolute", bottom: "10px", left: "14px",
                fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)",
              }}
            >
              TechBridge for Africa participants
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
