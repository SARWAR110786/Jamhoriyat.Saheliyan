/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR FACTS THE TEAM MUST CONFIRM BEFORE LAUNCH
 * ─────────────────────────────────────────────────────────────────────────────
 *  The design brief (page 8, "The team must supply before launch") lists the
 *  facts that cannot be invented. They all live here so they are changed in
 *  one place, and they render on the site as visible [TBC] placeholders so a
 *  launch cannot quietly ship with fake data.
 *
 *  When a real value is supplied, the [TBC] marker disappears automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Jamhooriyat Saheliyan",
  shortName: "Saheliyan",
  tagline: "Information is power.",
  /**
   * Public origin for canonicals, sitemap, Open Graph and JSON-LD.
   *
   * Set NEXT_PUBLIC_SITE_URL in the hosting environment (and rebuild) to point
   * the whole site at the real domain. NEXT_PUBLIC_ values are inlined at build
   * time, so a change requires a new deployment.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jamhooriyatsaheliyan.org").replace(/\/$/, ""),
  locale: "en_PK",

  // ── Contact ────────────────────────────────────────────────────────────────
  email: "hello@jamhooriyatsaheliyan.org", // [TBC] official inbox
  pressEmail: "media@jamhooriyatsaheliyan.org", // [TBC]
  phone: null as string | null, // [TBC]
  address: "Sindh, Pakistan",
  officeHours: "Monday to Friday, 10:00–17:00 (PKT)",

  // ── The service (Technology page) ──────────────────────────────────────────
  /**
   * Confirmed live by the team (Nov 2026). This is the public WhatsApp number
   * for the service, and English, Urdu and Sindhi all work today.
   */
  whatsappNumber: "+92 306 3804401" as string | null,
  whatsappLink: "https://wa.me/923063804401" as string | null,
  whatsappStatus: "live" as "live" | "dev" | "concept",

  /** Languages that are tested and working today. */
  liveLanguages: ["English", "Urdu", "Sindhi"] as string[] | null,
  /** Direction and status for each language (brief, p.8: RTL for Urdu and Sindhi). */
  languages: [
    { name: "English", code: "en", dir: "ltr", status: "live" },
    { name: "Urdu", code: "ur", dir: "rtl", status: "live" },
    { name: "Sindhi", code: "sd", dir: "rtl", status: "live" },
  ],

  /** [TBC] Formats actually working today (text / voice note / etc.). */
  liveFormats: null as string[] | null,

  // ── Impact figures (brief, p.11) ───────────────────────────────────────────
  reportingPeriod: null as string | null, // e.g. "January 2024 – June 2025"
  methodologyNote: null as string | null,

  // ── Instagram (home page profile block) ───────────────────────────────────
  instagram: {
    handle: "jamhooriyatsaheliyan",
    url: "https://www.instagram.com/jamhooriyatsaheliyan/",
    /**
     * Paste links to real posts or reels here, e.g.
     *   "https://www.instagram.com/p/XXXXXXXXXXX/"
     *   "https://www.instagram.com/reel/XXXXXXXXXXX/"
     * When this list has links, the home page shows the live Instagram
     * embeds. While it is empty, it shows a profile-style grid of field photos
     * that links to the profile.
     */
    posts: [] as string[],
  },

  // ── Social ─────────────────────────────────────────────────────────────────
  social: [
    { label: "Instagram", href: "https://www.instagram.com/jamhooriyatsaheliyan/" as string | null },
    { label: "LinkedIn", href: null as string | null },
    { label: "Facebook", href: null as string | null },
    { label: "YouTube", href: null as string | null },
  ],
} as const;

/** Navigation — brief p.4: logo, 5 links, "Work With Us" button. */
export const nav = [
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "Partners", href: "/partners" },
] as const;

/** Secondary pages, surfaced in the footer and in-page cross-links. */
export const secondaryNav = [
  { label: "Women, AI and Democracy", href: "/women-ai-democracy" },
  { label: "Climate Justice and Governance", href: "/climate-justice" },
  { label: "Photo archive", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

/** Impact figures as reported by the initiative. Never round up or extrapolate. */
export const impactFigures = [
  {
    value: 200,
    label: "women co-creating",
    detail: "Involved in co-creating a community technology solution.",
  },
  {
    value: 120,
    label: "engaged with RTI",
    detail: "Engaged with the Right to Information across three districts.",
  },
  {
    value: 157,
    label: "civic network",
    detail: "Members of the civic engagement network.",
  },
  {
    value: 119,
    label: "chatbot reports",
    detail: "Reports documented through the chatbot.",
  },
  {
    value: 3,
    label: "university partners",
    detail: "University partnerships.",
  },
] as const;

export const districts = ["District 1", "District 2", "District 3"] as const;
