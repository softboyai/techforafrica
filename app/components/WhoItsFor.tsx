import { Users, Briefcase, Monitor, Lightbulb } from "lucide-react";
import { whoItsFor } from "@/app/content/copy";

const ICONS = [
  <Users size={18} strokeWidth={1.5} aria-hidden="true" />,
  <Briefcase size={18} strokeWidth={1.5} aria-hidden="true" />,
  <Monitor size={18} strokeWidth={1.5} aria-hidden="true" />,
  <Lightbulb size={18} strokeWidth={1.5} aria-hidden="true" />,
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="py-24 lg:py-32 bg-[#EFEDE8]"
      aria-labelledby="who-heading"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs tracking-widest uppercase text-[#1E4A5F] font-medium mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {whoItsFor.eyebrow}
          </p>
          <h2
            id="who-heading"
            className="text-3xl lg:text-4xl font-bold text-[#22262B] leading-tight mb-5"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {whoItsFor.headline}
          </h2>
          <p
            className="text-base lg:text-lg text-[#22262B]/65 leading-relaxed"
            style={{ fontFamily: "var(--font-hanken), sans-serif" }}
          >
            {whoItsFor.intro}
          </p>
        </div>

        {/* Profile grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whoItsFor.profiles.map((profile, i) => (
            <div
              key={profile.title}
              className="group p-6 border-2 border-[#22262B] bg-[#EFEDE8] transition-all duration-150"
              style={{
                boxShadow: "4px 4px 0 #22262B",
              }}
            >
              <div className="flex items-center gap-2.5 mb-4 text-[#1E4A5F]">
                {ICONS[i]}
                <span
                  className="text-[0.65rem] font-medium tracking-widest uppercase text-[#22262B]/40"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="text-base font-semibold text-[#22262B] mb-2 leading-snug"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                {profile.title}
              </h3>
              <p
                className="text-sm text-[#22262B]/60 leading-relaxed"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className="mt-12 max-w-xl text-sm text-[#22262B]/50 border-l-2 border-[#1E4A5F] pl-4"
          style={{ fontFamily: "var(--font-hanken), sans-serif" }}
        >
          {whoItsFor.closing}
        </p>
      </div>
    </section>
  );
}
