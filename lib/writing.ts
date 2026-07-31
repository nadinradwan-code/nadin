export type WritingPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export type WritingSection = {
  heading?: string;
  paragraphs: string[];
};

export type WritingBody = {
  slug: string;
  title: string;
  date: string;
  sections: WritingSection[];
  tools?: string;
};

export const writingMeta = {
  pageTitle: "Writing — Nadin Radwan",
  navLabel: "Thoughts",
  intro:
    "Thoughts on AI-native design, creative workflow, and building at the intersection of design and technology.",
} as const;

export const writingPosts: WritingPost[] = [
  {
    slug: "design-and-code-simultaneously",
    title: "Design and Code, Simultaneously",
    excerpt:
      "The designer-developer handoff used to be where ideas went to get smaller. That tension is gone.",
    date: "2026-05-27",
    href: "/writing/design-and-code-simultaneously",
  },
  {
    slug: "figma-make-vs-claude-honest-comparison",
    title: "Figma Make vs Claude: An Honest Comparison",
    excerpt: "I gave both a real shot. Here's what I actually found.",
    date: "2026-05-20",
    href: "/writing/figma-make-vs-claude-honest-comparison",
  },
  {
    slug: "when-ai-replaced-the-photoshoot",
    title: "When AI Replaced the Photoshoot",
    excerpt:
      "How I used Adobe Firefly to generate exact recipe imagery for a nutrition-focused guide—and why close enough is no longer a forced choice.",
    date: "2026-05-13",
    href: "/writing/when-ai-replaced-the-photoshoot",
  },
  {
    slug: "product-design-and-brand-design",
    title: "The Intersection of Product Design and Brand Design",
    excerpt:
      "Product and brand are often separate—they're stronger when they're aligned.",
    date: "2024-03-10",
    href: "/writing/product-design-and-brand-design",
  },
  {
    slug: "why-growth-marketing-needs-design-systems",
    title: "Why Growth Marketing Needs Better Design Systems",
    excerpt:
      "Growth teams ship fast—design systems keep quality and brand intact at that pace.",
    date: "2024-02-20",
    href: "/writing/why-growth-marketing-needs-design-systems",
  },
  {
    slug: "designing-brand-systems-startup-growth",
    title: "Designing Brand Systems for Startup Growth",
    excerpt:
      "How to build brand systems that scale with your startup—without overbuilding.",
    date: "2024-01-15",
    href: "/writing/designing-brand-systems-startup-growth",
  },
];

