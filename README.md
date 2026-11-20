# Jamhooriyat Saheliyan — website

A nine-page website built to the **Website Design Brief and Donor-Ready Content**
(`Jamhooriyat-Saheliyan-Website-Brief.pdf`).

> Information is power. Every woman deserves the power to ask.

---

## Quick start

```bash
cd "Jamhoriyat Saheliyan/website"
npm install
npm run dev          # http://localhost:3000
```

Production:

```bash
npm run build
npm start            # http://localhost:3000
```

Deploy to Vercel, Netlify or any Node host. No database is required.

---

## What is here

| Page | Route | Job (from the brief, p.3) |
|---|---|---|
| Home | `/` | Promise, challenge, response, how it works, impact, stories, partnership call |
| About Us | `/about` | Who we are, vision, mission, values, community roots, theory of change |
| Our Technology | `/technology` | How the WhatsApp + RTI service works, who can use it, languages, access, privacy, limits |
| Women, AI and Democracy | `/women-ai-democracy` | Why information access matters; civic participation; digital inclusion |
| Climate Justice and Governance | `/climate-justice` | How information supports local climate accountability |
| Our Impact | `/impact` | Verified numbers, case examples, learning, reporting periods, concept map |
| Stories and Knowledge Hub | `/stories` | Community stories, explainers, reports, media |
| Partners and Collaborate | `/partners` | Ways to partner, fund, research, volunteer |
| Contact | `/contact` | Form, official channels, safeguarding and privacy note |

Supporting pages: `/privacy`, `/safeguarding`, `/accessibility`, `/gallery`
(all 100 photographs), plus a 404. Internal (not indexed): `/photo-review`.

Every page also carries a floating **"Ask the AI assistant"** button
(`src/components/WhatsAppFab.tsx`) that opens the live WhatsApp service at
`wa.me/923063804401` in a new tab. It is a plain link — no chat widget or
third-party script — and it sits below the mobile menu and the gallery
lightbox so it never blocks them.

---

## Design system

Everything comes from the brief, p.2.

| Token | Value | Used for |
|---|---|---|
| `plum` | `#FFFFFF` | page background (name kept from the first, dark design) |
| `plum-deep` | `#FFF3F8` | alternating blush sections, footer |
| `plum-soft` | `#FFE4EF` | soft pink panels |
| `ink` | `#2B1230` | body text and headings |
| `violet` / `rose` / `orchid-light` | `#BE185D` | pink accent text, links, eyebrows |
| `pink` | `#EC4899` | highlights, glows |
| `pink-deep` | `#C2185B` | buttons (white text passes WCAG AA) |
| `ivory` | `#FFF8FB` | light sections |

- **Headings** Bricolage Grotesque · **Body** Public Sans (loaded via `next/font`).
- **Photo treatment** photos are shown as they are — no colour overlay (the old
  plum tint made them look hazy). `scripts/prep-photos.py` applies a gentle
  sharpen to WhatsApp-compressed images. `.photo-fade` adds a dark bottom scrim
  only where text sits over an image; wrap that text in `.on-photo`.
- **Chatbot screens** `/public/chatbot/step-01…13.webp` are real screenshots of
  the live bot, listed with captions in `src/content/chatbot.ts`.
- **Instagram** set `site.instagram.posts` in `src/content/site.ts` to post or
  reel links to show live embeds on the home page.
- **Motion** hero network on `<canvas>`, count-up figures, scroll reveals, hover
  lifts. All of it is disabled when the visitor has *reduce motion* enabled.
- **Mobile first.** Tested from 320px up. The hero network drops to ~18 nodes on
  small screens and pauses when scrolled out of view.

---

## Honesty rules (the part that matters)

The brief is strict, and so is the code:

1. **Nothing claims to be live unless it is.** Every feature carries a
   `Live today` / `In development` / `Concept` badge (`<Status />`).
2. **Unknown facts are visible.** Anything the team still has to supply renders
   as a marked placeholder (`<Tbc />`), not as invented content.
