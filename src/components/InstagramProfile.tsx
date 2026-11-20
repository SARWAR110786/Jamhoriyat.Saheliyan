import Image from "next/image";
import Script from "next/script";
import { site } from "@/content/site";
import { archivePhotos } from "@/content/gallery";

/**
 * Instagram block for the home page, drawn like an Instagram profile:
 * avatar, handle, bio, Follow button and a 3-column post grid.
 *
 * - With links in `site.instagram.posts`, it shows the official Instagram
 *   embeds for those posts/reels (videos included).
 * - Without links, the grid shows field photos from our own archive and every
 *   tile opens the profile. Nothing is fetched from Instagram in that case.
 */
export default function InstagramProfile() {
  const { handle, url, posts } = site.instagram;
  const grid = archivePhotos.slice(20, 29);

  return (
    <section aria-labelledby="instagram-heading" className="on-light relative overflow-hidden py-20 md:py-28">
      <div className="shell">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-pink/15 bg-white shadow-[0_1px_2px_rgba(190,24,93,0.04),0_30px_70px_-45px_rgba(190,24,93,0.55)]">
          {/* window bar */}
          <div className="flex items-center justify-between border-b border-ink/8 px-5 py-3">
            <span className="flex items-center gap-2 text-[0.8rem] font-semibold text-ink">
              <InstagramGlyph className="h-[18px] w-[18px]" />
              Instagram
            </span>
            <span className="text-[0.72rem] text-ink/55">@{handle}</span>
          </div>

          {/* profile header */}
          <div className="grid gap-6 px-5 pb-6 pt-7 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-10">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto block h-fit w-fit self-start rounded-full bg-[conic-gradient(from_200deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75)] p-[3px] sm:mx-0"
              aria-label={`Open @${handle} on Instagram`}
            >
              <span className="block rounded-full bg-white p-[3px]">
                <Image
                  src="/chatbot/avatar.png"
                  alt="Jamhooriyat Saheliyan chatbot logo"
                  width={126}
                  height={126}
                  quality={100}
                  className="h-24 w-24 rounded-full sm:h-28 sm:w-28"
                />
              </span>
            </a>

            <div className="text-center sm:text-left">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
                <h2 id="instagram-heading" className="font-sans text-[1.25rem] font-semibold tracking-normal text-ink">
                  {handle}
                </h2>
                <div className="flex gap-2">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#0095f6] px-5 py-1.5 text-[0.85rem] font-semibold text-white transition hover:bg-[#1877f2]"
                  >
                    Follow
                  </a>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-ink/[0.06] px-4 py-1.5 text-[0.85rem] font-semibold text-ink transition hover:bg-ink/10"
                  >
                    View profile
                  </a>
                </div>
              </div>

              <ul className="mt-4 flex justify-center gap-6 text-[0.88rem] text-ink sm:justify-start">
                <li><strong className="font-semibold">Posts</strong></li>
                <li><strong className="font-semibold">Reels</strong></li>
                <li><strong className="font-semibold">Field stories</strong></li>
              </ul>

              <div className="mt-4 text-[0.9rem] leading-relaxed text-ink">
                <p className="font-semibold">Jamhooriyat Saheliyan · جمہوریت سہیلیاں</p>
                <p className="text-ink/60">Nonprofit organisation</p>
                <p className="mt-1 text-ink/80">
                  Women-led civic technology from Sindh 🌸 Free WhatsApp chatbot to use your Right to
                  Information.
                </p>
                {site.whatsappLink && (
                  <a
                    href={site.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-semibold text-[#00376b] hover:underline"
                  >
                    wa.me/{site.whatsappLink.split("/").pop()}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* tabs */}
          <div className="flex justify-center gap-12 border-t border-ink/8 text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
            <span className="-mt-px flex items-center gap-1.5 border-t border-ink py-3 text-ink">
              <GridGlyph /> Posts
            </span>
            <span className="flex items-center gap-1.5 py-3 text-ink/45">
              <ReelGlyph /> Reels
            </span>
          </div>

          {/* posts */}
          {posts.length > 0 ? (
            <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <blockquote
                  key={p}
                  className="instagram-media !m-0 !min-w-0 !max-w-none"
                  data-instgrm-permalink={p}
                  data-instgrm-version="14"
                >
                  <a href={p} target="_blank" rel="noopener noreferrer">
                    View this post on Instagram
                  </a>
                </blockquote>
              ))}
              <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-1">
              {grid.map((p) => (
                <li key={p.id}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-square overflow-hidden bg-pink/5"
                    aria-label={`${p.alt} — see more on Instagram`}
                  >
                    <Image
                      src={`/photos/thumbs/${p.id}.webp`}
                      alt=""
                      fill
                      sizes="(max-width: 896px) 33vw, 300px"
                      quality={90}
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                      <InstagramGlyph className="h-7 w-7" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="border-t border-ink/8 px-5 py-4 text-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] font-semibold text-pink-deep hover:underline"
            >
              See all posts and reels on Instagram →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function GridGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 1h10v10H1zM4.33 1v10M7.67 1v10M1 4.33h10M1 7.67h10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function ReelGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="10" height="10" rx="2.5" stroke="currentColor" strokeWidth="1" />
      <path d="M1 4h10M4 1l1.6 3M7.4 1 9 4M5 6v3l2.6-1.5L5 6Z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
    </svg>
  );
}
