import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero, REGISTRATION_URL } from "@/app/content/copy";

export default function Hero() {
  return (
    <section
      className="relative pt-[70px] overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Subtle gradient background matching rwandapreneur hero tone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 50%, #FFFBEB 100%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[88vh] py-16 lg:py-24">

          {/* Left: copy */}
          <div>
            {/* Eyebrow */}
            <p
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0F3D3A] bg-[#C8F8A9] px-3 py-1.5 rounded-full mb-6"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {hero.badge}
            </p>

            {/* Logo in hero (large) */}
            <div className="mb-7">
              <Image
                src="/images/logo4.png"
                alt="TechBridge 4 Africa's Future"
                width={340}
                height={100}
                className="h-16 lg:h-[4.5rem] w-auto object-contain"
                priority
              />
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#011341] leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg text-[#4B5563] leading-relaxed mb-9 max-w-xl"
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
            >
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                {hero.primaryCta}
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href="#courses"
                className="btn-outline"
              >
                {hero.secondaryCta}
              </a>
            </div>

            {/* Trust line */}
            <p
              className="text-xs text-[#9CA3AF] tracking-wide"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {hero.eyebrow} &nbsp;·&nbsp; Delivered across Africa
            </p>
          </div>

          {/* Right: student photo */}
          <div className="relative w-full">
            {/* Decorative corner shapes like rwandapreneur */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-40 pointer-events-none"
              style={{ background: "radial-gradient(circle, #FBB934 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, #4CAF50 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Photo container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/6">
              <Image
                src="/images/people image.png"
                alt="TechBridge for Africa participants working on laptops"
                width={560}
                height={680}
                className="w-full h-auto object-cover object-top"
                priority
              />
              {/* Bottom overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20"
                style={{ background: "linear-gradient(to top, rgba(1,19,65,0.7), transparent)" }}
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-5">
                <p
                  className="text-[0.6rem] text-white/80 tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  TechBridge for Africa participants
                </p>
              </div>
            </div>

            {/* Logo colour bar */}
            <div className="flex mt-3 gap-1 rounded-full overflow-hidden h-1" aria-hidden="true">
              <div className="flex-1 bg-[#4CAF50]" />
              <div className="flex-1 bg-[#011341]" />
              <div className="flex-[0.4] bg-[#FBB934]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
