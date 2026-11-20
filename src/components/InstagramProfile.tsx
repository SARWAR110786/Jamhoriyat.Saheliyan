import { site } from "@/content/site";

/**
 * "Behind the mission" — the official Instagram profile embed for
 * @jamhooriyatsaheliyan (real follower count, posts and reels, kept up to
 * date by Instagram). Same approach as mehfooz.ai.
 */
export default function InstagramProfile() {
  const { handle, url } = site.instagram;

  return (
    <section aria-labelledby="instagram-heading" className="on-light relative overflow-hidden py-20 md:py-28">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Follow our journey</p>
          <h2 id="instagram-heading" className="mt-4 text-[clamp(2.1rem,4.6vw,3.4rem)] text-ink">
            Behind the mission
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">
            Reels, workshops and moments with women across Sindh — straight from our Instagram.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[540px] overflow-hidden rounded-2xl border border-pink/15 bg-white shadow-[0_30px_70px_-45px_rgba(190,24,93,0.55)]">
          <iframe
            src={`https://www.instagram.com/${handle}/embed/`}
            title={`Instagram profile of @${handle}`}
            loading="lazy"
            className="block h-[600px] w-full border-0"
            allow="encrypted-media"
          />
        </div>

        <div className="mt-8 text-center">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-pink">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
            </svg>
            Follow @{handle}
          </a>
        </div>
      </div>
    </section>
  );
}
