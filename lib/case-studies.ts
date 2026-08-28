export type CaseImage = {
  path: string;
  alt: string;
  lowRes?: boolean;
  contain?: boolean;
};

export type KeyDecision = {
  decision: string;
  why: string;
};

export type CaseSection = {
  heading: string;
  subhead?: string;
  paragraphs: string[];
  keyDecision?: KeyDecision;
  imageCaption?: string;
  imageCaptions?: string[];
  images?: CaseImage[];
  links?: { label: string; href: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  lede: string;
  intro: string;
  metaDescription?: string;
  tags: string;
  sections: CaseSection[];
  testimonials?: {
    quote: string;
    name: string;
    title: string;
  }[];
  videos?: { title: string; embed: string }[];
  images: CaseImage[];
  nextProject: { title: string; href: string };
};

export const caseStudies: Record<string, CaseStudy> = {
  "signos-health": {
    slug: "signos-health",
    title: "Signos Health",
    subtitle:
      "Brand and product redesign for the first FDA-cleared glucose system for weight management",
    eyebrow: "Case Study · Signos",
    lede: "A full brand and product redesign for the first FDA-cleared glucose system for weight management",
    metaDescription:
      "Brand and product redesign for Signos, an FDA-cleared metabolic health company. Four years as the design function, from sole visual designer to art director.",
    intro:
      "I drove design on the rebrand of Signos from positioning to expression to campaign creative, and wrote the framework that made our existing brand system the context AI tools start from.",
    tags: "Branding · Product UI · Campaigns · AI",
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "Signos is a continuous glucose monitor that helps people understand how their body responds to food, sleep, and movement. When I joined as the sole visual designer in early 2022, the product was finding its voice and the brand was scattered across surfaces: app, marketing site, lifecycle email, paid media, social, press. Each surface had been built quickly and built separately. The team was small, ambitious, and ready to grow.",
          "In the launch week of the first FDA-cleared glucose system for weight management, in August 2025, we shipped a new product, a rebuilt site, a new app interface, and a refreshed brand all on the same week. Ship a brand that earns medical credibility without ever feeling clinical. Ship a product experience that helps people change behavior without making the day harder.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "Senior Visual Designer (Feb 2022 – Feb 2025), then Art Director (Feb 2025 – present). Drove design across brand expression, product UI, marketing site, and lifecycle email, partnering with the VP of Design, marketing leadership, and product. Wrote the AI production framework that grounds generated work in the Signos brand system, with design review as a required step.",
        ],
      },
      {
        heading: "01 Brand & Product Redesign",
        subhead:
          "Pillars, type, color, and a system that holds across product and marketing",
        paragraphs: [
          "The category defaults to white coats and test tubes. Our customer is not looking for a clinic. She is looking for a smart friend who happens to have a degree in physiology. I built the brand foundation around that voice, then translated it into a type and color system that could carry the warmth without giving up medical credibility.",
          "The work spanned brand pillars and voice, type and color discipline, the rebuilt marketing site as the first surface customers met, and the in-app experience where brand and product meet, working with our UI/UX designer on how the system carried into onboarding, the glucose curve and the moments that mark progress. Every surface, from a paid social ad to an in-app moment, traces back to the same three pillars and the same color discipline.",
          "This is the foundation the rest of the work depends on. Without it, the email system has no shared parts library, and the AI production pipeline has no brand to enforce.",
        ],
        keyDecision: {
          decision:
            "Kept a single primary CTA color across product and marketing rather than splitting into a brand palette and a UI palette.",
          why: "A unified accent color made the funnel feel like one continuous experience and removed the constant 'is this our brand or our product' debate in stakeholder reviews.",
        },
        imageCaption:
          "In-app experience: glucose curve, onboarding, and the moments where brand and product meet.",
        images: [
          {
            path: "/images/projects/signos/signos-in-app.png",
            alt: "In-app experience",
          },
        ],
      },
      {
        heading: "02 Email Design System",
        subhead:
          "The lifecycle program that scaled the highest-volume customer touchpoint without scaling design headcount",
        paragraphs: [
          "Email was the highest-volume customer touchpoint Signos had. Before the system, every send was a one-off: marketing wrote a brief, design built it, engineering shipped it, and the whole loop took days. I built a modular email system that shared components with the marketing site — header, footer, hero, product card, CTA — so a tweak to a card on the site shipped to email at the same time, and the marketing team could assemble new sends without a designer in the loop.",
          "The library covers the surfaces that mattered: welcome flow, lifecycle nurture, transactional confirmations, promotional sales, re-engagement, post-purchase education. Each named slot is built to Klaviyo handoff specs so a designer can spec a send and the marketing team can ship it.",
          "The shared-component system meant a fix to a card improved the site and every future send at the same time, and marketing could ship lifecycle campaigns without a designer in the loop.",
        ],
        keyDecision: {
          decision:
            "Treated email as a first-class brand surface, not a marketing afterthought, and shared its components with the marketing site.",
          why: "Lifecycle is where retention and revenue compound. Sharing components meant a tweak to a CTA card improved both surfaces at once and kept the brand from drifting between them.",
        },
        imageCaption:
          "Marketing site and email system — shared components across every customer surface.",
        images: [
          {
            path: "/images/projects/signos/signos-marketing-ui.png",
            alt: "Marketing site and email system",
          },
        ],
      },
      {
        heading: "03 AI-Assisted Production",
        subhead:
          "The pipeline that let a small team feed Meta and Google's algorithmic ad platforms at the volume they now require",
        paragraphs: [
          "Performance creative changed in 2024 and 2025. Google PMAX and Meta Advantage+ stopped being campaigns and started being algorithms: they test creative variants in real time and reward whoever can feed them the most variance. The old workflow — a designer produces a handful of variants per campaign and prays — stops working when the algorithm wants a hundred-plus to find the winner.",
          "Everyone was already using AI. Engineers in Cursor, marketing in ChatGPT, contractors wherever they liked. None of the output looked like Signos, because none of it started from Signos. We already had the answer: a brand guide, a voice guide, a mobile design system, a brand library, an email component library. What was missing was the instruction to load them first. I wrote the framework that does that, with design review as a required gate before anything ships.",
          "AI is not a replacement for taste. It is a leverage layer for it. The curation is mine. The volume is what I delegate. Brand discipline holds across every variant because the templates and the rules sit upstream of the generation, not downstream.",
          "The 2026 GLP-1 launch ran out of the same system: hero, ad concepts, and a full image library, all built from the same set of parts.",
        ],
        keyDecision: {
          decision:
            "Used AI for ideation, comping, and asset variation; kept all final selection, typography, and brand-template decisions human.",
          why: "The volume gain is real but the taste gap is too. Letting AI choose is how brands start to look the same. Letting AI accelerate is how a small team ships like a big one.",
        },
        imageCaption:
          "AI-assisted production: brand-grounded variants from a shared framework.",
        images: [
          {
            path: "/images/projects/signos/signos-ai-variance-hero.png",
            alt: "AI-assisted pipeline output",
          },
        ],
      },
    ],
    images: [
      {
        path: "/images/projects/signos/signos-hero.png",
        alt: "Signos Health brand and product redesign",
      },
    ],
    nextProject: {
      title: "Cholula Hot Sauce",
      href: "/work/cholula",
    },
  },
  cholula: {
    slug: "cholula",
    title: "Cholula Hot Sauce",
    subtitle:
      "Three consecutive years as lead designer on the Uncap Real Flavor campaign — national TV, chalk-on-slate print, social, and broadcast",
    eyebrow: "Case Study · Cholula Hot Sauce",
    lede: "Three years as lead designer on Uncap Real Flavor — national TV, chalk-on-slate print, and a visual system that scaled across every channel",
    intro:
      "At Spitball Advertising, I grew into the lead designer role on the agency's biggest accounts. Cholula was the one I returned to for three consecutive years. I developed the chalk-on-slate visual system, drew every flavor illustration from scratch, and art-directed the national TV spot — print, social, broadcast, and in-store, all anchored by the same handmade aesthetic.",
    tags: "Campaigns · Art Direction · Print · Video",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "Cholula needed to compete against larger hot sauce brands with bigger budgets. The brief was to lean into authenticity and craft — a brand that looked handmade and warm, not manufactured. The visual language had to travel across everything from in-store displays to 30-second TV spots without losing the feeling.",
        ],
      },
      {
        heading: "01 Print system",
        subhead: "The chalk-on-slate visual language and illustration library",
        paragraphs: [
          "I developed the chalk-on-slate visual system — hand-rendered typography, textured surfaces, real food photography with a deliberate, artisan aesthetic. Every flavor illustration in the system is one I digitally drew from scratch: each ingredient, each pairing, each SKU. As the illustration library grew, I built an asset library for agencies to download illustrations as I produced them and managed it for two years — so any agency in the Cholula ecosystem could pull the right asset without starting from scratch.",
        ],
        imageCaption:
          "The chalk-on-slate system across print, packaging, and in-store.",
        images: [
          {
            path: "/images/projects/cholula/cover-cholula.png",
            alt: "Cholula Uncap Real Flavor print system",
          },
        ],
      },
      {
        heading: "02 Digital and social",
        subhead: "The platform extended to every channel",
        paragraphs: [
          "The visual system extended into social, digital, OOH, and promotional activations. MLB Gameday tie-ins, drag-and-drop interactive social executions, and platform-native social formats all inherited from the same chalk-on-slate foundation. Consistency across channels was the discipline.",
        ],
        imageCaption: "MLB Gameday tie-in promotional mockup.",
        images: [
          {
            path: "/images/projects/cholula/cholula-mlb-gameday-mockup.jpg",
            alt: "MLB Gameday tie-in promotional mockup",
          },
        ],
      },
      {
        heading: "03 TV broadcast",
        subhead: "Art directing the national commercial",
        paragraphs: [
          "The national TV commercial brought the aesthetic into motion. I art-directed the visual treatment: camera work, surface textures, typography integration, color grading. The spot ran across broadcast and was extended into social and digital cuts. Print ads ran alongside — same chalk-on-slate system, real quotes from real Cholula fans. The campaign was estimated to lift brand awareness 12% and generate $14M in earned media.",
        ],
      },
      {
        heading: "Reflection",
        paragraphs: [
          "Three years on the same platform is rare in agency work. It meant the system had to grow — not just repeat. Each year we pushed the visual language a little further while protecting what made it distinctive. Learning to evolve a campaign without breaking it is a discipline I've used in every brand system job since.",
        ],
      },
    ],
    videos: [
      {
        title: "Cholula Uncap Real Flavor — Commercial 1",
        embed: "https://www.youtube-nocookie.com/embed/Y0eQLxg9H_Q",
      },
      {
        title: "Cholula Uncap Real Flavor — Commercial 2",
        embed: "https://www.youtube-nocookie.com/embed/jgV2B6mYnsE",
      },
    ],
    images: [
      {
        path: "/images/projects/cholula/cover-cholula.png",
        alt: "Cholula campaign cover",
      },
    ],
    nextProject: {
      title: "Raw Generation",
      href: "/work/raw-generation",
    },
  },
  "raw-generation": {
    slug: "raw-generation",
    title: "Raw Generation",
    subtitle:
      "Modular email, web, SMS, and social system that took campaign launch time from a week to a day",
    eyebrow: "Case Study · Raw Generation",
    lede: "A modular design system that took campaign launch time from a week to a day",
    intro:
      "Raw Generation is a DTC juice and nutrition brand. I led design there for 14 months — building the modular creative system that powered email, web, SMS, and social campaigns. Before the system existed, launching a new campaign took the team a week. After, it took a day.",
    tags: "Email · Web · Social · SMS",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "DTC brands run on campaign velocity. Raw Generation was launching new products and promotions constantly, but their design process hadn't kept up. Each campaign was built from scratch — different layouts, different styling, different assets. The result was inconsistency and a design bottleneck that slowed every launch.",
        ],
      },
      {
        heading: "01 Brand system",
        subhead: "The foundation everything else was built on",
        paragraphs: [
          "Before templates, I built the brand guide — color, type, photography direction, and tone. This is the document that let the marketing team brief consistently and let the templates feel cohesive even as the campaigns changed week to week.",
        ],
        imageCaption: "Brand guide and modular system foundation.",
        images: [
          {
            path: "/images/projects/raw-generation/cover-raw-generation.png",
            alt: "Raw Generation brand system and product lineup",
          },
        ],
        links: [
          {
            label: "Download the brand guide (PDF)",
            href: "https://www.nadinradwan.com/s/RG_Color_Guidelines_2021-FULL.pdf",
          },
        ],
      },
      {
        heading: "02 Email marketing",
        subhead: "8 campaigns from the modular template system",
        paragraphs: [
          "I built a modular email template system with swappable blocks — header, product section, CTA, and footer all snapping together. Open rates lifted 24% year over year and click-through rates climbed 31% as the creative became more consistent and the team could launch without waiting on design.",
        ],
      },
      {
        heading: "03 SMS marketing",
        subhead: "Motion-first creative for text",
        paragraphs: [
          "SMS creative required a different constraint — short animation loops that communicate a product or offer in seconds and hold up at thumb size on a phone screen. The same modular blocks from email adapted to motion-first formats without rebuilding the brand each send.",
        ],
      },
      {
        heading: "04 Web banners",
        subhead: "Homepage takeovers for every promotion",
        paragraphs: [
          "Every campaign launched with a homepage banner. The banner templates snapped into the same modular system as email — consistent across every touchpoint, fast to turn around.",
        ],
      },
      {
        heading: "05 Social",
        subhead: "150% audience growth through brand voice and content mix",
        paragraphs: [
          "Social was where the brand personality had room to breathe. We grew the audience 150% by developing a real and quirky tone of voice — a mix of branded content, UGC, and direct brand voice that felt human and consistent at the same time. It taught me to move fast and batch-create at scale, before any of that was easy.",
        ],
      },
      {
        heading: "06 GIPHY stickers",
        subhead: "Branded animated stickers for organic social reach",
        paragraphs: [
          "I designed and animated a library of branded stickers published to GIPHY — looping animations that users could drop into their own Stories and posts. It was an early bet on organic reach through UGC placement, and the stickers accumulated millions of views without any paid spend behind them.",
        ],
      },
      {
        heading: "Reflection",
        paragraphs: [
          "Leading design as a solo designer at a fast DTC brand is a different kind of pressure. You're not making one beautiful thing — you're building a machine that makes many things quickly, without losing quality. The discipline is less about craft on individual pieces and more about building systems that protect craft at scale.",
        ],
      },
    ],
    images: [
      {
        path: "/images/projects/raw-generation/cover-raw-generation.png",
        alt: "Raw Generation product lineup",
      },
    ],
    nextProject: {
      title: "Castle Foods",
      href: "/work/castle-foods",
    },
  },
  "castle-foods": {
    slug: "castle-foods",
    title: "Castle Foods Brand Identity",
    subtitle:
      "A logo, type, and identity system for a heritage spice importer — still in use today",
    eyebrow: "Case Study · Castle Foods",
    lede: "A logo, type, and identity system for a heritage spice importer entering a new chapter",
    intro:
      "Castle Foods is an importer, processor, and purveyor of spices — a B2B wholesale supplier serving foodservice clients since 1948. Spitball brought me on to lead design on the brand identity: logo, type, color, packaging direction, and a system built to scale across a wide product line. The system is still in use today.",
    tags: "Brand Identity",
    sections: [
      {
        heading: "Project overview",
        paragraphs: [
          "Castle Foods is an importer, processor, and purveyor of spices — a subsidiary of Kalustyan Corporation, sourcing and supplying herbs, spices, and seasonings to foodservice and wholesale clients since 1948. Spitball brought me on to lead the brand identity: logo, type, color, packaging direction, and a system built to scale across a wide product line. The goal was a brand that felt confident and considered to B2B buyers — heritage without stiffness — and a system that could absorb new SKUs without a rebuild every time the catalog grew.",
        ],
      },
      {
        heading: "The problem",
        paragraphs: [
          "The existing brand wasn't keeping pace with the quality of the product or the expectations of the buyers Castle was trying to reach. Every new SKU risked becoming a one-off design exercise. They needed a premium, intentional presence on the shelf and a repeatable system behind it.",
        ],
      },
      {
        heading: "01 Logo and wordmark",
        subhead: "The primary mark, lockups, and variations",
        paragraphs: [
          'The wordmark is a quiet custom serif font with a memorable "C" so it feels grounded on the shelf and strong as an independent mark on packaging and social media. A small crown mark anchors the brand\'s heritage line — "The Sovereign of Spices" — which became the secondary signature beneath the wordmark. Lockups handle every common application: vertical, horizontal, mark-only, and small-scale. Variations cover the SKU lineup without ever requiring a redraw.',
        ],
        images: [
          {
            path: "/images/projects/castle-foods/cover-castle-foods-2.png",
            alt: "Castle Foods brand system overview",
          },
        ],
      },
      {
        heading: "02 Type and color system",
        subhead: "Hierarchy, palette, and a single accent",
        paragraphs: [
          "Color is muted earth tones — black, ivory, and a single warm gold that carries the line. Typography hierarchy is generous and direct so a customer can read the spice name from a step away. The accent gold is the only place the brand allows itself to get loud, and that restraint is what makes it feel premium next to the noisier shelf neighbors.",
        ],
        imageCaption:
          "Type and color in context: muted earth tones, a single accent, type that reads at distance.",
        images: [
          {
            path: "/images/projects/castle/castle-garlic-minced.jpg",
            alt: "Castle Foods garlic minced packaging",
          },
        ],
      },
      {
        heading: "03 Design system",
        subhead: "Components and rules that scale across SKUs",
        paragraphs: [
          "I built the system so adding a new SKU is a 10-minute job, not a 10-day one. Named slots, locked grid, defined photography rules, naming conventions. The brand expression scales without the brand having to rebuild from scratch each time a new product joins the line.",
        ],
        imageCaption: "The system applied: labels in production.",
        images: [
          {
            path: "/images/projects/castle/castle-system-1.png",
            alt: "Castle Foods system",
            lowRes: true,
            contain: true,
          },
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The brand has a confident, quiet, modern presence that holds across every SKU and every channel. The system is still in use today, absorbing new products as the line has grown without needing a rebuild — exactly what a category-entrant brand needs in its first three years and beyond.",
        ],
      },
    ],
    images: [
      {
        path: "/images/projects/castle-foods/cover-castle-foods.png",
        alt: "Castle Foods brand identity hero",
      },
    ],
    nextProject: {
      title: "Project Denali",
      href: "/work/project-denali",
    },
  },
  "project-denali": {
    slug: "project-denali",
    title: "Project Denali Campaign",
    subtitle: "A staged launch in four acts, with a dashboard redesign at the core",
    eyebrow: "Case Study · Project Denali",
    lede: "A staged launch in four acts, with a redesigned agency dashboard at the core",
    intro:
      "A launch announcement that arrives all at once disappears all at once. We had a product that needed weeks of attention, not a day. So we built the campaign as a four-act story — and rebuilt the agency dashboard underneath it so the launch had a real product to reveal.",
    tags: "Brand · Product · Art Direction",
    sections: [
      {
        heading: "Project overview",
        paragraphs: [
          "Project Denali was Conduit Digital Agency's strategic refinement and product launch in 2021. As Creative Manager, I led creative direction on the rollout: the four-act campaign across email, portal, and ads, the launch films, and the redesign of Conduit's flagship dashboard product (Live Reports), which was the core product underneath the announcement. Each act inherited from the one before it visually, but each one had its own tone and its own job.",
        ],
      },
      {
        heading: "The problem",
        paragraphs: [
          "Conduit was rolling out a refined offering to its agency partners — new dashboards, new product surfaces, two new product lines. A flat launch announcement would land in a single news cycle and disappear. The campaign needed to build anticipation across weeks, not days, give the agency partners a product worth paying attention to, and feel like one continuous story across four moments rather than four separate pushes.",
        ],
      },
      {
        heading: "01 The Inspiration",
        subhead: "Establishing the visual world",
        paragraphs: [
          "The first act was the foundation: the brand lookbook, the visual lexicon, the photography references, and the typographic notes. Everything that followed inherited from this single foundation. Settling the world before opening the door meant the rest of the campaign could move at speed without drift — partners would recognize the visual language before they saw the product name.",
        ],
      },
      {
        heading: "02 The Introduction",
        subhead: "Teasing the rollout to agency partners",
        paragraphs: [
          "A teaser identity, a small set of key visuals, and a tightly scoped touch to existing agency partners. Just enough to say something is coming. Not enough to give it away. This act was deliberately quiet so the next one could feel like a real shift in tempo — a whisper before the episodic drops.",
        ],
      },
      {
        heading: "03 The Tease",
        subhead: "Episodic creative drops + the dashboard redesign",
        paragraphs: [
          "Once the audience had a thread to pull on, we gave them a series of episodic drops: portal banners, email teasers, animated GIFs, gated previews. Each drop revealed a little more without revealing the product.",
          "Underneath the drops, the real work was the dashboard. I led creative direction on the redesign of Conduit's Live Reports — the flagship dashboard product agency partners use every day. The redesign was the core deliverable Project Denali was actually announcing. Without it, the campaign would have been a tease with nothing to reveal.",
        ],
        imageCaptions: [
          "Portal 'Coming Soon' banner — Act 3 opens.",
          "Portal popup: gated preview.",
        ],
        images: [
          {
            path: "/images/projects/denali/denali-portal-banner.png",
            alt: "Portal Coming Soon banner",
            lowRes: true,
            contain: true,
          },
          {
            path: "/images/projects/denali/denali-portal-popup.gif",
            alt: "Portal popup gated preview",
            lowRes: true,
            contain: true,
          },
        ],
      },
      {
        heading: "04 The Launch",
        subhead: "The reveal, across channels",
        paragraphs: [
          "The launch film, the full identity, and the campaign across paid channels at scale. By this point the visual world was already familiar. The reveal landed, the film had room to breathe, the redesigned dashboard shipped to agency partners, and the launch did not get lost in the noise.",
        ],
        imageCaptions: [
          "Launch creative — animated underline element, wave 1.",
          "Launch creative — animated underline element, wave 2.",
          "Launch creative — animated underline element, wave 3.",
        ],
        images: [
          {
            path: "/images/projects/denali/denali-launch-1.gif",
            alt: "Launch animated underline — wave 1",
            lowRes: true,
            contain: true,
          },
          {
            path: "/images/projects/denali/denali-launch-2.gif",
            alt: "Launch animated underline — wave 2",
            lowRes: true,
            contain: true,
          },
          {
            path: "/images/projects/denali/denali-launch-3.gif",
            alt: "Launch animated underline — wave 3",
            lowRes: true,
            contain: true,
          },
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The campaign built audience attention across multiple weeks, gave the redesigned dashboard a real moment of arrival rather than a quiet shipping note, and gave the launch film room to land. Conduit has continued to use the four-act structure on launches since.",
        ],
      },
    ],
    videos: [
      {
        title: "Project Denali — launch film",
        embed: "https://www.youtube-nocookie.com/embed/ptoc8DdjEYk",
      },
    ],
    images: [
      {
        path: "/images/projects/denali/denali-inspiration.png",
        alt: "Project Denali visual world and campaign foundation",
      },
    ],
    nextProject: {
      title: "TIME Thyroid Cancer",
      href: "/work/time-thyroid",
    },
  },
  "time-thyroid": {
    slug: "time-thyroid",
    title: "TIME Thyroid Cancer",
    subtitle:
      "Patient-education microsite for Jubilant Draximage — live six years, still referenced by patients and care teams",
    eyebrow: "Case Study · TIME Thyroid Cancer",
    lede: "Patient-education microsite for Jubilant Draximage — live six years, still referenced by patients and care teams",
    intro:
      "Jubilant Draximage needed a patient-education microsite that could hold up under FDA scrutiny and still feel human. I led design and illustration on timethyroidcancer.com — custom diagrams, plain-language IA, and a warm visual system for people navigating a difficult diagnosis. Six years later, Spitball's own case study notes it is still referenced by patients and care teams.",
    tags: "Web Design · Illustration · Branding",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Jubilant Draximage is a pharmaceutical company producing diagnostic imaging agents for thyroid cancer treatment. They needed a patient-education microsite — unbranded, plain-language, designed for people navigating a difficult diagnosis and treatment process. I led design and illustration on the site, which launched at timethyroidcancer.com and has been live for six years.",
        ],
      },
      {
        heading: "The Brief",
        paragraphs: [
          "FDA-regulated patient education content has to be rigorously accurate and completely accessible to a non-specialist audience. The design couldn't feel clinical or cold — this is a site people find when they or someone they love has just received a cancer diagnosis. It needed to feel trustworthy, warm, and clear.",
        ],
        imageCaption:
          "Custom illustration system explaining diagnosis and treatment pathways.",
        images: [
          {
            path: "/images/projects/time/time-options.png",
            alt: "Custom illustrations for the TIME thyroid microsite",
          },
        ],
      },
      {
        heading: "The Work",
        paragraphs: [
          "I designed the site UI and created the custom illustration system used throughout — diagrams explaining how the thyroid works, what the treatment involves, and what patients can expect at each stage. The illustrations had to be anatomically clear, emotionally warm, and work across multiple reading levels.",
          "The information architecture was built around patient questions, not medical categories — organized around what people actually need to know, in the order they need to know it.",
        ],
      },
      {
        heading: "Reflection",
        paragraphs: [
          "Health content design is about trust above everything else. A patient reading this site is scared and looking for clarity. Every design decision — the type size, the illustration style, the information hierarchy — had to serve that person. Getting it right mattered in a way that most design work doesn't.",
        ],
      },
    ],
    images: [
      {
        path: "/images/projects/time/time-homepage.png",
        alt: "TIME thyroid cancer patient education microsite homepage",
      },
    ],
    nextProject: {
      title: "Signos Health",
      href: "/work/signos-health",
    },
  },
};

export function getCaseStudy(slug: string) {
  return caseStudies[slug];
}

export function getCaseStudySlugs() {
  return Object.keys(caseStudies);
}
