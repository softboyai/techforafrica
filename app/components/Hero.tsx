import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero, REGISTRATION_URL } from "@/app/content/copy";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{ backgroundColor: "#08233F", paddingTop: "64px" }}
      className="relative overflow-hidden min-h-screen md:min-h-[calc(100vh-0px)]"
    >
      {/* ────────────────────────────────────────────────────
          SHARED inner layout — stacks on mobile, side-by-side on desktop
      ──────────────────────────────────────────────────── */}
      <div className="rp-container w-full">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            alignItems: "stretch",
          }}
        >
          {/* ── Copy block ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              paddingTop: "clamp(36px, 6vh, 80px)",
              paddingBottom: "clamp(32px, 4vh, 48px)",
            }}
          >
            {/* Eyebrow */}
            <span
              className="eyebrow-tag"
              style={{
                alignSelf: "flex-start",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.75)",
                borderColor: "transparent",
              }}
            >
              {hero.eyebrow}
            </span>

            {/* Logo — visible on all sizes */}
            <Image
              src="/images/logo4.png"
              alt="TechBridge 4 Africa's Future"
              width={260}
              height={78}
              className="object-contain"
              style={{ height: "clamp(44px, 6vw, 64px)", width: "auto" }}
              priority
            />

            {/* Headline */}
            <h1
              className="heading-display heading-display-white"
              style={{ fontSize: "clamp(30px, 6vw, 56px)", lineHeight: "1.08em" }}
            >
              {hero.headline.split(" ").slice(0, 5).join(" ")}{" "}
              <span style={{ color: "#FBB934" }}>
                {hero.headline.split(" ").slice(5).join(" ")}
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "rgba(255,255,255,0.65)",
                lineHeight: "1.55",
                maxWidth: "520px",
              }}
            >
              {hero.subheadline}
            </p>

            {/* Badge */}
            <span
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                backgroundColor: "#FBB934",
                color: "#08233F",
                borderRadius: "4px",
                padding: "3px 10px",
              }}
            >
              {hero.badge}
            </span>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                {hero.primaryCta}
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </a>
              <a href="#courses" className="btn-ghost-gold">
                {hero.secondaryCta}
              </a>
            </div>

            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.05em",
                marginTop: "4px",
              }}
            >
              Operated by Pathway to Salesforce · London, UK
            </p>
          </div>

          {/* ── Student photo — full width on mobile, right column on desktop ── */}
          <div
            className="relative w-full md:hidden"
            style={{
              height: "clamp(260px, 60vw, 380px)",
              borderRadius: "8px 8px 0 0",
              overflow: "hidden",
              marginTop: "0",
            }}
          >
            <Image
              src="/images/people image.png"
              alt="TechBridge for Africa participants working together"
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
            <div
              style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "80px",
                background: "linear-gradient(to top, #08233F, transparent)",
              }}
              aria-hidden="true"
            />
            <p
              style={{
                position: "absolute",
                bottom: "10px",
                left: "14px",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-body)",
              }}
            >
              TechBridge for Africa participants
            </p>
          </div>
        </div>
      </div>

      {/* ── Desktop photo: sits absolutely on the right side ── */}
      <div
        className="hidden md:block absolute bottom-0 right-0 overflow-hidden"
        style={{
          width: "38%",
          borderRadius: "8px 8px 0 0",
          boxShadow: "0 0 60px rgba(0,0,0,0.4)",
        }}
        aria-hidden="false"
      >
        <Image
          src="/images/people image.png"
          alt="TechBridge for Africa participants working together"
          width={560}
          height={680}
          className="w-full h-auto object-cover object-top"
          priority
        />
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "80px",
            background: "linear-gradient(to top, #08233F, transparent)",
          }}
          aria-hidden="true"
        />
        <p
          style={{
            position: "absolute",
            bottom: "10px",
            left: "14px",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            fontFamily: "var(--font-body)",
          }}
        >
          TechBridge for Africa participants
        </p>
      </div>
    </section>
  );
}
