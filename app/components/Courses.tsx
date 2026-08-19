import { ArrowRight, CheckCircle, MonitorPlay, BarChart2 } from "lucide-react";
import { courses, REGISTRATION_URL } from "@/app/content/copy";

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

export default function Courses() {
  return (
    <section id="courses" className="section-white" aria-labelledby="courses-heading">
      <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div style={{ maxWidth: "580px" }}>
            <span className="eyebrow-tag mb-3 block">{courses.eyebrow}</span>
            <h2 id="courses-heading" className="heading-display heading-display-navy"
              style={{ fontSize: "clamp(28px,4vw,42px)" }}>
              {courses.headline}
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {courses.items.map((course) => {
            const isSalesforce = course.track === "salesforce";
            /* Salesforce uses navy; AI uses the light blue accent */
            const topBg    = isSalesforce ? "#002098" : "#96C0D8";
            const iconClr  = isSalesforce ? "#F88000" : "#FFFFFF";
            const tagBg    = isSalesforce ? "#F88000" : "#FFFFFF";
            const tagClr   = isSalesforce ? "#002098" : "#96C0D8";

            return (
              <article key={course.track} className="service-card" aria-label={`${course.title} track`}>
                {/* Coloured top panel */}
                <div style={{ backgroundColor: topBg, padding: "32px 24px 24px", display: "flex", flexDirection: "column", gap: "14px", minHeight: "200px", justifyContent: "space-between" }}>
                  <StarIcon color={iconClr} />
                  <div>
                    <span style={{ display: "inline-flex", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", backgroundColor: tagBg, color: tagClr, borderRadius: "4px", padding: "2px 8px", marginBottom: "8px", fontFamily: "var(--font-body)" }}>
                      {course.label}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-body)", fontSize: "22px", fontWeight: 500, color: "#FFFFFF", lineHeight: "1.2" }}>
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="service-card-body">
                  <p style={{ fontSize: "14px", color: "rgba(0,0,0,0.65)", lineHeight: "1.6", fontFamily: "var(--font-body)" }}>
                    {course.tagline}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                    {course.outcomes.map((o) => (
                      <li key={o} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "rgba(0,0,0,0.70)", fontFamily: "var(--font-body)" }}>
                        <CheckCircle size={14} strokeWidth={2} style={{ color: isSalesforce ? "#002098" : "#96C0D8", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                        {o}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", paddingTop: "14px", borderTop: "0.5px solid rgba(0,0,0,0.09)" }}>
                    {[
                      { Icon: MonitorPlay, label: "Format", value: course.format },
                      { Icon: BarChart2,  label: "Level",  value: course.level  },
                    ].map(({ Icon, label, value }) => (
                      <div key={label}>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: topBg, marginBottom: "3px" }}>
                          <Icon size={12} strokeWidth={1.75} aria-hidden="true" />
                          <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,0,0,0.40)", fontFamily: "var(--font-body)" }}>{label}</span>
                        </div>
                        <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.65)", lineHeight: "1.4", fontFamily: "var(--font-body)" }}>{value}</p>
                      </div>
                    ))}
                  </div>

                  <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer"
                    className="btn-card"
                    style={{ borderColor: topBg + "40", color: topBg }}
                    aria-label={`Register for ${course.title} track`}>
                    Register for this track
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
