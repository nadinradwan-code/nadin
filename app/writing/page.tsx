import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, writingMeta, writingPosts } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Thoughts",
  description: writingMeta.intro,
};

export default function WritingPage() {
  return (
    <section className="page-pad py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">{writingMeta.navLabel}</p>
        <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em]">
          Writing
          <span className="text-[var(--accent)]">*</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)]">
          {writingMeta.intro}
        </p>

        <ul className="mt-14 divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {writingPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={post.href}
                className="group block py-8 transition-colors"
              >
                <p className="eyebrow mb-2">{formatPostDate(post.date)}</p>
                <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                  {post.title}
                  <span className="text-[var(--accent)]">*</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
