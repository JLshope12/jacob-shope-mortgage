import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/seller-concessions-north-carolina`;
const FANNIE_IPC_URL = "https://selling-guide.fanniemae.com/sel/b3-4.1-02/interested-party-contributions-ipcs";
const FANNIE_BUYDOWN_URL = "https://selling-guide.fanniemae.com/sel/b2-1.4-04/temporary-interest-rate-buydowns";
const CFPB_POINTS_URL = "https://www.consumerfinance.gov/ask-cfpb/how-should-i-use-lender-credits-and-points-also-called-discount-points-en-136/";

export const metadata = {
  title: "Seller Concessions in North Carolina | Jacob Shope",
  description: "Learn how seller concessions can be used in a North Carolina home purchase and why the allowed amount depends on the loan and transaction.",
  alternates: { canonical: "/seller-concessions-north-carolina" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "How Seller Concessions Work in North Carolina",
      description: "An educational guide to seller credits, closing costs, temporary buydowns, permanent points, and offer planning for North Carolina homebuyers.",
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      dateModified: "2026-10-25",
      citation: [FANNIE_IPC_URL, FANNIE_BUYDOWN_URL, CFPB_POINTS_URL],
      about: ["Seller concessions", "Temporary interest rate buydowns", "Discount points", "North Carolina home buying"],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Seller Concessions in North Carolina",
      author: { "@id": `${origin}/#jacob-shope` },
      isPartOf: { "@id": `${origin}/#website` },
      about: [{ "@type": "Place", name: "Charlotte, North Carolina" }, { "@type": "Place", name: "Lake Norman, North Carolina" }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin },
        { "@type": "ListItem", position: 2, name: "Mortgage Guides", item: `${origin}/mortgage-guides` },
        { "@type": "ListItem", position: 3, name: "Seller Concessions", item: pageUrl },
      ],
    },
  ],
};

export default function SellerConcessionsNorthCarolinaPage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">How Seller Concessions Work in North Carolina</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">Seller concessions are one way a home seller can contribute toward certain buyer closing costs or other allowable transaction expenses. They can be especially useful when a buyer wants to preserve cash or compare a credit with another negotiation strategy.</p>
        <p className="mt-4 text-charcoal">I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help buyers and Realtors look at seller concessions as part of the full financing structure rather than as a stand-alone number.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What can a seller concession do?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">Depending on the loan program and transaction, a seller contribution may be used toward allowable closing costs, prepaid items, discount points, or other eligible expenses. The exact limits and uses vary, so the loan structure should be reviewed before an offer is written.</p>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Reduce cash needed at closing", "A seller credit can sometimes offset eligible closing expenses so a buyer can keep more cash available."],
            ["Buy down the interest rate", "In some transactions, a seller contribution may be used toward discount points if that strategy makes sense for the buyer."],
            ["Compare with a price reduction", "A lower purchase price and a seller credit do not always create the same monthly-payment or cash-to-close result."],
            ["Support negotiation", "Concessions can be one of several tools Realtors and buyers use when a property has room for negotiation."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5"><h2 className="font-bold text-navy">{title}</h2><p className="mt-3 leading-relaxed text-charcoal">{body}</p></div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common seller-concession questions</h2>
          <div className="mt-6 space-y-6">
            <div><h3 className="font-semibold text-navy">Is there one seller-concession limit for every mortgage?</h3><p className="mt-2 leading-relaxed text-charcoal">No. Limits can vary by loan program, occupancy, down payment, and other transaction details.</p></div>
            <div><h3 className="font-semibold text-navy">Is a seller credit always better than a price reduction?</h3><p className="mt-2 leading-relaxed text-charcoal">No. The better option depends on the buyer&apos;s cash position, payment goals, appraisal, and the way the credit can be used.</p></div>
            <div><h3 className="font-semibold text-navy">Should the lender review the concession before the offer is written?</h3><p className="mt-2 leading-relaxed text-charcoal">That is usually a smart step. The financing team can confirm how the proposed credit fits the loan program and estimated closing costs.</p></div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Temporary vs. permanent rate buydowns</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            If a seller is willing to contribute toward eligible closing expenses, you can compare two different ways that money might help with the mortgage. The available choices depend on the loan program, lender, and the actual costs in the transaction.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-offwhite p-6">
              <h3 className="font-bold text-navy">Temporary buydown</h3>
              <p className="mt-3 leading-relaxed text-charcoal">A funded subsidy lowers the amount you pay for a limited time, such as the first one or two years. The payment then rises to the full note-rate payment on the agreed schedule. On Fannie Mae loans, you still have to qualify using that full note-rate payment.</p>
            </div>
            <div className="rounded-xl bg-offwhite p-6">
              <h3 className="font-bold text-navy">Permanent discount points</h3>
              <p className="mt-3 leading-relaxed text-charcoal">Paying discount points at closing can reduce the mortgage interest rate over the life of the loan. Compare the upfront cost against the monthly savings and how long you expect to keep that mortgage.</p>
            </div>
          </div>
          <p className="mt-5 leading-relaxed text-charcoal">
            A seller credit is not automatically money back to the buyer or a substitute for the required down payment. For conventional loans sold to Fannie Mae, interested-party contribution limits apply, including to seller-funded rate buydowns. We should review the expected closing costs and allowable credit before your Realtor writes the offer.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">How I compare two offers in Charlotte and Lake Norman</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A lower price, a seller-paid closing-cost credit, and a rate buydown can produce different cash-to-close and payment results. I compare the actual loan estimates, including taxes, insurance, mortgage insurance when applicable, and the full payment after any temporary buydown ends. The best structure depends on the buyer and the property, not a single advertised rate.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
            <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">Charlotte First-Time Buyer Guide</Link>
            <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Mortgage Pre-Approval</Link>
            <Link href="/mortgage-closing-costs-charlotte" className="text-gold hover:underline">Charlotte Closing Costs</Link>
            <Link href="/service-areas/lake-norman" className="text-gold hover:underline">Lake Norman Mortgage Guidance</Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-charcoal/10 bg-offwhite p-7">
          <h2 className="text-2xl font-bold text-navy">Official guidance behind these comparisons</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            Fannie Mae explains which seller-funded costs may count toward its contribution limits and how temporary buydowns are structured. The Consumer Financial Protection Bureau explains the tradeoff between paying discount points now and receiving a lower interest rate over time.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
            <a href={FANNIE_IPC_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae: Interested-Party Contributions</a>
            <a href={FANNIE_BUYDOWN_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae: Temporary Rate Buydowns</a>
            <a href={CFPB_POINTS_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB: Discount Points and Lender Credits</a>
          </div>
        </section>

        <div className="mt-12"><AuthorBox /></div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white"><h2 className="text-2xl font-bold">Comparing a seller credit with other options?</h2><p className="mt-3 text-white/85">Look at the full payment, cash needed, and loan structure before deciding which negotiation produces the best result.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob About the Scenario</Link><Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">More Mortgage Guides</Link></div></section>
      </article>
    </div>
  );
}
