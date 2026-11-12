import StructuredData from "./StructuredData";
import { pageSchema } from "@/lib/schema";
import type { PageKey } from "@/lib/seo";

/** WebPage + BreadcrumbList JSON-LD for an inner page. */
export default function PageSchema({ path }: { path: PageKey }) {
  return <StructuredData data={pageSchema(path)} />;
}
