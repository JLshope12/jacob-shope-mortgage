import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

export const metadata = {
  title: "Charlotte Mortgage & Real Estate Insights | Jacob Shope",
  description:
    "Charlotte mortgage and real estate financing insights from Jacob Shope covering home buying, loan options, investors, construction, refinancing, and Lake Norman.",
  alternates: { canonical: "/blog" },
};

const collections = [
  {
    title: "Buying a Home in Charlotte",
    description:
      "Start with payment, cash to close, pre-approval, and the financing details that affect an offer before you begin comparing homes.",
    links: [
      ["Charlotte Home Buying & Mortgage Guide", "/charlotte-home-buying-mortgage-guide"],
      ["Mortgage Pre-Approval in Charlotte", "/mortgage-preapproval-charlotte"],
      ["How Much House Can I Afford in Charlotte?", "/how-much-house-can-i-afford-charlotte"],
      ["Mortgage Closing Costs in Charlotte", "/mortgage-closing-costs-charlotte"],
      ["Charlotte Down Payment Assistance", "/down-payment-assistance-charlotte"],
    ],
  },
  {
    title: "Choosing the Right Mortgage",
    description:
      "Compare the structure of common loan programs instead of assuming one option is automatically the best fit for every buyer or property.",
    links: [
      ["FHA vs Conventional in Charlotte", "/fha-vs-conventional-charlotte"],
      ["VA Loans in Charlotte", "/va-loans-charlotte"],
      ["Private Mortgage Insurance Explained", "/private-mortgage-insurance-charlotte"],
      ["Credit Score for a Mortgage", "/mortgage-credit-score-charlotte"],
      ["Debt-to-Income Ratio Explained", "/mortgage-dti-charlotte"],
    ],
  },
  {
    title: "Charlotte Real Estate Investors",
    description:
      "Financing guidance for rental properties, DSCR scenarios, equity strategies, and buyers evaluating property as an investment rather than a primary residence.",
    links: [
      ["Investment Property Loans in Charlotte", "/investment-property-loans-charlotte"],
      ["DSCR Loans in Charlotte", "/dscr-loans-charlotte"],
      ["Cash-Out Refinance in Charlotte", "/cash-out-refinance-charlotte"],
      ["HELOC & Home Equity Options", "/home-equity-heloc-charlotte"],
      ["Mortgage Appraisals in Charlotte", "/mortgage-appraisal-charlotte"],
    ],
  },
  {
    title: "Construction, Move-Up & Equity",
    description:
      "For homeowners and buyers dealing with a build, a move before the current home sells, or an equity decision, compare the financing structure before choosing the product.",
    links: [
      ["Construction Loans in Charlotte", "/construction-loans-charlotte"],
      ["Bridge Loans in Charlotte", "/bridge-loans-charlotte"],
      ["Mortgage Refinance in Charlotte", "/refinance-charlotte"],
      ["Cash-Out Refinance in Charlotte", "/cash-out-refinance-charlotte"],
      ["Refinance Calculator", "/calculators/refinance"],
    ],
  },
  {
    title: "Charlotte & Lake Norman Local Guides",
    description:
      "Local mortgage pages for the Charlotte metro and Lake Norman corridor, with financing options tied back to the community where you are buying or refinancing.",
    links: [
      ["Charlotte Mortgage Options", "/service-areas/charlotte"],
      ["Huntersville Mortgage Broker", "/service-areas/huntersville"],
      ["Lake Norman Mortgage Broker", "/service-areas/lake-norman"],
      ["Cornelius Mortgage Broker", "/service-areas/cornelius"],
      ["Davidson Mortgage Broker", "/service-areas/davidson"],
      ["Mooresville Mortgage Broker", "/service-areas/mooresville"],
    ],
  },
] as const;

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://jacobshopemortgage.com/blog#collection",
  url: "https://jacobshopemortgage.com/blog",
  name: "Charlotte Mortgage & Real Estate Insights",
  description:
    "Mortgage and real estate financing resources for Charlotte and Lake Norman buyers, homeowners, veterans, and investors.",
  author: { "@id": "https://jacobshopemortgage.com/#jacob-shope" },
  publisher: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
  about: [
    "Charlotte mortgages",
    "Charlotte real estate financing",
    "Lake Norman mortgages",
    "Home buying",
    "Investment property financing",
    "Construction loans",
    "Refinancing",
  ],
  hasPart: collections.flatMap((collection) =>
    collection.links.map(([name, href]) => ({
      "@type": "WebPage",
      name,
      url: `https://jacobshopemortgage.com${href}`,
    })),
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jacobshopemortgage.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mortgage & Real Estate Insights",
      item: "https://jacobshopemortgage.com/blog",
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage and real estate financing in Charlotte</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Charlotte Mortgage & Real Estate Insights
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          Real estate decisions and mortgage decisions are connected, but they are not the same job.
          This resource library focuses on the financing side of buying, owning, investing in, and
          building real estate across Charlotte and Lake Norman.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire
          Financial, NMLS# 2090979. These guides are built around the questions buyers, homeowners,
          Realtors, veterans, and investors bring me when they need to understand the numbers behind
          a property decision.
        </p>

        <div className="mt-8">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Where should you start?</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/85">
            If you are actively looking at a home, start with the Charlotte Home Buying & Mortgage
            Guide. If you are comparing loan structures, go to Mortgage Guides. For changing rates,
            market context, and the weekly real estate conversation, use the newsletter.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/charlotte-home-buying-mortgage-guide" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">
              Charlotte Home Buying Guide
            </Link>
            <Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">
              Mortgage Guides
            </Link>
            <Link href="/newsletter" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">
              Weekly Market Newsletter
            </Link>
          </div>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {collections.map((collection) => (
            <section key={collection.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
              <h2 className="text-2xl font-bold text-navy">{collection.title}</h2>
              <p className="mt-3 leading-relaxed text-charcoal">{collection.description}</p>
              <ul className="mt-5 space-y-3">
                {collection.links.map(([label, href]) => (
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

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What this site covers, and what it does not</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            I am a mortgage professional, not a real estate agent. The content here covers financing,
            qualification, payments, cash to close, loan programs, appraisal, equity, and mortgage
            strategy. Your real estate agent handles property representation, negotiations, and the
            real estate side of the transaction.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            That separation matters because good real estate decisions usually require both sides to
            work together. The goal of this resource library is to make the financing side clear enough
            that you can evaluate a property with better numbers before making a move.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Have a Charlotte real estate financing question?</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/85">
            Send me the property type, price range, estimated down payment, and what you are trying to
            accomplish. I can help you compare the mortgage side before you decide how to move forward.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">
            Ask Jacob About Financing
          </Link>
        </section>
      </main>
    </div>
  );
}
