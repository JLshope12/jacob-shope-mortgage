import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/how-much-house-can-i-afford-charlotte`;
const CFPB_BUDGET = "https://www.consumerfinance.gov/owning-a-home/prepare/figure-out-how-much-you-want-to-spend/";
const CFPB_PAYMENT = "https://www.consumerfinance.gov/ask-cfpb/on-a-mortgage-whats-the-difference-between-my-principal-and-interest-payment-and-my-total-monthly-payment-en-1941/";
const MECK_TAX = "https://tax.mecknc.gov/tax-bills-and-payments/tax-rates";
const IREDELL_TAX = "https://www.iredellcountync.gov/m/newsflash/home/detail/1948";

export const metadata = {
  title: "How Much House Can I Afford in Charlotte? | Jacob Shope",
  description:
    "Work backward from a comfortable monthly housing budget with a practical example, Charlotte and Lake Norman property-tax checks, and mortgage pre-approval steps.",
  alternates: { canonical: "/how-much-house-can-i-afford-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "How Much House Can I Afford in Charlotte?",
      description: "A practical monthly-housing-budget approach to mortgage affordability in Charlotte and Lake Norman.",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      dateModified: "2026-11-10",
      citation: [CFPB_BUDGET, CFPB_PAYMENT, MECK_TAX, IREDELL_TAX],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "How Much House Can I Afford in Charlotte?",
      author: { "@id": `${origin}/#jacob-shope` },
      isPartOf: { "@id": `${origin}/#website` },
      about: ["Mortgage affordability", "Charlotte home buying", "Lake Norman mortgage payments"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin },
        { "@type": "ListItem", position: 2, name: "Mortgage Guides", item: `${origin}/mortgage-guides` },
        { "@type": "ListItem", position: 3, name: "Charlotte Mortgage Affordability", item: pageUrl },
      ],
    },
  ],
};

export default function AffordabilityCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
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

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-8">
          <h2 className="text-2xl font-bold text-navy">Example: Work backward from a $3,000 monthly housing budget</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Suppose your target is $3,000 a month for the mortgage and HOA combined. Before calculating a loan amount,
            set aside realistic estimates for costs besides principal and interest. These are <strong>illustrative numbers only</strong>,
            not a Charlotte tax assessment, insurance quote, mortgage offer, or loan approval.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-sm text-charcoal">
              <thead><tr className="border-b border-navy/15 text-navy"><th className="py-3 pr-4">Budget item</th><th className="py-3 text-right">Monthly example</th></tr></thead>
              <tbody>
                {[
                  ["Total housing budget including HOA", "$3,000"],
                  ["Estimated property taxes", "-$450"],
                  ["Estimated homeowners insurance", "-$150"],
                  ["Estimated mortgage insurance", "-$150"],
                  ["Estimated HOA dues", "-$150"],
                ].map(([label, amount]) => (
                  <tr key={label} className="border-b border-navy/10"><td className="py-3 pr-4">{label}</td><td className="py-3 text-right">{amount}</td></tr>
                ))}
                <tr className="font-bold text-navy"><td className="pt-4 pr-4">Budget left for principal and interest</td><td className="pt-4 text-right">$2,100</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 leading-relaxed text-charcoal">
            From there, use a realistic interest rate and loan term to estimate the loan amount that fits the
            $2,100 principal-and-interest budget. Add your planned down payment to estimate a possible purchase price.
            If the home has no HOA or a different insurance cost, the result changes.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal">
            HOA dues are generally paid separately from your mortgage servicer, and maintenance, utilities, and emergency
            savings still need room in your household budget. Not every loan requires mortgage insurance.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
            <a href={CFPB_BUDGET} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB homebuying budget guidance</a>
            <a href={CFPB_PAYMENT} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB total monthly payment explanation</a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Check the property, not just the listing price</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Taxes and insurance can change the payment on two similarly priced homes. For a Charlotte or
            Huntersville purchase, review the <a href={MECK_TAX} target="_blank" rel="noopener noreferrer" className="font-medium text-gold hover:underline">Mecklenburg County tax-rate information</a>.
            The county explains that municipal tax and applicable fees can be added to the county portion.
            For a Mooresville or Troutman property in Iredell County, start with the
            <a href={IREDELL_TAX} target="_blank" rel="noopener noreferrer" className="ml-1 font-medium text-gold hover:underline">Iredell County FY 2026–2027 tax budget</a>
            and verify the specific parcel, municipality, and current assessment before estimating taxes.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            A past tax bill or list price may not be the right number for a new buyer. Ask for a property-specific
            homeowners insurance quote, check whether flood insurance is relevant, and confirm HOA dues and any assessments.
            For waterfront or condo purchases, those details may materially change the budget.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/service-areas/lake-norman" className="text-gold hover:underline">Lake Norman mortgage and waterfront checks</Link>
            <Link href="/mortgage-appraisal-charlotte" className="text-gold hover:underline">Mortgage appraisal basics</Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Approval amount and comfortable payment are not always the same thing</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A lender may be able to approve a payment that is higher than what you actually want to spend every month. I prefer to start with your comfort level, emergency savings, future plans, and cash needed at closing, then build the mortgage around that.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Check your cash and loan qualification separately</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            The monthly budget is only one piece. For example, a $500,000 home with 5% down requires a $25,000
            down payment, before closing costs and any prepaid expenses. The remaining $475,000 is the starting
            loan amount before any program-specific financed fees. Different loan programs can have different
            down payment, mortgage insurance, and approval requirements.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Lenders also review qualifying income, recurring debts, credit, employment, and available funds.
            A pre-approval may establish what a lender could finance, but it should not replace a budget you
            feel comfortable paying every month.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/mortgage-dti-charlotte" className="text-gold hover:underline">How debt-to-income works</Link>
            <Link href="/mortgage-closing-costs-charlotte" className="text-gold hover:underline">Charlotte closing costs</Link>
            <Link href="/down-payment-assistance-charlotte" className="text-gold hover:underline">Down payment assistance</Link>
            <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">First-time homebuyer guide</Link>
          </div>
        </section>

        <div className="mt-12"><AuthorBox /></div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want a realistic Charlotte price range?</h2>
          <p className="mt-3 leading-relaxed text-white/85">Use the calculator for a starting point, then send me the numbers and I can help you refine the payment and price range.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/calculators/affordability" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Affordability Calculator</Link>
            <Link href="/mortgage-preapproval-charlotte" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Pre-Approval Guide</Link>
          </div>
        </section>

      </section>
    </div>
  );
}
