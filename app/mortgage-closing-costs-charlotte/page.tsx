import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/mortgage-closing-costs-charlotte`;
const CFPB_LOAN_ESTIMATE = "https://www.consumerfinance.gov/owning-a-home/loan-estimate/";
const CFPB_MORTGAGE_COSTS = "https://www.consumerfinance.gov/ask-cfpb/what-costs-come-with-taking-out-a-mortgage-en-153/";

export const metadata = {
  title: "Mortgage Closing Costs Charlotte NC | Jacob Shope",
  description:
    "Charlotte mortgage closing-cost guidance from Jacob Shope. Learn what can make up cash to close, how lender costs differ from prepaids, and what to compare before closing.",
  alternates: { canonical: "/mortgage-closing-costs-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "Mortgage Closing Costs in Charlotte, NC",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      dateModified: "2026-09-08",
      citation: [CFPB_LOAN_ESTIMATE, CFPB_MORTGAGE_COSTS],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Mortgage Closing Costs in Charlotte, NC",
      author: { "@id": `${origin}/#jacob-shope` },
      isPartOf: { "@id": `${origin}/#website` },
      about: [
        { "@type": "Thing", name: "Mortgage closing costs" },
        { "@type": "Thing", name: "Cash to close" },
        { "@type": "Place", name: "Charlotte, North Carolina" },
        { "@type": "Place", name: "Lake Norman, North Carolina" },
      ],
    },
  ],
};

export default function MortgageClosingCostsCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Mortgage Closing Costs in Charlotte, NC</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">Buyers often use “closing costs” to describe every dollar due at closing, but cash to close can include several different categories. Understanding the difference helps you compare Loan Estimates and plan ahead.</p>
        <p className="mt-4 text-charcoal">I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help buyers understand the full cash-to-close picture before they commit to a loan structure.</p>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What can make up cash to close?</h2>
          <ul className="mt-5 space-y-3 text-charcoal">
            <li>Down payment</li><li>Lender and third-party closing costs</li><li>Title, attorney, appraisal, and recording-related charges</li><li>Prepaid interest</li><li>Homeowners insurance</li><li>Initial escrow deposits for taxes and insurance</li><li>Credits from the seller, lender, or other permitted sources</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Compare the full Loan Estimate, not one fee</h2>
          <p className="mt-4 leading-relaxed text-charcoal">The CFPB&apos;s Loan Estimate guidance recommends reviewing the interest rate, monthly payment, total closing costs, lender credits, and estimated cash to close together. A lower rate can come with higher upfront costs, while lender credits can reduce upfront cash in exchange for different pricing.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={CFPB_LOAN_ESTIMATE} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB Loan Estimate explainer</a>
            <a href={CFPB_MORTGAGE_COSTS} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB mortgage cost guidance</a>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Related financing questions</h2>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Pre-Approval</Link>
            <Link href="/mortgage-credit-score-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Credit</Link>
            <Link href="/mortgage-dti-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Debt-to-Income</Link>
            <Link href="/seller-concessions-north-carolina" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Seller Concessions</Link>
            <Link href="/service-areas/charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Charlotte Mortgage Options</Link>
          </div>
        </section>

        <div className="mt-12"><AuthorBox /></div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want me to review your cash-to-close estimate?</h2>
          <p className="mt-3 leading-relaxed text-white/85">Send me the purchase price, down payment, and Loan Estimate or scenario you are comparing. I&apos;ll help you understand what is driving the numbers.</p>
          <div className="mt-6 flex flex-wrap gap-4"><Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob</Link><Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">More Mortgage Guides</Link></div>
        </section>
      </section>
    </div>
  );
}
