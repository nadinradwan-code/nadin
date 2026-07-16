import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">Work</p>
        <h1 className="font-serif text-[clamp(40px,7vw,72px)] font-bold leading-[0.95] tracking-[-0.03em] text-[var(--foreground)]">
          {site.name}
          <span className="text-[var(--accent)]">*</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)]">
          {site.title}. Brand and product systems across health, performance, and
          national campaigns.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:underline"
          >
            <span className="font-serif text-[var(--accent)]">*</span>
            View resume
            <span aria-hidden="true" className="font-bold text-[var(--accent)]">
              →
            </span>
          </Link>
          <a
            href={site.resumePdfPath}
            download={site.resumePdfFilename}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:underline"
          >
            Download PDF
            <span aria-hidden="true" className="font-bold text-[var(--accent)]">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
