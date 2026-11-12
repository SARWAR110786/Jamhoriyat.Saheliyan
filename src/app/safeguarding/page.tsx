import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import LegalPage, { Clause, Pending } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/safeguarding");

export default function SafeguardingPage() {
  return (
    <>
      <PageSchema path="/safeguarding" />
      <LegalPage
      eyebrow="Trust"
      title="Safeguarding"
      updated="draft"
      intro="Women take part in this work on their own terms. This page sets out what that means in practice, and how to raise a concern."
    >
      <Clause title="1. Consent is specific and revocable">
        <p>
          Every photo, quote, video and story is published only with written consent that names the
          intended use. Consent can be withdrawn at any time, and the material is removed.
        </p>
      </Clause>

      <Clause title="2. No one is photographed without permission">
        <p>
          We do not photograph children. We do not photograph anyone who has not agreed. Captions
          state who, where and with what permission.
        </p>
      </Clause>

      <Clause title="3. Dignity in how communities appear">
        <p>
          Real women, eye-level, natural light, dignified framing. No pity or victim framing, and no
          staged groups. If an image would misrepresent what the tool can do, we do not use it.
        </p>
      </Clause>

      <Clause title="4. Digital safety">
        <p>
          Minimal data collection, no advertising trackers, and a human handover when a question
          suggests risk. If a woman tells us she is unsafe, the conversation moves off the automated
          channel immediately.
        </p>
      </Clause>

      <Clause title="5. Reporting a concern">
        <p>
          Write to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-violet underline underline-offset-2">
            {site.email}
          </a>{" "}
          with “Safeguarding” in the subject line. Concerns are escalated to a named safeguarding
          lead. <Pending>Named lead and escalation contact to be confirmed</Pending>
        </p>
      </Clause>

      <Clause title="6. Partners">
        <p>
          Partners working directly with communities are expected to hold equivalent safeguarding
          standards, and to share their policy before activity begins.
        </p>
      </Clause>
    </LegalPage>
    </>
  );
}
