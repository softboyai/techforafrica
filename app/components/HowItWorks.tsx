import { howItWorks, REGISTRATION_URL } from "@/app/content/copy";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-[#EFEDE8]"
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs tracking-widest uppercase text-[#1E4A5F] font-medium mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {howItWorks.eyebrow}
          </p>
          <h2
            id="hiw-heading"
            className="text-3xl lg:text-4xl font-bold text-[#22262B] leading-tight"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {howItWorks.headline}
          </h2>
        </div>

        {/* Steps */}
        <ol className="relative" role="list" aria-label="Programme steps">
          {/* Connecting vertical line */}
          <div
            className="absolute left-[1.85rem] top-8 bottom-8 w-px bg-[#1E4A5F]/15 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {howItWorks.steps.map((step, i) => {
              const isLast = i === howItWorks.steps.length - 1;
              return (
                <li
                  key={step.number}
                  className="relative flex gap-6 sm:gap-8 items-start"
                >
                  {/* Step number bubble */}
                  <div
                    className="relative z-10 flex-shrink-0 w-[3.75rem] h-[3.75rem] flex items-center justify-center border-2 border-[#22262B] bg-[#EFEDE8]"
                    style={{
                      boxShadow: "3px 3px 0 #22262B",
                    }}
                    aria-hidden="true"
                  >
                    <span
                      className="text-sm font-bold text-[#1E4A5F]"
                      style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pb-8 ${isLast ? "" : "border-b border-[#22262B]/8"}`}
                  >
                    <h3
                      className="text-lg font-semibold text-[#22262B] mb-2"
                      style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm text-[#22262B]/60 leading-relaxed max-w-xl"
                      style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </div>
        </ol>

        {/* Bottom CTA */}
        <div className="mt-14">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal"
          >
            Start with step one. Register now
          </a>
        </div>
      </div>
    </section>
  );
}
