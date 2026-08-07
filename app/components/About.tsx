import { about } from "@/app/content/copy";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-[#EFEDE8]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-20 items-start">

          {/* Left: main copy */}
          <div>
            <p
              className="text-xs tracking-widest uppercase text-[#1E4A5F] font-medium mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {about.eyebrow}
            </p>
            <h2
              id="about-heading"
              className="text-3xl lg:text-4xl font-bold text-[#22262B] leading-tight mb-8"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {about.headline}
            </h2>
            <div className="space-y-5">
              {about.body.map((para, i) => (
                <p
                  key={i}
                  className="text-base text-[#22262B]/65 leading-relaxed"
                  style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: operator / partner info cards */}
          <div className="space-y-5 lg:sticky lg:top-24">

            {/* Operator card */}
            <div
              className="p-6 border-2 border-[#1E4A5F] bg-[#1E4A5F]"
              style={{ boxShadow: "5px 5px 0 #22262B" }}
            >
              <p
                className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-[#EFEDE8]/60 mb-2"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {about.operatorLabel}
              </p>
              <p
                className="text-lg font-bold text-[#EFEDE8] leading-tight mb-1"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                {about.operatorName}
              </p>
              <p
                className="text-xs text-[#EFEDE8]/60"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {about.operatorLocation}
              </p>
            </div>

            {/* Delivery partners card */}
            <div
              className="p-6 border-2 border-[#22262B] bg-[#EFEDE8]"
              style={{ boxShadow: "5px 5px 0 #22262B" }}
            >
              <p
                className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-[#22262B]/50 mb-3"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                {about.partnerLabel}
              </p>
              <ul className="space-y-2" role="list">
                {about.partnerNames.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 text-sm font-medium text-[#22262B]"
                    style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#1E4A5F]"
                      aria-hidden="true"
                    />
                    {name}
                  </li>
                ))}
              </ul>
              <p
                className="mt-4 text-xs text-[#22262B]/40 leading-relaxed border-t border-[#22262B]/10 pt-3"
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
