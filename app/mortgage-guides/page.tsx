import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

export const metadata = {
  title: "Mortgage Guides by Jacob Shope | Charlotte & Lake Norman",
  description:
    "Mortgage guides and answers from Jacob Shope for homebuyers, homeowners, veterans, first responders, first-time buyers, and real estate investors in Charlotte and Lake Norman.",
  alternates: { canonical: "/mortgage-guides" },
};

type GuideLink = readonly [label: string, href: string];
type GuideTopic = {
  title: string;
  description: string;
  links: readonly GuideLink[];
};

const TOPICS: readonly GuideTopic[] = [
  {
    title: "Buying a Home",
    description: "Start with the basics: payments, pre-approval, affordability, closing costs, first responder financing, real estate financing, and what to expect before you make an offer.",
    links: [
      ["Charlotte Home Buying & Real Estate Financing Guide", "/charlotte-home-buying-mortgage-guide"],
      ["First Responder Home Loans in Charlotte", "/first-responder-home-loans-charlotte"],
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
    description: "Direct answers to the questions buyers ask about credit, debt-to-income, income, employment gaps, job changes, variable pay, and the mortgage approval process.",
    links: [
      ["Credit Score for a Mortgage", "/mortgage-credit-score-charlotte"],
      ["Debt-to-Income Ratio Explained", "/mortgage-dti-charlotte"],
      ["Income, Employment Gaps & Job Changes", "/mortgage-income-employment-charlotte"],
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
];

const origin = "https://jacobshopemortgage.com";
const guideLinks = TOPICS.flatMap((topic) => topic.links).filter(
  ([, href]) => !["/", "/about", "/contact", "/book"].includes(href),
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${origin}/mortgage-guides#collection`,
      url: `${origin}/mortgage-guides`,
      name: "Charlotte Mortgage Guides & Resources",
      description:
        "Mortgage and real estate financing guides for Charlotte and Lake Norman homebuyers, homeowners, veterans, first responders, and real estate investors.",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      about: [
        "Mortgages",
        "Charlotte real estate financing",
        "First responder home financing",
        "Lake Norman mortgage guidance",
      ],
      hasPart: guideLinks.map(([, href]) => ({ "@id": `${origin}${href}` })),
      mainEntity: { "@id": `${origin}/mortgage-guides#guide-list` },
    },
    {
      "@type": "ItemList",
      "@id": `${origin}/mortgage-guides#guide-list`,
      name: "Jacob Shope Mortgage Guide Library",
      numberOfItems: guideLinks.length,
      itemListElement: guideLinks.map(([name, href], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        url: `${origin}${href}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${origin}/mortgage-guides#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: origin,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mortgage Guides",
          item: `${origin}/mortgage-guides`,
        },
      ],
    },
  ],
};

export default function MortgageGuidesPage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage answers from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Charlotte Mortgage Guides & Resources
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          This is the starting point for mortgage questions I hear from buyers, homeowners,
          veterans, first responders, first-time buyers, Realtors, and real estate investors across Charlotte and
          Lake Norman. The goal is simple: clear answers, useful tools, and a direct path to the
          financing topic you need.
        </p>

        <div className="mt-8 max-w-3xl">
          <AuthorBox />
        </div>

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
