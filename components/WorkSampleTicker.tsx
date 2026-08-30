import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site";

export default function WorkSampleTicker() {
  const items = [...projects, ...projects];

  return (
    <div className="group/ticker overflow-hidden border-y border-white/10 bg-[var(--foreground)] text-[var(--background)]">
      <div className="ticker-track gap-10 px-6 py-5 group-hover/ticker:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((project, index) => (
          <Link
            key={`${project.slug}-${index}`}
            href={project.href}
            className="group inline-flex shrink-0 items-center gap-4 rounded-sm outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <span className="relative h-16 w-24 overflow-hidden rounded-sm border border-white/15 bg-white/5 sm:h-20 sm:w-32">
              <Image
                src={project.tickerImage}
                alt=""
                fill
                sizes="128px"
                className="object-cover"
                aria-hidden="true"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-medium tracking-wide uppercase sm:text-base">
                {project.title}
              </span>
              <span className="mt-0.5 inline-flex items-center gap-1 text-xs text-white/60 transition-colors group-hover:text-[var(--accent)]">
                View case
                <span aria-hidden="true">→</span>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="font-serif text-lg leading-none text-[var(--accent)]"
            >
              *
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
