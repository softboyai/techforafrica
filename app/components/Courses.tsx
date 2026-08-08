import { CheckCircle, MonitorPlay, BarChart2, ArrowRight } from "lucide-react";
import { courses, REGISTRATION_URL } from "@/app/content/copy";

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="courses-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase text-[#0F3D3A] mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {courses.eyebrow}
          </p>
          <h2
            id="courses-heading"
            className="text-3xl lg:text-4xl font-bold text-[#011341] leading-tight"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {courses.headline}
          </h2>
        </div>

        {/* Course cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.items.map((course) => {
            const isSalesforce = course.track === "salesforce";
            const accentBg  = isSalesforce ? "#011341" : "#0F3D3A";
            const accentTag = isSalesforce ? "#C8F8A9" : "#FBB934";
            const accentTagText = "#0F3D3A";

            return (
              <article
                key={course.track}
                className="rounded-2xl border border-black/8 overflow-hidden flex flex-col"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                aria-label={`${course.title} track`}
              >
                {/* Coloured header band */}
                <div
                  className="px-8 pt-8 pb-6"
                  style={{ backgroundColor: accentBg }}
                >
                  <p
                    className="inline-flex text-[0.6rem] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full mb-3"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      backgroundColor: accentTag,
                      color: accentTagText,
                    }}
                  >
                    {course.label}
                  </p>
                  <h3
                    className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                  >
                    {course.title}
                  </h3>
                  <p
                    className="text-sm text-white/70"
                    style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                  >
                    {course.tagline}
                  </p>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 px-8 py-7 bg-white">
                  <p
                    className="text-sm text-[#4B5563] leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                  >
                    {course.description}
                  </p>

                  {/* Outcomes */}
                  <p
                    className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#9CA3AF] mb-3"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    What you will build
                  </p>
                  <ul className="space-y-2 mb-7 flex-1" role="list">
                    {course.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm text-[#374151]"
                        style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                      >
                        <CheckCircle
                          size={15}
                          strokeWidth={2}
                          className="mt-0.5 shrink-0"
                          style={{ color: isSalesforce ? "#011341" : "#0F3D3A" }}
                          aria-hidden="true"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-3 mb-7 pt-5 border-t border-black/6">
                    {[
                      { icon: <MonitorPlay size={14} strokeWidth={1.75} aria-hidden="true" />, label: "Format", value: course.format },
                      { icon: <BarChart2 size={14} strokeWidth={1.75} aria-hidden="true" />, label: "Level", value: course.level },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-[#9CA3AF]">
                          {icon}
                          <span
                            className="text-[0.6rem] tracking-widest uppercase"
                            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                          >
                            {label}
                          </span>
                        </div>
                        <p
                          className="text-xs font-medium text-[#374151] leading-snug"
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
                    className="btn-primary self-start flex items-center gap-2"
                    style={
                      !isSalesforce
                        ? { backgroundColor: "#C8F8A9", color: "#0F3D3A" }
                        : {}
                    }
                    aria-label={`Register for ${course.title} track`}
                  >
                    Register for this track
                    <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
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
