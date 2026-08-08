import { ArrowRight } from "lucide-react";
import { finalCta, REGISTRATION_URL } from "@/app/content/copy";

export default function FinalCTA() {
  return (
    <section id="register" className="py-24 lg:py-32 bg-[#F7F9F6]" aria-labelledby="cta-heading">
      <div className="section-container">
        <div
          className="relative rounded-3xl overflow-hidden px-10 lg:px-16 py-14 lg:py-20"
          style={{ backgroundColor: "#011341" }}
        >
          {/* Gold accent glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #FBB934, transparent)" }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #4CAF50, transparent)" }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <p
              className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-[#C8F8A9] mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {finalCta.eyebrow}
            </p>
            <h2
              id="cta-heading"
              className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {finalCta.headline}
            </h2>
            <p
              className="text-base text-white/65 leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
            >
              {finalCta.body}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-dark flex items-center gap-2"
              >
                {finalCta.primaryCta}
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href={finalCta.contactHref}
                className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4 focus-visible:outline-[#4CAF50]"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {finalCta.secondaryCta}
              </a>
            </div>
            <p
              className="mt-8 text-[0.65rem] text-white/30 tracking-wide"
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
