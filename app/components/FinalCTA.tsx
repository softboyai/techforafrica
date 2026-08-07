import { finalCta, REGISTRATION_URL } from "@/app/content/copy";

export default function FinalCTA() {
  return (
    <section
      id="register"
      className="py-24 lg:py-32 bg-[#EFEDE8]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Brutalist container */}
        <div
          className="relative p-10 lg:p-16 border-2 border-[#22262B] bg-[#1E4A5F]"
          style={{ boxShadow: "8px 8px 0 #22262B" }}
        >
          {/* Corner accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 border-l-2 border-b-2 border-[#C97A3D]/40"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-12 h-12 border-r-2 border-t-2 border-[#EFEDE8]/15"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <p
              className="text-[0.6rem] tracking-[0.25em] uppercase font-medium text-[#EFEDE8]/50 mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {finalCta.eyebrow}
            </p>
            <h2
              id="cta-heading"
              className="text-3xl lg:text-4xl font-bold text-[#EFEDE8] leading-tight mb-5"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {finalCta.headline}
            </h2>
            <p
              className="text-base text-[#EFEDE8]/65 leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
            >
              {finalCta.body}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal"
              >
                {finalCta.primaryCta}
              </a>
              <a
                href={finalCta.contactHref}
                className="text-sm text-[#EFEDE8]/60 hover:text-[#EFEDE8] transition-colors duration-150 underline underline-offset-4 focus-visible:outline-[#C97A3D]"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {finalCta.secondaryCta}
              </a>
            </div>

            <p
              className="mt-8 text-[0.65rem] text-[#EFEDE8]/35 tracking-wide"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {finalCta.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