3. **Numbers are never extrapolated.** The five impact figures are declared once,
   in `src/content/site.ts`, and reused everywhere.
4. **No invented integrations.** There is no AI backend, no government database,
   no case-tracking dashboard and no analytics dashboard in this codebase.

### Facts to confirm before launch

All of these live in **`src/content/site.ts`**:

- [x] `whatsappNumber` / `whatsappLink` — live: **+92 306 3804401** (`wa.me/923063804401`)
- [x] `liveLanguages` — live: English, Urdu, Sindhi
- [ ] `liveFormats` — only formats tested and working today (text is confirmed; voice notes still being tested)
- [ ] `reportingPeriod` — dates covered by the impact figures
- [ ] `methodologyNote` — how participation and reports were counted
- [ ] `email`, `pressEmail`, `phone`, social URLs
- [ ] `url` — final domain (also update `.env`)

### Photos

Every image is referenced by a **named slot** in `src/content/photos.ts`
(`heroMain`, `aboutPortrait`, `storyOne`, …). Swap a photo by changing one id.

**All 100 supplied photographs are published** on `/gallery` (generated from
`public/photos/manifest.json` into `src/content/gallery.ts`), and the home page
shows a selection that is not already used in a named slot.

Source photos are converted at their **native resolution** (up to 3200px) at
WebP quality 92, and delivered through `next/image` at quality 90 in AVIF/WebP,
so nothing is upscaled or double-compressed. If you re-run the pipeline:

```bash
python scripts/prep-photos.py     # convert ../Photos → public/photos
python scripts/build-gallery.py   # rebuild src/content/gallery.ts
```

Open **`/photo-review`** in the browser to see every slot next to its source
file, then:

- [ ] confirm the subject is what the alt text says
- [ ] rewrite `alt` and `caption` to match the actual frame (who, where, consent)
- [ ] set `consent: true` once written consent is on file

**Nothing should ship with `consent: false`.** See `PHOTO-REVIEW.md`.

### Story slider

`/stories` opens with a horizontal Swiper gallery
(`src/components/StorySlider.tsx`). It uses the `swiper` npm package with the
A11y and Keyboard modules, and shows:

| Screen | Slides visible |
|---|---|
| Phone (< 640px) | 1.2 (next card peeks in) |
| Tablet (768px) | 2.5 |
| Desktop (≥ 1280px) | 4 |

Arrows disable at the start and end, a progress bar tracks position, and
drag/swipe/keyboard all work. Stories are declared once in
`src/content/stories.ts` and shared with the filterable grid below, so adding a
story updates both. The image for each card comes from its photo slot.

A standalone, framework-free version with placeholder images and CDN Swiper
lives at **`snippets/story-slider.html`** — open it directly in a browser if you
need to lift the component into another site.

---

## Content editing

| What | Where |
|---|---|
| Navigation, contact details, impact figures | `src/content/site.ts` |
| Photo slots, alt text, captions | `src/content/photos.ts` |
| Page copy | the page file in `src/app/<route>/page.tsx` |
| Colours, type, buttons, cards | `src/app/globals.css` (`@theme` + components) |

The brief asks for a headless CMS (Sanity or Strapi) so editors can update
figures and dates without a developer. The content layer is already isolated in
`src/content/*` and the page files are plain components, so swapping the two
`site.ts` / `photos.ts` modules for CMS queries is a contained change — no
layout code needs to move.

---

## Contact form

`POST /api/contact` (`src/app/api/contact/route.ts`) validates server-side:

- name, valid email, message ≥ 10 characters, explicit consent
- honeypot field to reject bots
- in-memory rate limit (5 per 10 minutes per IP)
- nothing written to disk

Delivery is configured with environment variables (see `.env.example`):

```bash
CONTACT_WEBHOOK_URL=   # Slack/Teams/n8n webhook, Resend, Postmark, form service
CONTACT_INBOX=hello@jamhooriyatsaheliyan.org
```

