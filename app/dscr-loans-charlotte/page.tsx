import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/dscr-loans-charlotte`;
const FANNIE_RENTAL_INCOME = "https://selling-guide.fanniemae.com/sel/b3-3.8-01/rental-income";
const FANNIE_RENTAL_SUBJECT = "https://selling-guide.fanniemae.com/sel/b3-3.8-02/rental-income-subject-property";

const FAQS = [
  ["Is a DSCR loan the same as a conventional investment mortgage?", "No. DSCR is a lender-specific investor financing approach that focuses on rental cash flow. Conventional investment loans follow agency and lender qualification rules, including documentation for rental income."],
  ["Does a DSCR above 1.0 guarantee approval?", "No. The lender also reviews items such as credit, property eligibility, appraisal, reserves, cash to close, and the loan terms. Each lender defines its own DSCR calculation and eligibility rules."],
  ["What should I bring to an investor loan conversation?", "Purchase price, down payment, realistic market rent or signed lease, property taxes, insurance, HOA dues if any, property type, available reserves, and your plan to hold, rent, renovate, or sell."],
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "DSCR Loans in Charlotte: How Investors Compare Rental Cash Flow and Financing",
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      dateModified: "2026-11-01",
      citation: [FANNIE_RENTAL_INCOME, FANNIE_RENTAL_SUBJECT],
      about: ["DSCR financing", "Charlotte investment properties", "Rental cash flow", "Investment mortgage options"],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "DSCR Loans in Charlotte",
      isPartOf: { "@id": `${origin}/#website` },
      author: { "@id": `${origin}/#jacob-shope` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin },
        { "@type": "ListItem", position: 2, name: "Mortgage Guides", item: `${origin}/mortgage-guides` },
        { "@type": "ListItem", position: 3, name: "DSCR Loans Charlotte", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: FAQS.map(([question, answer]) => ({
        "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const metadata = {
  title: "DSCR Loans in Charlotte | Investor Mortgage Guide | Jacob Shope",
  description:
    "Learn how DSCR loans may fit real estate investors in Charlotte and Lake Norman with mortgage guidance from Jacob Shope.",
  alternates: { canonical: "/dscr-loans-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

export default function Page() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Investor financing with Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">DSCR Loans in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          DSCR financing is commonly used by real estate investors when the property&apos;s rental income is an important part of the qualification strategy. It can be useful for investors who want a different approach than a traditional full-income mortgage review.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial,
          NMLS# 2090979. I help investors compare loan structures around the actual property and business plan.
        </p>
        <section className="mt-12 space-y-5 text-charcoal">
          <h2 className="text-2xl font-bold text-navy">What DSCR means</h2>
          <p>DSCR stands for debt service coverage ratio. In simple terms, the lender compares qualifying rental income from the property with the housing expense used for the loan. Exact requirements vary by lender and program.</p>
          <p>For Charlotte investors, the bigger question is not just whether a DSCR loan is available. It is whether the structure makes sense compared with conventional investment financing, equity-based options, or another investor loan.</p>
        </section>
        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">How investors can estimate DSCR</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A basic starting point is qualifying monthly rental income divided by the monthly housing expense the lender
            uses. For example, $2,500 of qualifying monthly rent divided by $2,000 of mortgage payment, taxes,
            insurance, and applicable association dues equals 1.25. That is an illustration, not a quoted loan threshold.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Lenders can calculate qualifying rent and the denominator differently. Some programs use an appraisal&apos;s
            market-rent estimate, while others may review an existing lease. A ratio above 1.0 does not mean the property
            is profitable after vacancies, repairs, utilities, management, or capital expenses, and it does not guarantee
            loan approval.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">When investors ask me about DSCR</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-charcoal">
            <li>Buying a rental property in Charlotte or Lake Norman</li>
            <li>Building a larger rental portfolio</li>
            <li>Comparing personal-name and business-entity strategies</li>
            <li>Reviewing a property where traditional income documentation is not the best fit</li>
            <li>Comparing DSCR with conventional investment financing</li>
          </ul>
        </section>
        <section className="mt-12 rounded-2xl bg-white p-7 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What matters before choosing a loan</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            I review the proposed rent against realistic expenses and the investor&apos;s exit plan, then compare
            down payment, available reserves, rates, points, prepayment terms, appraisal requirements, and whether
            the property will be held long term or renovated. LLC ownership, short-term rentals, and rehab projects
            may each have additional lender-specific restrictions.
          </p>
          <p className="mt-3 leading-relaxed text-charcoal">
            In Charlotte and Lake Norman, property taxes, insurance, HOA dues, and neighborhood rental comparables
            may differ significantly from one property to another. A rent estimate should be checked against local
            evidence rather than assumed from the listing price alone.
          </p>
        </section>
        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">How DSCR differs from a conventional rental loan</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            DSCR is not a Fannie Mae underwriting program. If conventional investment financing is also an option,
            Fannie Mae publishes separate rules for documenting and using rental income in qualification.
            Those conventional guidelines should not be confused with a DSCR lender&apos;s terms.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={FANNIE_RENTAL_INCOME} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae: General Rental Income</a>
            <a href={FANNIE_RENTAL_SUBJECT} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae: Subject Property Rental Income</a>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">DSCR loan questions</h2>
          <div className="mt-5 space-y-5">
            {FAQS.map(([question, answer]) => (
              <div key={question}>
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{answer}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Related investor financing</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/investment-property-loans-charlotte" className="text-gold hover:underline">Investment Property Loans</Link>
            <Link href="/home-equity-heloc-charlotte" className="text-gold hover:underline">HELOC & Home Equity</Link>
            <Link href="/construction-loans-charlotte" className="text-gold hover:underline">Construction Loans</Link>
            <Link href="/mortgage-appraisal-charlotte" className="text-gold hover:underline">Mortgage Appraisal Guide</Link>
            <Link href="/service-areas/lake-norman" className="text-gold hover:underline">Lake Norman Mortgage Options</Link>
            <Link href="/mortgage-guides" className="text-gold hover:underline">All Mortgage Guides</Link>
          </div>
        </section>
        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Have an investment property in mind?</h2>
          <p className="mt-3 text-white/85">Send me the purchase price, expected rent, and your goal for the property. I can help you compare financing structures.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white">Ask Jacob About an Investor Loan</Link>
        </section>
        <div className="mt-12"><AuthorBox /></div>
      </article>
    </div>
  );
}
