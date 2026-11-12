type JsonLd = Record<string, unknown>;

/**
 * Renders one or more JSON-LD blocks.
 *
 * `<` is escaped so a value can never close the script tag early.
 */
export default function StructuredData({ data }: { data: JsonLd | JsonLd[] }) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
