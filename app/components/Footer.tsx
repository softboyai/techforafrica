import Image from "next/image";
import { footer } from "@/app/content/copy";

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ backgroundColor: "#08233F" }}>
      {/* Top — multi-column */}
      <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "0" }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-10 lg:gap-16 pb-10"
          style={{ borderBottom: "0.5px solid rgba(255,255,255,0.1)" }}
        >
          {/* Brand */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ backgroundColor: "#FFFFFF", display: "inline-block", padding: "6px 10px", borderRadius: "6px", marginBottom: "16px" }}>
              <Image
                src="/images/logo4.png"
                alt="TechBridge 4 Africa's Future"
                width={140}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </div>
            {/* Colour bar */}
            <div style={{ display: "flex", gap: "2px", marginBottom: "16px", height: "2px", width: "80px" }} aria-hidden="true">
              <div style={{ flex: 1, backgroundColor: "#4CAF50" }} />
              <div style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />
              <div style={{ flex: "0 0 30%", backgroundColor: "#FBB934" }} />
            </div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>
              {footer.operatedBy}
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: "1.6" }}>
              {footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>
              Navigate
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.15s" }}
                    className="hover:text-white"
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal navigation">
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>
              Legal
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {footer.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.15s" }}
                    className="hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="rp-container">
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            {footer.copyright}
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", maxWidth: "400px", textAlign: "right", lineHeight: 1.5 }}>
            {footer.deliveryPartners}
          </p>
        </div>
      </div>
    </footer>
  );
}
