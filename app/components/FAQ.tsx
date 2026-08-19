"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/app/content/copy";

function Item({ question, answer, index, isOpen, onToggle }: {
  question: string; answer: string; index: number; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "0.5px solid rgba(0,0,0,0.10)" }}>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-${index}`}
          onClick={onToggle}
          style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
        >
          <span style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1 }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(0,0,0,0.30)", fontFamily: "var(--font-body)", marginTop: "2px", minWidth: "20px" }} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span style={{ fontSize: "16px", fontWeight: 400, color: isOpen ? "#002098" : "#0D0D0D", lineHeight: "1.35", fontFamily: "var(--font-body)", transition: "color 0.15s" }}>
              {question}
            </span>
          </span>
          <span style={{ flexShrink: 0, color: isOpen ? "#F88000" : "#002098", marginTop: "2px" }} aria-hidden="true">
            {isOpen ? <Minus size={18} strokeWidth={1.75} /> : <Plus size={18} strokeWidth={1.75} />}
          </span>
        </button>
      </h3>
      <div id={`faq-${index}`} hidden={!isOpen}>
        <p style={{ paddingLeft: "32px", paddingBottom: "20px", fontSize: "14px", color: "rgba(0,0,0,0.62)", lineHeight: "1.7", maxWidth: "640px", fontFamily: "var(--font-body)" }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-cream" aria-labelledby="faq-heading">
      <div className="rp-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">

          {/* Left sticky heading */}
          <div style={{ position: "sticky", top: "80px" }}>
            <span className="eyebrow-tag mb-3 block">{faq.eyebrow}</span>
            <h2 id="faq-heading" className="heading-display heading-display-navy"
              style={{ fontSize: "clamp(26px,3.5vw,36px)", marginBottom: "16px" }}>
              {faq.headline}
            </h2>
            {/* Green accent bar */}
            <div style={{ width: "32px", height: "3px", backgroundColor: "#96C0D8", borderRadius: "2px" }} aria-hidden="true" />
          </div>

          {/* Right accordion */}
          <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.10)" }}>
            {faq.items.map((item, i) => (
              <Item
                key={i}
                question={item.question}
                answer={item.answer}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
