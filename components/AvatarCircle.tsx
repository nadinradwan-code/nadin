import Image from "next/image";

type AvatarCircleProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-20 w-20",
  md: "h-28 w-28 sm:h-32 sm:w-32",
  lg: "h-36 w-36 sm:h-44 sm:w-44",
} as const;

export default function AvatarCircle({
  src,
  alt,
  size = "lg",
  className = "",
}: AvatarCircleProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--accent)] bg-[var(--background)] shadow-sm ${sizeClasses[size]} ${className}`}
    >
      <Image src={src} alt={alt} fill sizes="176px" className="object-cover" />
    </div>
  );
}
