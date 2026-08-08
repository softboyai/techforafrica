import { ArrowRight } from "lucide-react";
import { howItWorks, REGISTRATION_URL } from "@/app/content/copy";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-white" aria-labelledby="hiw-heading">
      <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div style={{ maxWidth: "620px" }}>
            <span className="eyebrow-tag mb-3 block" style={{ display: "inline-flex" }}>
              {howItWorks.eyebrow}
            </span>
            <h2
              id="hiw-heading"
              className="heading-display"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              {howItWorks.headline}
            </h2>
          </div>
        </div>

        {/* Steps — left border line, number + content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {howItWorks.steps.map((step, i) => {
            const isLast = i === howItWorks.steps.length - 1;
            return (
              <div
                key={step.number}
                className="flex gap-6 sm:gap-8"
                style={{
                  paddingLeft: "3%",
                  paddingRight: "3%",
                  paddingTop: "1%",
                  paddingBottom: "1%",
                  borderLeft: "0.5px solid rgba(0,0,0,0.15)",
                  marginBottom: "40px",
                  transition: "border-color 0.2s",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: "#08233F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#FBB934",
                      fontFamily: "var(--font-body)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "#000000",
                      marginBottom: "8px",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.65)",
                      lineHeight: 1.6,
                      maxWidth: "520px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex items-center gap-3 w-fit"
          style={{ marginTop: "8px" }}
        >
          Register now. Start with step one.
          <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
