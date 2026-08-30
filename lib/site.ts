export const site = {
  name: "Nadin Radwan",
  title: "Art Director, AI-Native Design",
  description:
    "Art Director with 12+ years of brand and product work. Currently at Signos Health, leading brand and AI-assisted creative for the first FDA-cleared glucose system for weight.",
  email: "nadinradwan@gmail.com",
  location: "Asbury Park, NJ",
  statusPill: "online: brb brewing coffee",
  linkedin: "https://www.linkedin.com/in/nadinradwandesign/",
  instagram: "https://www.instagram.com/nadinradwan/",
  /** Primary resume download, hosted with the site */
  resumePdfPath: "/Nadin_Radwan_Resume_07-2026.pdf",
  resumePdfFilename: "Nadin_Radwan_Resume_07-2026.pdf",
  /** Optional Drive mirror */
  resumeDriveUrl:
    "https://drive.google.com/file/d/1Hm8XvD1IvHske1wAmHhPi4xNksLFEJg0/view?usp=drive_link",
} as const;

/** Work points to homepage (live pattern); /work also exists as index */
export const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/writing", label: "Notebook" },
] as const;

export const avatars = {
  resume: {
    src: "/images/avatars/avatar-resume-wave.png",
    alt: "Portrait of Nadin Radwan",
  },
  contact: {
    src: "/images/avatars/avatar-contact-phone.png",
    alt: "Portrait of Nadin Radwan",
  },
} as const;

export const companyBanners = [
  {
    company: "Signos Health",
    logoAlt: "Signos Health",
    backgroundColor: "#FD3576",
    textColor: "#ffffff",
  },
  {
    company: "Conduit Digital",
    logoAlt: "Conduit Digital",
    backgroundColor: "#00A8E9",
    textColor: "#ffffff",
  },
  {
    company: "Raw Generation",
    logoAlt: "Raw Generation",
    backgroundColor: "#7519C6",
    textColor: "#ffffff",
  },
  {
    company: "Spitball Advertising",
    logoAlt: "Spitball Advertising",
    backgroundColor: "#87C957",
    textColor: "#0F0F0F",
  },
] as const;

export const tickerItems = [
  "Brand Systems",
  "Art Direction",
  "Product UI",
  "Campaigns",
  "AI-Assisted Production",
  "Creative Direction",
] as const;

export const hero = {
  nameLine: "I'm Nadin Radwan",
  accentMark: "*",
  roleLine: "Art Director, AI-Native Design",
  body: "12+ years building brand and product work that ships. Currently Art Director at Signos Health, where I drove design on the rebrand of the first FDA-cleared glucose system for weight and built the AI pipeline the team uses every day. Open to senior in-house roles at companies changing how people live, and select consulting engagements.",
  ctas: [
    { label: "View work", href: "/#selected-work" },
    { label: "Get in touch", href: "/contact" },
  ],
  images: {
    desktop: "/images/hero-desktop.png",
    mobile: "/images/hero-mobile.png",
    alt: "Nadin Radwan holding two small paintings",
  },
} as const;

export const homeAboutTeaser = {
  eyebrow: "About",
  body: "I do my best work on small senior teams where the bar is high and the brief is real. Hands-on, in-the-file, based in Asbury Park, NJ, remote-first, open to hybrid roles.",
  cta: { label: "Full bio", href: "/about" },
  images: {
    desktop: "/images/home-about.png",
    mobile: "/images/home-about-mobile.png",
    alt: "Nadin Radwan at her desk",
  },
} as const;

