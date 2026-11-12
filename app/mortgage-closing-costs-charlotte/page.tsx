import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/mortgage-closing-costs-charlotte`;
const CFPB_LOAN_ESTIMATE = "https://www.consumerfinance.gov/owning-a-home/loan-estimate/";
const CFPB_MORTGAGE_COSTS = "https://www.consumerfinance.gov/ask-cfpb/what-costs-come-with-taking-out-a-mortgage-en-153/";
const CFPB_CLOSING_DISCLOSURE = "https://www.consumerfinance.gov/owning-a-home/close/review-documents-before-closing/";
const CFPB_WIRE_SAFETY = "https://www.consumerfinance.gov/archive/blog/mortgage-closing-scams-how-protect-yourself-and-your-closing-funds/";
const NCREC_DUE_DILIGENCE = "https://bulletins.ncrec.gov/due-diligence-fees-when-must-they-be-deposited/";
const NCREALTORS_EARNEST_MONEY = "https://www.ncrealtors.org/question/can-an-offer-include-an-additional-earnest-money-deposit-but-no-initial-earnest-money-deposit/";

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
      dateModified: "2026-11-12",
      citation: [
        CFPB_LOAN_ESTIMATE,
        CFPB_MORTGAGE_COSTS,
        CFPB_CLOSING_DISCLOSURE,
        CFPB_WIRE_SAFETY,
        NCREC_DUE_DILIGENCE,
        NCREALTORS_EARNEST_MONEY,
      ],
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
          <h2 className="text-2xl font-bold text-navy">Charlotte buyer example: how money paid before closing changes cash to close</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Here is an illustrative $400,000 Charlotte home purchase with 5% down. The estimated fees, prepaids, and deposits below are examples, not a quote or a prediction for a particular property.
          </p>
          <dl className="mt-5 grid grid-cols-[1fr_auto] gap-x-5 gap-y-3 text-charcoal">
            <dt>Down payment (5% of $400,000)</dt><dd className="font-semibold text-navy">$20,000</dd>
            <dt>Illustrative loan and third-party closing costs</dt><dd className="font-semibold text-navy">$8,000</dd>
            <dt>Illustrative prepaids and escrow funding</dt><dd className="font-semibold text-navy">$4,000</dd>
            <dt className="border-t border-navy/10 pt-3 font-semibold">Total funds for transaction before deposits</dt><dd className="border-t border-navy/10 pt-3 font-semibold text-navy">$32,000</dd>
            <dt>Due diligence fee already paid, if credited at closing</dt><dd className="font-semibold text-navy">−$3,000</dd>
            <dt>Earnest money already paid, if credited at closing</dt><dd className="font-semibold text-navy">−$5,000</dd>
            <dt className="border-t border-navy/10 pt-3 font-bold">Illustrative remaining cash to close</dt><dd className="border-t border-navy/10 pt-3 font-bold text-navy">$24,000</dd>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            The buyer would have paid $8,000 before closing and $24,000 at closing, for $32,000 total in this example. Actual figures can change with loan terms, title and attorney charges, tax prorations, property insurance, escrow calculations, seller or lender credits, and the purchase contract. Your final Closing Disclosure controls the actual cash needed.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            See <Link href="/how-much-house-can-i-afford-charlotte" className="font-medium text-gold hover:underline">Charlotte affordability and payment planning</Link> and <Link href="/seller-concessions-north-carolina" className="font-medium text-gold hover:underline">how seller concessions can affect cash to close</Link>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">North Carolina due diligence fees vs. earnest money</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Under the standard North Carolina Offer to Purchase and Contract, a negotiated due diligence fee is generally paid to the seller and credited to the buyer at a completed closing. It is ordinarily nonrefundable if the buyer terminates, subject to contractual exceptions. Earnest money is a separate deposit held by the designated escrow agent; its refund treatment depends on the contract and circumstances. Both can reduce the remaining cash due at closing when properly credited.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            These funds are not extra closing costs simply because they were paid early. Confirm their treatment with your Realtor and closing attorney, and check that the credits appear correctly on the final settlement documents. The payment deadlines and remedies are controlled by the signed contract, not a generic example.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <a href={NCREC_DUE_DILIGENCE} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">NC Real Estate Commission on due diligence fees</a>
            <a href={NCREALTORS_EARNEST_MONEY} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">NC REALTORS on earnest money deposits</a>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Review the Closing Disclosure before you sign</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            For most covered mortgages, you must receive a Closing Disclosure at least three business days before closing. Compare it with the most recent Loan Estimate: loan amount, rate, monthly payment, points, lender credits, closing costs, escrow items, and cash to close. Ask your lender or closing attorney to explain changes before the signing appointment. Some mortgage products use different disclosure forms.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Protect the funds you are bringing to closing. If wiring instructions arrive by email or change unexpectedly, call the closing attorney using a phone number you independently verified beforehand. Do not rely on a phone number contained in the suspicious message.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <a href={CFPB_CLOSING_DISCLOSURE} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB closing document checklist</a>
            <a href={CFPB_WIRE_SAFETY} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB closing wire-fraud precautions</a>
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
