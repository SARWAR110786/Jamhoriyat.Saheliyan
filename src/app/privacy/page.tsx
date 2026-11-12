import type { Metadata } from "next";
import PageSchema from "@/components/PageSchema";
import { pageMetadata } from "@/lib/seo";
import LegalPage, { Clause, Pending } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageSchema path="/privacy" />
      <LegalPage
      eyebrow="Trust"
      title="Privacy and data protection"
      updated="draft"
      intro="This page explains what we collect, why, who can see it, how long we keep it, and how to have it deleted. It is written in plain language on purpose."
    >
      <p className="rounded-xl border border-violet/20 bg-violet/5 p-5 text-[0.9rem] leading-relaxed text-plum/70">
        This is a working draft. The final text is reviewed by the team and a legal adviser before
        launch, and the date above will be replaced with the publication date.
      </p>

      <Clause title="1. Who we are">
        <p>
          {site.name} is a women-centred civic technology initiative based in Sindh, Pakistan. For
          any question about this notice, write to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-violet underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
      </Clause>

      <Clause title="2. What we collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>When you message the service:</strong> the messages you send, the language you
            write in, and the district you tell us.
          </li>
          <li>
            <strong>When you contact us:</strong> your name, email address, organisation (if you
            give one) and the content of your message.
          </li>
          <li>
            <strong>Technical:</strong> cookie-light analytics that do not identify you as a person.
            No advertising trackers.
          </li>
        </ul>
        <p>
          We do not ask for your national identity number, your address, or any information about
          your household. If a message contains it, we do not add it to any record.
        </p>
      </Clause>

      <Clause title="3. Why we use it">
        <p>
          To answer your question, to improve the service, and to report aggregate results to
          partners. Aggregate reporting never identifies an individual woman.
        </p>
      </Clause>

      <Clause title="4. Where it is stored and who can see it">
        <p>
          On access-controlled systems with named administrators. Access is limited to a small
          support team, logged, and removed when someone leaves the team. We do not sell, rent or
          share your details with advertisers.
        </p>
      </Clause>

      <Clause title="5. How long we keep it">
        <p>
          For a defined retention period and then deleted.{" "}
          <Pending>Exact retention period to be confirmed</Pending>
        </p>
      </Clause>

      <Clause title="6. Shared phones and safety">
        <p>
          Some women use a phone that is not only theirs. We design for that: minimal data, no
          visible history on this website, and a clear escalation path to a person if a question
          becomes unsafe to continue by message.
        </p>
      </Clause>

      <Clause title="7. Your rights">
        <p>
          You can ask what we hold about you, ask us to correct it, or ask us to delete it. You do
          not have to give a reason. Write to{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-violet underline underline-offset-2">
            {site.email}
          </a>{" "}
          and we will respond within 30 days.
        </p>
      </Clause>

      <Clause title="8. Changes">
        <p>
          If this notice changes materially, the new version is published here with its date. We do
          not apply changes retrospectively to data we already hold.
        </p>
      </Clause>
    </LegalPage>
    </>
  );
}
