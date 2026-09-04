import Link from "next/link";

export const metadata = {
  title: "Seller Concessions in North Carolina | Jacob Shope",
  description: "Learn how seller concessions can be used in a North Carolina home purchase and why the allowed amount depends on the loan and transaction.",
  alternates: { canonical: "/seller-concessions-north-carolina" },
};

export default function SellerConcessionsNorthCarolinaPage() {
  return (
    <div className="bg-offwhite">
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

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white"><h2 className="text-2xl font-bold">Comparing a seller credit with other options?</h2><p className="mt-3 text-white/85">Look at the full payment, cash needed, and loan structure before deciding which negotiation produces the best result.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob About the Scenario</Link><Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">More Mortgage Guides</Link></div></section>
      </article>
    </div>
  );
}
