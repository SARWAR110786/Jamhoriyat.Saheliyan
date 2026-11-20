/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PHOTO MAP
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every image on the site is referenced through a named slot below, so the
 *  team can swap a photo in one line without touching any layout code.
 *
 *  ⚠️  REVIEW BEFORE LAUNCH — brief p.7 asks for written consent for every
 *  image, and captions that state who, where and with what permission.
 *  Open /photo-review in the browser to see every slot next to its source
 *  file, confirm the subject, then fill in `caption` and `consent`.
 *
 *  Source images live in  /Photos  and were converted to WebP by
 *  scripts/prep-photos.py  →  /public/photos/<id>.webp
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Photo = {
  /** File id inside /public/photos (without extension). */
  id: string;
  /** Descriptive alt text. Must describe what is actually in the frame. */
  alt: string;
  /** Visible caption: who, where, with what permission (brief p.7). */
  caption: string;
  /** Consent on file? Must be true before launch. */
  consent: boolean;
  /** Optional focal point for cropping, as CSS object-position. */
  focus?: string;
};

const P = (photo: Photo) => photo;

export const photos = {
  // ── Hero ───────────────────────────────────────────────────────────────────
  heroMain: P({
    id: "p008-img-0284",
    alt: "Women and facilitators of Jamhooriyat Saheliyan standing together in a courtyard beside the consultation meeting banners.",
    caption: "Community session, Sindh. [Confirm location and consent]",
    consent: false,
    focus: "50% 40%",
  }),
  heroSide: P({
    id: "p005-img-0248",
    alt: "A woman in a bright, multicoloured dupatta listening closely during a consultation meeting.",
    caption: "Workshop participant. [Confirm name, place and consent]",
    consent: false,
    focus: "50% 30%",
  }),

  // ── About ──────────────────────────────────────────────────────────────────
  aboutPortrait: P({
    id: "p011-whatsapp-image-2026-08-16-at-7-19-46-pm-1",
    alt: "Portrait of a woman who took part in co-creating the WhatsApp service.",
    caption: "Co-creator, Sindh. [Confirm name, place and consent]",
    consent: false,
    focus: "50% 28%",
  }),
  aboutCircle: P({
    id: "p024-whatsapp-image-2026-08-26-at-4-41-35-pm-1",
    alt: "Women sitting in a circle during a co-creation discussion.",
    caption: "Co-creation circle. [Confirm place and consent]",
    consent: false,
  }),
  aboutTeam: P({
    id: "p066-whatsapp-image-2026-09-16-at-12-32-50-am-1",
    alt: "Members of the team and community partners in discussion.",
    caption: "Team and partners. [Confirm place and consent]",
    consent: false,
  }),

  // ── Technology ─────────────────────────────────────────────────────────────
  techPhone: P({
    id: "p009-whatsapp-image-2026-08-16-at-7-19-44-pm",
    alt: "A woman holding a phone while learning to use the WhatsApp service.",
    caption: "Learning to use the service. [Confirm place and consent]",
    consent: false,
  }),
  techDetail: P({
    id: "p013-whatsapp-image-2026-08-16-at-7-19-46-pm",
    alt: "Close view of a woman using a phone during a support session.",
    caption: "Support session. [Confirm place and consent]",
    consent: false,
  }),
  techSupport: P({
    id: "p049-whatsapp-image-2026-09-15-at-11-30-22-am",
    alt: "A community facilitator helping a woman use the service on her phone.",
    caption: "Facilitator support. [Confirm place and consent]",
    consent: false,
  }),

  // ── Women, AI and Democracy ────────────────────────────────────────────────
  democracy: P({
    id: "p069-whatsapp-image-2026-09-16-at-12-32-51-am",
    alt: "Women seated together in a community meeting about public services.",
    caption: "Community meeting. [Confirm place and consent]",
    consent: false,
  }),
  democracyTwo: P({
    id: "p045-whatsapp-image-2026-09-15-at-11-04-45-pm",
    alt: "A woman addressing a room of women during a discussion on civic participation.",
    caption: "Discussion on civic participation. [Confirm place and consent]",
    consent: false,
  }),

  // ── Climate Justice ────────────────────────────────────────────────────────
  climateLand: P({
    id: "p021-whatsapp-image-2026-08-17-at-9-13-48-pm",
    alt: "The landscape around a rural community in Sindh.",
    caption: "Landscape, Sindh. [Confirm location]",
    consent: false,
  }),
  climateLandWide: P({
    id: "p091-whatsapp-image-2026-09-16-at-2-37-05-am",
    alt: "Wide view of fields and sky near a partner community.",
    caption: "Fields near a partner community. [Confirm location]",
    consent: false,
  }),
  climateWomen: P({
    id: "p100-whatsapp-image-2026-09-16-at-2-43-59-am",
    alt: "Women from a climate-affected community gathered outdoors.",
    caption: "Community gathering. [Confirm place and consent]",
    consent: false,
  }),
  climateLandTwo: P({
    id: "p022-whatsapp-image-2026-08-17-at-9-13-49-pm",
    alt: "Ground and vegetation near a rural settlement.",
    caption: "Rural settlement. [Confirm location]",
    consent: false,
  }),

  // ── Impact ─────────────────────────────────────────────────────────────────
  impactHospital: P({
    id: "p063-whatsapp-image-2026-09-16-at-12-32-48-am-1",
    alt: "Women outside a public service building.",
    caption: "Outside a public office. [Confirm place, month and consent]",
    consent: false,
  }),
  impactSchool: P({
    id: "p068-whatsapp-image-2026-09-16-at-12-32-51-am-1",
    alt: "A group of women standing together after a community meeting.",
    caption: "After a community meeting. [Confirm place, month and consent]",
    consent: false,
  }),

  // ── Stories ────────────────────────────────────────────────────────────────
  storyOne: P({
    id: "p084-whatsapp-image-2026-09-16-at-2-36-18-am-1",
    alt: "Portrait of a woman from the civic engagement network.",
    caption: "Network member. [Confirm name and consent]",
    consent: false,
    focus: "50% 30%",
  }),
  storyTwo: P({
    id: "p062-whatsapp-image-2026-09-16-at-12-32-47-am",
    alt: "A woman speaking during a Jamhooriyat Saheliyan gathering.",
    caption: "Speaking at a gathering. [Confirm name and consent]",
    consent: false,
  }),
  storyThree: P({
    id: "p070-whatsapp-image-2026-09-16-at-12-32-52-am",
    alt: "Two women talking together during a session.",
    caption: "In conversation. [Confirm name and consent]",
    consent: false,
  }),
  storyFour: P({
    id: "p004-img-0247",
    alt: "Portrait of a participant at a community workshop.",
    caption: "Workshop participant. [Confirm name and consent]",
    consent: false,
    focus: "50% 25%",
  }),
  storyFive: P({
    id: "p064-whatsapp-image-2026-09-16-at-12-32-48-am",
    alt: "Portrait of a participant at a community workshop.",
    caption: "Workshop participant. [Confirm name and consent]",
    consent: false,
    focus: "50% 25%",
  }),
  storySix: P({
    id: "p006-img-0257",
    alt: "Portrait of a woman at a community workshop.",
    caption: "Workshop participant. [Confirm name and consent]",
    consent: false,
    focus: "50% 25%",
  }),

  // ── Partners ───────────────────────────────────────────────────────────────
  partnersRoom: P({
    id: "p077-whatsapp-image-2026-09-16-at-2-09-00-am",
    alt: "Researchers and community members in a shared workshop.",
    caption: "Research workshop. [Confirm place and consent]",
    consent: false,
  }),
  partnersGroup: P({
    id: "p015-whatsapp-image-2026-08-16-at-7-22-39-pm",
    alt: "A full room of women at a Jamhooriyat Saheliyan convening.",
    caption: "Convening. [Confirm place and consent]",
    consent: false,
  }),
  partnersTalk: P({
    id: "p072-whatsapp-image-2026-09-16-at-2-08-57-am",
    alt: "A discussion between partners and community representatives.",
    caption: "Partner discussion. [Confirm place and consent]",
    consent: false,
  }),

  // ── Contact / closing ──────────────────────────────────────────────────────
  contact: P({
    id: "p018-whatsapp-image-2026-08-16-at-7-22-42-pm-1",
    alt: "Women leaving a community session together.",
    caption: "Community session. [Confirm place and consent]",
    consent: false,
  }),

  // ── Extra texture for galleries ────────────────────────────────────────────
  extraOne: P({
    id: "p017-whatsapp-image-2026-08-16-at-7-22-41-pm",
    alt: "Women listening during a community session.",
    caption: "Community session. [Confirm place and consent]",
    consent: false,
  }),
  extraTwo: P({
    id: "p067-whatsapp-image-2026-09-16-at-12-32-50-am",
    alt: "A woman reviewing a document with a facilitator.",
    caption: "Reviewing a document. [Confirm place and consent]",
    consent: false,
  }),
  extraThree: P({
    id: "p059-whatsapp-image-2026-09-15-at-11-34-52-am-1",
    alt: "A woman standing outdoors with other community members.",
    caption: "Outdoors with the community. [Confirm place and consent]",
    consent: false,
  }),
  extraFour: P({
    id: "p037-whatsapp-image-2026-09-15-at-11-03-13-pm",
    alt: "A wide view of a Jamhooriyat Saheliyan gathering.",
    caption: "Gathering. [Confirm place and consent]",
    consent: false,
  }),
  extraFive: P({
    id: "p094-whatsapp-image-2026-09-16-at-2-37-08-am",
    alt: "Open ground and sky near a partner community.",
    caption: "Near a partner community. [Confirm location]",
    consent: false,
  }),
  extraSix: P({
    id: "p054-whatsapp-image-2026-09-15-at-11-31-29-am",
    alt: "Community members at an outdoor session.",
    caption: "Outdoor session. [Confirm place and consent]",
    consent: false,
  }),
} satisfies Record<string, Photo>;

export type PhotoSlot = keyof typeof photos;
