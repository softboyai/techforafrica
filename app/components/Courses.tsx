import { CheckCircle, MonitorPlay, BarChart2 } from "lucide-react";
import BridgeLineArt from "./BridgeLineArt";
import { courses, REGISTRATION_URL } from "@/app/content/copy";

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="courses-heading"
    >
      {/* Faint bridge as section texture */}
      <div
        className="absolute bottom-0 right-0 w-[600px] pointer-events-none select-none opacity-[0.07]"
        aria-hidden="true"
      >
        <BridgeLineArt />
      </div>

      {/* Section background — slightly deeper than base */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(165deg, #1E4A5F0D 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs tracking-widest uppercase text-[#1E4A5F] font-medium mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {courses.eyebrow}
          </p>
          <h2
            id="courses-heading"
            className="text-3xl lg:text-4xl font-bold text-[#22262B] leading-tight"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {courses.headline}
          </h2>
        </div>

        {/* Course cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.items.map((course) => {
            const isSalesforce = course.track === "salesforce";
            const accentColor = isSalesforce ? "#1E4A5F" : "#2F6B63";

            return (
              <article
                key={course.track}
                className="glass-card relative flex flex-col p-8 lg:p-10"
                style={{
                  border: `2px solid ${accentColor}30`,
                  boxShadow: `6px 6px 0 ${accentColor}25`,
                }}
                aria-label={`${course.title} track`}
              >
                {/* Track label */}
                <p
                  className="text-[0.6rem] tracking-[0.2em] uppercase font-medium mb-3"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    color: accentColor,
                  }}
                >
                  {course.label}
                </p>

                {/* Title */}
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-2 leading-tight"
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    color: accentColor,
                  }}
                >
                  {course.title}
                </h3>

                {/* Tagline */}
                <p
                  className="text-sm font-medium text-[#22262B]/70 mb-5 leading-snug"
                  style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                >
                  {course.tagline}
                </p>

                {/* Divider */}
                <div
                  className="w-12 h-[2px] mb-5"
                  style={{ backgroundColor: accentColor }}
                />

                {/* Description */}
                <p
                  className="text-sm text-[#22262B]/65 leading-relaxed mb-7"
                  style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                >
                  {course.description}
                </p>

                {/* Outcomes */}
                <div className="mb-8 flex-1">
                  <p
                    className="text-[0.65rem] tracking-widest uppercase font-medium mb-3 text-[#22262B]/50"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    What you will build
                  </p>
                  <ul className="space-y-2.5" role="list">
                    {course.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm text-[#22262B]/70"
                        style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                      >
                        <CheckCircle
                          size={15}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0"
                          style={{ color: accentColor }}
                          aria-hidden="true"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta info */}
                <div className="grid grid-cols-2 gap-3 mb-8 pt-5 border-t border-[#22262B]/10">
                  {[
                    { icon: <MonitorPlay size={14} strokeWidth={1.5} aria-hidden="true" />, label: "Format", value: course.format },
                    { icon: <BarChart2 size={14} strokeWidth={1.5} aria-hidden="true" />, label: "Level", value: course.level },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <div
                        className="flex items-center gap-1 text-[#22262B]/40"
                        style={{ color: accentColor + "99" }}
                      >
                        {icon}
                        <span
                          className="text-[0.6rem] tracking-widest uppercase"
                          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", color: "#22262B99" }}
                        >
                          {label}
                        </span>
                      </div>
                      <p
                        className="text-xs font-medium text-[#22262B]/70 leading-snug"
                        style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal self-start"
                  style={
                    !isSalesforce
                      ? {
                          backgroundColor: "#2F6B63",
                        }
                      : {}
                  }
                  aria-label={`Apply for ${course.title} track`}
                >
                  Register for this track
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
