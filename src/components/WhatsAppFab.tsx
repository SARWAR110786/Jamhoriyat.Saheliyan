import { site } from "@/content/site";

/**
 * Persistent "ask the AI assistant" entry point.
 *
 * The WhatsApp service is live (English, Urdu, Sindhi), so this sits on every
 * page as a floating action button. It is a plain link: no chat widget, no
 * third-party script, nothing to load or block.
 *
 * Stacking order: z-45 keeps it above page content but below the site header
 * (z-50, which also contains the mobile menu panel), below the gallery
 * lightbox (z-90) and below the skip link (z-100).
 */
export default function WhatsAppFab() {
  if (!site.whatsappLink) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[45] flex justify-end px-4 print:hidden sm:px-5"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Get help on WhatsApp at ${site.whatsappNumber}. Opens WhatsApp in a new tab.`}
        className="group pointer-events-auto inline-flex items-center gap-3 rounded-full border border-rose/30 bg-plum-deep/95 p-1.5 text-ivory shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/60 hover:bg-plum-deep focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-rose motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:pr-4"
      >
        <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[1.45rem] w-[1.45rem] text-[#06301C]"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          <span
            aria-hidden
            className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-plum-deep bg-emerald-400"
          />
        </span>

        <span className="hidden flex-col text-left sm:flex">
          <span className="text-[0.82rem] font-semibold leading-tight text-ivory">
            Get help on WhatsApp
          </span>
          <span className="mt-0.5 text-[0.68rem] font-medium leading-tight text-ivory/65">
            Free · English, Urdu, Sindhi
          </span>
        </span>
      </a>
    </div>
  );
}
