"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/work");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-sm animate-fade-in">
      <nav className="page-pad flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-baseline gap-0.5 font-serif text-xl font-bold tracking-tight text-[var(--foreground)]"
        >
          {site.name}
          <span
            aria-hidden="true"
            className="font-serif text-3xl leading-none text-[var(--accent)]"
          >
            *
          </span>
        </Link>

        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex items-baseline gap-0.5 text-sm transition-colors duration-200 ${
                    active
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="font-serif text-lg leading-none text-[var(--accent)]"
                    >
                      *
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`block h-px w-6 origin-center bg-[var(--foreground)] transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[var(--foreground)] transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 origin-center bg-[var(--foreground)] transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open ? (
        <ul className="flex flex-col gap-4 border-t border-[var(--border)] px-6 py-6 sm:hidden">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-baseline gap-0.5 text-base text-[var(--foreground)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="font-serif text-xl leading-none text-[var(--accent)]"
                    >
                      *
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </header>
  );
}
