import Link from "next/link";

export const metadata = {
  title: "Bridge Loans in Charlotte | Buy Before You Sell | Jacob Shope",
  description:
    "Learn how bridge financing can help some Charlotte homeowners buy before selling and compare options with Jacob Shope.",
  alternates: { canonical: "/bridge-loans-charlotte" },
};

export default function Page() {
  return (
    <div className="bg-offwhite">
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage strategy from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Bridge Loans in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          A bridge loan can help some homeowners use equity from their current property while buying the next home before the existing home is sold. It is a short-term strategy and should be compared carefully with other ways to structure the move.
        </p>
        <section className="mt-12 space-y-5 text-charcoal">
          <h2 className="text-2xl font-bold text-navy">Why buyers consider bridge financing</h2>
          <p>In a competitive Charlotte or Lake Norman purchase, a homeowner may not want the timing of the sale of the current home to control the purchase of the next one. Bridge financing may create flexibility, but it can also mean carrying multiple obligations for a period of time.</p>
          <p>I compare bridge financing with alternatives such as HELOCs, home equity loans, cash-out strategies, and purchase structures that account for the current home sale.</p>
        </section>
        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Questions to answer first</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-charcoal">
            <li>How much equity is available in the current home?</li>
            <li>How quickly is the current home expected to sell?</li>
            <li>Can the borrower qualify while carrying both properties?</li>
            <li>What is the cost of the short-term financing?</li>
            <li>Would another equity strategy be simpler or less expensive?</li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Related mortgage guides</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/home-equity-heloc-charlotte" className="text-gold hover:underline">HELOC & Home Equity</Link>
            <Link href="/cash-out-refinance-charlotte" className="text-gold hover:underline">Cash-Out Refinance</Link>
            <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Mortgage Pre-Approval</Link>
          </div>
        </section>
        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Trying to buy before you sell?</h2>
          <p className="mt-3 text-white/85">Send me your current home value, mortgage balance, and target purchase price. I can help you compare the available structures.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white">Ask Jacob</Link>
        </section>
        <p className="mt-10 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979, serving Charlotte and Lake Norman.</p>
      </main>
    </div>
  );
}
