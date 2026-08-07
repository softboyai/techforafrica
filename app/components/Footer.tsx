import Image from "next/image";
import { footer } from "@/app/content/copy";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t-2 border-[#22262B] bg-[#22262B] text-[#EFEDE8]"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-10 lg:gap-16 mb-12">

          {/* Brand column */}
          <div className="max-w-xs">
            {/* Logo — inverted/light version on dark bg */}
            <div className="mb-4">
              <Image
                src="/images/logo4.png"
                alt="TechBridge 4 Africa's Future"
                width={180}
                height={54}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            {/* Logo colour bar echoing brand colours */}
            <div className="flex gap-0.5 mb-4 w-24" aria-hidden="true">
              <div className="h-0.5 flex-1 bg-[#4CAF50]" />
              <div className="h-0.5 flex-1 bg-[#EFEDE8]/60" />
              <div className="h-0.5 flex-[0.4] bg-[#F5A623]" />
            </div>
            <p
              className="text-[0.65rem] tracking-widest uppercase text-[#EFEDE8]/40 mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {footer.operatedBy}
            </p>
            <p
              className="text-sm text-[#EFEDE8]/50 leading-relaxed"
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
            >
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p
              className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-[#EFEDE8]/30 mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Navigate
            </p>
            <ul className="space-y-2.5" role="list">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#EFEDE8]/55 hover:text-[#EFEDE8] transition-colors duration-150 focus-visible:outline-[#C97A3D]"
                    style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal links */}
          <nav aria-label="Legal navigation">
            <p
              className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-[#EFEDE8]/30 mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Legal
            </p>
            <ul className="space-y-2.5" role="list">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#EFEDE8]/55 hover:text-[#EFEDE8] transition-colors duration-150 focus-visible:outline-[#C97A3D]"
                    style={{ fontFamily: "var(--font-hanken), sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#EFEDE8]/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-xs text-[#EFEDE8]/30"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {footer.copyright}
          </p>
          <p
            className="text-xs text-[#EFEDE8]/25 max-w-sm text-right"
            style={{ fontFamily: "var(--font-hanken), sans-serif" }}
          >
            {footer.deliveryPartners}
          </p>
        </div>
      </div>
    </footer>
  );
}
