import { ArrowRight } from "lucide-react";
import { whoItsFor, REGISTRATION_URL } from "@/app/content/copy";

const ICON_COLORS = ["#002098", "#60D030", "#002098", "#F88000"];

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

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="section-cream" aria-labelledby="who-heading">
      <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div style={{ maxWidth: "580px" }}>
            <span className="eyebrow-tag mb-3 block">{whoItsFor.eyebrow}</span>
            <h2 id="who-heading" className="heading-display heading-display-navy"
              style={{ fontSize: "clamp(28px,4vw,42px)" }}>
              {whoItsFor.headline}
            </h2>
          </div>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.60)", lineHeight: "1.6", maxWidth: "380px", fontFamily: "var(--font-body)" }}>
            {whoItsFor.intro}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whoItsFor.profiles.map((profile, i) => (
            <div key={profile.title} className="service-card">
              <div className="service-card-top">
                <StarIcon color={ICON_COLORS[i % ICON_COLORS.length]} />
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "18px", fontWeight: 500, lineHeight: "1.25", color: "#002098" }}>
                  {profile.title}
                </h3>
              </div>
              <div className="service-card-body">
                <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.62)", lineHeight: "1.6", fontFamily: "var(--font-body)" }}>
                  {profile.description}
                </p>
                <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-card">
                  Register Now
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: "40px", fontSize: "14px", color: "rgba(0,0,0,0.50)", borderLeft: "3px solid #60D030", paddingLeft: "14px", lineHeight: "1.6", maxWidth: "480px", fontFamily: "var(--font-body)" }}>
          {whoItsFor.closing}
        </p>
      </div>
    </section>
  );
}
