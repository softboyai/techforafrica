import { partners } from "@/app/content/copy";

function StarIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <line x1="22" y1="3"  x2="22" y2="41" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="3"  y1="22" x2="41" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="9"  y1="9"  x2="35" y2="35" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="35" y1="9"  x2="9"  y2="35" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const ICON_COLORS = ["#002098", "#F88000", "#96C0D8"];

export default function Partners() {
  return (
    <section id="partners" className="section-cream" aria-labelledby="partners-heading">
      <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div style={{ maxWidth: "580px" }}>
            <span className="eyebrow-tag mb-3 block">{partners.eyebrow}</span>
            <h2 id="partners-heading" className="heading-display heading-display-navy"
              style={{ fontSize: "clamp(28px,4vw,42px)" }}>
              {partners.headline}
            </h2>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.58)", lineHeight: "1.6", maxWidth: "360px", fontFamily: "var(--font-body)" }}>
            {partners.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {partners.items.map((partner, i) => (
            <div key={partner.name} className="service-card">
              <div className="service-card-top" style={{ minHeight: "160px" }}>
                <StarIcon color={ICON_COLORS[i % ICON_COLORS.length]} />
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 500, color: "#002098", lineHeight: "1.2" }}>
                  {partner.name}
                </h3>
              </div>
              <div className="service-card-body">
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,0,0,0.38)", fontFamily: "var(--font-body)" }}>
                  {partner.region}
                </p>
                <span style={{ alignSelf: "flex-start", display: "inline-flex", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: "rgba(150,192,216,0.22)", color: "#96C0D8", border: "0.5px solid rgba(150,192,216,0.45)", borderRadius: "4px", padding: "2px 8px", fontFamily: "var(--font-body)" }}>
                  Delivery partner
                </span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "13px", color: "rgba(0,0,0,0.42)", borderLeft: "3px solid #F88000", paddingLeft: "12px", maxWidth: "600px", lineHeight: "1.6", fontFamily: "var(--font-body)" }}>
          {partners.disclaimer}
        </p>
      </div>
    </section>
  );
}
