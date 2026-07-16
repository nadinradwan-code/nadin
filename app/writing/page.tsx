import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts",
};

export default function WritingPage() {
  return (
    <section className="px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3">Thoughts</p>
        <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em]">
          Writing
          <span className="text-[var(--accent)]">*</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
          Essays and notes coming soon.
        </p>
      </div>
    </section>
  );
}
