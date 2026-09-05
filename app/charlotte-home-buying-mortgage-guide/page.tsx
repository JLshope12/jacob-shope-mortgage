import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

export const metadata = {
  title: "Charlotte Home Buying & Mortgage Guide | Jacob Shope",
  description:
    "A practical Charlotte home buying and mortgage guide covering pre-approval, loan options, down payment assistance, closing costs, appraisals, property taxes, and the financing side of buying real estate in Charlotte, NC.",
  alternates: { canonical: "/charlotte-home-buying-mortgage-guide" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://jacobshopemortgage.com/charlotte-home-buying-mortgage-guide#webpage",
  url: "https://jacobshopemortgage.com/charlotte-home-buying-mortgage-guide",
  name: "Charlotte Home Buying & Mortgage Guide",
  description:
    "A practical guide to the financing side of buying a home in Charlotte, North Carolina.",
  author: { "@id": "https://jacobshopemortgage.com/#jacob-shope" },
  publisher: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
  about: [
    "Charlotte real estate financing",
    "Charlotte mortgages",
    "Home buying in Charlotte",
    "Mortgage pre-approval",
    "Down payment assistance",
    "Closing costs",
    "Mortgage appraisals",
  ],
  citation: [
    "https://www.nchfa.com/home-buyers/buy-home/nc-home-advantage-mortgage",
    "https://www.charlottenc.gov/Streets-and-Neighborhoods/Housing/Resources-for-Homeowners-Renters/Homeownership",
    "https://tax.mecknc.gov/tax-bills-and-payments/tax-rates",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Mortgage Guides",
      item: "https://jacobshopemortgage.com/mortgage-guides",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Charlotte Home Buying & Mortgage Guide",
      item: "https://jacobshopemortgage.com/charlotte-home-buying-mortgage-guide",
    },
  ],
};

