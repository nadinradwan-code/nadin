import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] safe-bottom">
      <div className="page-pad py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-bold tracking-tight text-[var(--foreground)]">
              {site.name}
              <span className="text-[var(--accent)]">*</span>
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{site.title}</p>
          </div>
          <div>
            <p className="eyebrow">Contact me</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-block text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="eyebrow">Social</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                >
                  LinkedIn
                  <span aria-hidden="true" className="font-bold text-[var(--accent)]">
                    →
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                >
                  Instagram
                  <span aria-hidden="true" className="font-bold text-[var(--accent)]">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:text-right">
            <p className="text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-[var(--muted)]">Designed with care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
