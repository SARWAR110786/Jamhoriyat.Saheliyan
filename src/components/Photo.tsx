import Image from "next/image";
import { photos, type PhotoSlot } from "@/content/photos";

type PhotoProps = {
  slot: PhotoSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Show the consent-checked caption under the image. */
  caption?: boolean;
  /** Disable the plum→pink tint (use for logos or diagrams only). */
  untinted?: boolean;
  imgClassName?: string;
  quality?: number;
  /** CSS aspect-ratio for the frame, e.g. "4/3", "16/9", "3/4". */
  aspect?: string;
  rounded?: string;
  /** Add a bottom scrim so overlaid text stays legible. */
  fade?: boolean;
};

/**
 * Brand photo treatment from the brief (p.2): a light plum→pink tint so faces
 * still read as natural, plus lazy loading and responsive `sizes` for slow
 * connections. Delivery quality is high because the source files are already
 * compressed once at build-prep time.
 */
export default function Photo({
  slot,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  caption = false,
  untinted = false,
  imgClassName = "",
  quality = 90,
  aspect = "4/3",
  rounded = "rounded-2xl",
  fade = false,
}: PhotoProps) {
  const photo = photos[slot];

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden ${rounded} ${
          untinted ? "bg-plum-soft" : "photo-tint"
        } ${fade ? "photo-fade" : ""}`}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={`/photos/${photo.id}.webp`}
          alt={photo.alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className={`object-cover ${imgClassName}`}
          style={{ objectPosition: photo.focus ?? "50% 50%" }}
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 flex items-start gap-2 text-[0.72rem] leading-relaxed text-rose/65">
          <span aria-hidden className="mt-1.5 h-px w-4 shrink-0 bg-rose/35" />
          <span>{photo.caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
