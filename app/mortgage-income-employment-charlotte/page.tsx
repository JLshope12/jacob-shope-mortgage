import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/mortgage-income-employment-charlotte`;
const FANNIE_INCOME = "https://selling-guide.fanniemae.com/sel/b3-3.1-01/general-income-information";
const FANNIE_BASE_PAY = "https://selling-guide.fanniemae.com/sel/b3-3.3-01/base-income";
const FANNIE_VARIABLE_PAY = "https://selling-guide.fanniemae.com/sel/b3-3.3-02/bonus-commission-overtime-and-tip-income";
const FANNIE_DOCUMENTS = "https://selling-guide.fanniemae.com/sel/b3-3.2-01/standards-employment-and-income-documentation";
const FANNIE_TAX_RETURNS = "https://selling-guide.fanniemae.com/sel/b3-3.1-02/tax-return-and-transcript-documentation-requirements";

const FAQS = [
  [
    "Can firefighter, EMT, or nurse overtime count toward a mortgage?",
    "It can, if the overtime meets the documentation, history, and stability requirements of the selected loan program. Conventional Fannie Mae guidance generally recommends a two-year history but may consider at least 12 months when positive factors support a shorter history. The lender still has to review the earnings trend.",
  ],
  [
    "Does changing jobs automatically mean I have to wait two years?",
    "No universal two-year waiting period applies to every job change. The lender reviews the new pay arrangement, work history, documentation, and program-specific requirements. A change from salary to commission or variable hours can require a different income analysis.",
  ],
  [
    "What if my annual pay includes overtime that is dropping?",
    "A lender generally cannot treat a past high-earning year as guaranteed ongoing income. Under Fannie Mae's conventional guidelines, decreasing bonus or overtime income requires review of whether earnings have stabilized; otherwise, that income may not qualify.",
  ],
] as const;

export const metadata = {
  title: "Mortgage Income & Employment Questions | Charlotte | Jacob Shope",
  description: "A practical guide to how income and employment are reviewed for a mortgage, including salary, bonus, overtime, job changes, and employment gaps.",
  alternates: { canonical: "/mortgage-income-employment-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "How Income and Employment Are Reviewed for a Mortgage",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      dateModified: "2026-11-11",
      citation: [FANNIE_INCOME, FANNIE_BASE_PAY, FANNIE_VARIABLE_PAY, FANNIE_DOCUMENTS, FANNIE_TAX_RETURNS],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Mortgage Income and Employment Questions in Charlotte",
      author: { "@id": `${origin}/#jacob-shope` },
      isPartOf: { "@id": `${origin}/#website` },
      about: [
        { "@type": "Thing", name: "Mortgage income qualification" },
        { "@type": "Thing", name: "Employment verification" },
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
        { "@type": "ListItem", position: 3, name: "Mortgage Income and Employment", item: pageUrl },
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

export default function MortgageIncomeEmploymentCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">How Income and Employment Are Reviewed for a Mortgage</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">Mortgage qualification is not only about how much someone earns. Lenders also look at how the income is earned, its history, whether it is expected to continue, and how it can be documented.</p>
        <p className="mt-4 text-charcoal">I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. Income questions are some of the most common issues I work through with buyers, Realtors, and borrowers whose scenario does not fit a simple box.</p>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What agency guidance focuses on</h2>
          <p className="mt-4 leading-relaxed text-charcoal">Fannie Mae&apos;s current Selling Guide says stable and predictable income is foundational to underwriting and that lenders must document the income history and evaluate whether it is reasonably expected to continue. That is why two borrowers earning the same annual amount can still have different qualification outcomes.</p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Fannie Mae&apos;s guidance cited here applies to its conventional mortgages. FHA, VA, USDA, and other lenders or loan products can have different requirements, so the right analysis starts with the loan program.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
            <a href={FANNIE_INCOME} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">General income rules</a>
            <a href={FANNIE_BASE_PAY} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Fixed vs. variable base pay</a>
            <a href={FANNIE_VARIABLE_PAY} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Overtime and bonus income rules</a>
            <a href={FANNIE_DOCUMENTS} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Employment verification</a>
          </div>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            ["Salary or hourly income", "Regular employment income is generally reviewed using current earnings and supporting employment documentation."],
            ["Bonus and overtime", "Variable income may require a history and an analysis of whether it is stable enough to use for qualification."],
            ["Job changes", "Changing employers does not automatically prevent mortgage approval. The details of the new job, field, pay structure, and timing matter."],
            ["Employment gaps", "A gap in employment does not always end a mortgage scenario. The length of the gap, prior work history, return to work, and loan program all matter."],
            ["Self-employment", "Self-employed income is evaluated differently and generally requires a deeper review of tax returns or other qualifying documentation."],
            ["Other income", "Retirement, commission, rental, alimony, child support, and other income sources have their own documentation and continuity rules."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5"><h2 className="font-bold text-navy">{title}</h2><p className="mt-3 leading-relaxed text-charcoal">{body}</p></div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Overtime and shift work: a Charlotte first-responder example</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Firefighters, paramedics, nurses, and other shift workers may earn base pay plus overtime or other variable compensation. A big number on the latest W-2 does not mean the entire amount automatically counts as qualifying income.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            For example, someone with $72,000 in annual base pay and $18,000 of overtime last year should not assume the lender will qualify them at $90,000 this year. The lender needs the current year-to-date breakdown, prior earnings, and the pay pattern to determine which amount can be supported.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Under Fannie Mae&apos;s conventional bonus and overtime guidance, a two-year income history is recommended. At least 12 months may be considered when positive factors support a shorter history. Stable or increasing pay is averaged using the documented period, while declining pay requires evidence that the reduced level has stabilized; otherwise, the variable income may not qualify. That is a guideline summary, not an individual approval decision.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            If your schedule includes overtime, extra shifts, or fluctuating hours, share paystubs that separate those earnings and the available W-2 history early. I can review how that might affect your financing plan before you write an offer.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/first-responder-home-loans-charlotte" className="text-gold hover:underline">First Responder Mortgage Guide</Link>
            <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Charlotte Pre-Approval Checklist</Link>
            <a href={FANNIE_VARIABLE_PAY} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Read Fannie Mae&apos;s overtime guidance</a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What to gather for a useful income review</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Gathering the right documents early helps avoid relying on an income number the selected mortgage program cannot use.
          </p>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-charcoal">
            <li><strong>W-2 employee with regular hours:</strong> A current paystub, available W-2s, and the employer&apos;s details. Lenders may use employer or approved third-party verification instead of requesting every document directly.</li>
            <li><strong>Overtime, bonus, or changing hours:</strong> A current year-to-date paystub with earnings categories and prior-year earnings. Explain any meaningful schedule change or decline in overtime.</li>
            <li><strong>Recent job change or return to work:</strong> The current offer or employment details, start date, pay arrangement, and earlier work history. Requirements vary depending on the program and situation.</li>
            <li><strong>Self-employment or business ownership:</strong> Tell the lender how the business is taxed and have the applicable personal or business tax returns and supporting schedules available if required. A Form 1040 alone may not show the full income calculation.</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            These are starting points, not a universal document requirement. Ask for a secure upload link before sending financial information.
          </p>
          <a href={FANNIE_TAX_RETURNS} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-gold hover:underline">Fannie Mae tax-return documentation reference</a>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Why income questions need context</h2>
          <p className="mt-4 leading-relaxed text-charcoal">The important question is not just “what do you make?” but “what income can be documented and used under the applicable loan guidelines?” That is especially important for bonus, overtime, commission, self-employment, recent job changes, and employment gaps.</p>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Income and employment FAQs</h2>
          <div className="mt-6 space-y-6">
            {FAQS.map(([question, answer]) => (
              <div key={question}>
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Related qualification guides</h2>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Pre-Approval</Link>
            <Link href="/mortgage-dti-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Debt-to-Income</Link>
            <Link href="/mortgage-credit-score-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Credit</Link>
            <Link href="/investment-property-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Investment Property Loans</Link>
            <Link href="/construction-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Construction Loans</Link>
          </div>
        </section>

        <div className="mt-12"><AuthorBox /></div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white"><h2 className="text-2xl font-bold">Have an income scenario that does not fit neatly in a box?</h2><p className="mt-3 text-white/85">That is exactly when it helps to review the details before assuming the answer is no.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob About the Scenario</Link><Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">More Mortgage Guides</Link></div></section>
      </article>
    </div>
  );
}
