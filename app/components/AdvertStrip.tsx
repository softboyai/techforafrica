"use client";

import { useEffect, useRef, useState } from "react";
import { advertStrip } from "@/app/content/copy";

export default function AdvertStrip() {
  const [current, setCurrent] = useState(0);
  const messages = advertStrip.messages;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % messages.length), 4500);
    return () => clearInterval(t);
  }, [messages.length]);

  return (
    <aside
      aria-label="Programme announcements"
      className="bg-[#011341] border-y border-[#011341]/80"
    >
      <div className="section-container">
        <div className="flex items-stretch min-h-[50px]">
          {/* Label */}
          <div
            className="flex items-center px-4 shrink-0 border-r border-white/15"
            aria-hidden="true"
          >
            <span
              className="text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[#FBB934]"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Notice
            </span>
          </div>
          {/* Message */}
          <div
            className="flex-1 flex items-center px-5 py-3 overflow-hidden"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <p
              key={current}
              className="text-sm text-white/85"
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
            >
              {messages[current]}
            </p>
          </div>
          {/* Dots */}
          <div className="flex items-center gap-1.5 px-4 shrink-0" aria-hidden="true">
            {messages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Message ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 focus-visible:outline-[#FBB934] ${
                  i === current ? "bg-[#FBB934]" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
