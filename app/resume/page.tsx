import type { Metadata } from "next";
import AvatarCircle from "@/components/AvatarCircle";
import CompanyBanner from "@/components/CompanyBanner";
import {
  avatars,
  capabilities,
  companyBanners,
  education,
  experience,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and experience, Art Director, AI-Native Design.",
};

export default function ResumePage() {
  return (
    <section className="page-pad py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <AvatarCircle
            src={avatars.resume.src}
            alt={avatars.resume.alt}
            size="lg"
          />
          <p className="eyebrow mt-6 mb-3">Resume</p>
          <h1 className="font-serif text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-[-0.02em] text-[var(--foreground)]">
            Experience
            <span className="font-serif text-[var(--accent)]">*</span>
          </h1>
        </div>

        <div className="text-center">
          <a
            href={site.resumePdfPath}
            download={site.resumePdfFilename}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
          >
            <span className="font-serif text-[var(--accent)]">*</span>
            Download full resume (PDF)
            <span aria-hidden="true" className="font-bold text-[var(--accent)]">
              →
            </span>
          </a>
        </div>

        <div className="mt-14 space-y-0">
          {experience.map((role, index) => (
            <div key={`${role.company}-${role.title}`}>
              {index > 0 ? (
                <div className="my-10 -mx-[max(1.5rem,env(safe-area-inset-left))] sm:-mx-[max(3rem,env(safe-area-inset-left))] lg:-mx-[max(5rem,env(safe-area-inset-left))]">
                  <CompanyBanner {...companyBanners[index - 1]} />
                </div>
              ) : null}
              <article>
                <p className="eyebrow mb-2">{role.dates}</p>
                <h2 className="font-serif text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                  {role.title}
                  <span className="text-[var(--muted)]">, {role.company}</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {role.summary}
                </p>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-10 border-t border-[var(--border)] pt-12">
          <div>
            <p className="eyebrow mb-3">Capabilities</p>
            <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {capabilities}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Education</p>
            <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {education}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-10">
          <a
            href={site.resumePdfPath}
            download={site.resumePdfFilename}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:underline"
          >
            <span className="font-serif text-[var(--accent)]">*</span>
            Download full resume (PDF)
            <span aria-hidden="true" className="font-bold text-[var(--accent)]">
              →
            </span>
          </a>
          <p className="mt-3 text-xs text-[var(--muted)]">
            Also available on{" "}
            <a
              href={site.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--foreground)]"
            >
              Google Drive
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
