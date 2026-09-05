import Link from "next/link";

export const metadata = {
  title: "Mortgage Closing Costs Charlotte NC | Jacob Shope",
  description:
    "Charlotte mortgage closing-cost guidance from Jacob Shope. Learn what can make up cash to close, how lender costs differ from prepaids, and what to compare before closing.",
  alternates: { canonical: "/mortgage-closing-costs-charlotte" },
};

export default function MortgageClosingCostsCharlottePage() {
  return (
    <div className="bg-offwhite">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Mortgage Closing Costs in Charlotte, NC
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          Buyers often use “closing costs” to describe every dollar due at closing, but cash to close can include several different categories. Understanding the difference helps you compare loan estimates and plan ahead.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help buyers understand the full cash-to-close picture before they commit to a loan structure.
        </p>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What can make up cash to close?</h2>
          <ul className="mt-5 space-y-3 text-charcoal">
            <li>Down payment</li>
            <li>Lender and third-party closing costs</li>
            <li>Title, attorney, appraisal, and recording-related charges</li>
            <li>Prepaid interest</li>
            <li>Homeowners insurance</li>
            <li>Initial escrow deposits for taxes and insurance</li>
            <li>Credits from the seller, lender, or other permitted sources</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Do not compare loans by one fee alone</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            The rate, lender credits, discount points, lender fees, third-party costs, and monthly payment need to be viewed together. A lower rate can come with higher upfront costs, while a higher rate may come with credits that reduce cash needed at closing.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want me to review your cash-to-close estimate?</h2>
          <p className="mt-3 leading-relaxed text-white/85">Send me the purchase price, down payment, and loan estimate or scenario you are comparing. I&apos;ll help you understand what is actually driving the numbers.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob</Link>
            <Link href="/seller-concessions-north-carolina" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Seller Concessions Guide</Link>
          </div>
        </section>

        <p className="mt-8 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer, Mpire Financial, NMLS# 2090979.</p>
      </section>
    </div>
  );
}
