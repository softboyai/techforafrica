// Abstract line-art "bridge span" SVG — thin Patina Blue strokes, two anchor points.
// Used as a hero background decoration. Never a literal bridge photo or stock icon.

interface BridgeLineArtProps {
  className?: string;
  "aria-hidden"?: boolean;
}

export default function BridgeLineArt({
  className = "",
  "aria-hidden": ariaHidden = true,
}: BridgeLineArtProps) {
  return (
    <svg
      viewBox="0 0 900 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* ── Main span cables ── */}
      {/* Left anchor point to apex */}
      <line
        x1="60"
        y1="280"
        x2="450"
        y2="60"
        stroke="#1E4A5F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Right anchor point to apex */}
      <line
        x1="840"
        y1="280"
        x2="450"
        y2="60"
        stroke="#1E4A5F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* ── Deck / roadway line ── */}
      <line
        x1="40"
        y1="230"
        x2="860"
        y2="230"
        stroke="#1E4A5F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* ── Hanger cables (vertical drops from span to deck) ── */}
      {[160, 260, 350, 450, 550, 640, 740].map((x) => {
        // y on the span line: linear interpolation between anchor and apex
        const t = (x - 60) / (840 - 60);
        const apexY = 60;
        const anchorY = 280;
        // Catenary-like: mirror around apex at 450
        const tFromApex = Math.abs((x - 450) / 390);
        const spanY = apexY + (anchorY - apexY) * tFromApex;
        return (
          <line
            key={x}
            x1={x}
            y1={spanY}
            x2={x}
            y2={230}
            stroke="#1E4A5F"
            strokeWidth="0.75"
            strokeLinecap="round"
            opacity="0.6"
          />
        );
      })}

      {/* ── Left anchor block ── */}
      <rect
        x="42"
        y="224"
        width="18"
        height="56"
        stroke="#1E4A5F"
        strokeWidth="1.5"
        fill="none"
      />
      {/* ── Right anchor block ── */}
      <rect
        x="840"
        y="224"
        width="18"
        height="56"
        stroke="#1E4A5F"
        strokeWidth="1.5"
        fill="none"
      />

      {/* ── Apex node ── */}
      <circle
        cx="450"
        cy="60"
        r="5"
        stroke="#1E4A5F"
        strokeWidth="1.5"
        fill="#EFEDE8"
      />

      {/* ── Left anchor node ── */}
      <circle
        cx="60"
        cy="280"
        r="4"
        stroke="#1E4A5F"
        strokeWidth="1.5"
        fill="#EFEDE8"
      />
      {/* ── Right anchor node ── */}
      <circle
        cx="840"
        cy="280"
        r="4"
        stroke="#1E4A5F"
        strokeWidth="1.5"
        fill="#EFEDE8"
      />

      {/* ── Faint grid texture ── */}
      {[100, 200, 300, 500, 600, 700, 800].map((x) => (
        <line
          key={`vg-${x}`}
          x1={x}
          y1="230"
          x2={x}
          y2="286"
          stroke="#1E4A5F"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}
    </svg>
  );
}
