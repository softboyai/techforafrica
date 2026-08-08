import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { footer, REGISTRATION_URL } from "@/app/content/copy";

export default function Footer() {
  return (
    <>
      {/* ── Pre-footer CTA strip (cream bg with gold horizontal lines) ── */}
      <section
        aria-label="Newsletter / CTA strip"
        style={{ backgroundColor: "#F7F2EF", position: "relative", overflow: "hidden" }}
      >
        {/* Gold horizontal lines decoration — like Rwandapreneur */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            overflow: "hidden",
          }}
        >
          {[0, 10, 20, 30, 40, 50, 60, 70].map((top) => (
            <div
              key={top}
              style={{
                position: "absolute",
                top: `${top}px`,
                left: 0,
                right: 0,
                height: "2px",
                backgroundColor: "#FBB934",
                opacity: 0.15 + top * 0.01,
              }}
            />
          ))}
        </div>

        <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "100px", position: "relative", zIndex: 1 }}>
          <h2
            className="heading-display"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              textAlign: "center",
              maxWidth: "640px",
              margin: "0 auto 32px",
              lineHeight: "1.15em",
            }}
          >
            Ready to start your tech career?
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "15px", padding: "14px 24px" }}
            >
              Register for the Programme
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              href="mailto:info@pathwaytosalesforce.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                color: "rgba(0,0,0,0.65)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                fontFamily: "var(--font-body)",
                padding: "14px 0",
              }}
            >
              Have a question? Contact us
            </a>
          </div>

          <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(0,0,0,0.35)", marginTop: "20px", fontFamily: "var(--font-body)" }}>
            Operated by Pathway to Salesforce, London, UK.
          </p>
        </div>
      </section>

      {/* ── Main footer ── */}
      <footer role="contentinfo" style={{ backgroundColor: "#08233F" }}>
        <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "0" }}>

          {/* Top grid: 4 columns on desktop */}
          <div
            style={{
              display: "grid",
              gap: "40px",
              paddingBottom: "48px",
              borderBottom: "0.5px solid rgba(255,255,255,0.10)",
            }}
            className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >

            {/* Brand */}
            <div style={{ gridColumn: "1 / -1" }} className="lg:col-span-1 lg:col-auto">
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    display: "inline-block",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    marginBottom: "14px",
                  }}
                >
                  <Image
                    src="/images/logo4.png"
                    alt="TechBridge 4 Africa's Future"
                    width={130}
                    height={40}
                    style={{ height: "32px", width: "auto", objectFit: "contain", display: "block" }}
                  />
                </div>
                {/* Colour bar */}
                <div style={{ display: "flex", gap: "2px", height: "2px", width: "64px", marginBottom: "14px" }} aria-hidden="true">
                  <div style={{ flex: 1, backgroundColor: "#4CAF50" }} />
                  <div style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.25)" }} />
                  <div style={{ width: "16px", backgroundColor: "#FBB934" }} />
                </div>
              </div>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "10px", lineHeight: 1.5 }}>
                {footer.operatedBy}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", maxWidth: "240px" }}>
                {footer.tagline}
              </p>
            </div>

            {/* Navigate */}
            <nav aria-label="Footer navigation">
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "18px" }}>
                Navigate
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {footer.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: "14px", color: "rgba(255,255,255,0.60)", textDecoration: "none", fontFamily: "var(--font-body)" }}
                      className="footer-link"
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
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "18px" }}>
                Legal
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {footer.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: "14px", color: "rgba(255,255,255,0.60)", textDecoration: "none", fontFamily: "var(--font-body)" }}
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "18px" }}>
                Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a
                  href="mailto:info@pathwaytosalesforce.com"
                  style={{ display: "flex", alignItems: "flex-start", gap: "10px", textDecoration: "none" }}
                >
                  <Mail size={15} strokeWidth={1.5} style={{ color: "#FBB934", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>
                    info@pathwaytosalesforce.com
                  </span>
                </a>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <MapPin size={15} strokeWidth={1.5} style={{ color: "#FBB934", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>
                    Pathway to Salesforce<br />London, United Kingdom
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              paddingTop: "20px",
              paddingBottom: "24px",
            }}
            className="sm:flex-row sm:items-center sm:justify-between"
          >
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-body)" }}>
              {footer.copyright}
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.20)", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>
              {footer.deliveryPartners}
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
