import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ReferencesCarousel from "@/components/ReferencesCarousel";
import Ticker from "@/components/Ticker";
import { hero, homeAboutTeaser, projects, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative min-h-[calc(100svh-65px)] overflow-hidden bg-[var(--foreground)] text-[var(--background)]">
        <div className="absolute inset-0">
          <Image
            src={hero.images.desktop}
            alt={hero.images.alt}
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center md:block"
          />
          <Image
            src={hero.images.mobile}
            alt={hero.images.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent" />
        </div>

        <div className="page-pad relative z-10 flex min-h-[calc(100svh-65px)] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-20">
          <div className="max-w-xl">
            <p className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[11px] tracking-wide text-white/90 backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              />
              {site.statusPill}
            </p>

            <h1 className="animate-fade-up animate-delay-1 font-serif text-[clamp(40px,8vw,72px)] font-bold leading-[0.95] tracking-[-0.03em]">
              {hero.nameLine}
              <span className="text-[var(--accent)]">{hero.accentMark}</span>
            </h1>

            <p className="animate-fade-up animate-delay-2 mt-4 font-serif text-xl text-white/90 sm:text-2xl">
              <span className="text-[var(--accent)]">*</span> {hero.roleLine}
            </p>

            <p className="animate-fade-up animate-delay-3 mt-6 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              {hero.body}
            </p>

            <div className="animate-fade-up animate-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              {hero.ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
                >
                  <span className="font-serif text-[var(--accent)]">*</span>
                  {cta.label}
                  <span aria-hidden="true" className="font-bold text-[var(--accent)]">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* Selected work */}
      <section
        id="selected-work"
        className="page-pad scroll-mt-20 py-20 lg:py-28"
      >
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold tracking-tight">
            Selected Work
            <span className="text-[var(--accent)]">*</span>
          </h2>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            All case studies
            <span aria-hidden="true" className="font-bold text-[var(--accent)]">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              href={project.href}
              priority={i < 2}
            />
          ))}
        </div>
      </section>

      <ReferencesCarousel />

      {/* About teaser */}
      <section className="border-t border-[var(--border)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src={homeAboutTeaser.images.desktop}
              alt={homeAboutTeaser.images.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="hidden object-cover lg:block"
            />
            <Image
              src={homeAboutTeaser.images.mobile}
              alt={homeAboutTeaser.images.alt}
              fill
              sizes="100vw"
              className="object-cover lg:hidden"
            />
          </div>
          <div className="page-pad flex flex-col justify-center py-16 lg:px-16 lg:py-24">
            <p className="eyebrow mb-4">{homeAboutTeaser.eyebrow}</p>
            <p className="max-w-md font-serif text-2xl leading-snug tracking-tight text-[var(--foreground)] sm:text-3xl">
              {homeAboutTeaser.body}
            </p>
            <Link
              href={homeAboutTeaser.cta.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              <span className="font-serif text-[var(--accent)]">*</span>
              {homeAboutTeaser.cta.label}
              <span aria-hidden="true" className="font-bold text-[var(--accent)]">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
