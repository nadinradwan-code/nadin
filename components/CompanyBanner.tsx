import Image from "next/image";

export type CompanyBannerData = {
  company: string;
  logoSrc?: string;
  logoAlt: string;
  backgroundColor: string;
  textColor?: string;
};

export default function CompanyBanner({
  company,
  logoSrc,
  logoAlt,
  backgroundColor,
  textColor = "#ffffff",
}: CompanyBannerData) {
  return (
    <div
      className="relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl sm:h-20"
      style={{ backgroundColor }}
      role="img"
      aria-label={`${company} banner`}
    >
      {logoSrc ? (
        <div className="relative h-8 w-40 sm:h-10 sm:w-48">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            sizes="(max-width: 640px) 160px, 192px"
            className="object-contain"
          />
        </div>
      ) : (
        <span
          className="font-serif text-lg font-bold tracking-tight sm:text-xl"
          style={{ color: textColor }}
        >
          {company}
        </span>
      )}
    </div>
  );
}
