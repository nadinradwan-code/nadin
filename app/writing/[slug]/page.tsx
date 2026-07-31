import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPostDate,
  getWritingPost,
  getWritingSlugs,
} from "@/lib/writing";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWritingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) return { title: "Writing" };
  return {
    title: post.title,
    description: post.sections[0]?.paragraphs[0],
  };
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) notFound();

  return (
    <article className="page-pad py-16 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          ← Writing
        </Link>

        <h1 className="mt-8 font-serif text-[clamp(32px,5vw,48px)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--foreground)]">
          {post.title}
          <span className="text-[var(--accent)]">*</span>
        </h1>
        <p className="eyebrow mt-4">{formatPostDate(post.date)}</p>

        <div className="mt-12 space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0].slice(0, 24)}>
              {section.heading ? (
                <h2 className="mb-4 font-serif text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                  {section.heading}
                </h2>
              ) : null}
              <div className="prose-body text-base leading-relaxed text-[var(--muted)]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {post.tools ? (
          <p className="mt-14 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
            Tools used: {post.tools}
          </p>
        ) : null}
      </div>
    </article>
  );
}
