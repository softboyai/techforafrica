import { ArrowRight } from "lucide-react";
import { whoItsFor, REGISTRATION_URL } from "@/app/content/copy";

/* Mini SVG star-icons matching rwandapreneur card icons */
const StarIcon = ({ color = "#08233F" }: { color?: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <line x1="24" y1="4"  x2="24" y2="44" stroke={color} strokeWidth="1.5"/>
    <line x1="4"  y1="24" x2="44" y2="24" stroke={color} strokeWidth="1.5"/>
    <line x1="10" y1="10" x2="38" y2="38" stroke={color} strokeWidth="1.5"/>
    <line x1="38" y1="10" x2="10" y2="38" stroke={color} strokeWidth="1.5"/>
  </svg>
);

const ICON_COLORS = ["#08233F", "#FBB934", "#08233F", "#08233F"];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="section-cream" aria-labelledby="who-heading">
      <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div style={{ maxWidth: "620px" }}>
            <span className="eyebrow-tag mb-3 block" style={{ alignSelf: "flex-start", display: "inline-flex" }}>
              {whoItsFor.eyebrow}
            </span>
            <h2
              id="who-heading"
              className="heading-display"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              {whoItsFor.headline}
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(0,0,0,0.75)",
              lineHeight: "1.5",
              marginBottom: "5px",
              maxWidth: "440px",
            }}
          >
            {whoItsFor.intro}
          </p>
        </div>

        {/* Cards grid — 3 per row on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whoItsFor.profiles.map((profile, i) => (
            <div key={profile.title} className="service-card">
              {/* Top — white bg with icon and title */}
              <div className="service-card-top">
                <StarIcon color={ICON_COLORS[i % ICON_COLORS.length]} />
                <h3
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "1.2",
                  }}
                >
                  {profile.title}
                </h3>
              </div>
              {/* Body — description + button */}
              <div className="service-card-body">
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
                  {profile.description.split(". ").filter(Boolean).map((s, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2"
                      style={{ fontSize: "14px", color: "rgba(0,0,0,0.75)", marginBottom: "4px" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                        <path d="M2 7l3.5 3.5L12 3" stroke="#08233F" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {s.endsWith(".") ? s : s + "."}
                    </li>
                  ))}
                </ul>
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card"
                >
                  Register Now
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
