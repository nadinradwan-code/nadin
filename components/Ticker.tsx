import { tickerItems } from "@/lib/site";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      className="overflow-hidden border-y border-[var(--border)] bg-[var(--foreground)] py-3 text-[var(--background)]"
      aria-hidden="true"
    >
      <div className="ticker-track gap-10 px-6">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex shrink-0 items-center gap-10 text-sm font-medium tracking-wide uppercase"
          >
            {item}
            <span className="font-serif text-lg leading-none text-[var(--accent)]">
              *
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
