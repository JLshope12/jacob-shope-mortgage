import Link from "next/link";

export const metadata = {
  title: "Cash-Out Refinance in Charlotte | Jacob Shope",
  description:
    "Learn how a cash-out refinance works and compare equity options with Jacob Shope, a Charlotte mortgage broker serving Charlotte and Lake Norman.",
  alternates: { canonical: "/cash-out-refinance-charlotte" },
};

export default function Page() {
  return (
    <div className="bg-offwhite">
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Home equity guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Cash-Out Refinance in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          A cash-out refinance replaces an existing mortgage with a new loan and may allow a homeowner to access part of the equity in the property. Whether that makes sense depends on the new payment, current mortgage, equity position, purpose for the funds, and other available options.
        </p>
        <section className="mt-12 space-y-5 text-charcoal">
          <h2 className="text-2xl font-bold text-navy">When homeowners ask about cash-out refinancing</h2>
          <p>Common reasons include home improvements, consolidating other debt, funding another real estate purchase, or repositioning equity. The important part is comparing the full cost and payment impact rather than focusing only on the cash received.</p>
          <p>For some homeowners, a HELOC or home equity loan may preserve the existing first mortgage. For others, replacing the first mortgage may fit better. The right answer depends on the numbers.</p>
        </section>
        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What I compare</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-charcoal">
            <li>Your current mortgage rate and payment</li>
            <li>The amount of equity you want to access</li>
            <li>The new projected payment and closing costs</li>
            <li>HELOC, home equity loan, and refinance alternatives</li>
            <li>How long you expect to keep the property</li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Related mortgage guides</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/refinance-charlotte" className="text-gold hover:underline">Mortgage Refinance</Link>
            <Link href="/home-equity-heloc-charlotte" className="text-gold hover:underline">HELOC & Home Equity</Link>
            <Link href="/investment-property-loans-charlotte" className="text-gold hover:underline">Investment Property Financing</Link>
          </div>
        </section>
        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want to compare your equity options?</h2>
          <p className="mt-3 text-white/85">Send me your current balance, estimated value, and what you want to accomplish. I can help you compare the structures.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white">Ask Jacob</Link>
        </section>
        <p className="mt-10 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979, serving Charlotte and Lake Norman.</p>
      </main>
    </div>
  );
}
