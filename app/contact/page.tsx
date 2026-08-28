import type { Metadata } from "next";
import Link from "next/link";
import AvatarCircle from "@/components/AvatarCircle";
import { avatars, contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.body,
};

export default function ContactPage() {
  return (
    <section className="page-pad py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-center text-center">
          <AvatarCircle
            src={avatars.contact.src}
            alt={avatars.contact.alt}
            size="lg"
          />
        </div>

        <p className="eyebrow mb-3 text-center">Contact</p>
        <h1 className="text-center font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em]">
          {contact.headline}
          <span className="text-[var(--accent)]">*</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-[var(--muted)]">
          {contact.body}
        </p>

        <div className="text-center">
          <a
            href={`mailto:${contact.email}`}
            className="mt-10 inline-flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--accent)] sm:text-3xl"
          >
            {contact.email}
            <span aria-hidden="true" className="text-[var(--accent)]">
              →
            </span>
          </a>
        </div>

        <ul className="mt-12 space-y-4 border-t border-[var(--border)] pt-10">
          {contact.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
              >
                <span className="font-serif text-[var(--accent)]">*</span>
                {link.label}
                <span aria-hidden="true" className="font-bold text-[var(--accent)]">
                  →
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              <span className="font-serif text-[var(--accent)]">*</span>
              Resume
              <span aria-hidden="true" className="font-bold text-[var(--accent)]">
                →
              </span>
            </Link>
          </li>
          <li>
            <a
              href={site.resumePdfPath}
              download={site.resumePdfFilename}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              <span className="font-serif text-[var(--accent)]">*</span>
              Download PDF
              <span aria-hidden="true" className="font-bold text-[var(--accent)]">
                →
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