export default function CharlotteHomeBuyingMortgageGuidePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Charlotte real estate financing guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Charlotte Home Buying & Mortgage Guide
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          Buying real estate in Charlotte is more than finding the right house. The financing has
          to work with the purchase price, monthly payment, cash to close, appraisal, property
          taxes, insurance, and the timing of the offer. This guide focuses on that financing side
          of the Charlotte home buying process.
        </p>
        <p className="mt-4 leading-relaxed text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire
          Financial, NMLS# 2090979. I work with buyers, homeowners, veterans, first-time buyers,
          and real estate investors across Charlotte, Huntersville, Lake Norman, and surrounding
          communities.
        </p>

        <div className="mt-8">
          <AuthorBox />
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Start with the payment, not just the price</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Two homes with the same price can produce different monthly payments because property
            taxes, homeowners insurance, mortgage insurance, HOA dues, loan type, and interest rate
            can all change the total. Before touring seriously, it helps to build a payment range
            and a cash-to-close target instead of relying on a purchase-price guess.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/how-much-house-can-i-afford-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Charlotte Affordability Guide</Link>
            <Link href="/calculators/payment" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Payment Calculator</Link>
            <Link href="/mortgage-closing-costs-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Closing Costs in Charlotte</Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">A practical Charlotte home buying sequence</h2>
          <ol className="mt-6 space-y-6 text-charcoal">
            <li><strong className="text-navy">1. Review income, credit, debts, and available funds.</strong> The goal is to understand the complete borrower profile before choosing a loan program.</li>
            <li><strong className="text-navy">2. Get a mortgage pre-approval.</strong> A pre-approval helps establish a realistic price and payment range before an offer is written.</li>
            <li><strong className="text-navy">3. Compare financing options.</strong> Conventional, FHA, VA, USDA, jumbo, first-time buyer, and assistance programs can produce different cash-to-close and payment results.</li>
            <li><strong className="text-navy">4. Coordinate the offer with the financing.</strong> Seller concessions, closing date, appraisal timing, and loan type can all matter when the contract is written.</li>
            <li><strong className="text-navy">5. Complete appraisal and underwriting.</strong> The lender verifies the property and the borrower before final approval.</li>
            <li><strong className="text-navy">6. Review the final numbers before closing.</strong> Make sure the final payment, funds due, credits, and loan terms match the plan you built at the start.</li>
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-charcoal/80">
            Your real estate agent and closing attorney handle their respective parts of the transaction. My role is the mortgage and financing side.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Charlotte down payment assistance can change the cash-to-close calculation</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Assistance programs are worth reviewing before assuming how much cash you need. As of
            September 2026, the North Carolina Housing Finance Agency says its NC Home Advantage
            Mortgage may provide eligible buyers with down payment assistance up to 3% of the loan
            amount. It also offers a $15,000 NC 1st Home Advantage Down Payment option for eligible
            first-time buyers and military veterans who meet additional requirements.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            The City of Charlotte also lists House Charlotte, which offers deferred and forgivable
            assistance for qualified first-time homebuyers. The city says eligible buyers may
            receive up to $80,000 depending on the program structure and qualifications. These
            programs have income, property, occupancy, lender, and other eligibility requirements,
            so the right step is to review the current rules for the specific buyer and property.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium text-gold">
            <Link href="/down-payment-assistance-charlotte" className="hover:underline">Charlotte Down Payment Assistance Guide</Link>
            <a href="https://www.nchfa.com/home-buyers/buy-home/nc-home-advantage-mortgage" target="_blank" rel="noopener noreferrer" className="hover:underline">NC Housing Finance Agency</a>
            <a href="https://www.charlottenc.gov/Streets-and-Neighborhoods/Housing/Resources-for-Homeowners-Renters/Homeownership" target="_blank" rel="noopener noreferrer" className="hover:underline">City of Charlotte Homeownership Resources</a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Property taxes belong in the mortgage conversation</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A home&apos;s tax bill affects the monthly housing payment when taxes are escrowed. Mecklenburg
            County currently lists a county property-tax rate of 49.27 cents per $100 of assessed
            value, and the county notes that a total tax bill can also include a municipal tax plus
            applicable fees. That means the exact location of the property can matter even when two
            homes have similar prices.
          </p>
          <a href="https://tax.mecknc.gov/tax-bills-and-payments/tax-rates" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex font-medium text-gold hover:underline">Mecklenburg County Tax Rates</a>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
            <h2 className="text-xl font-bold text-navy">Choosing the loan program</h2>
            <p className="mt-3 leading-relaxed text-charcoal">The best loan is the one that fits the borrower, property, available cash, and long-term plan. Compare the structure instead of assuming one program is always better.</p>
            <div className="mt-4 space-y-2 text-sm font-medium text-gold">
              <div><Link href="/fha-vs-conventional-charlotte" className="hover:underline">FHA vs Conventional</Link></div>
              <div><Link href="/va-loans-charlotte" className="hover:underline">VA Loans in Charlotte</Link></div>
              <div><Link href="/loan-programs/jumbo" className="hover:underline">Jumbo Loans</Link></div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
            <h2 className="text-xl font-bold text-navy">Before the appraisal</h2>
            <p className="mt-3 leading-relaxed text-charcoal">The appraisal supports the lender&apos;s collateral review. It is separate from a home inspection and can affect the financing if the value or property condition creates an issue.</p>
            <Link href="/mortgage-appraisal-charlotte" className="mt-4 inline-flex text-sm font-medium text-gold hover:underline">Charlotte Mortgage Appraisal Guide</Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Buying a home in the Charlotte area?</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/85">
            Send me the address, target price, estimated down payment, and the payment range you want to stay around. I can help you compare the mortgage options and the cash-to-close before you make the next move.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob About a Charlotte Home</Link>
            <Link href="/mortgage-preapproval-charlotte" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Charlotte Mortgage Pre-Approval</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
