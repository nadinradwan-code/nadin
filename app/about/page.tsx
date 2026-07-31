import type { Metadata } from "next";
import Link from "next/link";
import { about, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: about.headline,
};

export default function AboutPage() {
  return (
    <section className="page-pad py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">About</p>
        <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--foreground)]">
          {about.headline}
          <span className="text-[var(--accent)]">*</span>
        </h1>

        <div className="prose-body mt-12 space-y-0 text-base leading-relaxed text-[var(--muted)]">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-6 border-t border-[var(--border)] pt-10">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:underline"
          >
            <span className="font-serif text-[var(--accent)]">*</span>
            {site.email}
            <span aria-hidden="true" className="font-bold text-[var(--accent)]">
              →
            </span>
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:underline"
          >
            View resume
            <span aria-hidden="true" className="font-bold text-[var(--accent)]">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
