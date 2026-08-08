import { about } from "@/app/content/copy";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#F7F9F6]"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-20 items-start">

          {/* Left: copy */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase text-[#0F3D3A] mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {about.eyebrow}
            </p>
            <h2
              id="about-heading"
              className="text-3xl lg:text-4xl font-bold text-[#011341] leading-tight mb-8"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {about.headline}
            </h2>
            <div className="space-y-4">
              {about.body.map((para, i) => (
                <p
                  key={i}
                  className="text-base text-[#4B5563] leading-relaxed"
                  style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: operator + partner cards */}
          <div className="space-y-5 lg:sticky lg:top-24">

            {/* Operator */}
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: "#011341" }}
            >
              <p
                className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/50 mb-2"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {about.operatorLabel}
              </p>
              <p
                className="text-lg font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                {about.operatorName}
              </p>
              <p
                className="text-xs text-white/55"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {about.operatorLocation}
              </p>
            </div>

            {/* Partners */}
            <div className="card p-6">
              <p
                className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#9CA3AF] mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {about.partnerLabel}
              </p>
              <ul className="space-y-2.5" role="list">
                {about.partnerNames.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 text-sm font-medium text-[#111827]"
                    style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0 bg-[#4CAF50]"
                      aria-hidden="true"
                    />
                    {name}
                  </li>
                ))}
              </ul>
              <p
                className="mt-4 text-xs text-[#6B7280] border-t border-black/6 pt-3 leading-relaxed"
                style={{ fontFamily: "var(--font-hanken), sans-serif" }}
              >
                Delivery partners only. Programme operated by Pathway to Salesforce, London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
