import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import LegalPage, { Clause } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/accessibility");

export default function AccessibilityPage() {
  return (
    <>
      <PageSchema path="/accessibility" />
      <LegalPage
      eyebrow="Trust"
      title="Accessibility statement"
      updated="draft"
      intro="Most of the women we serve will arrive on a mid-range phone, on a slow connection, possibly in bright sunlight. Accessibility is not a compliance exercise for us — it is the primary use case."
    >
      <Clause title="What this site does">
        <ul className="list-disc space-y-2 pl-5">
          <li>Full keyboard navigation, with a visible focus outline on every interactive element.</li>
          <li>A skip-to-content link as the first focusable element on every page.</li>
          <li>Colour combinations checked for contrast against the plum, violet and ivory surfaces.</li>
          <li>Descriptive alt text on every photograph, written from the actual image.</li>
          <li>Captions and transcripts for every video, once video is published.</li>
          <li>
            All animation — including the hero network — is disabled when the visitor has “reduce
            motion” enabled at the operating-system level.
          </li>
          <li>Content structured with one H1 per page and a logical heading order.</li>
          <li>Text that reflows at 320px width without horizontal scrolling.</li>
        </ul>
      </Clause>

      <Clause title="Known limitations">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Urdu and Sindhi pages are planned. Right-to-left layout support is designed for but not
            yet shipped.
          </li>
          <li>
            The concept climate map is a stylised illustration, not a data-driven geographic
            interface. It is labelled as a concept and is keyboard operable.
          </li>
          <li>Some photography is illustrative pending consent and final captions.</li>
        </ul>
      </Clause>

      <Clause title="Tell us about a barrier">
        <p>
          If something on this site is hard to use, write to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-violet underline underline-offset-2">
            {site.email}
          </a>
          . We will fix what we can and tell you what we cannot.
        </p>
      </Clause>
    </LegalPage>
    </>
  );
}
