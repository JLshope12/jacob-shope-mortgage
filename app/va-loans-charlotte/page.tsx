import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/va-loans-charlotte`;

export const metadata = {
  title: "VA Loans Charlotte NC | Jacob Shope Mortgage",
  description:
    "VA mortgage guidance in Charlotte and Lake Norman from Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.",
  alternates: { canonical: "/va-loans-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const FAQS = [
  ["Who can use a VA loan?", "VA loans are designed for eligible veterans, active-duty service members, and certain surviving spouses. Eligibility and entitlement are confirmed through the VA."],
  ["Do VA loans require a down payment?", "Many eligible VA borrowers can purchase with no down payment, although the final structure depends on entitlement, the property, the loan amount, and the full file."],
  ["Are VA appraisals different?", "VA appraisals include both a value opinion and minimum property requirement review. I help borrowers and Realtors understand the process before issues become surprises."],
  ["Can VA loans be used around Charlotte and Lake Norman?", "Yes. VA financing is widely used for eligible properties throughout Charlotte, Huntersville, Cornelius, Davidson, Mooresville, and the greater Lake Norman area."],
] as const;

export default function VALoansCharlottePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "VA Loans in Charlotte, NC",
        description:
          "VA mortgage guidance for eligible veterans, active-duty service members, and military families buying in Charlotte and Lake Norman.",
        author: { "@id": `${origin}/#jacob-shope` },
        isPartOf: { "@id": `${origin}/#website` },
        about: [
          { "@type": "Thing", name: "VA home loans" },
          { "@type": "Place", name: "Charlotte, North Carolina" },
          { "@type": "Place", name: "Lake Norman, North Carolina" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Mortgage Guides", item: `${origin}/mortgage-guides` },
          { "@type": "ListItem", position: 3, name: "VA Loans in Charlotte", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: FAQS.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">VA mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">VA Loans in Charlotte, NC</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          I help eligible veterans, active-duty service members, and military families understand how VA financing fits a Charlotte or Lake Norman home purchase. My focus is not just getting a pre-approval. It is making sure you and your Realtor understand the financing, appraisal process, timing, and what matters before an offer is written.
        </p>
        <p className="mt-4 max-w-3xl text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker, Charlotte Fire Department captain, and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            ["Pre-approval before the offer", "A strong VA purchase starts with a complete review of income, assets, credit, entitlement, and the expected property type before you shop."],
            ["Realtor communication", "I work directly with agents so financing questions, appraisal timing, seller concerns, and contract details are addressed early."],
            ["Local property context", "Charlotte and Lake Norman include condos, new construction, higher-priced homes, manufactured homes, and properties with unique appraisal considerations."],
            ["Problem solving", "VA files can be straightforward or complex. My job is to explain what matters, identify issues early, and keep the transaction moving."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Common VA mortgage questions</h2>
          <div className="mt-6 space-y-5">
            {FAQS.map(([question, answer]) => (
              <div key={question} className="rounded-xl bg-white p-6 ring-1 ring-navy/5">
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14">
          <AuthorBox />
        </div>

        <section className="mt-14 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Talk through a VA scenario with Jacob</h2>
          <p className="mt-3 max-w-3xl text-white/85">Whether you are months away from buying or already looking at a property, I can help you understand the financing before you make the next move.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask About a VA Loan</Link>
            <Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Mortgage Guides</Link>
          </div>
        </section>
      </section>
    </div>
  );
}
