import Link from "next/link";

export const metadata = {
  title: "Mortgage Guides by Jacob Shope | Charlotte & Lake Norman",
  description:
    "Mortgage guides and answers from Jacob Shope for homebuyers, homeowners, veterans, first-time buyers, and real estate investors in Charlotte and Lake Norman.",
  alternates: { canonical: "/mortgage-guides" },
};

const TOPICS = [
  {
    title: "Buying a Home",
    description: "Start with the basics: payments, pre-approval, affordability, closing costs, and what to expect before you make an offer.",
    links: [
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
      ["VA Loans in Charlotte", "/va-loans-charlotte"],
      ["Conventional Loans", "/loan-programs/conventional"],
      ["FHA Loans", "/loan-programs/fha"],
      ["VA Loans", "/loan-programs/va"],
      ["USDA Loans", "/loan-programs/usda"],
      ["Jumbo Loans", "/loan-programs/jumbo"],
    ],
  },
  {
    title: "Investors & Construction",
    description: "Financing guidance for rental properties, investor scenarios, equity strategies, and building a home.",
    links: [
      ["Investment Property Loans in Charlotte", "/investment-property-loans-charlotte"],
      ["Construction Loans in Charlotte", "/construction-loans-charlotte"],
      ["Mortgage Appraisals in Charlotte", "/mortgage-appraisal-charlotte"],
      ["Ask Jacob About a Scenario", "/contact"],
    ],
  },
  {
    title: "Homeowners, Equity & Refinancing",
    description: "Review refinance, HELOC, home equity, payment, and long-term financing questions with the numbers in front of you.",
    links: [
      ["Mortgage Refinance in Charlotte", "/refinance-charlotte"],
      ["HELOC & Home Equity Options in Charlotte", "/home-equity-heloc-charlotte"],
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

export default function MortgageGuidesPage() {
  return (
    <div className="bg-offwhite">
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage answers from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Charlotte Mortgage Guides & Resources
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          This is the starting point for mortgage questions I hear from buyers, homeowners,
          veterans, first-time buyers, Realtors, and real estate investors across Charlotte and
          Lake Norman. The goal is simple: clear answers, useful tools, and a direct path to the
          financing topic you need.
        </p>
        <p className="mt-4 max-w-3xl text-charcoal">
          Guides and resources are provided by Jacob Shope, Charlotte mortgage broker and Mortgage
          Loan Officer with Mpire Financial, NMLS# 2090979.
        </p>

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
