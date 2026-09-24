import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/mortgage-credit-score-charlotte`;
const CFPB_CREDIT_SCORE = "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-score-en-315/";
const CFPB_MORTGAGE_CREDIT = "https://www.consumerfinance.gov/ask-cfpb/does-my-credit-score-affect-my-ability-to-get-a-mortgage-loan-or-the-mortgage-rate-i-pay-en-319/";
const CFPB_CREDIT_CHECKS = "https://www.consumerfinance.gov/ask-cfpb/what-exactly-happens-when-a-mortgage-lender-checks-my-credit-en-2005/";
const FANNIE_CREDIT_REQUIREMENTS = "https://selling-guide.fanniemae.com/sel/b3-5.1-01/general-requirements-credit-scores";
const FANNIE_DU_CREDIT_UPDATE = "https://singlefamily.fanniemae.com/applications-technology/desktop-underwriter-desktop-originator/desktop-underwriter-credit-risk-assessment-updates";
const FHFA_CREDIT_SCORES = "https://www.fhfa.gov/policy/credit-scores";

export const metadata = {
  title: "Credit Score for a Mortgage in Charlotte | Jacob Shope",
  description:
    "Learn how credit can affect mortgage options in Charlotte and why the full borrower profile matters, from Jacob Shope, NMLS# 2090979.",
  alternates: { canonical: "/mortgage-credit-score-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const FAQS = [
  [
    "Is there one minimum credit score for every mortgage?",
    "No. Requirements can vary by loan program, underwriting method, and lender, and approval depends on more than one number.",
  ],
  [
    "Should I wait to buy until my score is perfect?",
    "Not necessarily. It is more useful to review your full scenario and compare what is available now with the value of waiting.",
  ],
  [
    "Can paying down debt help before applying for a mortgage?",
    "Sometimes, but the effect depends on the account and timing. Review the mortgage strategy before making major credit changes.",
  ],
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "What Credit Score Do You Need for a Mortgage in Charlotte?",
      description:
        "A Charlotte mortgage credit guide from Jacob Shope explaining how credit fits into the broader mortgage qualification picture.",
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      dateModified: "2026-09-24",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      citation: [
        CFPB_CREDIT_SCORE,
        CFPB_MORTGAGE_CREDIT,
        CFPB_CREDIT_CHECKS,
        FANNIE_CREDIT_REQUIREMENTS,
        FANNIE_DU_CREDIT_UPDATE,
        FHFA_CREDIT_SCORES,
      ],
      about: ["Mortgage credit scores", "Mortgage qualification", "Charlotte mortgages", "Home financing"],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Credit Score for a Mortgage in Charlotte",
      author: { "@id": `${origin}/#jacob-shope` },
      isPartOf: { "@id": `${origin}/#website` },
      about: [
        { "@type": "Thing", name: "Mortgage credit scores" },
        { "@type": "Thing", name: "Mortgage qualification" },
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
        { "@type": "ListItem", position: 3, name: "Mortgage Credit Score in Charlotte", item: pageUrl },
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

export default function MortgageCreditScoreCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          What Credit Score Do You Need for a Mortgage in Charlotte?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          Credit matters in mortgage financing, but it is only one part of the picture. Different loan programs, lenders,
          property types, underwriting methods, and borrower profiles can lead to different outcomes.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help
          buyers understand how credit fits into the larger mortgage decision instead of treating one score as the entire answer.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Why credit matters</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            The Consumer Financial Protection Bureau explains that credit scores are based on information in your credit reports and can affect both mortgage eligibility and pricing. A mortgage decision still considers the broader file, including debts, assets, and income.
          </p>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Payment history", "Recent and historical payment patterns can matter during a mortgage review."],
            ["Credit utilization", "Balances compared with available revolving credit can influence a credit profile."],
            ["Recent inquiries or new accounts", "New debt can affect both credit and the monthly obligations used in qualification."],
            ["Overall borrower profile", "Income, assets, debts, property type, and loan program are reviewed together with credit."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <h3 className="font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">What current Fannie Mae guidance says about credit scores</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            Fannie Mae&apos;s current Selling Guide says Desktop Underwriter loan casefiles do not have a minimum credit score requirement. DU evaluates the borrower&apos;s credit risk using the full credit profile instead of using one third-party score as a stand-alone eligibility cutoff.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Fannie Mae still publishes minimum score requirements for certain manually underwritten loans and other delivery scenarios. That is why the underwriting method, loan program, property, and lender requirements all matter before deciding whether a particular score works for a mortgage.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={FANNIE_CREDIT_REQUIREMENTS} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae credit score requirements</a>
            <a href={FANNIE_DU_CREDIT_UPDATE} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fannie Mae DU credit risk update</a>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">A current credit-model change to know about</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            On September 9, 2026, the Federal Housing Finance Agency announced that all approved Fannie Mae and Freddie Mac lenders may use VantageScore 4.0 when originating and selling eligible loans to the Enterprises. That does not create one universal mortgage score requirement, and it does not eliminate lender or loan-program rules. It is another reason borrowers should have the full mortgage file reviewed instead of relying on a single score number from a consumer app.
          </p>
          <div className="mt-5 text-sm font-medium">
            <a href={FHFA_CREDIT_SCORES} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">FHFA credit score policy and September 2026 update</a>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common credit questions</h2>
          <div className="mt-6 space-y-6">
            {FAQS.map(([question, answer]) => (
              <div key={question}>
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">How credit fits into the rest of the approval</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Credit works together with income, debt-to-income ratio, assets, down payment, property type, and the loan program. If you are preparing to buy, it can help to review those pieces together before making changes to accounts or taking on new debt.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Charlotte Mortgage Preapproval</Link>
            <Link href="/mortgage-dti-charlotte" className="text-gold hover:underline">Debt-to-Income Guide</Link>
            <Link href="/mortgage-income-employment-charlotte" className="text-gold hover:underline">Income &amp; Employment Guide</Link>
            <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">First-Time Homebuyer Guide</Link>
            <Link href="/service-areas/charlotte" className="text-gold hover:underline">Charlotte Mortgage Options</Link>
            <Link href="/service-areas/lake-norman" className="text-gold hover:underline">Lake Norman Mortgage Options</Link>
            <Link href="/mortgage-guides" className="text-gold hover:underline">All Mortgage Guides</Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Official consumer credit resources</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            For neutral consumer guidance, these CFPB resources explain how credit scores work, how mortgage lenders use credit, and what happens when a lender checks your credit.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={CFPB_CREDIT_SCORE} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB: What is a credit score?</a>
            <a href={CFPB_MORTGAGE_CREDIT} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB: Credit scores and mortgages</a>
            <a href={CFPB_CREDIT_CHECKS} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB: Mortgage credit checks</a>
          </div>
        </section>

        <div className="mt-12"><AuthorBox /></div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Looking at your mortgage options?</h2>
          <p className="mt-3 text-white/85">Start with the full picture, not just your score.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/mortgage-guides" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Mortgage Guides</Link>
            <Link href="/contact" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Ask Jacob a Question</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
