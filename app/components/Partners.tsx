import { MapPin } from "lucide-react";
import { partners } from "@/app/content/copy";

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-20 lg:py-28 bg-white border-t border-black/6"
      aria-labelledby="partners-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase text-[#0F3D3A] mb-3"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {partners.eyebrow}
          </p>
          <h2
            id="partners-heading"
            className="text-3xl lg:text-4xl font-bold text-[#011341] leading-tight mb-4"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {partners.headline}
          </h2>
          <p
            className="text-base text-[#4B5563] leading-relaxed"
            style={{ fontFamily: "var(--font-hanken), sans-serif" }}
          >
            {partners.intro}
          </p>
        </div>

        {/* Partner cards — name + region only, no invented descriptions */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {partners.items.map((partner) => (
            <div key={partner.name} className="card p-6">
              <div className="flex items-center gap-1.5 text-[#6B7280] mb-4">
                <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
                <span
                  className="text-[0.6rem] font-medium tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                >
                  {partner.region}
                </span>
              </div>
              <h3
                className="text-base font-bold text-[#011341] mb-4 leading-snug"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                {partner.name}
              </h3>
              <span
                className="inline-block text-[0.6rem] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#C8F8A9] text-[#0F3D3A]"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                Delivery partner
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-xs text-[#6B7280] border-l-2 border-[#4CAF50] pl-4 max-w-2xl"
          style={{ fontFamily: "var(--font-hanken), sans-serif" }}
        >
          {partners.disclaimer}
        </p>
      </div>
    </section>
  );
}
