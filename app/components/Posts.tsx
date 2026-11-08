import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { REGISTRATION_URL } from "@/app/content/copy";

const post = {
  category: "Featured",
  date: "2025",
  title: "Pathway to Salesforce — Powering TechBridge for Africa",
  excerpt:
    "Pathway to Salesforce, based in London UK, is the operator behind TechBridge for Africa. Through this partnership, learners across Rwanda and Africa gain access to internationally recognised Salesforce CRM and Applied AI certification training.",
  image: "/images/PATHWAY.jpeg",
  cta: "Register for the Programme",
};

export default function Posts() {
  return (
    <section
      id="posts"
      aria-labelledby="posts-heading"
      style={{ backgroundColor: "#FFFFFF", paddingTop: "60px", paddingBottom: "80px" }}
    >
      <div className="rp-container">

        {/* Header Section remains clean */}
        <div style={{ marginBottom: "48px" }}>
          <span className="eyebrow-tag" style={{ marginBottom: "14px", display: "inline-flex" }}>
            Our Story
          </span>
          <h2
            id="posts-heading"
            className="heading-display heading-display-navy"
            style={{ fontSize: "clamp(26px,3.8vw,40px)", maxWidth: "560px" }}
          >
            The programme behind the mission
          </h2>
        </div>

        {/* Modern stacked container displaying text above the flyer layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(0,32,152,0.10)",
            boxShadow: "0 8px 40px rgba(0,32,152,0.08)",
            backgroundColor: "#F5F4F0"
          }}
        >
          {/* Top Block: All contextual detail information */}
          <div
            style={{
              padding: "clamp(24px, 4vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "between", alignItems: "center" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F88000" }}>
                {post.date} &bull; {post.category}
              </p>
            </div>

            <h3 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(20px, 2.5vw, 28px)", color: "#002098", lineHeight: "1.25em", margin: 0 }}>
              {post.title}
            </h3>

            <div style={{ display: "flex", gap: "4px", height: "3px", width: "48px" }} aria-hidden="true">
              <div style={{ flex: 1, backgroundColor: "#60D030", borderRadius: "2px" }} />
              <div style={{ flex: 1, backgroundColor: "#002098", borderRadius: "2px" }} />
              <div style={{ width: "12px", backgroundColor: "#F88000", borderRadius: "2px" }} />
            </div>

            <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.62)", lineHeight: "1.7", margin: 0 }}>
              {post.excerpt}
            </p>

            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "8px" }}>
              {post.cta}
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          {/* Bottom Block: Flyer fully contained under the text elements */}
          <div style={{ position: "relative", width: "100%", height: "480px", backgroundColor: "#F9FAFB", borderTop: "1px solid rgba(0,32,152,0.05)" }}>
            <Image
              src={post.image}
              alt="Pathway to Salesforce"
              fill
              className="object-contain object-center p-4"
              sizes="100vw"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
