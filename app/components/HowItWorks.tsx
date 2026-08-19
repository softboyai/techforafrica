import { ArrowRight } from "lucide-react";
import { howItWorks, REGISTRATION_URL } from "@/app/content/copy";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-white" aria-labelledby="hiw-heading">
      <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div style={{ maxWidth: "580px" }}>
            <span className="eyebrow-tag mb-3 block">{howItWorks.eyebrow}</span>
            <h2 id="hiw-heading" className="heading-display heading-display-navy"
              style={{ fontSize: "clamp(28px,4vw,42px)" }}>
              {howItWorks.headline}
            </h2>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {howItWorks.steps.map((step, i) => {
            const isLast = i === howItWorks.steps.length - 1;
            /* Alternate accent colours: navy, light blue, orange */
            const accent = ["#002098", "#96C0D8", "#F88000", "#002098", "#96C0D8"][i];
            return (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  padding: "28px 0",
                  borderBottom: isLast ? "none" : "0.5px solid rgba(0,0,0,0.08)",
                }}
              >
                {/* Step bubble */}
                <div style={{ width: "48px", height: "48px", borderRadius: "8px", backgroundColor: accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 500, color: "#002098", marginBottom: "6px", lineHeight: "1.3" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.60)", lineHeight: "1.65", maxWidth: "560px", fontFamily: "var(--font-body)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "32px" }}>
          <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Register now. Start with step one.
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