export const writingBodies: WritingBody[] = [
  {
    slug: "design-and-code-simultaneously",
    title: "Design and Code, Simultaneously",
    date: "2026-05-27",
    tools: "Claude",
    sections: [
      {
        paragraphs: [
          "There's a specific kind of frustration that every designer knows.",
          "You have a clear picture of how something should feel — the way the page breathes as you scroll, the way text appears word by word as if it's being written in real time, the way data comes alive in a visualization instead of sitting flat in a table. You can see it. You describe it. And then it enters the handoff.",
          "The ask goes in. The timeline stretches. Testing unique functionality takes time, and getting it right takes more. Back-and-forth over implementation details, compromises made somewhere between the mockup and the browser, features quietly dropped because they were adding two weeks and the sprint was closing. Not because anyone was doing anything wrong. Just because that's how the process worked.",
          "That tension is gone for me now.",
        ],
      },
      {
        heading: "How I work now",
        paragraphs: [
          "I work with Claude section by section — I input the brief, direct the layout, challenge it to add the interaction I actually want. Parallax scrolling. Typing effects. Custom data visualizations. The things that make a site feel alive rather than assembled. When something isn't right I don't file a ticket, I just say so. The conversation continues until it's right.",
          "Design and code happen at the same time, in the same session. I'm not designing a mockup to hand off — I'm building the thing itself, directing it the way I'd direct a shoot or a brand presentation. The aesthetic decisions and the functional decisions are the same decision.",
          "A multi-page site with custom functionality that used to take months now takes about a week.",
        ],
      },
      {
        heading: "What this has changed",
        paragraphs: [
          "The obvious answer is speed. But the more interesting change is creative access.",
          'I can now ask for the thing I actually want without the answer being "that\'ll add two weeks." Functionality that used to live only in the aspirational column of a design brief — the interactive, the animated, the genuinely alive — is now part of the first draft.',
          'I\'m getting to play with functionality in a way I never could before. To explore. To say "what if this section responded to scroll" and see it working in minutes rather than weeks. To build something and feel it, then change it, then feel it again.',
          "I'm experiencing this shift in real time, and that's the most exciting part of the work right now. The gap between what a designer can imagine and what they can actually build has never been smaller.",
          "That gap is where the best ideas used to get lost. Not anymore.",
        ],
      },
    ],
  },
  {
    slug: "figma-make-vs-claude-honest-comparison",
    title: "Figma Make vs Claude: An Honest Comparison",
    date: "2026-05-20",
    tools: "Figma Make, Claude",
    sections: [
      {
        paragraphs: [
          "I want to be clear upfront: this isn't a takedown. Figma is a tool I use every day and their AI product is evolving fast. But I've spent real time with both Figma Make and Claude for design work, and the difference is significant enough to be worth writing about honestly.",
        ],
      },
      {
        heading: "What Figma Make does well",
        paragraphs: [
          "The promise of Figma Make is real — generate UI directly inside your design environment without switching contexts. For certain tasks it delivers. Quick wireframes, basic component suggestions, getting something on the canvas fast when you need a starting point. If you're early in ideation and need to move, it works.",
        ],
      },
      {
        heading: "Where I kept hitting a ceiling",
        paragraphs: [
          "The moment I needed something specific — a particular layout logic, a data visualization, a component that behaved a certain way — I found myself back to manually correcting output that got me part of the way there. The conversation felt one-directional. I'd ask, it would generate, I'd fix. There wasn't much back-and-forth.",
        ],
      },
      {
        heading: "What working with Claude feels like instead",
        paragraphs: [
          "I started using Claude directly for design work — building sites, PDFs, emails, Figma frames, full design file structure — and the difference isn't just capability. It's the conversation.",
          'I describe what I need section by section. I push back when something\'s off. I ask for something more specific, more refined, more considered — and it responds to that. It holds the context of what we\'re building together and adjusts. When I say "this section feels too heavy, pull it back," it understands what that means in the context of what we\'ve already built.',
          "I've used it to build out full Figma frames, set up design file structure from a brief, and generate functionality I would have had to either hand off to a developer or compromise on entirely.",
        ],
      },
      {
        heading: "Where this leaves me",
        paragraphs: [
          "Both tools are worth knowing. They're not at the same place yet, and for the kind of design work I do — multi-page sites, interactive guides, brand systems with real functionality — Claude is where I spend my time.",
          "Figma Make will get better. I'll keep watching it. But right now, if I need to move quickly and stay in control of the output, the answer is clear.",
        ],
      },
    ],
  },
  {
    slug: "when-ai-replaced-the-photoshoot",
    title: "When AI Replaced the Photoshoot",
    date: "2026-05-13",
    tools: "Adobe Firefly",
    sections: [
      {
        paragraphs: [
          "We needed recipe images that hit an exact nutritional ratio.",
          "The project was a nutrition-focused guide built around the plate method — a framework where half the plate is vegetables and fruit, a quarter is grains or healthy carbs, and a quarter is protein. Every recipe had specific ingredients, specific proportions, a specific look. The imagery needed to show all of it accurately, or the guide wouldn't work.",
          "Stock photography doesn't work that way. You search, you scroll, you compromise. The protein is wrong. The portion sizes are off. The greens are there but the grain is missing. After enough searches you start negotiating with yourself — this is close enough — because the alternative is an expensive food photography shoot and a weeks-long production timeline.",
          "I stopped searching and started generating.",
          "For each recipe I input the dish name, the specific ingredients, the plating style, and the plate method ratios directly into Adobe Firefly. What came back was a dressed, styled plate image built around that exact meal — the right protein, the right grain, the right proportion of vegetables. Every time. In minutes.",
          "Greek yogurt chicken with saffron and garlic, quinoa, and a mixed green salad. Overhead shot, white background, plate method ratios accurate to the guide. It looks like it came from a food photographer's studio. It came from a prompt.",
          "No shoot. No location. No licensing fees. No back-and-forth over whether the broccoli should be roasted or raw. The image matched the content because I built it directly from the content.",
          "What changed for me wasn't just the time saved — it was the creative control. I wasn't browsing a library hoping something close enough existed. I was describing exactly what I needed and getting exactly that. The tool became part of the design process rather than a workaround for it.",
          "Close enough is not a forced choice anymore. That shift is bigger than it sounds.",
        ],
      },
    ],
  },
  {
    slug: "product-design-and-brand-design",
    title: "The Intersection of Product Design and Brand Design",
    date: "2024-03-10",
    sections: [
      {
        paragraphs: [
          "In many companies, product design and brand design live in different worlds. Product owns the app; brand owns marketing and campaigns. The result is a product that feels like one thing and a brand that feels like another.",
          "The best experiences come when product and brand share a common foundation. That doesn't mean everything looks the same—it means they use the same language: the same color semantics, type scale, and spatial rhythm. A user who sees an ad, lands on a page, and then uses the product should feel like they're in one coherent world.",
          "Getting there requires design systems that span both product and marketing. Shared tokens, shared components where it makes sense, and clear guidelines for when to diverge. It also requires collaboration: product and brand designers working from the same source of truth.",
          "Start by mapping where the two disciplines already overlap—signup flows, emails, in-app messaging—and build from there. The intersection is where the best opportunities are.",
        ],
      },
    ],
  },
  {
    slug: "why-growth-marketing-needs-design-systems",
    title: "Why Growth Marketing Needs Better Design Systems",
    date: "2024-02-20",
    sections: [
      {
        paragraphs: [
          "Growth marketing runs on iteration: new landing pages, ad variants, email sequences, and experiments. Without a design system, every new asset is a one-off. That leads to visual drift, inconsistent messaging, and a brand that feels fragmented.",
          "A growth-focused design system doesn't have to be as comprehensive as a product design system. It needs to cover the surfaces growth actually uses: landing page blocks, email components, ad creative templates, and maybe a few social formats. The emphasis should be on speed and reuse—components that can be composed quickly and stay on-brand.",
          "When design and growth share the same tokens and components, you get consistency without gatekeeping. Growth can ship experiments without waiting on design, and design can focus on raising the bar instead of firefighting.",
          "Invest in the system early. The longer you wait, the more one-off work piles up and the harder it is to retrofit.",
        ],
      },
    ],
  },
  {
    slug: "designing-brand-systems-startup-growth",
    title: "Designing Brand Systems for Startup Growth",
    date: "2024-01-15",
    sections: [
      {
        paragraphs: [
          "Building a brand system at a startup is different from doing it at a large company. You need enough structure to stay consistent, but not so much that it slows you down.",
          "Start with the basics: a clear positioning statement, a small set of design tokens (color, type, spacing), and a few core components. Document them in a single place—a Notion doc or a simple style guide—and get the team using them before you invest in a full design system.",
          'As the company grows, you can add more components and patterns. The key is to make the system extensible from day one. Use semantic naming (e.g. "primary", "surface") instead of one-off values so that when you need to support new channels or themes, you\'re not rewriting everything.',
          "Finally, treat the brand system as a product. Iterate on it based on how people actually use it. If a component is always overridden or ignored, simplify or replace it. The goal is clarity and consistency, not completeness.",
        ],
      },
    ],
  },
];

export function getWritingPost(slug: string) {
  return writingBodies.find((post) => post.slug === slug);
}

export function getWritingSlugs() {
  return writingBodies.map((post) => post.slug);
}

export function formatPostDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
