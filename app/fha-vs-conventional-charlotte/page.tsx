import Link from "next/link";

export const metadata = {
  title: "FHA vs Conventional Loans in Charlotte | Jacob Shope",
  description:
    "Compare FHA and conventional mortgage options with Jacob Shope, a Charlotte mortgage broker serving Charlotte and Lake Norman.",
  alternates: { canonical: "/fha-vs-conventional-charlotte" },
};

export default function Page() {
  return (
    <div className="bg-offwhite">
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">FHA vs Conventional Loans in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          FHA and conventional loans can both be strong options for Charlotte homebuyers, but the better fit depends on the borrower, property, credit profile, cash available, and long-term plan.
        </p>
        <section className="mt-12 space-y-5 text-charcoal">
          <h2 className="text-2xl font-bold text-navy">The difference that matters</h2>
          <p>FHA financing is insured by the Federal Housing Administration and can be useful when a buyer needs more flexibility around credit or qualifying. Conventional financing follows guidelines used by Fannie Mae, Freddie Mac, or private investors and may offer different mortgage insurance and property options.</p>
          <p>I do not start with a label. I compare the full payment, cash needed, mortgage insurance, property type, and the buyer&apos;s longer-term goals before recommending a direction.</p>
        </section>
        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Questions I compare for Charlotte buyers</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-charcoal">
            <li>How much cash do you want to bring to closing?</li>
            <li>How do the monthly payments compare?</li>
            <li>How does mortgage insurance work in each option?</li>
            <li>Does the property type affect which program fits best?</li>
            <li>How long do you expect to keep the home?</li>
          </ul>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Related mortgage guides</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/loan-programs/fha" className="text-gold hover:underline">FHA Loans</Link>
            <Link href="/loan-programs/conventional" className="text-gold hover:underline">Conventional Loans</Link>
            <Link href="/mortgage-credit-score-charlotte" className="text-gold hover:underline">Mortgage Credit Scores</Link>
            <Link href="/mortgage-dti-charlotte" className="text-gold hover:underline">Debt-to-Income</Link>
          </div>
        </section>
        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want the two options side by side?</h2>
          <p className="mt-3 text-white/85">Send me your scenario and I can help you compare FHA and conventional financing based on the actual numbers.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white">Ask Jacob</Link>
        </section>
        <p className="mt-10 text-sm text-charcoal/70">Written by Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979, serving Charlotte and Lake Norman.</p>
      </main>
    </div>
  );
}
