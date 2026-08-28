import {
  signosAiSteps,
  signosColors,
  signosFallbackFonts,
  signosPillars,
  signosQueue,
} from "@/lib/signos-case";

export function PillarGrid() {
  return (
    <div className="signos-pillar-grid">
      {signosPillars.map((pillar) => (
        <article key={pillar.name} className={`signos-pillar signos-pillar--${pillar.color}`}>
          <p className="signos-kicker">{pillar.name}</p>
          <p>{pillar.body}</p>
        </article>
      ))}
    </div>
  );
}

export function ColorPhysiology() {
  return (
    <div className="signos-physiology">
      <div className="signos-physiology-line" aria-hidden="true">
        <svg viewBox="0 0 1000 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="signos-line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FD3576" />
              <stop offset="35%" stopColor="#FBB12D" />
              <stop offset="55%" stopColor="#AE00FE" />
              <stop offset="80%" stopColor="#3B88FF" />
              <stop offset="100%" stopColor="#2BB673" />
            </linearGradient>
          </defs>
          <path
            d="M0 110 C 80 110, 90 40, 160 40 S 250 128, 330 128 S 430 22, 520 22 S 620 96, 710 96 S 820 58, 900 58 L 1000 70"
            fill="none"
            stroke="url(#signos-line)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ul className="signos-swatches">
        {signosColors.map((color) => (
          <li key={color.hex}>
            <span className="signos-swatch" style={{ background: color.hex }} />
            <p className="signos-kicker">{color.name}</p>
            <p className="signos-mono signos-hex">{color.hex}</p>
            <p>{color.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TypeWidths() {
  const widths = [
    { label: "ExtraCondensed", wdth: "62.5%" },
    { label: "Condensed", wdth: "75%" },
    { label: "Narrow", wdth: "87.5%" },
    { label: "Regular", wdth: "100%" },
    { label: "Expanded", wdth: "125%" },
  ];

  return (
    <div className="signos-type-widths" aria-hidden="true">
      {widths.map((width) => (
        <p key={width.label} style={{ fontStretch: width.wdth }}>
          <span className="signos-kicker">{width.label}</span>
          SIGNOS
        </p>
      ))}
    </div>
  );
}

export function ProductionQueue() {
  return (
    <ol className="signos-queue">
      {signosQueue.map((row, index) => (
        <li key={row.surface}>
          <span className="signos-mono">{String(index + 1).padStart(2, "0")}</span>
          <strong>{row.surface}</strong>
          <span>{row.item}</span>
        </li>
      ))}
    </ol>
  );
}

export function FallbackFonts() {
  return (
    <div className="signos-fallbacks">
      {signosFallbackFonts.map((font) => (
        <article key={font.label}>
          <p className="signos-kicker">
            {font.label} · {font.stack}
          </p>
          <p
            className={
              font.label === "Primary"
                ? "signos-fallback-sample signos-fallback-sample--primary"
                : "signos-fallback-sample signos-fallback-sample--system"
            }
            style={
              font.label === "Primary"
                ? undefined
                : { fontFamily: font.stack }
            }
          >
            {font.sample}
          </p>
          <p>{font.note}</p>
        </article>
      ))}
    </div>
  );
}

export function AiFramework() {
  return (
    <ol className="signos-ai-steps">
      {signosAiSteps.map((step) => (
        <li key={step.n}>
          <p className="signos-kicker">{step.n}</p>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function PricePlaceholders() {
  const cards = [
    { sku: "CGM membership", state: "From $000" },
    { sku: "Signos+ GLP-1", state: "From $000" },
    { sku: "Essentials", state: "From $000" },
  ];

  return (
    <ul className="signos-price-cards">
      {cards.map((card) => (
        <li key={card.sku}>
          <span className="signos-vial" aria-hidden="true" />
          <p className="signos-kicker">{card.sku}</p>
          <p className="signos-price">{card.state}</p>
        </li>
      ))}
    </ul>
  );
}

export function StickerRow() {
  const labels = ["DRAW THE LINE", "IN RANGE", "NOT A CLINIC", "EAT ANYWAY"];
  return (
    <div className="signos-stickers">
      {labels.map((label) => (
        <span key={label} className="signos-sticker">
          {label}
        </span>
      ))}
    </div>
  );
}

export function BudgetBlock() {
  return (
    <div className="signos-budget">
      <div>
        <p className="signos-kicker">Estimated</p>
        <p className="signos-budget-bar signos-budget-bar--est">Pre-pro · crew · usage</p>
        <p>The number we walked into the room with. Two shoots, a year apart, same production discipline.</p>
      </div>
      <div>
        <p className="signos-kicker">Final</p>
        <p className="signos-budget-bar signos-budget-bar--final">What actually shipped</p>
        <p>The useful comparison is not a hero number. It is whether the second shoot inherited the first, or started over.</p>
      </div>
    </div>
  );
}