export const projects = [
  {
    slug: "signos-health",
    title: "Signos Health",
    description:
      "Brand, product redesign, and AI-assisted creative for the first FDA-cleared glucose system for weight.",
    tags: "Branding · Product UI · Campaigns · AI",
    image: "/images/projects/signos/card-signos.png",
    tickerImage: "/images/projects/ticker/signos.png",
    href: "/work/signos-health",
  },
  {
    slug: "cholula",
    title: "Cholula Hot Sauce",
    description:
      "Three-year run as lead designer on Uncap Real Flavor, national TV, chalk-on-slate print, social, broadcast.",
    tags: "Campaigns · Art Direction · Print · Video",
    image: "/images/projects/cholula/card-cholula.png",
    tickerImage: "/images/projects/ticker/cholula.png",
    href: "/work/cholula",
  },
  {
    slug: "raw-generation",
    title: "Raw Generation",
    description:
      "Modular email, web, SMS, and social system that took campaign launch time from a week to a day.",
    tags: "Email · Web · Social · SMS",
    image: "/images/projects/raw-generation/card-raw-generation.png",
    tickerImage: "/images/projects/ticker/raw-generation.png",
    href: "/work/raw-generation",
  },
  {
    slug: "castle-foods",
    title: "Castle Foods",
    description:
      "Built the brand from logo through type, color, and packaging direction. System still in use, absorbing new products without a rebuild.",
    tags: "Brand Identity · Packaging · Design System",
    image: "/images/projects/castle-foods/card-castle-foods.png",
    tickerImage: "/images/projects/ticker/castle-foods.png",
    href: "/work/castle-foods",
  },
  {
    slug: "project-denali",
    title: "Project Denali",
    description:
      "Four-act product launch at Conduit Digital, dashboard redesign, partner tease, and paid launch.",
    tags: "Creative Direction · Branding · Product",
    image: "/images/projects/project-denali/card-project-denali.png",
    tickerImage: "/images/projects/ticker/project-denali.png",
    href: "/work/project-denali",
  },
  {
    slug: "time-thyroid",
    title: "TIME Thyroid Cancer",
    description:
      "Patient-education microsite for Jubilant Draximage. Live six years, still referenced by patients and care teams.",
    tags: "Web Design · Illustration · Branding",
    image: "/images/projects/time-thyroid/card-time-thyroid.png",
    tickerImage: "/images/projects/ticker/time-thyroid.png",
    href: "/work/time-thyroid",
  },
] as const;

export const references = [
  {
    quote:
      "She brings such a rare mix of professionalism, creative curiosity, and genuine warmth to her work. We worked together on products for continuous glucose monitor users, a space that requires empathy, scientific understanding, and strong systems thinking. Nadin is a true professional who delivers exceptional work, communicates clearly, and lifts up everyone around her.",
    name: "Jonathan Nguyen",
    title: "Lead Product Designer, SmartMoving Software",
    relationship: "Worked together at Signos Health",
  },
  {
    quote:
      "Our client was always pleased by the thoughtful and creative work she would bring to the table, and her passion for the brand and its needs through creative interpretation was always apparent. She was a trusted partner and a true asset to the team. Any team would be lucky to have her.",
    name: "Kristin Reiser",
    title: "Account Director",
    relationship: "Worked together at Spitball Advertising, 3 years on Cholula",
  },
  {
    quote:
      "Nadin consistently demonstrates the ability to manage responsibilities with a high level of organization and attention to detail, while also being collaborative and approachable in group settings. With Nadin, every voice is heard. I wish I had more projects to share with her.",
    name: "Jay McLeod",
    title: "Vice President of SEO, Ferocious Media",
    relationship: "Worked together at Conduit",
  },
  {
    quote:
      "Her creativity stood out in how she tailored her work to meet client needs. She always showed passion and dedication to delivering results, and I'm confident she will bring the same commitment to any future role.",
    name: "Christian Ortega",
    title: "Paid Media Supervisor, BarkleyOKRP",
    relationship: "Worked together at Conduit",
  },
  {
    quote:
      "She demonstrated a rare combination of artistic vision and technical skill, with a particular strength in illustration and an impressive eye for detail. She's a dedicated, hard-working professional who thrives as both an independent designer and a collaborative teammate. I continue to find her work inspiring.",
    name: "Kristine Keeys",
    title: "Product Designer & Photographer",
    relationship: "College colleague & design mentor",
  },
] as const;

/** July 2026 resume copy, condensed on-page paragraphs from updatedExperienceFromPdf */
export const experience = [
  {
    dates: "Feb 2022 – Present",
    title: "Art Director",
    company: "Signos Health",
    summary:
      "Promoted to Art Director in Feb 2025 after leading the brand and product redesign for the first FDA-cleared continuous glucose system for weight management. Owns creative strategy across product, marketing, lifecycle, and paid acquisition. Built the AI-augmented creative pipeline that scaled performance creative from ~15 to 155 on-brand variants per campaign. First-month sales target met in three days. 65% increase in email signups. 47% lift in email conversion. 40% lift in site conversion. Enterprise revenue grew 5x. TV acquisition costs down 70%.",
  },
  {
    dates: "Feb 2021 – Feb 2022",
    title: "Creative Manager",
    company: "Conduit Digital",
    summary:
      "Owned creative direction across web, video, and brand for a small in-house team. Led brand and art direction on Project Denali, a four-act staged launch that became the agency playbook for product launches that followed. Directed web, motion, and campaign deliverables; rebuilt workflows that materially reduced campaign turnaround time.",
  },
  {
    dates: "Dec 2019 – Feb 2021",
    title: "Lead Graphic Designer",
    company: "Raw Generation",
    summary:
      "Sole designer for a fast-growing DTC juice and cleanse brand. Architected a modular email, web, SMS, and social system across five channels that turned campaign launches into a one-day assembly job. Drove a 24% year-over-year lift in email open rate and a 31% lift in click-through by treating lifecycle as a first-class brand surface.",
  },
  {
    dates: "June 2014 – Dec 2019",
    title: "Graphic Designer → Senior Designer",
    company: "Spitball Advertising",
    summary:
      "Five-year national-agency tenure, promoted from Graphic Designer to Senior Designer. Art-directed Cholula's Uncap Real Flavor campaign for three years, including the brand's first national TV commercial (estimated 12% brand awareness lift and $14M in earned media). Led design for the TIME thyroid cancer education site (live six years, WCAG AA) and the Castle Spices identity system still in use today.",
  },
] as const;

