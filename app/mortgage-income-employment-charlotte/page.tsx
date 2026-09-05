import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

export const metadata = {
  title: "Mortgage Income & Employment Guide | Charlotte | Jacob Shope",
  description:
    "How mortgage lenders review employment gaps, job changes, salary, hourly pay, bonus, overtime, commission, and other employment income for Charlotte-area borrowers.",
  alternates: { canonical: "/mortgage-income-employment-charlotte" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://jacobshopemortgage.com/mortgage-income-employment-charlotte#article",
  headline: "How Income and Employment Are Reviewed for a Mortgage",
  description:
    "A practical Charlotte mortgage guide to employment history, job changes, employment gaps, salary, hourly pay, bonus, overtime, commission, and other income used for mortgage qualification.",
  url: "https://jacobshopemortgage.com/mortgage-income-employment-charlotte",
  mainEntityOfPage: "https://jacobshopemortgage.com/mortgage-income-employment-charlotte",
  author: { "@id": "https://jacobshopemortgage.com/#jacob-shope" },
  publisher: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
  dateModified: "2026-09-05",
  about: [
    "Mortgage income documentation",
    "Employment gaps",
    "Job changes",
    "Bonus income",
    "Overtime income",
    "Commission income",
    "Charlotte mortgage qualification",
  ],
  citation: [
    "https://selling-guide.fanniemae.com/sel/b3-3.2-02/standards-employment-related-income",
    "https://selling-guide.fanniemae.com/sel/b3-3.3-02/bonus-commission-overtime-and-tip-income",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does an employment gap automatically disqualify me from getting a mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Employment gaps are reviewed in context. The lender evaluates the borrower’s current employment, prior work history, income type, and whether the current income appears stable and likely to continue. Requirements vary by loan program.",
      },
    },
    {
      "@type": "Question",
      name: "Can I qualify for a mortgage after changing jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A job change does not automatically prevent mortgage approval. The lender reviews the new job, pay structure, employment history, and the specific loan program. Consistent and predictable income can remain eligible even when a borrower has changed employers.",
      },
    },
    {
      "@type": "Question",
      name: "Can bonus or overtime income count for a conventional mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Fannie Mae conventional loans, a two-year history is recommended for bonus, commission, overtime, and tip income. A shorter history of at least 12 months may be acceptable when positive factors support the shorter history. The lender must also analyze the income trend.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my bonus or overtime income is declining?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Fannie Mae conventional loans, declining variable income requires additional analysis. The lender must determine that the current income level has stabilized before using it for qualification; otherwise the income may not be eligible.",
      },
    },
    {
      "@type": "Question",
      name: "What documents should I gather before a mortgage pre-approval if my income is complicated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A useful starting point is a recent paystub, recent W-2s, employment dates for the last two years, and details about any job change, employment gap, bonus, overtime, commission, or other variable pay. Exact documentation depends on the loan program and lender.",
      },
    },
  ],
};

export default function MortgageIncomeEmploymentCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          How Income and Employment Are Reviewed for a Mortgage
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          Mortgage qualification is not only about how much you earn. Lenders also review how the income is earned,
          how long you have received it, whether the amount is stable, and how it can be documented. That becomes
          especially important after a job change, an employment gap, or when part of your pay comes from bonus,
          overtime, commission, tips, or other variable income.
        </p>
        <p className="mt-4 leading-relaxed text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.
          I use this page as a practical starting point for buyers, homeowners, Realtors, first responders, and other
          Charlotte and Lake Norman borrowers who need to understand how their employment history may affect a mortgage.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
          The conventional-loan examples below reference current Fannie Mae Selling Guide standards. FHA, VA, USDA,
          Freddie Mac, jumbo, investor, and non-QM programs can have different requirements, so the final answer depends
          on the actual loan program and file.
        </p>

        <div className="mt-8">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What the lender is trying to confirm</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              ["History", "Is there enough employment and income history to understand the borrower’s earning pattern?"],
              ["Stability", "Does the current employment and income appear stable rather than temporary or still declining?"],
              ["Documentation", "Can the income used to qualify be supported by paystubs, W-2s, employer verification, or other required documents?"],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="font-bold text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Employment gaps are not an automatic denial</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Fannie Mae&apos;s current employment-income standard says lenders should evaluate the borrower&apos;s work history
            over the most recent two years to determine whether it shows a reliable pattern of employment. A shorter
            employment history can still be considered when there are positive factors that support it.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            The same guidance says an employment gap during the most recent 12 months can make employment appear less
            stable, so the lender must carefully analyze the borrower&apos;s current employment and determine whether it is
            likely to continue. That is different from saying every gap causes a denial.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            A layoff, time away from the workforce, a return to work, or a move between employers should be reviewed with
            the complete timeline instead of reduced to one date on an application.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Changing jobs can still work</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Fannie Mae specifically notes that borrowers who change jobs frequently can still have a reliable flow of
            income when they are able to earn consistent and predictable income. In practice, the details matter: whether
            the new job is salaried or variable, whether the borrower stayed in the same line of work, how the new pay is
            structured, and what documentation is available.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            If you are planning a job change while buying a home, it is worth reviewing the new employment terms before
            you rely on that income in a purchase budget or write an offer.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link href="/mortgage-preapproval-charlotte" className="font-semibold text-gold hover:underline">
              Charlotte mortgage pre-approval guide
            </Link>
            <Link href="/mortgage-dti-charlotte" className="font-semibold text-gold hover:underline">
              How debt-to-income ratio works
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Bonus, commission, overtime, and tip income</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Variable income needs more analysis than a fixed salary because the amount can change from month to month or
            year to year. Under Fannie Mae&apos;s current conventional-loan standard, a two-year history is recommended for
            bonus, commission, overtime, and tip income. Income received for a shorter period, but not less than 12 months,
            may be considered when positive factors reasonably support the shorter history.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            The lender also looks at the trend. Stable or increasing variable income is generally calculated using the
            documented year-to-date and prior earnings over the required history. If the income is declining, the lender
            must determine that the lower current level has stabilized before using it for qualification. If it has not
            stabilized, the variable income may not be usable.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            That is why a borrower who says, “I made the same total income last year,” may still get a different answer
            once the current year-to-date bonus, overtime, or commission trend is reviewed.
          </p>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            ["Salary or fixed hourly pay", "The lender verifies the current pay structure and supporting employment documentation, then determines the amount that can be used under the applicable program."],
            ["Bonus and overtime", "The documented history, current year-to-date amount, and trend all matter. A strong prior year does not automatically override a current decline."],
            ["Commission income", "Commission is variable income and is reviewed for history and trend. Tax and expense treatment can also matter depending on the borrower and program."],
            ["Employment gaps", "The gap itself is not the whole answer. The current job, prior history, return-to-work timeline, and loan program need to be reviewed together."],
            ["Second or multiple jobs", "Each income source has to meet the applicable history and documentation requirements before it can be used to qualify."],
            ["Self-employment", "Self-employed income is evaluated under a separate set of rules and may require tax returns, business documentation, or other qualifying records."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <h2 className="font-bold text-navy">{title}</h2>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">What to gather before a pre-approval</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/85">
            If your employment or income is not perfectly straightforward, bring the details early. A useful starting
            point is your most recent paystub, recent W-2s, employment dates for the last two years, and information about
            any job change, employment gap, bonus, overtime, commission, or second job. Exact documentation will depend on
            the loan program and lender.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">
              Ask Jacob About an Income Scenario
            </Link>
            <Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">
              More Mortgage Guides
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Related Charlotte mortgage guides</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/mortgage-preapproval-charlotte" className="font-semibold text-gold hover:underline">
              Mortgage pre-approval in Charlotte
            </Link>
            <Link href="/mortgage-credit-score-charlotte" className="font-semibold text-gold hover:underline">
              Credit score for a mortgage
            </Link>
            <Link href="/mortgage-dti-charlotte" className="font-semibold text-gold hover:underline">
              Debt-to-income ratio explained
            </Link>
            <Link href="/first-responder-home-loans-charlotte" className="font-semibold text-gold hover:underline">
              First responder home loans in Charlotte
            </Link>
            <Link href="/charlotte-home-buying-mortgage-guide" className="font-semibold text-gold hover:underline">
              Charlotte home buying and mortgage guide
            </Link>
            <Link href="/how-much-house-can-i-afford-charlotte" className="font-semibold text-gold hover:underline">
              How much house can I afford in Charlotte?
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-xl font-bold text-navy">Official conventional-loan references</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            These are the Fannie Mae Selling Guide sections referenced in this article. They are useful primary sources,
            but the lender still has to apply the complete loan file and any other applicable program requirements.
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="https://selling-guide.fanniemae.com/sel/b3-3.2-02/standards-employment-related-income"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                Fannie Mae B3-3.2-02: Standards for Employment-Related Income
              </a>
            </li>
            <li>
              <a
                href="https://selling-guide.fanniemae.com/sel/b3-3.3-02/bonus-commission-overtime-and-tip-income"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                Fannie Mae B3-3.3-02: Bonus, Commission, Overtime, and Tip Income
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-charcoal/75">Reviewed September 5, 2026.</p>
        </section>
      </article>
    </div>
  );
}
