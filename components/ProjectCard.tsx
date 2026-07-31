import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string;
  image: string;
  href: string;
  priority?: boolean;
};

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  href,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--border)]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
      <div className="mt-5">
        <p className="eyebrow mb-2">{tags}</p>
        <h3 className="font-serif text-2xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
          {title}
          <span className="text-[var(--accent)]">*</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      </div>
    </Link>
  );
}
