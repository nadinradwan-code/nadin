export const signosMeta = {
  title: "Signos Health",
  description:
    "Brand and product redesign for Signos, an FDA-cleared metabolic health company. Four years as the design function, from sole visual designer to art director.",
} as const;

export const signosHero = {
  kicker: "Case study · Signos · 2022–present",
  title: "Signos",
  titleMark: "Health",
  deck: "Brand and product redesign for the first FDA-cleared glucose system for weight management. Four years as the design function, from sole visual designer to art director.",
  tags: ["Branding", "Product UI", "Campaigns", "AI"],
  intro:
    "I drove design on the rebrand from positioning to expression to campaign creative, and wrote the framework that made our existing brand system the context AI tools start from.",
} as const;

export const signosPillars = [
  {
    name: "Maverick",
    color: "cerise",
    body: "Say the true thing, even when the category is whispering. Food is personal. Glucose is data. The brand is allowed to have a point of view.",
  },
  {
    name: "Sage",
    color: "violet",
    body: "A smart friend who happens to have a degree in physiology. Credibility without the white coat. Clarity without talking down.",
  },
  {
    name: "Missionary",
    color: "sky",
    body: "The work has to help someone change a day, not just decorate a funnel. Every surface, from a sticker to an in-app moment, is in service of that.",
  },
] as const;

export const signosColors = [
  {
    name: "Cerise",
    hex: "#FD3576",
    pms: "PMS 191",
    role: "Primary. CTAs. Always positive, never negative.",
  },
  {
    name: "Gold",
    hex: "#FBB12D",
    pms: "PMS 1235",
    role: "Oversaturated. The line running hot.",
  },
  {
    name: "Violet",
    hex: "#AE00FE",
    pms: "PMS 2592",
    role: "Resting. The line in range.",
  },
  {
    name: "Sky",
    hex: "#3B88FF",
    pms: "PMS 2727",
    role: "Needs energy. The line running cold.",
  },
  {
    name: "Green",
    hex: "#2BB673",
    pms: "",
    role: "Lean mass. Progress that holds.",
  },
] as const;

export const signosScope = [
  {
    label: "01",
    title: "Brand",
    body: "Positioning into expression: pillars, voice, type, color, and a system that could travel from an FDA-cleared product to a Times Square board without splitting in two.",
  },
  {
    label: "02",
    title: "Product & site",
    body: "The rebuilt marketing site as the first surface customers met, and the in-app experience where brand and product meet — working with our UI/UX designer on onboarding, the glucose curve, and the moments that mark progress.",
  },
  {
    label: "03",
    title: "Campaigns & systems",
    body: "Shoots, OOH, stickers, lifecycle email, paid creative, partner work, and the AI context layer that keeps generated output on-brand. Design review stays a required gate.",
  },
] as const;

export const signosOutcomes = [
  {
    title: "One system, every surface",
    body: "App, marketing site, lifecycle email, paid, social, and press now trace back to the same three pillars and the same color discipline. A tweak to a card can ship to the site and to email at the same time.",
  },
  {
    title: "Taste at the volume the algorithms want",
    body: "The 2026 GLP-1 launch — hero, ad concepts, image library — ran out of the same parts as the rest of the brand. AI does the volume. Design review does the choosing.",
  },
] as const;

export const signosRisks = [
  {
    n: "01",
    title: "Clinic by default",
    body: "The category looks like white coats and test tubes. Sound medical without ever feeling clinical.",
  },
  {
    n: "02",
    title: "Warmth without soft-focus",
    body: "A consumer brand still has to hold inside an FDA-cleared product. Friendliness that cannot survive a glucose graph is decoration.",
  },
  {
    n: "03",
    title: "Five surfaces, five voices",
    body: "App, site, email, paid, press had been built quickly and built separately. A rebrand that only dressed the homepage would fail in a week.",
  },
  {
    n: "04",
    title: "Range that breaks the system",
    body: "Times Square, stickers, a food fight, a two-pager. If the brand only worked in one register, it was not a system.",
  },
  {
    n: "05",
    title: "Speed that drifts",
    body: "A small team, a launch week, and later an AI layer. Without rules upstream of production, volume becomes a different brand every Tuesday.",
  },
] as const;

