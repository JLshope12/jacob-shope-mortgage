import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";
import { GuideSchema } from "@/components/seo/GuideSchema";

const title = "What Credit Score Do You Need for a Mortgage in Charlotte?";
const description =
  "Learn how credit can affect mortgage options in Charlotte and why the full borrower profile matters, from Jacob Shope, NMLS# 2090979.";

export const metadata = {
  title: "Credit Score for a Mortgage in Charlotte | Jacob Shope",
  description,
  alternates: { canonical: "/mortgage-credit-score-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

export default function MortgageCreditScoreCharlottePage() {
  return (
    <div className="bg-offwhite">
      <GuideSchema
        title={title}
        description={description}
        path="/mortgage-credit-score-charlotte"
        topics={["Mortgage credit", "Credit scores", "Mortgage qualification"]}
      />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">What Credit Score Do You Need for a Mortgage in Charlotte?</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          Credit matters in mortgage financing, but it is only one part of the picture. Different loan programs, lenders, property types, and borrower profiles can lead to different outcomes.
        </p>
        <p className="mt-4 text-charcoal">I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help buyers understand how credit fits into the larger mortgage decision instead of treating one score as the entire answer.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Why credit matters</h2>
          <p className="mt-4 leading-relaxed text-charcoal">Credit can influence which loan programs are available, how a file is evaluated, and the pricing a borrower may receive. Lenders also review the history behind the score, not just the number itself.</p>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Payment history", "Recent and historical payment patterns can matter during a mortgage review."],
            ["Credit utilization", "Balances compared with available revolving credit can influence a credit profile."],
            ["Recent inquiries or new accounts", "New debt can affect both credit and the monthly obligations used in qualification."],
            ["Overall borrower profile", "Income, assets, debts, property type, and loan program are reviewed together with credit."],
          ].map(([cardTitle, body]) => (
            <div key={cardTitle} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5"><h3 className="font-bold text-navy">{cardTitle}</h3><p className="mt-3 leading-relaxed text-charcoal">{body}</p></div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common credit questions</h2>
          <div className="mt-6 space-y-6">
            <div><h3 className="font-semibold text-navy">Is there one minimum credit score for every mortgage?</h3><p className="mt-2 leading-relaxed text-charcoal">No. Requirements can vary by loan program and lender, and approval depends on more than one number.</p></div>
            <div><h3 className="font-semibold text-navy">Should I wait to buy until my score is perfect?</h3><p className="mt-2 leading-relaxed text-charcoal">Not necessarily. It is more useful to review your full scenario and compare what is available now with the value of waiting.</p></div>
            <div><h3 className="font-semibold text-navy">Can paying down debt help?</h3><p className="mt-2 leading-relaxed text-charcoal">Sometimes, but the effect depends on the account and timing. It is better to review the mortgage strategy before making major credit changes.</p></div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Related mortgage qualification guides</h2>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Charlotte Pre-Approval Guide</Link>
            <Link href="/mortgage-dti-charlotte" className="text-gold hover:underline">Debt-to-Income Guide</Link>
            <Link href="/mortgage-income-employment-charlotte" className="text-gold hover:underline">Income &amp; Employment Guide</Link>
            <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">First-Time Homebuyer Guide</Link>
          </div>
        </section>

        <div className="mt-12">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Looking at your mortgage options?</h2>
          <p className="mt-3 text-white/85">Start with the full picture, not just your score.</p>
          <div className="mt-6 flex flex-wrap gap-4"><Link href="/mortgage-guides" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Mortgage Guides</Link><Link href="/contact" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Ask Jacob a Question</Link></div>
        </section>
      </article>
    </div>
  );
}
