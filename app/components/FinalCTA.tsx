import { ArrowRight } from "lucide-react";
import { finalCta, REGISTRATION_URL } from "@/app/content/copy";

function StarburstIcon() {
  const spokes = 12;
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      {Array.from({ length: spokes }, (_, i) => {
        const deg = (i * 360) / spokes;
        return (
          <line
            key={deg}
            x1="26" y1="4" x2="26" y2="22"
            stroke="#F88000"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${deg} 26 26)`}
          />
        );
      })}
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section id="register" className="section-white" aria-labelledby="cta-heading">
      <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: headline */}
          <div>
            <span className="eyebrow-tag mb-4 block">{finalCta.eyebrow}</span>
            <h2 id="cta-heading" className="heading-display heading-display-navy"
              style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: "20px" }}>
              {finalCta.headline}
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.62)", lineHeight: "1.65", maxWidth: "400px", fontFamily: "var(--font-body)" }}>
              {finalCta.body}
            </p>
          </div>

          {/* Right: registration panel */}
          <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 24px rgba(26,35,126,0.10)" }}>
            {/* Navy header */}
            <div style={{ backgroundColor: "#002098", padding: "20px 24px", display: "flex", alignItems: "center", gap: "14px" }}>
              <StarburstIcon />
              <div style={{ width: "0.5px", height: "32px", backgroundColor: "rgba(255,255,255,0.25)" }} aria-hidden="true" />
              <p style={{ fontSize: "15px", fontWeight: 400, color: "#FFFFFF", lineHeight: "1.3", fontFamily: "var(--font-body)" }}>
                Register for the Programme
              </p>
            </div>
            {/* Cream body */}
            <div style={{ backgroundColor: "#F5F4F0", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.60)", lineHeight: "1.6", fontFamily: "var(--font-body)" }}>
                Complete the Google Form to register. It takes under five minutes. Places are limited.
              </p>
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                {finalCta.primaryCta}
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </a>
              <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.38)", textAlign: "center", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>
                Or{" "}
                <a href={finalCta.contactHref} style={{ color: "#002098", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                  contact us directly
                </a>
                {" "}with any questions.
              </p>
              <p style={{ fontSize: "11px", color: "rgba(0,0,0,0.30)", borderTop: "0.5px solid rgba(0,0,0,0.09)", paddingTop: "12px", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>
                {finalCta.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
