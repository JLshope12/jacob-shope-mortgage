import Link from "next/link";

export const metadata = {
  title: "HELOC & Home Equity Charlotte NC | Jacob Shope",
  description:
    "Charlotte HELOC and home equity guidance from Jacob Shope. Compare HELOCs, home equity loans, and cash-out refinancing based on your goals and property equity.",
  alternates: { canonical: "/home-equity-heloc-charlotte" },
};

export default function HomeEquityHelocCharlottePage() {
  return (
    <div className="bg-offwhite">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          HELOCs and Home Equity Options in Charlotte
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          Home equity can be used in several different ways, and the best structure depends on whether you need flexible access to funds, one lump sum, or a complete refinance of the first mortgage.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help homeowners compare HELOCs, home equity loans, and cash-out refinance options based on the property, existing mortgage, and what the money is for.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
            <h2 className="text-xl font-bold text-navy">HELOC</h2>
            <p className="mt-3 leading-relaxed text-charcoal">A revolving line of credit secured by your home. It can make sense when you want ongoing access to equity rather than one fixed disbursement.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
            <h2 className="text-xl font-bold text-navy">Home Equity Loan</h2>
            <p className="mt-3 leading-relaxed text-charcoal">A separate loan that generally provides funds in one lump sum while leaving the existing first mortgage in place.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
            <h2 className="text-xl font-bold text-navy">Cash-Out Refinance</h2>
            <p className="mt-3 leading-relaxed text-charcoal">Replaces the existing mortgage with a new loan and may allow you to access a portion of your available equity at closing.</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">The question is not just “which has the lowest rate?”</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            The current first-mortgage rate, closing costs, repayment structure, expected use of the funds, how quickly you plan to pay the balance down, and whether you want to keep your existing mortgage all matter.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Have equity and want to compare the options?</h2>
          <p className="mt-3 leading-relaxed text-white/85">Tell me your approximate home value, mortgage balance, and what you want to use the equity for. I&apos;ll help you compare the structures.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob</Link>
            <Link href="/refinance-charlotte" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Charlotte Refinance Guide</Link>
          </div>
        </section>

        <p className="mt-8 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer, Mpire Financial, NMLS# 2090979.</p>
      </section>
    </div>
  );
}
