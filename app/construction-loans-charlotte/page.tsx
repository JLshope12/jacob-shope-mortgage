import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/construction-loans-charlotte`;

export const metadata = {
  title: "Construction Loans Charlotte NC | Jacob Shope Mortgage",
  description:
    "Construction and one-time-close mortgage guidance in Charlotte and Lake Norman from Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.",
  alternates: { canonical: "/construction-loans-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

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
