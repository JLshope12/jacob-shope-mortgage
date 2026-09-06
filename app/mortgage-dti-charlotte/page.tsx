import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

export const metadata = {
  title: "Debt-to-Income Ratio for a Mortgage | Charlotte | Jacob Shope",
  description:
    "Learn how debt-to-income ratio is used in mortgage qualification and why the full loan scenario matters. Guidance from Jacob Shope, NMLS# 2090979.",
  alternates: { canonical: "/mortgage-dti-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://jacobshopemortgage.com/mortgage-dti-charlotte#article",
  headline: "How Debt-to-Income Ratio Works for a Mortgage",
  description:
    "A Charlotte mortgage qualification guide from Jacob Shope explaining debt-to-income ratio and how it fits into the broader approval picture.",
  mainEntityOfPage: "https://jacobshopemortgage.com/mortgage-dti-charlotte",
  author: {
    "@type": "Person",
    "@id": "https://jacobshopemortgage.com/#jacob-shope",
    name: "Jacob Shope",
    url: "https://jacobshopemortgage.com/about",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://jacobshopemortgage.com/#mpire-financial",
    name: "Mpire Financial",
  },
  about: [
    "Debt-to-income ratio",
    "Mortgage qualification",
    "Charlotte mortgages",
    "Home affordability",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://jacobshopemortgage.com/mortgage-dti-charlotte#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there one maximum debt-to-income ratio for every mortgage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Different loan programs and lenders can evaluate debt-to-income ratio differently, and the overall borrower profile matters.",
      },
    },
    {
      "@type": "Question",
      name: "Does a lower debt-to-income ratio always mean a better loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Debt-to-income ratio is important, but it is only one part of the mortgage decision.",
      },
    },
    {
      "@type": "Question",
      name: "Can paying off a debt change a mortgage debt-to-income calculation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can in some scenarios, but the impact depends on the account, remaining payments, and applicable loan guidelines.",
      },
    },
  ],
};

export default function MortgageDtiCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">How Debt-to-Income Ratio Works for a Mortgage</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">Debt-to-income ratio, often called DTI, compares certain monthly debt obligations with qualifying monthly income. It is one of several factors lenders use when reviewing a mortgage application.</p>
        <p className="mt-4 text-charcoal">I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help buyers understand DTI in context rather than treating one percentage as a universal approval line.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What usually goes into DTI?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">The calculation commonly includes the proposed housing payment and recurring obligations that appear on or are otherwise required to be considered with the loan. The exact treatment of an obligation can vary by loan program and documentation.</p>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Housing payment", "Principal, interest, property taxes, homeowners insurance, and applicable association dues or mortgage insurance may be part of the housing payment."],
            ["Recurring debts", "Examples can include auto loans, student loans, installment debt, and required revolving account payments."],
            ["Qualifying income", "The income used must meet the documentation and continuity rules of the loan program."],
            ["Compensating factors", "Credit, assets, reserves, property type, loan-to-value, and the overall file may affect how a mortgage is evaluated."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5"><h3 className="font-bold text-navy">{title}</h3><p className="mt-3 leading-relaxed text-charcoal">{body}</p></div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common DTI questions</h2>
          <div className="mt-6 space-y-6">
            <div><h3 className="font-semibold text-navy">Is there one maximum DTI for every mortgage?</h3><p className="mt-2 leading-relaxed text-charcoal">No. Different programs and lenders can evaluate DTI differently, and the overall borrower profile matters.</p></div>
            <div><h3 className="font-semibold text-navy">Does a lower DTI always mean a better loan?</h3><p className="mt-2 leading-relaxed text-charcoal">Not necessarily. DTI is important, but it is only one part of the mortgage decision.</p></div>
            <div><h3 className="font-semibold text-navy">Can paying off a debt change the calculation?</h3><p className="mt-2 leading-relaxed text-charcoal">It can in some scenarios, but the impact depends on the account, remaining payments, and applicable loan guidelines.</p></div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">How DTI fits into the rest of mortgage qualification</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            DTI works together with credit, income stability, assets, down payment, property type, and the loan program. Looking at those pieces together gives a more useful picture than treating one ratio as the entire approval decision.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Charlotte Mortgage Preapproval</Link>
            <Link href="/mortgage-credit-score-charlotte" className="text-gold hover:underline">Mortgage Credit Guide</Link>
            <Link href="/mortgage-income-employment-charlotte" className="text-gold hover:underline">Income &amp; Employment Guide</Link>
            <Link href="/how-much-house-can-i-afford-charlotte" className="text-gold hover:underline">Charlotte Affordability Guide</Link>
          </div>
        </section>

        <div className="mt-12">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white"><h2 className="text-2xl font-bold">Trying to understand your buying range?</h2><p className="mt-3 text-white/85">Use DTI as one part of the picture, then compare the actual payment and cash needed.</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/calculators/affordability" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Affordability Calculator</Link><Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">More Mortgage Guides</Link></div></section>
      </article>
    </div>
  );
}
