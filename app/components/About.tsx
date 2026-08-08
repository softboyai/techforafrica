import { about } from "@/app/content/copy";

export default function About() {
  return (
    <section id="about" className="section-navy" aria-labelledby="about-heading">
      <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="eyebrow-tag eyebrow-tag-navy mb-4 block" style={{ display: "inline-flex" }}>
              {about.eyebrow}
            </span>
            <h2
              id="about-heading"
              className="heading-display heading-display-white"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: "2rem" }}
            >
              {about.headline}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {about.body.map((para, i) => (
                <p
                  key={i}
                  style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: operator + partners */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Operator card — gold accent */}
            <div
              style={{
                backgroundColor: "#FBB934",
                borderRadius: "8px",
                padding: "30px 25px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#08233F",
                  marginBottom: "8px",
                }}
              >
                {about.operatorLabel}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#08233F",
                  lineHeight: 1.2,
                  marginBottom: "4px",
                  fontFamily: "var(--font-body)",
                }}
              >
                {about.operatorName}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(8,35,63,0.7)" }}>
                {about.operatorLocation}
              </p>
            </div>

            {/* Partners card */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                borderRadius: "8px",
                padding: "25px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "12px",
                }}
              >
                {about.partnerLabel}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {about.partnerNames.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5"
                    style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)" }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#FBB934",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    {name}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  borderTop: "0.5px solid rgba(255,255,255,0.1)",
                  paddingTop: "12px",
                  marginTop: "16px",
                  lineHeight: "1.5",
                }}
              >
                Delivery partners only. Programme operated by Pathway to Salesforce, London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
