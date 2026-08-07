"use client";

import { useEffect, useRef, useState } from "react";
import { advertStrip } from "@/app/content/copy";

export default function AdvertStrip() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const messages = advertStrip.messages;

  // Respect prefers-reduced-motion: no rotation if user prefers reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % messages.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [messages.length]);

  return (
    <aside
      aria-label="Programme announcements"
      className="border-y-2 border-[#22262B] bg-[#22262B] overflow-hidden"
      style={{ boxShadow: "0 4px 0 #22262B22" }}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex items-stretch min-h-[52px]">
          {/* Label tab */}
          <div
            className="flex items-center px-4 bg-[#C97A3D] border-r-2 border-[#22262B] shrink-0"
            aria-hidden="true"
          >
            <span
              className="text-[0.6rem] tracking-[0.2em] uppercase font-semibold text-[#22262B]"
              style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
            >
              Notice
            </span>
          </div>

          {/* Rotating message */}
          <div
            className="flex-1 flex items-center px-5 py-3 overflow-hidden"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <p
              key={current}
              className="text-sm text-[#EFEDE8] leading-snug transition-opacity duration-500"
              style={{ fontFamily: "var(--font-hanken), sans-serif" }}
            >
              {messages[current]}
            </p>
          </div>

          {/* Dot indicators */}
          <div
            className="flex items-center gap-1.5 px-4 shrink-0"
            aria-hidden="true"
          >
            {messages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to message ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 focus-visible:outline-[#C97A3D] focus-visible:outline-offset-2 ${
                  i === current ? "bg-[#C97A3D]" : "bg-[#EFEDE8]/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