export const education =
  "B.S. Graphic Design Communication · Philadelphia University (now Thomas Jefferson University)";

export const capabilities =
  "Brand strategy and expression. Brand systems and design tokens. Product UI and product-marketing integration. Lifecycle and email design systems. Performance creative at scale. AI-augmented creative production. Creative direction across in-house and external teams. Campaign architecture and staged launches.";

export const about = {
  pageTitle: "About · Nadin Radwan",
  headline:
    "I make work that gets shared, with AI doing the volume and me holding the bar.",
  paragraphs: [
    "I'm Nadin. I've been a designer for 12+ years. The work I'm proudest of is brand and campaign creative that travels: ads people screenshot, emails people open, brand systems that hold across surfaces a small team could never have shipped on its own.",
    "I'm currently Art Director at Signos Health, where I drove design on the brand and product redesign for the first FDA-cleared continuous glucose system for weight management. The first-month sales target was met in three days. Site engagement work drove a 65% increase in email signups, and the email program lifted conversions 47%. The enterprise creative system, landing pages, conference displays, pitch decks, sales video, helped grow enterprise revenue 5x in a year. TV channel acquisition costs came down 70% under our art direction.",
    "The part of my work I'm most excited about right now is AI. In 2024 I built the AI-augmented creative pipeline our team uses every day, Claude and ChatGPT for strategy and copy, Midjourney and Firefly for image, custom Claude Projects and GPTs for the recurring tasks. Concept-to-comp time dropped from days to hours, and the 2025 holiday launch shipped 222 brand-consistent assets out of the pipeline. AI is not a replacement for taste. It's a leverage layer for it. The curation is mine. The volume is what I delegate.",
    "Before Signos, five years at Spitball Advertising, where I started as a Graphic Designer and grew into the lead designer role on the agency's biggest accounts. I led design and art-directed Cholula's Uncap Real Flavor campaign for three consecutive years, including the national TV commercial and the chalk-on-slate visual system that ran across print, social, and broadcast. I designed the TIME thyroid cancer microsite for Jubilant Draximage, which has been live for six years and is still referenced by patients and care teams. And I built the Castle Foods identity from logo through type, color, and packaging direction; the system is still in use today, absorbing new products without needing a rebuild.",
    "Between Spitball and Signos, I led design at Raw Generation, where I built the modular email, web, SMS, and social system that let a small marketing team launch new campaigns in a day instead of a week, with double-digit lifts in email open and click-through. And I led creative direction on Project Denali at Conduit, a four-act launch that included redesigning the agency dashboard, teasing the rollout to partners, and the paid launch, a structure Conduit has continued to reuse.",
    "I do my best work on small senior teams where the bar is high and the brief is real. I'm hands-on. I want to be in the file, not just art-directing it. I care about typography and color and motion that supports the story instead of getting in front of it. I'm based in Asbury Park, NJ, remote-first, open to hybrid roles.",
    "I'm currently open to senior in-house roles at companies working on something that meaningfully changes how people live: health tech, AI and creative tools, things that give people leverage over their own time. I also take on a small number of consulting engagements where I can help a founding team get their brand and product surface to a launch-ready bar.",
    "The fastest way to reach me is nadinradwan@gmail.com.",
  ],
} as const;

export const contact = {
  pageTitle: "Contact, Nadin Radwan",
  headline: "Let's talk",
  body: "Open to senior in-house roles and select consulting engagements. The fastest way to reach me:",
  email: "nadinradwan@gmail.com",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nadinradwandesign/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/nadinradwan/",
    },
  ],
} as const;

export const workIndex = {
  pageTitle: "Work, Nadin Radwan",
  headline: "Selected case studies",
  intro:
    "Brand systems, campaigns, and creative direction across agency, DTC, and health tech.",
} as const;
