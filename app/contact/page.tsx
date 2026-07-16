import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">Contact</p>
        <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em]">
          Let&apos;s talk
          <span className="text-[var(--accent)]">*</span>
        </h1>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:underline"
        >
          {site.email}
          <span aria-hidden="true" className="font-bold text-[var(--accent)]">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
