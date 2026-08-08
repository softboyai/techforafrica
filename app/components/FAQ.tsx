"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/app/content/copy";

function Item({ question, answer, index, isOpen, onToggle }: {
  question: string; answer: string; index: number; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "0.5px solid rgba(0,0,0,0.12)" }}>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-${index}`}
          onClick={onToggle}
          className="w-full flex items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2"
          style={{ padding: "20px 0", cursor: "pointer", background: "none", border: "none" }}
        >
          <span className="flex items-start gap-3 flex-1">
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "rgba(0,0,0,0.35)",
                fontFamily: "var(--font-body)",
                marginTop: "2px",
                minWidth: "20px",
              }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: isOpen ? "#08233F" : "#000000",
                lineHeight: 1.3,
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              {question}
            </span>
          </span>
          <span style={{ flexShrink: 0, color: "#08233F", marginTop: "2px" }} aria-hidden="true">
            {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
          </span>
        </button>
      </h3>
      <div id={`faq-${index}`} hidden={!isOpen}>
        <p
          style={{
            paddingLeft: "32px",
            paddingBottom: "20px",
            fontSize: "14px",
            color: "rgba(0,0,0,0.65)",
            lineHeight: "1.6",
            maxWidth: "640px",
          }}
        >
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
      <div className="rp-container" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">
          {/* Left sticky heading */}
          <div style={{ position: "sticky", top: "80px" }}>
            <span className="eyebrow-tag mb-3 block" style={{ display: "inline-flex" }}>
              {faq.eyebrow}
            </span>
            <h2
              id="faq-heading"
              className="heading-display"
              style={{ fontSize: "clamp(28px, 3.5vw, 36px)", marginBottom: "16px" }}
            >
              {faq.headline}
            </h2>
            <div style={{ width: "32px", height: "2px", backgroundColor: "#FBB934", borderRadius: "2px" }} aria-hidden="true" />
          </div>
          {/* Right accordion */}
          <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.12)" }}>
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
