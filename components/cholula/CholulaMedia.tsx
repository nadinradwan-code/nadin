import Image from "next/image";

type CholulaMediaProps = {
  src: string;
  alt: string;
  caption?: string;
  id?: string;
  priority?: boolean;
  ratio?: string;
  contain?: boolean;
  sizes?: string;
};

export default function CholulaMedia({
  src,
  alt,
  caption,
  id,
  priority = false,
  ratio = "16 / 9",
  contain = false,
  sizes = "(max-width: 900px) 100vw, 1200px",
}: CholulaMediaProps) {
  return (
    <figure className="cholula-media">
      <div className="cholula-media-frame" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={contain ? "object-contain" : "object-cover"}
        />
      </div>
      {id || caption ? (
        <figcaption className="cholula-caption">
          {id ? <span className="cholula-id">{id}</span> : null}
          {caption ? <span>{caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
