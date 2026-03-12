import Link from "next/link";
import ratesData from "@/data/rates.json";

// To update rates: edit the data/rates.json file with new numbers and push to deploy.

type RateRow = {
  type: string;
  rate: string;
  apr: string;
  payment: string;
};

export const metadata = {
  title: "Today's Mortgage Rates in Charlotte, NC | Jacob Shope",
  description:
    "Current mortgage rates in Charlotte, NC updated regularly. View rates for 30-year fixed, 15-year fixed, FHA, VA, and ARM loans.",
};

export default function RatesPage() {
  const { lastUpdated, rates } = ratesData as {
    lastUpdated: string;
    rates: RateRow[];
  };

  const lastUpdatedDate = new Date(lastUpdated);
  const formattedDate = lastUpdatedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Today&apos;s Mortgage Rates in Charlotte, NC
        </h1>
        <p className="mt-4 text-lg text-charcoal">
          Updated regularly. Contact me for your personalized rate.
        </p>

        <p className="mt-2 text-sm text-charcoal/80">
          Last updated: {formattedDate}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rates.map((row) => (
            <div
              key={row.type}
              className="flex flex-col rounded-xl border border-charcoal/10 bg-white p-6 shadow-md"
            >
              <h3 className="font-semibold text-navy">{row.type}</h3>
              <dl className="mt-4 space-y-2">
                <div>
                  <dt className="text-sm text-charcoal/70">Rate</dt>
                  <dd className="text-xl font-semibold text-charcoal">
                    {row.rate}%
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-charcoal/70">APR</dt>
                  <dd className="text-xl font-semibold text-charcoal">
                    {row.apr}%
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-charcoal/70">
                    Est. payment per $100K
                  </dt>
                  <dd className="text-xl font-semibold text-charcoal">
                    ${row.payment}
                    <span className="text-base font-normal text-charcoal/70">
                      /mo
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-charcoal/90">
          Rates shown are for informational purposes only and are subject to
          change without notice. Your actual rate will depend on your credit
          score, loan amount, down payment, and other factors. Contact me for a
          personalized rate quote. NMLS# 2090979.
        </p>

        <section className="mt-14 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Get Your Personalized Rate
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
            >
              Get Your Personalized Rate
            </Link>
            <Link
              href="/calculators/payment"
              className="inline-flex rounded-lg border-2 border-navy px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Calculate Your Payment
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
