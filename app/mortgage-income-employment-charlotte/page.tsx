import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/mortgage-income-employment-charlotte`;
const FANNIE_INCOME = "https://selling-guide.fanniemae.com/sel/b3-3.1-01/general-income-information";

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
      dateModified: "2026-09-08",
      citation: [FANNIE_INCOME],
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
          <a href={FANNIE_INCOME} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-gold hover:underline">Fannie Mae general income guidance</a>
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

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Why income questions need context</h2>
          <p className="mt-4 leading-relaxed text-charcoal">The important question is not just “what do you make?” but “what income can be documented and used under the applicable loan guidelines?” That is especially important for bonus, overtime, commission, self-employment, recent job changes, and employment gaps.</p>
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
