import { about } from "@/app/content/copy";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#002098" }} aria-labelledby="about-heading">
      <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        {/* ── Section header ── */}
        <div style={{ marginBottom: "56px" }}>
          <span className="eyebrow-tag eyebrow-tag-dark" style={{ marginBottom: "16px", display: "inline-flex" }}>
            {about.eyebrow}
          </span>
          <h2
            id="about-heading"
            className="heading-display heading-display-white"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", maxWidth: "640px" }}
          >
            {about.headline}
          </h2>
        </div>

        {/* ── Main grid: left content, right cards ── */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">

          {/* ── Left: programme content ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            {/* About program */}
            <div>
              <p
                style={{
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "#F88000",
                  marginBottom: "12px", fontFamily: "var(--font-body)",
                }}
              >
                {about.programLabel}
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: "1.75", fontFamily: "var(--font-body)" }}>
                {about.program}
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: "0.5px", backgroundColor: "rgba(255,255,255,0.12)" }} aria-hidden="true" />

            {/* Mission + Vision side by side on desktop */}
            <div className="grid sm:grid-cols-2 gap-8">

              {/* Mission */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "28px", height: "3px", backgroundColor: "#96C0D8", borderRadius: "2px" }} aria-hidden="true" />
                  <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#96C0D8", fontFamily: "var(--font-body)" }}>
                    {about.mission.label}
                  </p>
                </div>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.72)", lineHeight: "1.75", fontFamily: "var(--font-body)" }}>
                  {about.mission.text}
                </p>
              </div>

              {/* Vision */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "28px", height: "3px", backgroundColor: "#F88000", borderRadius: "2px" }} aria-hidden="true" />
                  <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F88000", fontFamily: "var(--font-body)" }}>
                    {about.vision.label}
                  </p>
                </div>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.72)", lineHeight: "1.75", fontFamily: "var(--font-body)" }}>
                  {about.vision.text}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "0.5px", backgroundColor: "rgba(255,255,255,0.12)" }} aria-hidden="true" />

            {/* Objectives */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <div style={{ width: "28px", height: "3px", backgroundColor: "#96C0D8", borderRadius: "2px" }} aria-hidden="true" />
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#96C0D8", fontFamily: "var(--font-body)" }}>
                  {about.objectives.label}
                </p>
              </div>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {about.objectives.items.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontFamily: "var(--font-body)" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: "24px", height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(150,192,216,0.15)",
                        border: "1px solid rgba(150,192,216,0.35)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "11px", fontWeight: 700,
                        color: "#96C0D8",
                        marginTop: "1px",
                      }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.72)", lineHeight: "1.65" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Solution */}
            <div
              style={{
                backgroundColor: "rgba(248,128,0,0.12)",
                border: "1px solid rgba(248,128,0,0.25)",
                borderRadius: "8px",
                padding: "20px 22px",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div style={{ width: "3px", borderRadius: "2px", backgroundColor: "#F88000", alignSelf: "stretch", flexShrink: 0 }} aria-hidden="true" />
              <div>
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F88000", marginBottom: "8px", fontFamily: "var(--font-body)" }}>
                  {about.solution.label}
                </p>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.82)", lineHeight: "1.65", fontFamily: "var(--font-body)", fontStyle: "italic" }}>
                  {about.solution.text}
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: operator + partners ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", position: "sticky", top: "80px" }}>

            {/* Operator — orange */}
            <div style={{ backgroundColor: "#F88000", borderRadius: "8px", padding: "26px 22px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#002098", marginBottom: "8px", fontFamily: "var(--font-body)" }}>
                {about.operatorLabel}
              </p>
              <p style={{ fontSize: "19px", fontWeight: 600, color: "#002098", lineHeight: "1.2", marginBottom: "4px", fontFamily: "var(--font-body)" }}>
                {about.operatorName}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(0,32,152,0.70)", fontFamily: "var(--font-body)" }}>
                {about.operatorLocation}
              </p>
            </div>

            {/* Partners */}
            <div style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "22px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "14px", fontFamily: "var(--font-body)" }}>
                {about.partnerLabel}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {about.partnerNames.map((name) => (
                  <li key={name} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-body)" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#96C0D8", flexShrink: 0 }} aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", borderTop: "0.5px solid rgba(255,255,255,0.10)", paddingTop: "12px", marginTop: "14px", lineHeight: "1.55", fontFamily: "var(--font-body)" }}>
                Delivery partners only. Programme operated by Pathway to Salesforce, London.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
