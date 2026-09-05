import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

export const metadata = {
  title: "Charlotte Mortgage & Real Estate Financing Guides | Jacob Shope",
  description:
    "Charlotte mortgage and real estate financing guides from Jacob Shope, including homebuyer planning, local housing-market context, loan limits, VA, FHA, conventional, investor, construction, equity, and refinance resources.",
  alternates: { canonical: "/mortgage-guides" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const TOPICS = [
  {
    title: "Charlotte Market & Local Numbers",
    description:
      "Start with current Charlotte-area context: local housing-market conditions, 2026 mortgage loan limits, home-buying costs, affordability, and the financing side of a real estate purchase.",
    links: [
      ["Charlotte Housing Market: September 2026", "/charlotte-housing-market-september-2026"],
      ["2026 Charlotte Mortgage Loan Limits", "/charlotte-mortgage-loan-limits-2026"],
      ["Charlotte Home Buying & Real Estate Financing Guide", "/charlotte-home-buying-mortgage-guide"],
      ["How Much House Can I Afford in Charlotte?", "/how-much-house-can-i-afford-charlotte"],
      ["Mortgage Closing Costs in Charlotte", "/mortgage-closing-costs-charlotte"],
      ["Charlotte Mortgage Options", "/service-areas/charlotte"],
    ],
  },
  {
    title: "Buying a Home",
    description: "Start with the basics: payments, pre-approval, affordability, closing costs, real estate financing, and what to expect before you make an offer.",
    links: [
      ["Charlotte Home Buying & Real Estate Financing Guide", "/charlotte-home-buying-mortgage-guide"],
      ["2026 Charlotte Mortgage Loan Limits", "/charlotte-mortgage-loan-limits-2026"],
      ["Mortgage Pre-Approval in Charlotte", "/mortgage-preapproval-charlotte"],
      ["How Much House Can I Afford in Charlotte?", "/how-much-house-can-i-afford-charlotte"],
      ["First-Time Homebuyer Guide for Charlotte", "/first-time-homebuyer-charlotte"],
      ["Mortgage Closing Costs in Charlotte", "/mortgage-closing-costs-charlotte"],
      ["Mortgage Payment Calculator", "/calculators/payment"],
      ["Affordability Calculator", "/calculators/affordability"],
    ],
  },
  {
    title: "Mortgage Qualification",
    description: "Direct answers to the questions buyers ask about credit, debt-to-income, income, employment, and the mortgage approval process.",
    links: [
      ["Credit Score for a Mortgage", "/mortgage-credit-score-charlotte"],
      ["Debt-to-Income Ratio Explained", "/mortgage-dti-charlotte"],
      ["Income & Employment for a Mortgage", "/mortgage-income-employment-charlotte"],
      ["Mortgage Broker vs Lender", "/mortgage-broker-vs-lender-charlotte"],
      ["Seller Concessions in North Carolina", "/seller-concessions-north-carolina"],
    ],
  },
  {
    title: "Mortgage Programs",
    description: "Compare the major loan types and understand which options may fit a purchase, refinance, or property type.",
    links: [
      ["FHA vs Conventional in Charlotte", "/fha-vs-conventional-charlotte"],
      ["Private Mortgage Insurance (PMI)", "/private-mortgage-insurance-charlotte"],
      ["VA Loans in Charlotte", "/va-loans-charlotte"],
      ["Conventional Loans", "/loan-programs/conventional"],
      ["FHA Loans", "/loan-programs/fha"],
      ["USDA Loans", "/loan-programs/usda"],
      ["Jumbo Loans", "/loan-programs/jumbo"],
    ],
  },
  {
    title: "Investors & Construction",
    description: "Financing guidance for rental properties, investor scenarios, equity strategies, and building a home.",
    links: [
      ["Investment Property Loans in Charlotte", "/investment-property-loans-charlotte"],
      ["DSCR Loans in Charlotte", "/dscr-loans-charlotte"],
      ["Construction Loans in Charlotte", "/construction-loans-charlotte"],
      ["Mortgage Appraisals in Charlotte", "/mortgage-appraisal-charlotte"],
      ["Ask Jacob About a Scenario", "/contact"],
    ],
  },
  {
    title: "Homeowners, Equity & Refinancing",
    description: "Review refinance, HELOC, home equity, bridge, payment, and long-term financing questions with the numbers in front of you.",
    links: [
      ["Mortgage Refinance in Charlotte", "/refinance-charlotte"],
      ["Cash-Out Refinance in Charlotte", "/cash-out-refinance-charlotte"],
      ["HELOC & Home Equity Options in Charlotte", "/home-equity-heloc-charlotte"],
      ["Bridge Loans in Charlotte", "/bridge-loans-charlotte"],
      ["Refinance Calculator", "/calculators/refinance"],
      ["Mortgage Rates", "/rates"],
    ],
  },
  {
    title: "Charlotte & Lake Norman",
    description: "Local mortgage guidance for buyers and homeowners across the Charlotte metro and Lake Norman corridor.",
    links: [
      ["Charlotte Mortgage Options", "/service-areas/charlotte"],
      ["Huntersville Mortgage Broker", "/service-areas/huntersville"],
      ["Lake Norman Mortgage Lender", "/service-areas/lake-norman"],
      ["Cornelius Mortgage Broker", "/service-areas/cornelius"],
      ["Davidson Mortgage Broker", "/service-areas/davidson"],
      ["Mooresville Mortgage Broker", "/service-areas/mooresville"],
    ],
  },
  {
    title: "About Jacob Shope",
    description: "Connect the mortgage information on this site to the local professional behind it.",
    links: [
      ["About Jacob Shope", "/about"],
      ["Charlotte Mortgage Broker", "/"],
      ["Mortgage FAQs", "/faq"],
      ["Contact Jacob", "/contact"],
      ["Book a Conversation", "/book"],
    ],
  },
] as const;

const featuredResources = [
  ["Charlotte Housing Market: September 2026", "/charlotte-housing-market-september-2026"],
  ["2026 Charlotte Mortgage Loan Limits", "/charlotte-mortgage-loan-limits-2026"],
  ["Charlotte Home Buying & Real Estate Financing Guide", "/charlotte-home-buying-mortgage-guide"],
  ["Mortgage Pre-Approval in Charlotte", "/mortgage-preapproval-charlotte"],
  ["First-Time Homebuyer Guide for Charlotte", "/first-time-homebuyer-charlotte"],
  ["VA Loans in Charlotte", "/va-loans-charlotte"],
  ["Investment Property Loans in Charlotte", "/investment-property-loans-charlotte"],
  ["Construction Loans in Charlotte", "/construction-loans-charlotte"],
] as const;

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://jacobshopemortgage.com/mortgage-guides#collection",
  url: "https://jacobshopemortgage.com/mortgage-guides",
  name: "Charlotte Mortgage & Real Estate Financing Guides",
  description:
    "A locally focused collection of mortgage, homebuyer, housing-market, investor, construction, refinance, and real estate financing resources for Charlotte and Lake Norman.",
  author: { "@id": "https://jacobshopemortgage.com/#jacob-shope" },
  publisher: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
  isPartOf: { "@id": "https://jacobshopemortgage.com/#website" },
  about: [
    "Charlotte mortgages",
    "Charlotte real estate financing",
    "Charlotte housing market",
    "Lake Norman mortgage guidance",
    "Home buying",
    "Mortgage qualification",
    "Investment property financing",
    "Construction financing",
  ],
  mainEntity: {
    "@type": "ItemList",
    name: "Featured Charlotte mortgage and real estate financing resources",
    itemListElement: featuredResources.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      url: `https://jacobshopemortgage.com${path}`,
    })),
  },
};

