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
      style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="rp-container">

        {/* Header */}
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

        {/* Modern post card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(0,32,152,0.10)",
            boxShadow: "0 8px 40px rgba(0,32,152,0.08)",
          }}
          className="md:grid-cols-2"
        >
          {/* Left — image contained cleanly */}
          <div style={{ position: "relative", minHeight: "360px", backgroundColor: "#F9FAFB" }}>
            <Image
              src={post.image}
              alt="Pathway to Salesforce — TechBridge for Africa"
              fill
              className="object-contain object-center p-4"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
            {/* Category pill on image */}
            <span
              style={{
                position: "absolute", top: "20px", left: "20px",
                display: "inline-flex",
                fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                backgroundColor: "#F88000", color: "#FFFFFF",
                borderRadius: "4px", padding: "3px 10px",
                fontFamily: "var(--font-body)",
                zIndex: 10,
              }}
            >
              {post.category}
            </span>
          </div>

          {/* Right — content */}
          <div
            style={{
              backgroundColor: "#F5F4F0",
              padding: "clamp(32px, 5vw, 56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Date */}
              <p
                style={{
                  fontSize: "11px", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#F88000",
                  fontFamily: "var(--font-body)",
                }}
              >
                {post.date}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 400,
                  color: "#002098",
                  lineHeight: "1.25em",
                }}
              >
                {post.title}
              </h3>

              {/* Divider */}
              <div
                style={{ display: "flex", gap: "4px", height: "3px", width: "48px" }}
                aria-hidden="true"
              >
                <div style={{ flex: 1, backgroundColor: "#60D030", borderRadius: "2px" }} />
                <div style={{ flex: 1, backgroundColor: "#002098", borderRadius: "2px" }} />
                <div style={{ width: "12px", backgroundColor: "#F88000", borderRadius: "2px" }} />
              </div>

              {/* Excerpt */}
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(0,0,0,0.62)",
                  lineHeight: "1.7",
                  fontFamily: "var(--font-body)",
                }}
              >
                {post.excerpt}
              </p>
            </div>

            {/* CTA */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              {post.cta}
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
