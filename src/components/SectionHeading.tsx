import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
  as: Tag = "h2",
}: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${isLight ? "text-violet" : "text-orchid-light"}`}>
          <span className="sr-only">Section: </span>
          {eyebrow}
        </p>
      )}
      <Tag
        className={`mt-4 text-balance text-[clamp(1.85rem,4vw,3rem)] font-bold leading-[1.06] ${
          isLight ? "text-ink" : "text-ink"
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <div
          className={`mt-5 max-w-2xl text-pretty text-[1.02rem] leading-relaxed ${
            isLight ? "text-ink/70" : "text-ink/65"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </div>
      )}
    </div>
  );
}
