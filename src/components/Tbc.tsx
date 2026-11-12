/**
 * Renders a fact the team still has to confirm.
 *
 * The brief is explicit: "replace every [bracket], confirm each claim with the
 * team, and check that no feature is described as live unless it is."
 * Rather than hide that work in a comment, unfilled values appear on the page
 * as a visible, obviously-not-final marker, so the site cannot be published
 * with invented data by accident.
 */
export default function Tbc({
  value,
  placeholder,
  tone = "dark",
}: {
  value?: string | null;
  placeholder: string;
  tone?: "dark" | "light";
}) {
  if (value) return <>{value}</>;

  return (
    <span
      className={`inline-flex items-baseline gap-1.5 rounded px-1.5 py-0.5 align-baseline text-[0.92em] font-medium ${
        tone === "light"
          ? "bg-violet/10 text-violet ring-1 ring-inset ring-violet/25"
          : "bg-rose/10 text-rose ring-1 ring-inset ring-rose/25"
      }`}
      title="To be confirmed by the team before launch"
    >
      <span
        aria-hidden
        className={`inline-block h-1.5 w-1.5 shrink-0 translate-y-[-0.15em] rounded-full ${
          tone === "light" ? "bg-violet" : "bg-rose"
        }`}
      />
      {placeholder}
    </span>
  );
}

/** A pill that states, honestly, whether a feature exists today. */
export function Status({ state }: { state: "live" | "dev" | "concept" }) {
  const map = {
    live: { cls: "badge-live", label: "Live today" },
    dev: { cls: "badge-dev", label: "In development" },
    concept: { cls: "badge-dev", label: "Concept" },
  } as const;
  const { cls, label } = map[state];
  return (
    <span className={`badge ${cls}`}>
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          state === "live" ? "bg-emerald-400" : "bg-current opacity-70"
        }`}
      />
      {label}
    </span>
  );
}
