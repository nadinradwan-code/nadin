import { tickerItems } from "@/lib/site";

export default function WorkSampleTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--foreground)] py-3 text-[var(--background)]">
      <div className="ticker-track gap-8 px-6" aria-label="Skills">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex shrink-0 items-center gap-4"
          >
            <span className="text-sm font-medium tracking-wide uppercase">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="font-serif text-lg leading-none text-[var(--accent)]"
            >
              *
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
