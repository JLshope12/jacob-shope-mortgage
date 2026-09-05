import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";
import { GuideSchema } from "@/components/seo/GuideSchema";

const title = "Mortgage Pre-Approval in Charlotte";
const description =
  "A practical guide to mortgage pre-approval in Charlotte from Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.";

export const metadata = {
  title: "Mortgage Pre-Approval in Charlotte | Jacob Shope",
  description,
  alternates: { canonical: "/mortgage-preapproval-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

export default function MortgagePreapprovalCharlottePage() {
  return (
    <div className="bg-offwhite">
      <GuideSchema
        title={title}
        description={description}
        path="/mortgage-preapproval-charlotte"
        topics={["Mortgage pre-approval", "Home buying", "Mortgage qualification"]}
      />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Mortgage Pre-Approval in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          A mortgage pre-approval helps a buyer understand an estimated buying range, expected payment, and the information a lender will review before a home offer is made.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I work with buyers across Charlotte and Lake Norman to make the financing side of a home search easier to understand.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What is reviewed during pre-approval?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A typical review looks at income, employment, credit history, monthly obligations, available funds, the planned property type, and the loan program being considered. The exact documentation depends on the borrower and the loan.
          </p>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Income and employment", "How income is earned and documented can affect the financing review."],
            ["Credit history", "Credit is one part of determining which loan options may be available."],
            ["Monthly obligations", "Existing recurring debts are considered alongside income and the proposed housing payment."],
            ["Funds for the transaction", "A lender may review funds for down payment, closing costs, and any required reserves."],
          ].map(([cardTitle, body]) => (
            <div key={cardTitle} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <h3 className="font-bold text-navy">{cardTitle}</h3>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Why do this before shopping?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            It gives the buyer and Realtor a clearer starting point. It also creates time to compare loan structures and resolve documentation questions before a property is under contract.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common pre-approval questions</h2>
          <div className="mt-6 space-y-6">
            <div><h3 className="font-semibold text-navy">Is pre-approval the same as final approval?</h3><p className="mt-2 leading-relaxed text-charcoal">No. Final approval also depends on the property, appraisal, title, insurance, updated borrower information, and the lender&apos;s final review.</p></div>
            <div><h3 className="font-semibold text-navy">Should I shop only at the highest price I qualify for?</h3><p className="mt-2 leading-relaxed text-charcoal">Qualification and comfort are different. It is useful to compare payment ranges rather than focus only on a maximum purchase price.</p></div>
            <div><h3 className="font-semibold text-navy">Can a pre-approval be updated?</h3><p className="mt-2 leading-relaxed text-charcoal">Yes. If a home search takes time or finances change, the review may need to be refreshed.</p></div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Related mortgage qualification guides</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            Pre-approval makes more sense when credit, debt-to-income, income, employment, and affordability are reviewed together.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 font-medium">
            <Link href="/mortgage-credit-score-charlotte" className="text-gold hover:underline">Credit Score Guide</Link>
            <Link href="/mortgage-dti-charlotte" className="text-gold hover:underline">Debt-to-Income Guide</Link>
            <Link href="/mortgage-income-employment-charlotte" className="text-gold hover:underline">Income &amp; Employment Guide</Link>
            <Link href="/how-much-house-can-i-afford-charlotte" className="text-gold hover:underline">Charlotte Affordability Guide</Link>
          </div>
        </section>

        <div className="mt-12">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Planning a home purchase in Charlotte?</h2>
          <p className="mt-3 text-white/85">Use the mortgage guides and calculators on this site to understand the financing process before you make an offer.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/mortgage-guides" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Mortgage Guides</Link>
            <Link href="/calculators/affordability" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Affordability Calculator</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
