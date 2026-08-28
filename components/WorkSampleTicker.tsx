import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site";

export default function WorkSampleTicker() {
  const items = [...projects, ...projects];

  return (
    <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--foreground)] py-3 text-[var(--background)]">
      <div className="ticker-track gap-8 px-6" aria-label="Work samples">
        {items.map((project, index) => (
          <Link
            key={`${project.slug}-${index}`}
            href={project.href}
            className="inline-flex shrink-0 items-center gap-4 transition-opacity hover:opacity-80"
          >
            <span className="relative h-10 w-14 overflow-hidden rounded-sm border border-white/15">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="56px"
                className="object-cover"
                aria-hidden="true"
              />
            </span>
            <span className="text-sm font-medium tracking-wide uppercase">
              {project.title}
            </span>
            <span className="font-serif text-lg leading-none text-[var(--accent)]">
              *
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
