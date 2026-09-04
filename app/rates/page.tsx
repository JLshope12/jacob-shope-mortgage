import Link from "next/link";

export const metadata = {
  title: "Charlotte Mortgage Rates and Payment Strategy",
  description:
    "Understand what affects mortgage rates and get a personalized payment breakdown from Charlotte mortgage broker Jacob Shope. NMLS# 2090979.",
  alternates: { canonical: "/rates" },
};

export default function RatesPage() {
  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <p className="font-semibold text-gold">Rates are only one part of the payment</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Mortgage rates and your buying plan</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          A rate shown online cannot account for your credit, down payment, property type, loan
          program, points, or closing timeline. I would rather give you numbers that match the home
          and the way you plan to finance it.
        </p>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5 md:p-10">
          <h2 className="text-2xl font-bold text-navy">What changes your mortgage rate?</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              "Credit profile and debt-to-income ratio",
              "Down payment and available equity",
              "Loan program and occupancy",
              "Property type and loan amount",
              "Whether you pay discount points",
              "The length of your rate lock",
            ].map((item) => <p key={item} className="rounded-lg bg-offwhite p-4 text-charcoal">{item}</p>)}
          </div>
        </section>

        <section className="mt-12 bg-navy p-8 text-center text-white md:rounded-2xl md:p-12">
          <h2 className="text-3xl font-bold">Get a useful number, not a generic number</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Send me the purchase price, estimated down payment, and property type. I will send back a clear payment breakdown.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90">Request a Rate and Payment</Link>
            <Link href="/calculators/payment" className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-navy">Estimate a Payment</Link>
          </div>
          <p className="mt-6 text-xs text-white/65">Rates and terms are subject to change. This is not a commitment to lend.</p>
        </section>
      </div>
    </div>
  );
}
