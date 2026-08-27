"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { references } from "@/lib/site";

export default function ReferencesCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);
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

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX;
    if (touchEndX === undefined) return;

    const delta = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < 48) return;
    go(delta > 0 ? index - 1 : index + 1);
  };

  return (
    <section className="page-pad border-t border-[var(--border)] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-8 sm:mb-10">References</p>
        <div
          className={`reference-fade min-h-[200px] sm:min-h-[220px] ${
            visible ? "reference-fade-active" : "reference-fade-enter"
          }`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <blockquote className="font-serif text-[clamp(1.25rem,4.5vw,1.875rem)] leading-snug tracking-tight text-[var(--foreground)]">
            “{current.quote}”
          </blockquote>
          <div className="mt-6 sm:mt-8">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              {current.name}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">{current.title}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {current.relationship}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 sm:mt-10 sm:gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="touch-target text-lg text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            aria-label="Previous reference"
          >
            ←
          </button>
          <p className="min-w-[4.5rem] text-center text-xs tracking-widest text-[var(--muted)] uppercase">
            {index + 1} / {references.length}
          </p>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="touch-target text-lg text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            aria-label="Next reference"
          >
            →
          </button>
        </div>
        <p className="mt-4 text-xs text-[var(--muted)] sm:hidden">
          Swipe to browse references
        </p>
      </div>
    </section>
  );
}