export const signosIdeas = [
  {
    title: "Colour as physiology",
    body: "The glucose line already had a job. I gave the palette the same job. Cerise is a CTA and a high. Violet is rest. Sky needs energy. Gold is oversaturated. Green is lean mass. Color is not decoration. It is a reading of the body.",
  },
  {
    title: "One primary, everywhere",
    body: "A single CTA color across product and marketing, rather than a brand palette and a UI palette. The funnel feels like one continuous experience, and reviews stop stalling on “is this our brand or our product.”",
  },
] as const;

export const signosQueue = [
  { surface: "Brand", item: "Pillars, type, color, voice guide" },
  { surface: "Site", item: "Shared components, launch surfaces" },
  { surface: "App", item: "Curve, onboarding, progress moments" },
  { surface: "Email", item: "Iterable-ready slots, fallback fonts" },
  { surface: "Paid", item: "Variant volume from the same parts" },
  { surface: "Review", item: "Design gate before anything ships" },
] as const;

export const signosContentColumns = [
  {
    title: "Named slots",
    body: "Header, hero, product card, CTA, footer. A send is an assembly job, not a new design. The same slots live on the site, so a fix improves both.",
  },
  {
    title: "A queue, not a pile",
    body: "Work enters as a surface and a job, not as “can you make this pop.” The queue is how a sole designer, then an art director, keeps craft from becoming a bottleneck.",
  },
  {
    title: "Rules upstream",
    body: "Brand guide, voice guide, mobile system, email library. AI does not get to start from a blank chat. It starts from this.",
  },
] as const;

export const signosFallbackFonts = [
  {
    label: "Primary",
    stack: "Archivo",
    sample: "Draw the line.",
    note: "Variable width. ExtraCondensed for display, Regular for reading, Expanded when the line needs to breathe.",
  },
  {
    label: "Fallback 1",
    stack: "Helvetica Neue, Helvetica, Arial",
    sample: "Draw the line.",
    note: "Email clients that will not load webfonts. Weight and tracking do the work Archivo’s width axis cannot.",
  },
  {
    label: "Fallback 2",
    stack: "Arial, sans-serif",
    sample: "Draw the line.",
    note: "The honest last stop. If it still reads as Signos here, the system is doing its job.",
  },
] as const;

export const signosAiSteps = [
  {
    n: "01",
    title: "Load the system",
    body: "Brand guide, voice guide, mobile design system, brand library, email component library. The instruction is to start here, not from a blank prompt.",
  },
  {
    n: "02",
    title: "Generate inside the rails",
    body: "Ideation, comps, and variance. The templates and the rules sit upstream of the generation, not downstream of it.",
  },
  {
    n: "03",
    title: "Design review",
    body: "A required gate. AI is a leverage layer for taste, not a replacement for it. The curation is mine. The volume is what I delegate.",
  },
] as const;

export const signosCredits = [
  {
    heading: "Role",
    items: [
      "Senior Visual Designer, Feb 2022 – Feb 2025",
      "Art Director, Feb 2025 – present",
      "Brand expression, campaign creative, email system, AI context framework",
    ],
  },
  {
    heading: "Collaboration",
    items: [
      "VP of Design",
      "UI/UX design on in-app surfaces",
      "Marketing leadership and product",
      "Photography and production partners on campaign shoots",
    ],
  },
  {
    heading: "System",
    items: [
      "Archivo · ExtraCondensed to Expanded",
      "JetBrains Mono · data, labels, numerals",
      "Stone instead of black",
      "Cerise as the only primary CTA",
    ],
  },
] as const;
