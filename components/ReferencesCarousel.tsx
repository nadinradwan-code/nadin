"use client";

import { useCallback, useEffect, useState } from "react";
import { references } from "@/lib/site";

export default function ReferencesCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const current = references[index];

  const go = useCallback((next: number) => {
    setVisible(false);
    window.setTimeout(() => {
      setIndex((next + references.length) % references.length);
      setVisible(true);
    }, 180);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((currentIndex) => (currentIndex + 1) % references.length);
        setVisible(true);
      }, 180);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="page-pad border-t border-[var(--border)] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-10">References</p>
        <div
          className={`reference-fade min-h-[220px] ${
            visible ? "reference-fade-active" : "reference-fade-enter"
          }`}
        >
          <blockquote className="font-serif text-2xl leading-snug tracking-tight text-[var(--foreground)] sm:text-3xl">
            “{current.quote}”
          </blockquote>
          <div className="mt-8">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              {current.name}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">{current.title}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {current.relationship}
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            aria-label="Previous reference"
          >
            ←
          </button>
          <p className="text-xs tracking-widest text-[var(--muted)] uppercase">
            {index + 1} / {references.length}
          </p>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            aria-label="Next reference"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
