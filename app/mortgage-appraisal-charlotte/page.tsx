import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/mortgage-appraisal-charlotte`;
const CFPB_APPRAISAL = "https://www.consumerfinance.gov/ask-cfpb/what-are-appraisals-and-why-do-i-need-to-look-at-them-en-167/";

export const metadata = {
  title: "Mortgage Appraisal Charlotte NC | Jacob Shope",
  description:
    "Charlotte mortgage appraisal guidance from Jacob Shope. Learn what appraisals do, how value can affect financing, and what buyers and sellers should understand before closing.",
  alternates: { canonical: "/mortgage-appraisal-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "Mortgage Appraisals in Charlotte, NC",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      dateModified: "2026-09-08",
      citation: [CFPB_APPRAISAL],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Mortgage Appraisals in Charlotte, NC",
      author: { "@id": `${origin}/#jacob-shope` },
      isPartOf: { "@id": `${origin}/#website` },
      about: [
        { "@type": "Thing", name: "Mortgage appraisal" },
        { "@type": "Thing", name: "Property valuation" },
        { "@type": "Place", name: "Charlotte, North Carolina" },
        { "@type": "Place", name: "Lake Norman, North Carolina" },
      ],
    },
  ],
};

export default function MortgageAppraisalCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Mortgage Appraisals in Charlotte, NC</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">The appraisal is one part of the mortgage process, but it can affect loan-to-value, financing structure, and sometimes the path to closing. Buyers, sellers, and Realtors are better prepared when they understand what the appraisal is actually doing.</p>
        <p className="mt-4 text-charcoal">I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help clients understand how appraisal results connect to the loan and what options may exist when value becomes an issue.</p>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What is the appraisal for?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">The CFPB describes an appraisal as an independent assessment of a property&apos;s value. In a financed purchase or refinance, the lender may use that valuation when determining whether the property and loan structure meet program requirements.</p>
          <a href={CFPB_APPRAISAL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-gold hover:underline">CFPB appraisal guidance</a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">What happens if the value comes in below the contract price?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">A low appraisal does not automatically mean the transaction is over. The next steps depend on the contract, loan program, available cash, appraisal review options, and whether the parties can renegotiate. The financing should be reviewed before anyone assumes there is only one solution.</p>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Where appraisals connect to the rest of the loan</h2>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Pre-Approval</Link>
            <Link href="/va-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">VA Loans</Link>
            <Link href="/construction-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Construction Loans</Link>
            <Link href="/investment-property-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Investment Property Loans</Link>
            <Link href="/service-areas/lake-norman" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Lake Norman Mortgage</Link>
          </div>
        </section>

        <div className="mt-12"><AuthorBox /></div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Have an appraisal issue on a Charlotte-area transaction?</h2>
          <p className="mt-3 leading-relaxed text-white/85">Send me the scenario. I can help explain how the appraisal affects the mortgage and what financing questions need to be answered next.</p>
          <div className="mt-6 flex flex-wrap gap-4"><Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob</Link><Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Mortgage Guides</Link></div>
        </section>
      </section>
    </div>
  );
}
