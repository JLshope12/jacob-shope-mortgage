import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/mortgage-dti-charlotte`;
const CFPB_DTI = "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/";
const CFPB_AFFORDABILITY = "https://www.consumerfinance.gov/ask-cfpb/how-can-i-figure-out-if-i-can-afford-to-buy-a-home-and-take-out-a-mortgage-en-118/";

export const metadata = {
  title: "Debt-to-Income Ratio for a Mortgage | Charlotte | Jacob Shope",
  description: "Learn how debt-to-income ratio is used in mortgage qualification and why the full loan scenario matters. Guidance from Jacob Shope, NMLS# 2090979.",
  alternates: { canonical: "/mortgage-dti-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "How Debt-to-Income Ratio Works for a Mortgage",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      dateModified: "2026-09-08",
      citation: [CFPB_DTI, CFPB_AFFORDABILITY],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Debt-to-Income Ratio for a Mortgage in Charlotte",
      author: { "@id": `${origin}/#jacob-shope` },
      isPartOf: { "@id": `${origin}/#website` },
      about: [
        { "@type": "Thing", name: "Debt-to-income ratio" },
        { "@type": "Thing", name: "Mortgage qualification" },
        { "@type": "Place", name: "Charlotte, North Carolina" },
        { "@type": "Place", name: "Lake Norman, North Carolina" },
      ],
    },
  ],
};

export default function MortgageDtiCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">How Debt-to-Income Ratio Works for a Mortgage</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">Debt-to-income ratio, often called DTI, compares monthly debt payments with gross monthly income. It is one of several factors lenders use when reviewing a mortgage application.</p>
        <p className="mt-4 text-charcoal">I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help buyers understand DTI in context rather than treating one percentage as a universal approval line.</p>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What DTI means</h2>
          <p className="mt-4 leading-relaxed text-charcoal">The CFPB defines DTI as monthly debt payments divided by gross monthly income and notes that different loan products and lenders can have different DTI limits. That is why one percentage by itself does not tell the whole story.</p>
          <a href={CFPB_DTI} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-gold hover:underline">CFPB debt-to-income guidance</a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What usually goes into DTI?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">The calculation commonly includes the proposed housing payment and recurring obligations that are required to be considered under the loan program. The treatment of specific debts and income can vary by program and documentation.</p>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Housing payment", "Principal, interest, property taxes, homeowners insurance, and applicable association dues or mortgage insurance may be part of the housing payment."],
            ["Recurring debts", "Examples can include auto loans, student loans, installment debt, and required revolving account payments."],
            ["Qualifying income", "The income used must meet the documentation and continuity rules of the loan program."],
            ["Overall file", "Credit, assets, reserves, property type, loan-to-value, and the loan program can all matter alongside DTI."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5"><h3 className="font-bold text-navy">{title}</h3><p className="mt-3 leading-relaxed text-charcoal">{body}</p></div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Qualification is not the same as affordability</h2>
          <p className="mt-4 leading-relaxed text-charcoal">The CFPB also distinguishes how much a lender may qualify you to borrow from what fits comfortably in your actual household budget. DTI helps with qualification, but payment comfort, savings goals, and other expenses still matter.</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Pre-Approval</Link>
            <Link href="/mortgage-income-employment-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Income & Employment</Link>
            <Link href="/mortgage-credit-score-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Credit</Link>
            <Link href="/mortgage-closing-costs-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Closing Costs</Link>
            <Link href="/first-time-homebuyer-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">First-Time Buyers</Link>
          </div>
        </section>

        <div className="mt-12"><AuthorBox /></div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white"><h2 className="text-2xl font-bold">Trying to understand your buying range?</h2><p className="mt-3 text-white/85">Use DTI as one part of the picture, then compare the actual payment and cash needed.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/calculators/affordability" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Affordability Calculator</Link><Link href="/contact" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Ask Jacob</Link></div></section>
      </article>
    </div>
  );
}
