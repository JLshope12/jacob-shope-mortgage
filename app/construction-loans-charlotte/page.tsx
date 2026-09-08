import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/construction-loans-charlotte`;
const FANNIE_CTP_URL = "https://singlefamily.fanniemae.com/learning-center/originating-and-underwriting/faqs-construction-permanent-financing";
const VA_PURCHASE_URL = "https://www.va.gov/housing-assistance/home-loans/loan-types/purchase-loan/";
const VA_HANDBOOK_URL = "https://www.benefits.va.gov/WARMS/docs/admin26/m26-07/vap26-7-chapter7-loans-requiring-special-underwriting-guaranty-and-other-considerations.pdf";

export const metadata = {
  title: "Construction Loans Charlotte NC | Jacob Shope Mortgage",
  description:
    "Construction and one-time-close mortgage guidance in Charlotte and Lake Norman from Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.",
  alternates: { canonical: "/construction-loans-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const FAQS = [
  [
    "What makes a construction loan different from a standard mortgage?",
    "Construction financing adds project-level review. In addition to the borrower, the lender may need to review the builder, plans, specifications, budget, appraisal, draw process, and completion timeline.",
  ],
  [
    "What is a one-time-close construction loan?",
    "A one-time-close structure combines construction financing and permanent financing into one closing. Program details vary by lender and loan type, so the full project and borrower profile still need to be reviewed.",
  ],
  [
    "Can land or existing land equity be part of the financing?",
    "Sometimes. The treatment of owned land, a land purchase, and existing equity depends on the loan program, project structure, appraisal, and lender requirements.",
  ],
  [
    "Can eligible veterans use VA financing to build a home?",
    "VA guidance confirms that eligible borrowers may use VA-backed purchase financing to build a new home, and the VA Lenders Handbook permits both one-time and two-time construction loans subject to program and lender requirements.",
  ],
] as const;

export default function ConstructionLoansCharlottePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Construction Loan Guide for Charlotte, NC",
        description:
          "Construction and one-time-close mortgage guidance covering land, builder review, appraisal, draws, and permanent financing in Charlotte and Lake Norman.",
        author: { "@id": `${origin}/#jacob-shope` },
        publisher: { "@id": `${origin}/#mpire-financial` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        dateModified: "2026-09-08",
        citation: [FANNIE_CTP_URL, VA_PURCHASE_URL, VA_HANDBOOK_URL],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Construction Loans in Charlotte, NC",
        author: { "@id": `${origin}/#jacob-shope` },
        isPartOf: { "@id": `${origin}/#website` },
        about: [
          { "@type": "Thing", name: "Construction loans" },
          { "@type": "Thing", name: "One-time-close construction financing" },
          { "@type": "Thing", name: "Construction-to-permanent financing" },
          { "@type": "Thing", name: "VA construction financing" },
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
          { "@type": "ListItem", position: 3, name: "Construction Loans Charlotte", item: pageUrl },
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
        <p className="font-semibold text-gold">Construction financing guidance</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Construction Loans in Charlotte, NC</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          Building a home adds more moving pieces than a standard purchase. The land, plans, builder, budget, appraisal, draw process, reserves, timeline, and permanent financing all need to work together.
        </p>
        <p className="mt-4 max-w-3xl text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help clients and builders understand the financing path before construction starts so the loan structure supports the project instead of becoming another problem to solve later.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            ["One-time-close construction", "Some construction programs combine the construction phase and permanent mortgage into one closing, which can simplify the financing path."],
            ["Land and equity", "Owned land, a land purchase, and existing equity can affect how the transaction is structured and how much cash may be required."],
            ["Builder and project review", "Construction financing usually requires more documentation around the builder, plans, specifications, budget, and project timeline than a standard purchase."],
            ["Appraisal and completion", "The appraisal is based on the proposed completed home, and the draw process tracks progress as the project is built."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Why construction loans need more planning upfront</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A normal home purchase is mostly about qualifying the borrower and approving an existing property. Construction financing adds project risk. That means the lender also needs to understand what is being built, who is building it, how the budget is structured, and how funds will be released as work is completed.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            I work with buyers, veterans, builders, and Realtors on construction scenarios across Charlotte, Lake Norman, and surrounding North Carolina markets. The earlier we review the plans, budget, land, and borrower profile, the easier it is to identify a workable path.
          </p>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Construction-to-permanent financing: what agency guidance confirms</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Fannie Mae publishes specific guidance for construction-to-permanent loans, including single-closing transactions that convert from construction financing into permanent financing after completion. That is useful context when comparing one-time-close structures with other construction options.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={FANNIE_CTP_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae construction-to-permanent FAQs</a>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">VA construction financing: what the official guidance says</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            The U.S. Department of Veterans Affairs states that eligible borrowers can use a VA-backed purchase loan to build a new home. The VA Lenders Handbook also states that VA permits both one-time and two-time construction loans, subject to VA underwriting and lender requirements.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={VA_PURCHASE_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">VA purchase loan guidance</a>
            <a href={VA_HANDBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">VA Lenders Handbook, Chapter 7</a>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-navy/10 bg-white p-8">
          <h2 className="text-2xl font-bold text-navy">Construction financing topics to review early</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">
            Construction files often touch several other mortgage decisions. Reviewing these topics early can make the financing plan clearer before the build is underway.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/va-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">VA Loans in Charlotte</Link>
            <Link href="/mortgage-appraisal-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Appraisals</Link>
            <Link href="/mortgage-income-employment-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Income & Employment</Link>
            <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Pre-Approval</Link>
            <Link href="/service-areas/charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Charlotte Mortgage Options</Link>
            <Link href="/service-areas/lake-norman" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Lake Norman Mortgage Options</Link>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common construction loan questions</h2>
          <div className="mt-6 space-y-6">
            {FAQS.map(([question, answer]) => (
              <div key={question}>
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14">
          <AuthorBox />
        </div>

        <section className="mt-14 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Send Jacob a Construction Scenario</Link>
          <Link href="/mortgage-guides" className="rounded-lg border border-navy/20 px-5 py-3 font-semibold text-navy hover:border-gold hover:text-gold">More Mortgage Guides</Link>
        </section>
      </section>
    </div>
  );
}
