export const site = {
  name: "Nadin Radwan",
  title: "Art Director, AI-Native Design",
  email: "hello@nadinradwan.com",
  linkedin: "https://www.linkedin.com/in/nadinradwandesign/",
  instagram: "https://www.instagram.com/nadinradwan/",
  resumePdfPath: "/Nadin_Radwan_Resume.pdf",
  resumePdfFilename: "Nadin_Radwan_Resume.pdf",
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
      "Drove design on the brand and product redesign for the first FDA-cleared continuous glucose system for weight management. Built the AI-augmented creative pipeline the team uses daily. First-month sales target met in three days. 65% increase in email signups. 47% lift in email conversion. Enterprise revenue grew 5x. TV acquisition costs down 70%.",
  },
  {
    dates: "Feb 2021 – Feb 2022",
    title: "Creative Manager — Conduit Digital",
    summary:
      "Led creative direction on Project Denali — a four-act product launch including the redesign of Conduit's Live Reports dashboard, partner tease, and paid public launch. A structure Conduit has continued to reuse.",
  },
  {
    dates: "Dec 2019 – Feb 2021",
    title: "Lead Graphic Designer — Raw Generation",
    summary:
      "Led design and built the modular email, web, SMS, and social system that took campaign launch time from a week to a day. Double-digit lifts in email open and click-through rates.",
  },
  {
    dates: "June 2014 – ~2019",
    title: "Graphic Designer → Lead Designer — Spitball Advertising",
    summary:
      "Started as Graphic Designer and grew into the lead designer role on the agency's biggest accounts. Led design and art-directed Cholula's Uncap Real Flavor campaign for three consecutive years. Designed the Castle Foods brand identity, still in use today. Designed the TIME thyroid cancer microsite for Jubilant Draximage, live for six years.",
  },
] as const;
