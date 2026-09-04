import Link from "next/link";

export const metadata = {
  title: "DSCR Loans in Charlotte | Investor Mortgage Guide | Jacob Shope",
  description:
    "Learn how DSCR loans may fit real estate investors in Charlotte and Lake Norman with mortgage guidance from Jacob Shope.",
  alternates: { canonical: "/dscr-loans-charlotte" },
};

export default function Page() {
  return (
    <div className="bg-offwhite">
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Investor financing with Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">DSCR Loans in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          DSCR financing is commonly used by real estate investors when the property&apos;s rental income is an important part of the qualification strategy. It can be useful for investors who want a different approach than a traditional full-income mortgage review.
        </p>
        <section className="mt-12 space-y-5 text-charcoal">
          <h2 className="text-2xl font-bold text-navy">What DSCR means</h2>
          <p>DSCR stands for debt service coverage ratio. In simple terms, the lender compares qualifying rental income from the property with the housing expense used for the loan. Exact requirements vary by lender and program.</p>
          <p>For Charlotte investors, the bigger question is not just whether a DSCR loan is available. It is whether the structure makes sense compared with conventional investment financing, equity-based options, or another investor loan.</p>
        </section>
        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">When investors ask me about DSCR</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-charcoal">
            <li>Buying a rental property in Charlotte or Lake Norman</li>
            <li>Building a larger rental portfolio</li>
            <li>Comparing personal-name and business-entity strategies</li>
            <li>Reviewing a property where traditional income documentation is not the best fit</li>
            <li>Comparing DSCR with conventional investment financing</li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Related investor financing</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/investment-property-loans-charlotte" className="text-gold hover:underline">Investment Property Loans</Link>
            <Link href="/home-equity-heloc-charlotte" className="text-gold hover:underline">HELOC & Home Equity</Link>
            <Link href="/construction-loans-charlotte" className="text-gold hover:underline">Construction Loans</Link>
          </div>
        </section>
        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Have an investment property in mind?</h2>
          <p className="mt-3 text-white/85">Send me the purchase price, expected rent, and your goal for the property. I can help you compare financing structures.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white">Ask Jacob About an Investor Loan</Link>
        </section>
        <p className="mt-10 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979, serving Charlotte and Lake Norman.</p>
      </main>
    </div>
  );
}
