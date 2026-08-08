import Image from "next/image";
import { footer } from "@/app/content/copy";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#011341] text-white">
      <div className="section-container py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-10 lg:gap-16 mb-12">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4 inline-block bg-white rounded-lg px-3 py-2">
              <Image
                src="/images/logo4.png"
                alt="TechBridge 4 Africa's Future"
                width={150}
                height={44}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex gap-0.5 mb-4 w-20 h-0.5 rounded-full overflow-hidden" aria-hidden="true">
              <div className="flex-1 bg-[#4CAF50]" />
              <div className="flex-1 bg-white/30" />
              <div className="flex-[0.4] bg-[#FBB934]" />
            </div>
            <p
              className="text-[0.6rem] font-semibold tracking-widest uppercase text-white/40 mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {footer.operatedBy}
            </p>
            <p
              className="text-sm text-white/50 leading-relaxed"
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
            >
              {footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p
              className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/30 mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Navigate
            </p>
            <ul className="space-y-2.5" role="list">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors focus-visible:outline-[#4CAF50]"
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

          {/* Legal */}
          <nav aria-label="Legal navigation">
            <p
              className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/30 mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Legal
            </p>
            <ul className="space-y-2.5" role="list">
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors focus-visible:outline-[#4CAF50]"
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
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
          >
            {footer.copyright}
          </p>
          <p
            className="text-xs text-white/25 max-w-sm sm:text-right"
            style={{ fontFamily: "var(--font-hanken), sans-serif" }}
          >
            {footer.deliveryPartners}
          </p>
        </div>
      </div>
    </footer>
  );
}
