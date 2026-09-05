import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/investment-property-loans-charlotte`;

export const metadata = {
  title: "Investment Property Loans Charlotte NC | Jacob Shope Mortgage",
  description:
    "Investment property and real estate investor mortgage guidance in Charlotte and Lake Norman from Jacob Shope, NMLS# 2090979.",
  alternates: { canonical: "/investment-property-loans-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

export default function InvestmentPropertyLoansCharlottePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "Investment Property Financing in Charlotte, NC",
        description:
          "A practical guide to comparing conventional, DSCR, bridge, home-equity, and other financing structures for Charlotte-area real estate investors.",
        author: { "@id": `${origin}/#jacob-shope` },
        publisher: { "@id": `${origin}/#mpire-financial` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Investment Property Loans in Charlotte, NC",
        author: { "@id": `${origin}/#jacob-shope` },
        isPartOf: { "@id": `${origin}/#website` },
        about: [
          { "@type": "Thing", name: "Investment property financing" },
          { "@type": "Thing", name: "DSCR loans" },
          { "@type": "Thing", name: "Real estate investor financing" },
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
          { "@type": "ListItem", position: 3, name: "Investment Property Loans Charlotte", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Real estate investor financing</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Investment Property Loans in Charlotte, NC</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          Investor financing is not one product. The right structure depends on the property, expected rent, borrower profile, exit plan, existing equity, and whether the goal is buy-and-hold, short-term rental, fix-and-flip, or another strategy.
        </p>
        <p className="mt-4 max-w-3xl text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help investors compare the financing structure against the actual deal instead of looking at rate alone.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            ["Conventional investment loans", "A strong fit for many stabilized rental properties when the borrower qualifies using traditional income and asset documentation."],
            ["DSCR financing", "Useful for certain investment scenarios where the property&apos;s cash flow is central to qualification rather than traditional personal income documentation."],
            ["Equity-based strategies", "HELOCs, home equity loans, or cash-out refinancing can sometimes help investors deploy equity from another property into a purchase."],
            ["Bridge and short-term financing", "For deals with a timing gap, rehab component, or planned exit, short-term financing may be more important than the long-term loan on day one."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
              <h2 className="text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">How I look at an investment financing scenario</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            I want to know the purchase price, expected rent, taxes, insurance, HOA if applicable, rehab needs, cash available, current properties, and the investor&apos;s intended hold period. That gives us a better basis for comparing conventional, DSCR, bridge, equity, or other available financing.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Charlotte, Lake Norman, Cabarrus, Gaston, and Iredell County all have different investor opportunities. The financing should match the business plan for the property.
          </p>
        </section>

        <section className="mt-14 rounded-2xl border border-navy/10 bg-white p-8">
          <h2 className="text-2xl font-bold text-navy">Related investor financing guides</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">
            Different deals call for different capital structures. These guides cover the financing options I compare most often with Charlotte-area investors.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/dscr-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">DSCR Loans</Link>
            <Link href="/bridge-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Bridge Loans</Link>
            <Link href="/home-equity-heloc-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">HELOC & Home Equity</Link>
            <Link href="/cash-out-refinance-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Cash-Out Refinance</Link>
          </div>
        </section>

        <div className="mt-14">
          <AuthorBox />
        </div>

        <section className="mt-14 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Send Jacob an Investment Scenario</Link>
          <Link href="/calculators/payment" className="rounded-lg bg-navy px-5 py-3 font-semibold text-white hover:bg-slate">Run the Payment Numbers</Link>
          <Link href="/mortgage-guides" className="rounded-lg border border-navy/20 px-5 py-3 font-semibold text-navy hover:border-gold hover:text-gold">More Mortgage Guides</Link>
        </section>
      </section>
    </div>
  );
}