export default function MortgageGuidesPage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage answers from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Charlotte Mortgage & Real Estate Financing Guides
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          This is the starting point for mortgage and real estate financing questions I hear from buyers,
          homeowners, veterans, first-time buyers, Realtors, and real estate investors across Charlotte and
          Lake Norman. It also connects the current local market context and numbers that can affect a financing
          decision, so you can move from the big picture to the specific mortgage question you need answered.
        </p>

        <div className="mt-8 max-w-3xl">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl border border-gold/25 bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Current Charlotte resources</p>
          <h2 className="mt-2 text-2xl font-bold text-navy">Start with the local market and financing numbers</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">
            Home prices, available inventory, loan limits, taxes, insurance, rates, and cash-to-close all shape the
            financing conversation. These resources connect the Charlotte market to the mortgage decisions buyers
            and homeowners are actually making.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/charlotte-housing-market-september-2026" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">
              Charlotte Housing Market
            </Link>
            <Link href="/charlotte-mortgage-loan-limits-2026" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">
              2026 Loan Limits
            </Link>
            <Link href="/charlotte-home-buying-mortgage-guide" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">
              Home Buying & Financing Guide
            </Link>
            <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">
              Charlotte Pre-Approval
            </Link>
          </div>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TOPICS.map((topic) => (
            <section key={topic.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
              <h2 className="text-2xl font-bold text-navy">{topic.title}</h2>
              <p className="mt-3 leading-relaxed text-charcoal">{topic.description}</p>
              <ul className="mt-5 space-y-3">
                {topic.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="font-medium text-gold hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Have a mortgage question that is not covered yet?</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/85">
            Send me the scenario. The questions clients and Realtors ask are what I use to keep
            building this resource library.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">
              Ask Jacob a Mortgage Question
            </Link>
            <Link href="/about" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">
              About Jacob Shope
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
