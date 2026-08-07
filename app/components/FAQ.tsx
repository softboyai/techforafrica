"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/app/content/copy";

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const id = `faq-answer-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className="border-b border-[#22262B]/12 last:border-b-0">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onToggle}
          className="w-full flex items-start justify-between gap-4 py-5 text-left focus-visible:outline-[#C97A3D] focus-visible:outline-offset-2 group"
        >
          <span
            className="flex items-start gap-3 flex-1"
          >
            <span
              className="text-[0.6rem] font-medium tracking-widest uppercase mt-1 text-[#22262B]/30 shrink-0 w-5"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="text-base font-medium text-[#22262B] leading-snug group-hover:text-[#1E4A5F] transition-colors duration-150"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {question}
            </span>
          </span>
          <span
            className="shrink-0 mt-0.5 text-[#1E4A5F]"
            aria-hidden="true"
          >
            {isOpen ? (
              <Minus size={18} strokeWidth={1.5} />
            ) : (
              <Plus size={18} strokeWidth={1.5} />
            )}
          </span>
        </button>
      </h3>

      <div
        id={id}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
      >
        <p
          className="pl-8 pb-5 text-sm text-[#22262B]/60 leading-relaxed max-w-2xl"
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

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-[#EFEDE8]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">

          {/* Left: header */}
          <div className="lg:sticky lg:top-24">
            <p
              className="text-xs tracking-widest uppercase text-[#1E4A5F] font-medium mb-4"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              {faq.eyebrow}
            </p>
            <h2
              id="faq-heading"
              className="text-3xl lg:text-4xl font-bold text-[#22262B] leading-tight mb-6"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {faq.headline}
            </h2>
            <div
              className="w-10 h-0.5 bg-[#1E4A5F]"
              aria-hidden="true"
            />
          </div>

          {/* Right: accordion */}
          <div
            className="border-t border-[#22262B]/12"
            role="list"
            aria-label="Frequently asked questions"
          >
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
