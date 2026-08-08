import { GraduationCap, Briefcase, Monitor, Lightbulb } from "lucide-react";
import { whoItsFor } from "@/app/content/copy";

const ICONS = [
  GraduationCap,
  Briefcase,
  Monitor,
  Lightbulb,
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="py-24 lg:py-32 bg-[#F7F9F6]"
      aria-labelledby="who-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase text-[#0F3D3A] mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {whoItsFor.eyebrow}
          </p>
          <h2
            id="who-heading"
            className="text-3xl lg:text-4xl font-bold text-[#011341] leading-tight mb-4"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {whoItsFor.headline}
          </h2>
          <p
            className="text-base text-[#4B5563] leading-relaxed"
            style={{ fontFamily: "var(--font-hanken), sans-serif" }}
          >
            {whoItsFor.intro}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whoItsFor.profiles.map((profile, i) => {
            const Icon = ICONS[i];
            return (
              <div key={profile.title} className="card p-6">
                <div className="w-10 h-10 bg-[#C8F8A9] rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={1.75} className="text-[#0F3D3A]" aria-hidden="true" />
                </div>
                <p
                  className="text-[0.65rem] font-semibold tracking-widest uppercase text-[#9CA3AF] mb-2"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="text-base font-semibold text-[#011341] mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                  {profile.title}
                </h3>
                <p
                  className="text-sm text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                >
                  {profile.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <p
          className="mt-10 text-sm text-[#6B7280] border-l-2 border-[#4CAF50] pl-4 max-w-xl"
          style={{ fontFamily: "var(--font-hanken), sans-serif" }}
        >
          {whoItsFor.closing}
        </p>
      </div>
    </section>
  );
}
