import BridgeLineArt from "./BridgeLineArt";
import { testimonials } from "@/app/content/copy";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background: faint bridge line-art as texture behind glass cards */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(160deg, #1E4A5F0A 0%, #2F6B630A 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.06]"
        aria-hidden="true"
      >
        <BridgeLineArt className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-5">
          <p
            className="text-xs tracking-widest uppercase text-[#1E4A5F] font-medium mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {testimonials.eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl lg:text-4xl font-bold text-[#22262B] leading-tight"
            style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          >
            {testimonials.headline}
          </h2>
        </div>

        {/* Placeholder note */}
        <p
          className="text-xs text-[#22262B]/40 mb-12 border-l-2 border-[#C97A3D]/50 pl-3"
          style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
        >
          {testimonials.note}
        </p>

        {/* Cards — frosted glass over the bridge texture */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((item, i) => (
            <figure
              key={i}
              className="glass-card flex flex-col p-7"
              aria-label={`Testimonial from ${item.name}`}
            >
              {/* Track badge */}
              <p
                className="text-[0.58rem] tracking-[0.18em] uppercase font-medium mb-4"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  color: item.track === "Salesforce CRM" ? "#1E4A5F" : "#2F6B63",
                }}
              >
                {item.track}
              </p>

              {/* Quote mark */}
              <span
                className="text-3xl leading-none mb-3 text-[#1E4A5F]/25 select-none"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote
                className="text-sm text-[#22262B]/70 leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                {item.quote}
              </blockquote>

              {/* Attribution */}
              <figcaption className="border-t border-[#22262B]/10 pt-4">
                <p
                  className="text-sm font-semibold text-[#22262B]"
                  style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
                >
                  {item.name}
                </p>
                <p
                  className="text-xs text-[#22262B]/50 mt-0.5"
                  style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                >
                  {item.role} &middot; {item.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
