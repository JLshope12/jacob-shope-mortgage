import Link from "next/link";

export const metadata = {
  title: "Mortgage Appraisal Charlotte NC | Jacob Shope",
  description:
    "Charlotte mortgage appraisal guidance from Jacob Shope. Learn what appraisals do, how value can affect financing, and what buyers and sellers should understand before closing.",
  alternates: { canonical: "/mortgage-appraisal-charlotte" },
};

export default function MortgageAppraisalCharlottePage() {
  return (
    <div className="bg-offwhite">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Mortgage Appraisals in Charlotte, NC
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          The appraisal is one part of the mortgage process, but it can affect loan-to-value, financing structure, and sometimes the path to closing. Buyers, sellers, and Realtors are better prepared when they understand what the appraisal is actually doing.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help clients understand how appraisal results connect to the loan and what options may exist when value becomes an issue.
        </p>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What is the appraisal for?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            In a financed purchase, the lender generally uses an appraisal to obtain an independent opinion of the property&apos;s market value and to confirm that the property meets the requirements of the loan program being used.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">What happens if the value comes in below the contract price?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A low appraisal does not automatically mean the transaction is over. The next steps depend on the contract, loan program, available cash, appraisal review options, and whether the parties can renegotiate. The financing should be reviewed before anyone assumes there is only one solution.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Have an appraisal issue on a Charlotte-area transaction?</h2>
          <p className="mt-3 leading-relaxed text-white/85">Send me the scenario. I can help explain how the appraisal affects the mortgage and what financing questions need to be answered next.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob</Link>
            <Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Mortgage Guides</Link>
          </div>
        </section>

        <p className="mt-8 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer, Mpire Financial, NMLS# 2090979.</p>
      </section>
    </div>
  );
}
