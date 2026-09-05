type GuideSchemaProps = {
  title: string;
  description: string;
  path: string;
  topics?: string[];
  places?: string[];
  breadcrumbLabel?: string;
};

const ORIGIN = "https://jacobshopemortgage.com";

export function GuideSchema({
  title,
  description,
  path,
  topics = [],
  places = ["Charlotte, North Carolina", "Lake Norman, North Carolina"],
  breadcrumbLabel,
}: GuideSchemaProps) {
  const pageUrl = `${ORIGIN}${path}`;
  const about = [
    ...topics.map((name) => ({ "@type": "Thing", name })),
    ...places.map((name) => ({ "@type": "Place", name })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: title,
        description,
        url: pageUrl,
        inLanguage: "en-US",
        author: { "@id": `${ORIGIN}/#jacob-shope` },
        publisher: { "@id": `${ORIGIN}/#mpire-financial` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        about,
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: "en-US",
        author: { "@id": `${ORIGIN}/#jacob-shope` },
        isPartOf: { "@id": `${ORIGIN}/#website` },
        about,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mortgage Guides",
            item: `${ORIGIN}/mortgage-guides`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: breadcrumbLabel || title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
