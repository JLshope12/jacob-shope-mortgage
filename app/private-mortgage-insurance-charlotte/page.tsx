import Link from "next/link";

export const metadata = {
  title: "Private Mortgage Insurance (PMI) in Charlotte | Jacob Shope",
  description:
    "Understand how private mortgage insurance works, when it may apply, and how Charlotte buyers can compare mortgage options with Jacob Shope.",
  alternates: { canonical: "/private-mortgage-insurance-charlotte" },
};

export default function Page() {
  return (
    <div className="bg-offwhite">
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage education from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Private Mortgage Insurance (PMI) in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          PMI is one of the most misunderstood parts of conventional mortgage financing. It can add to the monthly payment, but it can also allow buyers to purchase without waiting until they have a 20% down payment.
        </p>
        <section className="mt-12 space-y-5 text-charcoal">
          <h2 className="text-2xl font-bold text-navy">What PMI is</h2>
          <p>Private mortgage insurance generally protects the lender when a conventional borrower makes a smaller down payment. The cost can vary based on several factors, including the loan structure and borrower profile.</p>
          <p>The right question is not simply whether PMI exists. It is whether the total payment and cash-to-close make sense compared with another loan option or a larger down payment.</p>
        </section>
        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Questions buyers should compare</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-charcoal">
            <li>How much does PMI add to the monthly payment?</li>
            <li>How much cash would a larger down payment require?</li>
            <li>Would FHA or another program create a better overall payment?</li>
            <li>How long do you expect to keep the home?</li>
            <li>What are the rules for eventually removing mortgage insurance?</li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Related mortgage guides</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/fha-vs-conventional-charlotte" className="text-gold hover:underline">FHA vs Conventional</Link>
            <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">First-Time Homebuyer Guide</Link>
            <Link href="/how-much-house-can-i-afford-charlotte" className="text-gold hover:underline">How Much House Can I Afford?</Link>
          </div>
        </section>
        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want to compare payments with and without PMI?</h2>
          <p className="mt-3 text-white/85">Send me the purchase price and down payment you are considering and I can help you compare the structure.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white">Ask Jacob</Link>
        </section>
        <p className="mt-10 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979, serving Charlotte and Lake Norman.</p>
      </main>
    </div>
  );
}
