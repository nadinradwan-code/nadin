import Image from "next/image";
import type { CaseImage } from "@/lib/case-studies";

type CaseImageFrameProps = {
  image: CaseImage;
  caption?: string;
  variant?: "hero" | "section";
  priority?: boolean;
  label?: string;
};

export default function CaseImageFrame({
  image,
  caption,
  variant = "section",
  priority = false,
  label = "Visual",
}: CaseImageFrameProps) {
  const isLowRes = image.lowRes === true;
  const useContain = image.contain === true || isLowRes;
  const aspectClass =
    variant === "hero" ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]";

  return (
    <figure>
      <div className="rounded-sm border border-[var(--border)] bg-[var(--background)] p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="eyebrow">{label}</span>
          {isLowRes ? (
            <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
              Low-res
            </span>
          ) : null}
        </div>

        <div
          className={`relative overflow-hidden rounded-sm bg-[var(--border)] ${aspectClass}`}
        >
          <Image
            src={image.path}
            alt={image.alt}
            fill
            priority={priority}
            sizes={
              variant === "hero"
                ? "100vw"
                : "(max-width: 1024px) 100vw, 900px"
            }
            className={useContain ? "object-contain" : "object-cover"}
            unoptimized={image.path.endsWith(".gif")}
          />
        </div>

        {isLowRes ? (
          <p className="mt-2 text-center text-[11px] tracking-wide text-[var(--muted)]">
            Replace with final asset
          </p>
        ) : null}
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm text-[var(--muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
