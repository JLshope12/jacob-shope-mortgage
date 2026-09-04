import Link from "next/link";

export const metadata = {
  title: "How Much House Can I Afford in Charlotte? | Jacob Shope",
  description:
    "Learn how mortgage affordability works in Charlotte with Jacob Shope. Understand payment, income, debt, down payment, taxes, insurance, and cash-to-close before setting a price range.",
  alternates: { canonical: "/how-much-house-can-i-afford-charlotte" },
};

export default function AffordabilityCharlottePage() {
  return (
    <div className="bg-offwhite">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          How Much House Can I Afford in Charlotte?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          The answer is not just a purchase-price number. A useful affordability range starts with the monthly payment you are comfortable with, then works backward through taxes, insurance, interest rate, down payment, mortgage insurance, HOA dues, and other debts.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help buyers across Charlotte and Lake Norman turn the numbers into a realistic price range before they start making offers.
        </p>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What determines mortgage affordability?</h2>
          <ul className="mt-5 space-y-3 text-charcoal">
            <li>Your gross monthly income and qualifying income</li>
            <li>Your recurring monthly debts</li>
            <li>Your down payment and available cash</li>
            <li>The interest rate and loan program</li>
            <li>Property taxes and homeowners insurance</li>
            <li>Mortgage insurance, if applicable</li>
            <li>HOA dues and other property-specific expenses</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Approval amount and comfortable payment are not always the same thing</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A lender may be able to approve a payment that is higher than what you actually want to spend every month. I prefer to start with your comfort level, emergency savings, future plans, and cash needed at closing, then build the mortgage around that.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want a realistic Charlotte price range?</h2>
          <p className="mt-3 leading-relaxed text-white/85">Use the calculator for a starting point, then send me the numbers and I can help you refine the payment and price range.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/calculators/affordability" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Affordability Calculator</Link>
            <Link href="/mortgage-preapproval-charlotte" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Pre-Approval Guide</Link>
          </div>
        </section>

        <p className="mt-8 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer, Mpire Financial, NMLS# 2090979.</p>
      </section>
    </div>
  );
}
