import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";
import { GuideSchema } from "@/components/seo/GuideSchema";

const title = "How Income and Employment Are Reviewed for a Mortgage";
const description =
  "A practical guide to how income and employment are reviewed for a mortgage, including salary, bonus, overtime, job changes, and employment gaps.";

export const metadata = {
  title: "Mortgage Income & Employment Questions | Charlotte | Jacob Shope",
  description,
  alternates: { canonical: "/mortgage-income-employment-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

export default function MortgageIncomeEmploymentCharlottePage() {
  return (
    <div className="bg-offwhite">
      <GuideSchema
        title={title}
        description={description}
        path="/mortgage-income-employment-charlotte"
        topics={["Mortgage income", "Employment history", "Mortgage qualification"]}
      />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">How Income and Employment Are Reviewed for a Mortgage</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">Mortgage qualification is not only about how much someone earns. Lenders also look at how the income is earned, how long it has been received, whether it is expected to continue, and how it can be documented.</p>
        <p className="mt-4 text-charcoal">I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. Income questions are some of the most common issues I work through with buyers, Realtors, and borrowers who have already been told their scenario does not fit.</p>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            ["Salary or hourly income", "Regular employment income is generally reviewed using current earnings and supporting employment documentation."],
            ["Bonus and overtime", "Variable income may require a history and an analysis of whether it is stable enough to use for qualification."],
            ["Job changes", "Changing employers does not automatically prevent mortgage approval. The details of the new job, field, pay structure, and timing matter."],
            ["Employment gaps", "A gap in employment does not always end a mortgage scenario. The length of the gap, prior work history, return to work, and loan program all matter."],
            ["Self-employment", "Self-employed income is evaluated differently and generally requires a deeper review of tax returns or other qualifying documentation."],
            ["Other income", "Retirement, commission, rental, alimony, child support, and other income sources have their own documentation and continuity rules."],
          ].map(([cardTitle, body]) => (
            <div key={cardTitle} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5"><h2 className="font-bold text-navy">{cardTitle}</h2><p className="mt-3 leading-relaxed text-charcoal">{body}</p></div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Why income questions need context</h2>
          <p className="mt-4 leading-relaxed text-charcoal">Two borrowers with the same annual earnings can be treated differently if one has a fixed salary and the other earns a large portion through bonus, commission, overtime, or self-employment. The important question is not just “what do you make?” but “what income can be documented and used under the loan guidelines?”</p>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common income and employment questions</h2>
          <div className="mt-6 space-y-6">
            <div><h3 className="font-semibold text-navy">Can I qualify after changing jobs?</h3><p className="mt-2 leading-relaxed text-charcoal">Possibly. A job change can be acceptable depending on the employment history, type of work, pay structure, and loan program.</p></div>
            <div><h3 className="font-semibold text-navy">Can bonus or overtime income count?</h3><p className="mt-2 leading-relaxed text-charcoal">It can in some scenarios when there is enough history and documentation to support using it.</p></div>
            <div><h3 className="font-semibold text-navy">Does an employment gap automatically disqualify me?</h3><p className="mt-2 leading-relaxed text-charcoal">No. Employment gaps need to be reviewed in context with prior work history, the reason for the gap, and the borrower&apos;s return to work.</p></div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Related mortgage qualification guides</h2>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Charlotte Pre-Approval Guide</Link>
            <Link href="/mortgage-credit-score-charlotte" className="text-gold hover:underline">Credit Score Guide</Link>
            <Link href="/mortgage-dti-charlotte" className="text-gold hover:underline">Debt-to-Income Guide</Link>
            <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">First-Time Homebuyer Guide</Link>
          </div>
        </section>

        <div className="mt-12">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white"><h2 className="text-2xl font-bold">Have an income scenario that does not fit neatly in a box?</h2><p className="mt-3 text-white/85">That is exactly when it helps to review the details before assuming the answer is no.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob About the Scenario</Link><Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">More Mortgage Guides</Link></div></section>
      </article>
    </div>
  );
}
