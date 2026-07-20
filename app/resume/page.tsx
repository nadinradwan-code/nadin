import type { Metadata } from "next";
import { experience, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and experience.",
};

export default function ResumePage() {
  return (
    <section className="px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">Resume</p>
        <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em] text-[var(--foreground)]">
          Experience
          <span className="font-serif text-[var(--accent)]">*</span>
        </h1>

        <div className="mt-12 space-y-12">
          {experience.map((role) => (
            <div key={role.title}>
              <p className="eyebrow mb-1">{role.dates}</p>
              <h2 className="font-serif text-xl font-bold text-[var(--foreground)]">
                {role.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {role.summary}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-10">
          <a
            href={site.resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:underline"
          >
            <span className="font-serif text-[var(--accent)]">*</span>
            Download full resume (PDF){" "}
            <span aria-hidden="true" className="font-bold text-[var(--accent)]">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
