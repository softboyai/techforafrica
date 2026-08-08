"use client";

import { useEffect, useState } from "react";
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
      style={{ backgroundColor: "#08233F", borderBottom: "0.5px solid rgba(255,255,255,0.1)" }}
    >
      <div className="rp-container">
        <div className="flex items-stretch" style={{ minHeight: "50px" }}>
          {/* Label */}
          <div
            className="flex items-center shrink-0"
            style={{
              paddingRight: "16px",
              borderRight: "0.5px solid rgba(255,255,255,0.15)",
              marginRight: "16px",
            }}
            aria-hidden="true"
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#FBB934",
                fontFamily: "var(--font-body)",
              }}
            >
              Notice
            </span>
          </div>
          {/* Message */}
          <div
            className="flex-1 flex items-center overflow-hidden"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <p
              key={current}
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.80)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.4,
              }}
            >
              {messages[current]}
            </p>
          </div>
          {/* Dots */}
          <div className="flex items-center gap-1.5 pl-4 shrink-0" aria-hidden="true">
            {messages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Message ${i + 1}`}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: i === current ? "#FBB934" : "rgba(255,255,255,0.25)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
