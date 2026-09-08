import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

export const metadata = {
  title: "How Much House Can I Afford in Charlotte? | Jacob Shope",
  description:
    "Learn how mortgage affordability works in Charlotte with Jacob Shope. Understand payment, income, debt, down payment, taxes, insurance, and cash-to-close before setting a price range.",
  alternates: { canonical: "/how-much-house-can-i-afford-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://jacobshopemortgage.com/how-much-house-can-i-afford-charlotte#article",
  headline: "How Much House Can I Afford in Charlotte?",
  description:
    "A Charlotte mortgage affordability guide from Jacob Shope explaining how payment, income, debt, down payment, taxes, insurance, mortgage insurance, HOA dues, and cash to close shape a realistic home-buying range.",
  mainEntityOfPage: "https://jacobshopemortgage.com/how-much-house-can-i-afford-charlotte",
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
    "Mortgage affordability",
    "Charlotte home buying",
    "Mortgage payments",
    "Debt-to-income ratio",
    "Mortgage preapproval",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://jacobshopemortgage.com/how-much-house-can-i-afford-charlotte#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the maximum mortgage approval amount the same as a comfortable home-buying budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. A mortgage approval is based on qualifying guidelines, while a comfortable budget also depends on the payment you want, cash reserves, other goals, and the costs tied to the specific property.",
      },
    },
    {
      "@type": "Question",
      name: "Why can two Charlotte homes with the same price have different monthly payments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Property taxes, homeowners insurance, HOA dues, mortgage insurance, loan terms, and other property-specific costs can make the monthly payment different even when the purchase price is the same.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use an affordability calculator before getting preapproved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A calculator can be a useful starting point, but a mortgage preapproval reviews the actual income, debts, assets, credit, loan program, and property assumptions that shape a realistic buying range.",
      },
    },
  ],
};

export default function AffordabilityCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          How Much House Can I Afford in Charlotte?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          The answer is not just a purchase-price number. A useful affordability range starts with the monthly payment you are comfortable with, then works backward through taxes, insurance, interest rate, down payment, mortgage insurance, HOA dues, and other debts.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help buyers across Charlotte and Lake Norman turn the numbers into a realistic price range before they start making offers.
        </p>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What determines mortgage affordability?</h2>
          <ul className="mt-5 space-y-3 text-charcoal">
            <li>Your gross monthly income and the income that can be used to qualify</li>
            <li>Your recurring monthly debts and debt-to-income ratio</li>
            <li>Your down payment and available cash</li>
            <li>The interest rate, loan term, and mortgage program</li>
            <li>Property taxes and homeowners insurance</li>
            <li>Mortgage insurance, if applicable</li>
            <li>HOA dues and other property-specific expenses</li>
            <li>The amount of savings you want to keep after closing</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Start with the payment, not just the price</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Two homes with the same list price can produce different monthly payments. Taxes, insurance, HOA dues, mortgage insurance, and loan structure can all change the number. That is why I prefer to compare the full estimated housing payment instead of using purchase price by itself.
          </p>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            [
              "Income and employment",
              "Mortgage qualification starts with the income that can be documented and used under the applicable loan guidelines. Salary, variable income, bonuses, overtime, self-employment, and job changes may be evaluated differently.",
            ],
            [
              "Debt-to-income ratio",
              "Recurring debts and the proposed housing payment are reviewed together with qualifying income. DTI is important, but it is one part of the overall mortgage file.",
            ],
            [
              "Cash to close",
              "Down payment is only one part of the cash needed. Closing costs, prepaid items, reserves, and the amount you want left in savings also matter when choosing a comfortable price range.",
            ],
            [
              "Property-specific costs",
              "Taxes, insurance, HOA dues, property type, and other costs tied to the home can change the payment enough to affect affordability even when the sales price looks similar.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <h3 className="font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy">Approval amount and comfortable payment are not always the same thing</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A lender may be able to approve a payment that is higher than what you actually want to spend every month. I prefer to start with your comfort level, emergency savings, future plans, and cash needed at closing, then build the mortgage around that.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common Charlotte affordability questions</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-navy">Is my maximum approval the same as my comfortable budget?</h3>
              <p className="mt-2 leading-relaxed text-charcoal">Not always. Approval guidelines and your personal comfort level answer two different questions, so I look at both.</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">Why can two homes with the same price have different payments?</h3>
              <p className="mt-2 leading-relaxed text-charcoal">Property taxes, homeowners insurance, HOA dues, mortgage insurance, and loan structure can make the monthly payment different.</p>
            </div>
            <div>
              <h3 className="font-semibold text-navy">Should I use a calculator before getting preapproved?</h3>
              <p className="mt-2 leading-relaxed text-charcoal">Yes, as a starting point. A preapproval is what ties the estimate to your actual income, debts, assets, credit, and loan options.</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Build the affordability picture before you make an offer</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            The most useful buying range connects affordability, preapproval, credit, income, debt, and cash to close. Reviewing those pieces together before you start making offers can make the financing side of the home search much clearer.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Charlotte Mortgage Preapproval</Link>
            <Link href="/mortgage-dti-charlotte" className="text-gold hover:underline">Debt-to-Income Guide</Link>
            <Link href="/mortgage-income-employment-charlotte" className="text-gold hover:underline">Income &amp; Employment Guide</Link>
            <Link href="/mortgage-credit-score-charlotte" className="text-gold hover:underline">Mortgage Credit Guide</Link>
          </div>
        </section>

        <div className="mt-12">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want a realistic Charlotte price range?</h2>
          <p className="mt-3 leading-relaxed text-white/85">Use the calculator for a starting point, then send me the numbers and I can help you refine the payment and price range.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/calculators/affordability" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Affordability Calculator</Link>
            <Link href="/mortgage-preapproval-charlotte" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Pre-Approval Guide</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
