import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
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
  if (!post) return { title: "Notebook" };
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
          ← Notebook
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
              {section.images?.length ? (
                <div className="mt-8 space-y-8">
                  {section.images.map((image) => (
                    <figure key={image.src}>
                      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--border)]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 672px"
                          className="object-cover"
                          unoptimized={image.src.endsWith(".gif")}
                        />
                      </div>
                      {image.caption ? (
                        <figcaption className="mt-3 text-sm text-[var(--muted)]">
                          {image.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        {post.tools ? (
          <p className="mt-14 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
            Tools used: {post.tools}
          </p>
        ) : null}

        <footer className="mt-14 border-t border-[var(--border)] pt-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-[var(--border)]">
              <Image
                src="/images/hero-mobile.png"
                alt={site.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <p className="mt-4 font-serif text-lg font-bold tracking-tight text-[var(--foreground)]">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">{site.title}</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
