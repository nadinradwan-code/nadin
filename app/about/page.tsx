import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">About</p>
        <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em]">
          {site.name}
          <span className="text-[var(--accent)]">*</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
          Brand and product design leader with 12+ years across venture-stage
          health, performance DTC, and national-agency clients. Currently Art
          Director at Signos.
        </p>
      </div>
    </section>
  );
}
