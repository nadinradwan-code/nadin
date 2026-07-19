export const site = {
  name: "Nadin Radwan",
  title: "Art Director, AI-Native Design",
  email: "hello@nadinradwan.com",
  linkedin: "https://www.linkedin.com/in/nadinradwan/",
  instagram: "https://www.instagram.com/nadinradwan/",
  resumePdfPath: "/Nadin_Radwan_Resume_07-2026.pdf",
  resumePdfFilename: "Nadin_Radwan_Resume_07-2026.pdf",
} as const;

export const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/writing", label: "Thoughts" },
] as const;

export const experience = [
  {
    dates: "Feb 2022 – Present",
    title: "Art Director — Signos Health",
    summary:
      "Promoted to Art Director in Feb 2025 after leading the brand and product redesign for the first FDA-cleared continuous glucose system for weight management. Built the AI-augmented creative pipeline that scaled performance creative from ~15 to 155 variants per campaign. First-month sales target met in three days. 65% increase in email signups. 47% lift in email conversion. 40% lift in site conversion. Enterprise revenue grew 5x. TV acquisition costs down 70%.",
  },
  {
    dates: "Feb 2021 – Feb 2022",
    title: "Creative Manager — Conduit Digital",
    summary:
      "Owned creative direction across web, video, and brand. Led brand and art direction on Project Denali — a four-act staged launch that became the agency playbook for product launches that followed.",
  },
  {
    dates: "Dec 2019 – Feb 2021",
    title: "Lead Graphic Designer — Raw Generation",
    summary:
      "Sole designer for a fast-growing DTC juice brand. Architected a modular email, web, SMS, and social system that turned campaign launches into a one-day assembly job. 24% YoY lift in email open rate and 31% lift in click-through.",
  },
  {
    dates: "June 2014 – Dec 2019",
    title: "Graphic Designer → Senior Designer — Spitball Advertising",
    summary:
      "Five-year national-agency tenure, promoted from Graphic Designer to Senior Designer. Art-directed Cholula's Uncap Real Flavor campaign for three years, including the brand's first national TV commercial. Led design for the TIME thyroid cancer education site (live six years) and the Castle Spices identity system.",
  },
] as const;
