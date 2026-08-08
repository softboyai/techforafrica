import { ArrowRight } from "lucide-react";
import { finalCta, REGISTRATION_URL } from "@/app/content/copy";

/* Starburst SVG matching Rwandapreneur decorative icon */
const Starburst = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((deg) => (
      <line
        key={deg}
        x1="32" y1="4" x2="32" y2="60"
        stroke="#FBB934"
        strokeWidth="3"
        strokeLinecap="round"
        transform={`rotate(${deg} 32 32)`}
      />
    ))}
  </svg>
);

export default function FinalCTA() {
  return (
    <section id="register" className="section-white" aria-labelledby="cta-heading">
      <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        {/* Two-col layout: left copy, right contact form panel */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left: eyebrow + headline */}
          <div>
            <span className="eyebrow-tag mb-3 block" style={{ display: "inline-flex" }}>
              {finalCta.eyebrow}
            </span>
            <h2
              id="cta-heading"
              className="heading-display"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", marginBottom: "2rem" }}
            >
              {finalCta.headline}
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.65)", lineHeight: "1.6", maxWidth: "420px", marginBottom: "2rem" }}>
              {finalCta.body}
            </p>
          </div>

          {/* Right: Rwandapreneur-style panel — navy header + cream body */}
          <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 5px 10px rgba(0,0,0,0.08)" }}>
            {/* Navy header bar */}
            <div
              style={{
                backgroundColor: "#08233F",
                padding: "20px 25px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <Starburst />
              <div
                style={{
                  height: "32px",
                  width: "0.5px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
                aria-hidden="true"
              />
              <p style={{ fontSize: "16px", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.3 }}>
                Register for the Programme
              </p>
            </div>
            {/* Cream body */}
            <div style={{ backgroundColor: "#F7F2EF", padding: "30px 25px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.65)", lineHeight: "1.6" }}>
                Complete the Google Form to register. It takes under five minutes. Places are limited.
              </p>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
                style={{ textAlign: "center" }}
              >
                {finalCta.primaryCta}
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </a>
              <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.4)", textAlign: "center", lineHeight: 1.5 }}>
                Or{" "}
                <a
                  href={finalCta.contactHref}
                  style={{ color: "#08233F", textDecoration: "underline" }}
                >
                  contact us directly
                </a>{" "}
                if you have questions.
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(0,0,0,0.35)",
                  borderTop: "0.5px solid rgba(0,0,0,0.1)",
                  paddingTop: "12px",
                  lineHeight: 1.5,
                }}
              >
                {finalCta.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
