import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/investment-property-loans-charlotte`;
const FANNIE_RENTAL_INCOME = "https://selling-guide.fanniemae.com/sel/b3-3.8-02/rental-income-subject-property";
const FANNIE_RENTAL_GENERAL = "https://selling-guide.fanniemae.com/sel/b3-3.8-01/rental-income";
const FANNIE_SHORT_TERM = "https://selling-guide.fanniemae.com/sel/b3-3.8-03/rental-income-subject-property-short-term-rental";
const MECK_TAX = "https://tax.mecknc.gov/tax-bills-and-payments/tax-rates";
const IREDELL_PROPERTY_SEARCH = "https://taxweb.iredellcountync.gov/PublicAccess/RealEstate.aspx";
const NC_TENANT_DEPOSITS = "https://www.ncleg.gov/enactedlegislation/statutes/html/byarticle/chapter_42/article_6.html";

export const metadata = {
  title: "Investment Property Loans Charlotte NC | Jacob Shope Mortgage",
  description:
    "Investment property and real estate investor mortgage guidance in Charlotte and Lake Norman from Jacob Shope, NMLS# 2090979.",
  alternates: { canonical: "/investment-property-loans-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const FAQS = [
  ["What types of investment property financing should I compare?", "Depending on the property and borrower, it can make sense to compare conventional investment financing, DSCR loans, bridge financing, home-equity strategies, cash-out refinancing, and other investor-focused options."],
  ["Is DSCR financing the same as a conventional investment loan?", "No. DSCR programs generally focus more heavily on property cash flow, while conventional financing typically relies more on the borrower's personal income, assets, credit, and agency guidelines."],
  ["Can rental income help with qualification?", "It can in some loan structures. The amount and documentation that may be used depend on the program, property, lease or market-rent evidence, borrower history, and applicable underwriting rules."],
  ["Should I choose an investment loan based only on rate?", "Usually not. Cash required, reserves, prepayment terms, appraisal requirements, property eligibility, documentation, expected cash flow, and the planned hold period can matter as much as the note rate."],
  ["Can a Charlotte short-term rental qualify using projected Airbnb income?", "Possibly, but projected booking revenue alone is not a loan approval. Fannie Mae has specific documentation rules for eligible one-unit investment-property short-term rentals, including evidence of lawful operation and qualifying rent. DSCR and other investor lenders may use different standards."],
] as const;

export default function InvestmentPropertyLoansCharlottePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Investment Property Financing in Charlotte, NC",
        description: "A practical guide to comparing conventional, DSCR, bridge, home-equity, and other financing structures for Charlotte-area real estate investors.",
        author: { "@id": `${origin}/#jacob-shope` },
        publisher: { "@id": `${origin}/#mpire-financial` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        dateModified: "2026-11-13",
        citation: [FANNIE_RENTAL_INCOME, FANNIE_RENTAL_GENERAL, FANNIE_SHORT_TERM, MECK_TAX, IREDELL_PROPERTY_SEARCH, NC_TENANT_DEPOSITS],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Investment Property Loans in Charlotte, NC",
        author: { "@id": `${origin}/#jacob-shope` },
        isPartOf: { "@id": `${origin}/#website` },
        about: [
          { "@type": "Thing", name: "Investment property financing" },
          { "@type": "Thing", name: "DSCR loans" },
          { "@type": "Thing", name: "Real estate investor financing" },
          { "@type": "Place", name: "Charlotte, North Carolina" },
          { "@type": "Place", name: "Lake Norman, North Carolina" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Mortgage Guides", item: `${origin}/mortgage-guides` },
          { "@type": "ListItem", position: 3, name: "Investment Property Loans Charlotte", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: FAQS.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Real estate investor financing</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Investment Property Loans in Charlotte, NC</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          Investor financing is not one product. The right structure depends on the property, expected rent, borrower profile, exit plan, existing equity, and whether the goal is buy-and-hold, short-term rental, fix-and-flip, or another strategy.
        </p>
        <p className="mt-4 max-w-3xl text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help investors compare the financing structure against the actual deal instead of looking at rate alone.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            ["Conventional investment loans", "A strong fit for many stabilized rental properties when the borrower qualifies using traditional income and asset documentation."],
            ["DSCR financing", "Useful for certain investment scenarios where the property's cash flow is central to qualification rather than traditional personal income documentation."],
            ["Equity-based strategies", "HELOCs, home equity loans, or cash-out refinancing can sometimes help investors deploy equity from another property into a purchase."],
            ["Bridge and short-term financing", "For deals with a timing gap, rehab component, or planned exit, short-term financing may be more important than the long-term loan on day one."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">How rental income is documented on conventional loans</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Fannie Mae&apos;s current Selling Guide allows rental income to be considered for eligible one-to-four-unit investment properties, but the lender must document the income under the applicable guideline. Depending on the scenario, that can involve a lease, market-rent forms, appraisal documentation, tax returns, and the borrower&apos;s housing history.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            That is why I look at the property and the borrower together before assuming how much rent can be used for qualification.
          </p>
        </section>


        <section className="mt-14 rounded-2xl border border-navy/10 bg-white p-8">
          <h2 className="text-2xl font-bold text-navy">2026 conventional rental-income rules: long-term versus short-term rentals</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Fannie Mae&apos;s September 2, 2026 Selling Guide separates standard rental-income qualification from
            short-term rental income on eligible one-unit investment properties. For certain conventional investment
            purchases using documented long-term gross rent, its subject-property calculation starts with 75% of
            qualifying monthly rent and subtracts principal, interest, taxes, insurance, and applicable association dues
            (PITIA). The treatment of a positive or negative result also depends on rental management experience.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Its separate short-term rental guidance uses 50% of documented qualifying monthly gross rent for
            eligible one-unit investment-property purchases before subtracting PITIA. The property must be legally
            permitted for that use. Documentation can include a standard long-term comparable rent form or validated
            data from three comparable short-term rentals, under the guide&apos;s conditions. This is <strong>Fannie Mae
            conventional qualification guidance</strong>, not a blanket DSCR program rule or a promise of approval.
          </p>
          <div className="mt-5 rounded-xl bg-offwhite p-5 text-charcoal">
            <p className="font-semibold text-navy">Illustration, not an approval calculation</p>
            <p className="mt-2 leading-relaxed">
              Suppose a lender documents $2,500 in eligible monthly gross rent and PITIA is $2,000.
              The standard purchase calculation would be $2,500 x 75% - $2,000 = <strong>-$125</strong>.
              Under the separate short-term-rental purchase calculation, the same accepted gross-rent assumption
              would yield $2,500 x 50% - $2,000 = <strong>-$750</strong>. Eligibility, documentation, and the
              treatment of these results vary by the applicable rule; neither number is the property&apos;s real-world profit.
            </p>
          </div>
          <p className="mt-4 leading-relaxed text-charcoal">
            Compare those results with a <Link href="/dscr-loans-charlotte" className="font-medium text-gold hover:underline">DSCR financing analysis</Link>,
            which follows the actual investor lender&apos;s rules. Confirm property and HOA short-term-rental
            restrictions before relying on projected nightly bookings.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={FANNIE_RENTAL_INCOME} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae: Standard Rental Income</a>
            <a href={FANNIE_SHORT_TERM} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae: Short-Term Rental Income</a>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-navy/10 bg-white p-8">
          <h2 className="text-2xl font-bold text-navy">Charlotte and Lake Norman rental-property due diligence</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Before putting a Charlotte, Huntersville, Cornelius, Davidson, or Mooresville rental under contract,
            I recommend verifying the property-specific costs instead of building a loan plan from a listing&apos;s
            estimated rental yield.
          </p>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-charcoal">
            <li><strong>Taxes:</strong> Check the parcel and current tax bill. Mecklenburg&apos;s posted county rate
            is only one part of a possible total bill; applicable city or town taxes and fees can add costs.
            <a href={MECK_TAX} target="_blank" rel="noopener noreferrer" className="ml-1 font-medium text-gold hover:underline">Mecklenburg tax rates</a>.
            For an Iredell County property, use the
            <a href={IREDELL_PROPERTY_SEARCH} target="_blank" rel="noopener noreferrer" className="ml-1 font-medium text-gold hover:underline">official property search</a>.</li>
            <li><strong>Insurance and monthly expenses:</strong> Quote appropriate landlord or short-term-rental coverage;
            include HOA dues, flood exposure where relevant, management, utilities, repairs, vacancy, and reserves.</li>
            <li><strong>Rental rules:</strong> Review HOA covenants, applicable local land-use and short-term-rental requirements,
            and the status of any existing lease before promising a particular rental strategy.</li>
            <li><strong>Security deposits:</strong> For a North Carolina residential rental, review
            <a href={NC_TENANT_DEPOSITS} target="_blank" rel="noopener noreferrer" className="ml-1 font-medium text-gold hover:underline">the state Tenant Security Deposit Act</a>
            and obtain legal or property-management guidance where needed. A tenant deposit is not the investor&apos;s operating cash.</li>
            <li><strong>Financing structure:</strong> Compare initial cash needed, closing costs,
            any prepayment penalty, lender reserves, and a credible refinance or sale timeline.
            <Link href="/mortgage-closing-costs-charlotte" className="ml-1 font-medium text-gold hover:underline">Review closing costs</Link>.</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            These resources help with property research; they do not replace a tax, legal, insurance, or property-management professional&apos;s review.
          </p>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">How I look at an investment financing scenario</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            I want to know the purchase price, expected rent, taxes, insurance, HOA if applicable, rehab needs, cash available, current properties, and the investor&apos;s intended hold period. That gives us a better basis for comparing conventional, DSCR, bridge, equity, or other available financing.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Charlotte, Lake Norman, Cabarrus, Gaston, and Iredell County all have different investor opportunities. The financing should match the business plan for the property.
          </p>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common investor financing questions</h2>
          <div className="mt-6 space-y-6">
            {FAQS.map(([question, answer]) => (
              <div key={question}>
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-navy/10 bg-white p-8">
          <h2 className="text-2xl font-bold text-navy">Related investor financing guides</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">Different deals call for different capital structures. These guides cover the financing options I compare most often with Charlotte-area investors.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/dscr-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">DSCR Loans</Link>
            <Link href="/bridge-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Bridge Loans</Link>
            <Link href="/construction-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Investment Construction Financing</Link>
            <Link href="/home-equity-heloc-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">HELOC &amp; Home Equity</Link>
            <Link href="/cash-out-refinance-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Cash-Out Refinance</Link>
            <Link href="/mortgage-appraisal-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Appraisals</Link>
            <Link href="/service-areas/charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Charlotte Mortgage Options</Link>
            <Link href="/service-areas/lake-norman" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Lake Norman</Link>
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Official conventional rental-income guidance</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">For conventional rental-income rules, I reference the current Fannie Mae Selling Guide rather than relying on generic summaries.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={FANNIE_RENTAL_INCOME} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae: Rental Income from the Subject Property</a>
            <a href={FANNIE_RENTAL_GENERAL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae: General Rental Income Information</a>
          </div>
        </section>

        <div className="mt-14"><AuthorBox /></div>

        <section className="mt-14 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Send Jacob an Investment Scenario</Link>
          <Link href="/calculators/payment" className="rounded-lg bg-navy px-5 py-3 font-semibold text-white hover:bg-slate">Run the Payment Numbers</Link>
          <Link href="/mortgage-guides" className="rounded-lg border border-navy/20 px-5 py-3 font-semibold text-navy hover:border-gold hover:text-gold">More Mortgage Guides</Link>
        </section>
      </section>
    </div>
  );
}
