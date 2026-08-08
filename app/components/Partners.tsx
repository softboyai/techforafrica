import { partners } from "@/app/content/copy";

const StarIcon = ({ color = "#08233F" }: { color?: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <line x1="24" y1="4"  x2="24" y2="44" stroke={color} strokeWidth="1.5"/>
    <line x1="4"  y1="24" x2="44" y2="24" stroke={color} strokeWidth="1.5"/>
    <line x1="10" y1="10" x2="38" y2="38" stroke={color} strokeWidth="1.5"/>
    <line x1="38" y1="10" x2="10" y2="38" stroke={color} strokeWidth="1.5"/>
  </svg>
);

export default function Partners() {
  return (
    <section id="partners" className="section-cream" aria-labelledby="partners-heading">
      <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div style={{ maxWidth: "620px" }}>
            <span className="eyebrow-tag mb-3 block" style={{ display: "inline-flex" }}>
              {partners.eyebrow}
            </span>
            <h2
              id="partners-heading"
              className="heading-display"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              {partners.headline}
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(0,0,0,0.75)",
              lineHeight: "1.5",
              maxWidth: "440px",
            }}
          >
            {partners.intro}
          </p>
        </div>

        {/* 3-column partner cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {partners.items.map((partner, i) => (
            <div key={partner.name} className="service-card">
              <div className="service-card-top" style={{ minHeight: "160px" }}>
                <StarIcon color={i === 1 ? "#FBB934" : "#08233F"} />
                <h3
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {partner.name}
                </h3>
              </div>
              <div className="service-card-body">
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.4)",
                    marginBottom: "4px",
                  }}
                >
                  {partner.region}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    backgroundColor: "#F7F2EF",
                    color: "rgba(0,0,0,0.5)",
                    border: "0.5px solid rgba(0,0,0,0.15)",
                    borderRadius: "4px",
                    padding: "2px 8px",
                    marginTop: "8px",
                  }}
                >
                  Delivery partner
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            fontSize: "13px",
            color: "rgba(0,0,0,0.45)",
            borderLeft: "2px solid rgba(0,0,0,0.15)",
            paddingLeft: "12px",
            maxWidth: "600px",
            lineHeight: "1.5",
          }}
        >
          {partners.disclaimer}
        </p>
      </div>
    </section>
  );
}
