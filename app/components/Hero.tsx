import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero, REGISTRATION_URL } from "@/app/content/copy";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        backgroundColor: "#08233F",
        minHeight: "100svh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        paddingTop: "64px",   /* nav height */
      }}
    >
      {/* ─────────────────────────────────────────────────────────────────
          DESKTOP: two-pane layout
          Left pane  — copy pinned to the bottom-left (like the screenshot)
          Right pane — student photo filling the right half, flush to edges
      ───────────────────────────────────────────────────────────────────── */}
      <div
        className="hidden md:flex"
        style={{ flex: 1, position: "relative" }}
      >
        {/* Left: copy — takes 55%, content sits at the bottom */}
        <div
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",   /* pin to bottom like screenshot */
            paddingLeft: "clamp(24px, 4vw, 80px)",
            paddingBottom: "clamp(48px, 7vh, 80px)",
            paddingRight: "32px",
            gap: "20px",
          }}
        >
          {/* Eyebrow */}
          <span
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.08em",
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
            width={300}
            height={90}
            style={{ height: "clamp(50px, 5.5vw, 72px)", width: "auto", objectFit: "contain" }}
            priority
          />

          {/* Headline — large serif, two lines, second line gold */}
          <h1
            className="heading-display heading-display-white"
            style={{ fontSize: "clamp(36px, 4.8vw, 58px)", lineHeight: "1.08em", maxWidth: "580px" }}
          >
            Build a tech career<br />
            <span style={{ color: "#FBB934" }}>that crosses borders.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: "1.6",
              maxWidth: "480px",
            }}
          >
            {hero.subheadline}
          </p>

          {/* CTA */}
          <div style={{ marginTop: "8px" }}>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "15px", padding: "14px 24px" }}
            >
              {hero.primaryCta}
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right: photo — fills the right 45%, flush top/bottom/right */}
        <div
          style={{
            width: "45%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/people image.png"
            alt="TechBridge for Africa participants working on laptops"
            fill
            className="object-cover object-center"
            sizes="45vw"
            priority
          />
          {/* Left-edge fade so photo blends into navy */}
          <div
            style={{
              position: "absolute",
              top: 0, bottom: 0, left: 0,
              width: "120px",
              background: "linear-gradient(to right, #08233F, transparent)",
            }}
            aria-hidden="true"
          />
          {/* Bottom-edge fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "80px",
              background: "linear-gradient(to top, #08233F, transparent)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          MOBILE: stacked — copy top, photo below
      ───────────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:hidden" style={{ flex: 1 }}>
        {/* Copy */}
        <div
          className="rp-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            paddingTop: "36px",
            paddingBottom: "32px",
          }}
        >
          <span
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.75)",
              borderRadius: "4px",
              padding: "3px 10px",
              fontFamily: "var(--font-body)",
            }}
          >
            {hero.eyebrow}
          </span>

          <Image
            src="/images/logo4.png"
            alt="TechBridge 4 Africa's Future"
            width={240}
            height={72}
            style={{ height: "48px", width: "auto", objectFit: "contain" }}
            priority
          />

          <h1
            className="heading-display heading-display-white"
            style={{ fontSize: "clamp(28px, 8vw, 40px)", lineHeight: "1.1em" }}
          >
            Build a tech career{" "}
            <span style={{ color: "#FBB934" }}>that crosses borders.</span>
          </h1>

          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.6" }}>
            {hero.subheadline}
          </p>

          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ alignSelf: "flex-start" }}
          >
            {hero.primaryCta}
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        {/* Photo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/people image.png"
            alt="TechBridge for Africa participants working on laptops"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div
            style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "60px",
              background: "linear-gradient(to bottom, #08233F, transparent)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
