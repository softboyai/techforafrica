import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { footer, REGISTRATION_URL } from "@/app/content/copy";

export default function Footer() {
  return (
    <>
      {/* ── Pre-footer CTA strip ── */}
      <section aria-label="Register CTA" style={{ backgroundColor: "#F5F4F0", position: "relative", overflow: "hidden" }}>
        {/* Orange decorative lines */}
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "90px", pointerEvents: "none" }}>
          {[0, 12, 24, 36, 48, 60, 72, 84].map((top) => (
            <div key={top} style={{ position: "absolute", top: `${top}px`, left: 0, right: 0, height: "2px", backgroundColor: "#F88000", opacity: 0.10 + top * 0.008 }} />
          ))}
        </div>
        <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "110px", position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 className="heading-display heading-display-navy" style={{ fontSize: "clamp(24px,4vw,44px)", lineHeight: "1.15em", maxWidth: "560px", margin: "0 auto 28px" }}>
            Ready to start your tech career?
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "15px", padding: "14px 28px" }}>
              Register for the Programme
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href={footer.contact.emailHref} style={{ display: "inline-flex", alignItems: "center", fontSize: "14px", color: "rgba(0,0,0,0.58)", textDecoration: "underline", textUnderlineOffset: "3px", fontFamily: "var(--font-body)", padding: "14px 0" }}>
              Have a question? Contact us
            </a>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.32)", marginTop: "18px", fontFamily: "var(--font-body)" }}>
            Operated by Pathway to Salesforce, London, UK &nbsp;·&nbsp; Delivered across Africa
          </p>
        </div>
      </section>

      {/* ── Main footer — navy #002098 ── */}
      <footer role="contentinfo" style={{ backgroundColor: "#002098" }}>
        <div className="rp-container" style={{ paddingTop: "56px", paddingBottom: "0" }}>

          <div style={{ display: "grid", gap: "40px", paddingBottom: "48px", borderBottom: "0.5px solid rgba(255,255,255,0.12)" }}
            className="sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div>
              <div style={{ backgroundColor: "#FFFFFF", display: "inline-block", padding: "6px 10px", borderRadius: "6px", marginBottom: "16px" }}>
                <Image src="/images/logo4.png" alt="TechBridge 4 Africa's Future" width={130} height={40}
                  style={{ height: "30px", width: "auto", objectFit: "contain", display: "block" }} />
              </div>
              {/* Logo colour bar */}
              <div style={{ display: "flex", gap: "2px", height: "3px", width: "64px", marginBottom: "16px", borderRadius: "2px", overflow: "hidden" }} aria-hidden="true">
                <div style={{ flex: 1, backgroundColor: "#60D030" }} />
                <div style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.25)" }} />
                <div style={{ width: "16px", backgroundColor: "#F88000" }} />
              </div>
              <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)", marginBottom: "10px", lineHeight: "1.6", fontFamily: "var(--font-body)" }}>
                {footer.operatedBy}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.65", maxWidth: "230px", fontFamily: "var(--font-body)" }}>
                {footer.tagline}
              </p>
            </div>

            {/* Navigate */}
            <nav aria-label="Footer navigation">
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "18px", fontFamily: "var(--font-body)" }}>Navigate</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {footer.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link"
                      style={{ fontSize: "14px", color: "rgba(255,255,255,0.58)", textDecoration: "none", fontFamily: "var(--font-body)" }}
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal */}
            <nav aria-label="Legal navigation">
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "18px", fontFamily: "var(--font-body)" }}>Legal</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {footer.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link"
                      style={{ fontSize: "14px", color: "rgba(255,255,255,0.58)", textDecoration: "none", fontFamily: "var(--font-body)" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact — Kigali, Rwanda */}
            <div>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "18px", fontFamily: "var(--font-body)" }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a href={footer.contact.emailHref} style={{ display: "flex", alignItems: "flex-start", gap: "10px", textDecoration: "none" }}>
                  <Mail size={14} strokeWidth={1.5} style={{ color: "#F88000", flexShrink: 0, marginTop: "1px" }} aria-hidden="true" />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5", fontFamily: "var(--font-body)", wordBreak: "break-all" }}>
                    {footer.contact.email}
                  </span>
                </a>
                <a href={footer.contact.phoneHref} style={{ display: "flex", alignItems: "flex-start", gap: "10px", textDecoration: "none" }}>
                  <Phone size={14} strokeWidth={1.5} style={{ color: "#60D030", flexShrink: 0, marginTop: "1px" }} aria-hidden="true" />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>
                    {footer.contact.phone}
                  </span>
                </a>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <MapPin size={14} strokeWidth={1.5} style={{ color: "#F88000", flexShrink: 0, marginTop: "1px" }} aria-hidden="true" />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>
                    {footer.contact.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "18px", paddingBottom: "22px" }}
            className="sm:flex-row sm:items-center sm:justify-between">
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.22)", fontFamily: "var(--font-body)" }}>{footer.copyright}</p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.18)", lineHeight: "1.5", fontFamily: "var(--font-body)" }}>{footer.deliveryPartners}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