**Without `CONTACT_WEBHOOK_URL` messages are only logged to the server console.**
Wire it up before launch.

If you deploy to more than one instance, move the rate-limit `Map` to Redis or
Upstash.

---

## Accessibility & SEO

- Skip link, one `<h1>` per page, logical heading order, visible focus rings.
- Keyboard-operable concept map (`role="button"`, Enter/Space).
- `prefers-reduced-motion` honoured for the canvas network, count-ups and reveals.
- Alt text on every photo; `aria-label` on the count-up figures.

SEO lives in three files:

| File | What it does |
|---|---|
| `src/lib/seo.ts` | One title, description and breadcrumb label per page. `pageMetadata(path)` builds the canonical, Open Graph and Twitter tags from it. |
| `src/lib/schema.ts` | `Organization`, `WebSite`, `WebPage` and `BreadcrumbList` JSON-LD. Only stated facts are included — no legal status, phone number or social profiles are invented. |
| `src/app/sitemap.ts` | The 13 public routes with a fixed `lastModified` date (bump it when content changes). |

Every page exports `metadata = pageMetadata("/path")` and renders
`<PageSchema path="/path" />`, so the `<head>` and the structured data can never
disagree. `/photo-review` is `noindex, nofollow` and is excluded from the
sitemap. `manifest.webmanifest`, `icon.svg`, `apple-icon.png` and `logo.png`
(512×512, used in the Organization schema) are generated from the same mark.

**Before launch:** `site.url` in `src/content/site.ts` is still a placeholder
(`https://jamhooriyatsaheliyan.org`). Every canonical, OG URL, sitemap entry and
JSON-LD `@id` derives from it, so set the real domain before publishing.

### Planned but not built

- **Urdu and Sindhi** versions with RTL layout. The design system is ready for it
  (logical properties, `dir` support planned); the pages are English only today.
- Video and captions — no video is published yet.

---

## Photo pipeline

Source photos live in `../Photos` (100 files, mixed `.jpeg`/`.jpg`/`.HEIC`).

```bash
pip install pillow pillow-heif
python scripts/prep-photos.py
```

Writes `public/photos/<id>.webp` (max 2000px), `public/photos/thumbs/<id>.webp`
and `public/photos/manifest.json`.

Next.js then serves responsive AVIF/WebP variants at
`deviceSizes: 360…1920`, so a mid-range phone never downloads a 3840px image.

---

## Project structure

```
website/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx            fonts, metadata, header/footer
│  │  ├─ page.tsx              homepage (9 blocks, brief p.4)
│  │  ├─ about/ technology/ impact/ stories/ partners/ contact/
│  │  ├─ women-ai-democracy/ climate-justice/
│  │  ├─ privacy/ safeguarding/ accessibility/
│  │  ├─ photo-review/         internal photo + consent check
│  │  ├─ api/contact/route.ts  server-side validated form endpoint
│  │  ├─ globals.css           design tokens + component styles
│  │  ├─ sitemap.ts robots.ts icon.svg not-found.tsx
│  ├─ components/              Photo, Reveal, Counter, NetworkCanvas, SiteHeader…
│  └─ content/                 site.ts, photos.ts  ← edit these
├─ public/
│  ├─ photos/                  100 WebP images + thumbs + manifest
│  └─ og.png
└─ scripts/prep-photos.py
```

---

## Before you publish

1. Fill in every item in **Facts to confirm** above.
2. Replace every visible placeholder on `/impact`, `/technology`, `/partners`,
   `/stories` and `/contact`.
3. Complete the photo review (`/photo-review`).
4. Confirm the feature statuses on `/technology` and the homepage step list.
5. Have the privacy policy and safeguarding text reviewed.
6. Set `CONTACT_WEBHOOK_URL` and send yourself a test message.
7. Set the real domain in `site.url` and `NEXT_PUBLIC_SITE_URL`.
