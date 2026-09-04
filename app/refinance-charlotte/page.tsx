import Link from "next/link";

export const metadata = {
  title: "Mortgage Refinance Charlotte NC | Jacob Shope",
  description:
    "Charlotte mortgage refinance guidance from Jacob Shope. Learn when a refinance may make sense, what to compare, and how to review the numbers before making a move.",
  alternates: { canonical: "/refinance-charlotte" },
};

export default function RefinanceCharlottePage() {
  return (
    <div className="bg-offwhite">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Mortgage Refinance in Charlotte, NC
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          A refinance is not automatically a good move just because rates change. The right question is whether the new loan improves your overall financial position after costs, timing, payment, and long-term goals are considered together.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help homeowners across Charlotte and Lake Norman compare refinance options without reducing the decision to a single advertised rate.
        </p>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">When homeowners usually look at refinancing</h2>
          <div className="mt-5 space-y-4 text-charcoal">
            <p>Common reasons include lowering the payment, changing the loan term, removing or changing mortgage insurance, accessing equity, consolidating debt, or moving from one loan structure to another.</p>
            <p>The value of the refinance depends on the full picture. That means looking at the new payment, closing costs, break-even point, remaining loan balance, how long you expect to keep the property, and what you are trying to accomplish.</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">What should you compare?</h2>
          <ul className="mt-5 space-y-3 text-charcoal">
            <li>Current payment versus proposed payment</li>
            <li>Interest rate and loan term</li>
            <li>Closing costs and prepaid items</li>
            <li>How long it takes to recover the cost of refinancing</li>
            <li>Whether you are resetting the loan term</li>
            <li>How much equity you are using or preserving</li>
            <li>Your expected time in the home</li>
          </ul>
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want me to run the numbers?</h2>
          <p className="mt-3 leading-relaxed text-white/85">
            Send me your current balance, payment, approximate rate, and what you want the refinance to accomplish. I&apos;ll help you compare the options.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/calculators/refinance" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Refinance Calculator</Link>
            <Link href="/contact" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Ask Jacob</Link>
          </div>
        </section>

        <p className="mt-8 text-sm text-charcoal/70">
          Written by Jacob Shope, Mortgage Loan Officer, Mpire Financial, NMLS# 2090979. Serving Charlotte, Huntersville, Cornelius, Davidson, Lake Norman, and surrounding areas.
        </p>
      </section>
    </div>
  );
}
