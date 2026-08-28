import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseImageFrame from "@/components/CaseImageFrame";
import {
  getCaseStudy,
  getCaseStudySlugs,
  type CaseSection,
} from "@/lib/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs()
    .filter((slug) => slug !== "signos-health")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Work" };
  return {
    title: study.title,
    description: study.metaDescription ?? study.lede ?? study.intro,
  };
}

function SectionBlock({ section }: { section: CaseSection }) {
  if (!section.paragraphs.length && !section.images?.length) {
    return null;
  }

  return (
    <section className="border-t border-[var(--border)] pt-14">
      <p className="eyebrow mb-3">{section.heading}</p>
      {section.subhead ? (
        <h3 className="mb-6 max-w-2xl font-serif text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
          {section.subhead}
        </h3>
      ) : null}

      {section.paragraphs.length ? (
        <div className="prose-body max-w-2xl text-base leading-relaxed text-[var(--muted)]">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {section.keyDecision ? (
        <div className="mt-8 max-w-2xl border-l-2 border-[var(--accent)] pl-5">
          <p className="eyebrow mb-2">Key decision</p>
          <p className="text-sm font-medium leading-relaxed text-[var(--foreground)]">
            {section.keyDecision.decision}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            {section.keyDecision.why}
          </p>
        </div>
      ) : null}

      {section.links?.length ? (
        <ul className="mt-6 space-y-2">
          {section.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:underline"
              >
                {link.label}
                <span aria-hidden="true" className="font-bold text-[var(--accent)]">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {section.images?.length ? (
        <div className="mt-10 space-y-8">
          {section.images.map((image, i) => (
            <CaseImageFrame
              key={image.path}
              image={image}
              caption={
                section.imageCaptions?.[i] ??
                (i === 0 ? section.imageCaption : undefined)
              }
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const heroImage = study.images[0];

  return (
    <article>
      <header className="page-pad py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4">{study.eyebrow}</p>
          <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-bold leading-[0.98] tracking-[-0.03em] text-[var(--foreground)]">
            {study.title}
            <span className="text-[var(--accent)]">*</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl leading-snug text-[var(--muted)] sm:text-2xl">
            {study.lede}
          </p>
          <p className="eyebrow mt-6">{study.tags}</p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
            {study.intro}
          </p>
        </div>
      </header>

      {heroImage ? (
        <div className="page-pad">
          <div className="mx-auto max-w-5xl">
            <CaseImageFrame
              image={heroImage}
              variant="hero"
              priority
              label="Hero"
            />
          </div>
        </div>
      ) : null}

      <div className="page-pad mx-auto max-w-4xl space-y-14 py-16 lg:py-24">
        {study.sections.map((section) => (
          <SectionBlock key={section.heading} section={section} />
        ))}

        {study.videos?.length ? (
          <section className="border-t border-[var(--border)] pt-14">
            <p className="eyebrow mb-8">Video</p>
            <div className="space-y-10">
              {study.videos.map((video) => (
                <div key={video.embed}>
                  <p className="mb-3 text-sm text-[var(--muted)]">{video.title}</p>
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <iframe
                      src={video.embed}
                      title={video.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {study.testimonials?.length ? (
          <section className="border-t border-[var(--border)] pt-14">
            <p className="eyebrow mb-10">From the team</p>
            <div className="space-y-12">
              {study.testimonials.map((item) => (
                <blockquote key={item.name}>
                  <p className="font-serif text-xl leading-snug tracking-tight text-[var(--foreground)] sm:text-2xl">
                    “{item.quote}”
                  </p>
                  <footer className="mt-4">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{item.title}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        ) : null}

        <div className="border-t border-[var(--border)] pt-12">
          <p className="eyebrow mb-3">Next project</p>
          <Link
            href={study.nextProject.href}
            className="inline-flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            {study.nextProject.title}
            <span className="text-[var(--accent)]">*</span>
            <span aria-hidden="true" className="text-lg font-bold text-[var(--accent)]">
              →
            </span>
          </Link>
          <div className="mt-8">
            <Link
              href="/work"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              ← All work
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
