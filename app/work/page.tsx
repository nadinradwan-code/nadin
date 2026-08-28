import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects, workIndex } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: workIndex.intro,
};

export default function WorkIndexPage() {
  return (
    <section className="page-pad py-16 lg:py-24">
      <div className="mb-14 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Work</p>
          <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em]">
            {workIndex.headline}
            <span className="text-[var(--accent)]">*</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
            {workIndex.intro}
          </p>
        </div>
        <p className="eyebrow shrink-0">
          {projects.length} case studies
        </p>
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
  );
}
