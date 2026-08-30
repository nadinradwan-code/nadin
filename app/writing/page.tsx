import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatPostDate, writingMeta, writingPosts } from "@/lib/writing";

export const metadata: Metadata = {
  title: writingMeta.pageHeading,
  description: writingMeta.intro,
};

export default function WritingPage() {
  return (
    <section className="page-pad py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">{writingMeta.navLabel}</p>
        <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em]">
          {writingMeta.pageHeading}
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
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  {post.image ? (
                    <div className="relative h-44 w-full shrink-0 overflow-hidden bg-[var(--border)] sm:h-40 sm:w-44 md:w-52">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 208px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <p className="eyebrow mb-2">{formatPostDate(post.date)}</p>
                    <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                      {post.title}
                      <span className="text-[var(--accent)]">*</span>
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
