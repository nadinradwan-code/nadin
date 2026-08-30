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

function MenuButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] sm:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-nav"
      onClick={onToggle}
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
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((value) => !value);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white animate-fade-in safe-top">
        <nav className="page-pad flex items-center justify-between py-3 sm:py-4">
          <Link
            href="/"
            className="flex min-h-11 items-baseline gap-0.5 font-serif text-xl font-bold tracking-tight text-[var(--foreground)]"
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

          <MenuButton open={open} onToggle={toggleMenu} />
        </nav>
      </header>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] sm:hidden"
            onClick={closeMenu}
          />
          <div
            id="mobile-nav"
            className="fixed inset-x-0 top-0 z-[70] flex max-h-[100dvh] flex-col overflow-y-auto border-b border-[var(--border)] bg-[var(--background)] shadow-lg sm:hidden safe-top safe-bottom"
          >
            <div className="page-pad flex items-center justify-between py-3">
              <Link
                href="/"
                className="flex min-h-11 items-baseline gap-0.5 font-serif text-xl font-bold tracking-tight text-[var(--foreground)]"
                onClick={closeMenu}
              >
                {site.name}
                <span
                  aria-hidden="true"
                  className="font-serif text-3xl leading-none text-[var(--accent)]"
                >
                  *
                </span>
              </Link>
              <MenuButton open={open} onToggle={closeMenu} />
            </div>

            <ul className="page-pad flex flex-col gap-1 pb-8 pt-2">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex min-h-12 items-center gap-1 rounded-md px-1 text-lg transition-colors ${
                        active
                          ? "font-medium text-[var(--foreground)]"
                          : "text-[var(--muted)]"
                      }`}
                      onClick={closeMenu}
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
          </div>
        </>
      ) : null}
    </>
  );
}
