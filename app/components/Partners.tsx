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

        {/* Partner cards — name, region, badge only. No invented descriptions. */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {partners.items.map((partner) => (
            <div
              key={partner.name}
              className="p-6 border-2 border-[#22262B] bg-[#EFEDE8]"
              style={{ boxShadow: "4px 4px 0 #22262B" }}
            >
              <div className="flex items-center gap-1.5 mb-4 text-[#22262B]/40">
                <MapPin size={13} strokeWidth={1.5} aria-hidden="true" />
                <span
                  className="text-[0.6rem] tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {partner.region}
                </span>
              </div>

              <h3
                className="text-lg font-bold text-[#22262B] leading-snug mb-5"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                {partner.name}
              </h3>

              <p
                className="text-[0.6rem] tracking-widest uppercase text-[#22262B]/30"
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
