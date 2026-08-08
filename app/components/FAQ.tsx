"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/app/content/copy";

function AccordionItem({
  question, answer, index, isOpen, onToggle,
}: {
  question: string; answer: string; index: number; isOpen: boolean; onToggle: () => void;
}) {
  const id = `faq-answer-${index}`;
  const triggerId = `faq-trigger-${index}`;
  return (
    <div className="border-b border-black/8 last:border-b-0">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onToggle}
          className="w-full flex items-start justify-between gap-4 py-5 text-left focus-visible:outline-[#4CAF50] focus-visible:outline-offset-2 group"
        >
          <span className="flex items-start gap-3 flex-1">
            <span
              className="text-[0.6rem] font-semibold tracking-widest uppercase mt-1 text-[#9CA3AF] shrink-0 w-5"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="text-base font-medium text-[#111827] leading-snug group-hover:text-[#011341] transition-colors"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {question}
            </span>
          </span>
          <span className="shrink-0 mt-0.5 text-[#011341]" aria-hidden="true">
            {isOpen
              ? <Minus size={18} strokeWidth={1.75} />
              : <Plus size={18} strokeWidth={1.75} />}
          </span>
        </button>
      </h3>
      <div id={id} role="region" aria-labelledby={triggerId} hidden={!isOpen}>
        <p
          className="pl-8 pb-5 text-sm text-[#6B7280] leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-hanken), sans-serif" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((p) => (p === i ? null : i));

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#F7F9F6]" aria-labelledby="faq-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <p
              className="text-xs font-semibold tracking-widest uppercase text-[#0F3D3A] mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {faq.eyebrow}
            </p>
            <h2
              id="faq-heading"
              className="text-3xl lg:text-4xl font-bold text-[#011341] leading-tight mb-5"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {faq.headline}
            </h2>
            <div className="w-10 h-1 bg-[#4CAF50] rounded-full" aria-hidden="true" />
          </div>
          {/* Right */}
          <div className="border-t border-black/8">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i} question={item.question} answer={item.answer}
                index={i} isOpen={openIndex === i} onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
