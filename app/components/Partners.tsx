import { MapPin } from "lucide-react";
import { partners } from "@/app/content/copy";

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-20 lg:py-28 border-t-2 border-[#22262B]/8 bg-[#EFEDE8]"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p
            className="text-xs tracking-widest uppercase text-[#1E4A5F] font-medium mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {partners.eyebrow}
          </p>
          <h2
            id="partners-heading"
            className="text-3xl lg:text-4xl font-bold text-[#22262B] leading-tight mb-4"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {partners.headline}
          </h2>
          <p
            className="text-base text-[#22262B]/60 leading-relaxed"
            style={{ fontFamily: "var(--font-hanken), sans-serif" }}
          >
            {partners.intro}
          </p>
        </div>

        {/* Partner cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {partners.items.map((partner) => (
            <div
              key={partner.name}
              className="p-6 border-2 border-[#22262B]/20 bg-[#EFEDE8] hover:border-[#1E4A5F]/40 transition-colors duration-150"
            >
              {/* Name + region */}
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3
                  className="text-base font-semibold text-[#22262B] leading-snug"
                  style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                  {partner.name}
                </h3>
                <span
                  className="flex items-center gap-1 text-[0.6rem] tracking-wide uppercase text-[#22262B]/35 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  <MapPin size={11} strokeWidth={1.5} aria-hidden="true" />
                  {partner.region}
                </span>
              </div>
              <p
                className="text-sm text-[#22262B]/55 leading-relaxed"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {partner.description}
              </p>

              {/* Delivery partner badge */}
              <p
                className="mt-4 text-[0.6rem] tracking-widest uppercase text-[#22262B]/30"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                Delivery partner
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-xs text-[#22262B]/40 border-l-2 border-[#22262B]/20 pl-4 max-w-2xl"
          style={{ fontFamily: "var(--font-hanken), sans-serif" }}
        >
          {partners.disclaimer}
        </p>
      </div>
    </section>
  );
}
