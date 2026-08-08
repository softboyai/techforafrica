import { ArrowRight } from "lucide-react";
import { howItWorks, REGISTRATION_URL } from "@/app/content/copy";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="hiw-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase text-[#0F3D3A] mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {howItWorks.eyebrow}
          </p>
          <h2
            id="hiw-heading"
            className="text-3xl lg:text-4xl font-bold text-[#011341] leading-tight"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {howItWorks.headline}
          </h2>
        </div>

        {/* Steps */}
        <ol className="relative" role="list" aria-label="Programme steps">
          <div
            className="absolute left-[1.75rem] top-8 bottom-8 w-px bg-[#E5E7EB] hidden sm:block"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {howItWorks.steps.map((step, i) => (
              <li key={step.number} className="relative flex gap-6 sm:gap-8 items-start">
                {/* Number */}
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-[#011341]"
                  aria-hidden="true"
                >
                  <span
                    className="text-sm font-bold text-[#C8F8A9]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div className={`flex-1 pb-8 ${i < howItWorks.steps.length - 1 ? "border-b border-black/6" : ""}`}>
                  <h3
                    className="text-lg font-semibold text-[#011341] mb-2"
                    style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm text-[#6B7280] leading-relaxed max-w-xl"
                    style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>

        <div className="mt-12">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 w-fit"
          >
            Start with step one. Register now
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
