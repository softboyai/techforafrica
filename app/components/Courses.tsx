import { ArrowRight, CheckCircle } from "lucide-react";
import { courses, REGISTRATION_URL } from "@/app/content/copy";

const StarIcon = ({ color = "#08233F" }: { color?: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <line x1="24" y1="4"  x2="24" y2="44" stroke={color} strokeWidth="1.5"/>
    <line x1="4"  y1="24" x2="44" y2="24" stroke={color} strokeWidth="1.5"/>
    <line x1="10" y1="10" x2="38" y2="38" stroke={color} strokeWidth="1.5"/>
    <line x1="38" y1="10" x2="10" y2="38" stroke={color} strokeWidth="1.5"/>
  </svg>
);

export default function Courses() {
  return (
    <section id="courses" className="section-white" aria-labelledby="courses-heading">
      <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div style={{ maxWidth: "620px" }}>
            <span className="eyebrow-tag mb-3 block" style={{ display: "inline-flex" }}>
              {courses.eyebrow}
            </span>
            <h2
              id="courses-heading"
              className="heading-display"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              {courses.headline}
            </h2>
          </div>
        </div>

        {/* Two course cards side by side */}
        <div className="grid lg:grid-cols-2 gap-5">
          {courses.items.map((course) => {
            const isSalesforce = course.track === "salesforce";
            const iconColor = isSalesforce ? "#08233F" : "#FBB934";
            return (
              <div key={course.track} className="service-card">
                {/* Top panel */}
                <div className="service-card-top" style={{ minHeight: "clamp(100px, 35vh, 280px)" }}>
                  <StarIcon color={iconColor} />
                  <div>
                    <span
                      className="eyebrow-tag mb-2 block"
                      style={{ display: "inline-flex", fontSize: "12px" }}
                    >
                      {course.label}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "1.2",
                        color: "#08233F",
                      }}
                    >
                      {course.title}
                    </h3>
                  </div>
                </div>
                {/* Body */}
                <div className="service-card-body gap-4">
                  <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.75)", lineHeight: "1.5" }}>
                    {course.tagline}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 8px 0" }}>
                    {course.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2"
                        style={{ fontSize: "14px", color: "rgba(0,0,0,0.75)", marginBottom: "6px" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                          <path d="M2 7l3.5 3.5L12 3" stroke="#08233F" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(0,0,0,0.5)",
                      borderTop: "0.5px solid rgba(0,0,0,0.1)",
                      paddingTop: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>Format:</span> {course.format} &nbsp;·&nbsp;{" "}
                    <span style={{ fontWeight: 500 }}>Level:</span> {course.level}
                  </div>
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card"
                    aria-label={`Register for ${course.title} track`}
                  >
                    Register for this track
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
