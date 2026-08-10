import { about } from "@/app/content/copy";

export default function About() {
  return (
    <section id="about" className="section-navy" aria-labelledby="about-heading">
      <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div>
            <span className="eyebrow-tag eyebrow-tag-dark mb-4 block">{about.eyebrow}</span>
            <h2 id="about-heading" className="heading-display heading-display-white"
              style={{ fontSize: "clamp(26px,3.8vw,40px)", marginBottom: "28px" }}>
              {about.headline}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {about.body.map((para, i) => (
                <p key={i} style={{ fontSize: "15px", color: "rgba(255,255,255,0.68)", lineHeight: "1.7", fontFamily: "var(--font-body)" }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

            {/* Operator — orange accent */}
            <div style={{ backgroundColor: "#F88000", borderRadius: "8px", padding: "28px 24px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#002098", marginBottom: "8px", fontFamily: "var(--font-body)" }}>
                {about.operatorLabel}
              </p>
              <p style={{ fontSize: "20px", fontWeight: 500, color: "#002098", lineHeight: "1.2", marginBottom: "4px", fontFamily: "var(--font-body)" }}>
                {about.operatorName}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(26,35,126,0.70)", fontFamily: "var(--font-body)" }}>
                {about.operatorLocation}
              </p>
            </div>

            {/* Partners — subtle border */}
            <div style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "24px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "14px", fontFamily: "var(--font-body)" }}>
                {about.partnerLabel}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {about.partnerNames.map((name) => (
                  <li key={name} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-body)" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#60D030", flexShrink: 0 }} aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", borderTop: "0.5px solid rgba(255,255,255,0.10)", paddingTop: "12px", marginTop: "14px", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>
                Delivery partners only. Programme operated by Pathway to Salesforce, London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
