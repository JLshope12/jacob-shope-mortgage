import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/first-time-homebuyer-charlotte`;
const HUD_BUYING_URL = "https://www.hud.gov/helping-americans/buying-a-home";
const HUD_FHA_URL = "https://www.hud.gov/buying/loans";
const NCHFA_URL = "https://www.nchfa.com/home-ownership-partners/community-partners/community-programs/community-partners-loan-pool";

export const metadata = {
  title: "First-Time Homebuyer Charlotte NC | Jacob Shope Mortgage",
  description:
    "First-time homebuyer mortgage guidance in Charlotte and Lake Norman from Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.",
  alternates: { canonical: "/first-time-homebuyer-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const STEPS = [
  ["1. Start with the monthly payment", "Before focusing on a purchase price, understand the full housing payment and how it fits your budget."],
  ["2. Get fully pre-approved", "A complete pre-approval gives you and your Realtor a clearer picture of price range, cash needed, and loan options."],
  ["3. Compare loan structures", "Conventional, FHA, VA, USDA, and other options can create different payments, cash requirements, and tradeoffs."],
  ["4. Make the offer with financing in mind", "The property type, appraisal, seller concessions, closing timeline, and loan structure all matter once you find a home."],
] as const;

const FAQS = [
  [
    "How much house can I afford?",
    "Start with the payment you are comfortable with, then work backward into a price range using taxes, insurance, mortgage insurance when applicable, and the loan structure.",
  ],
  [
    "Which loan is best?",
    "There is no single best loan for every first-time buyer. The right comparison depends on credit, income, assets, property type, goals, and how long you expect to keep the financing.",
  ],
  [
    "When should I get pre-approved?",
    "Before you seriously shop. That gives you time to solve issues and helps your Realtor know what range and financing structure you can confidently use.",
  ],
  [
    "Do I need perfect credit?",
    "No. Different programs have different qualification standards, and the full file matters more than any one number.",
  ],
] as const;

export default function FirstTimeHomebuyerCharlottePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "First-Time Homebuyer Guide for Charlotte, NC",
        description:
          "A practical first-time homebuyer mortgage guide covering payment planning, pre-approval, loan comparisons, and offer strategy in Charlotte and Lake Norman.",
        author: { "@id": `${origin}/#jacob-shope` },
        publisher: { "@id": `${origin}/#mpire-financial` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        citation: [HUD_BUYING_URL, HUD_FHA_URL, NCHFA_URL],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "First-Time Homebuyer Guide for Charlotte, NC",
        author: { "@id": `${origin}/#jacob-shope` },
        isPartOf: { "@id": `${origin}/#website` },
        about: [
          { "@type": "Thing", name: "First-time homebuyer financing" },
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
          { "@type": "ListItem", position: 3, name: "First-Time Homebuyer Charlotte", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: FAQS.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Charlotte first-time buyer guidance</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">First-Time Homebuyer Guide for Charlotte, NC</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal">
          Buying your first home is less confusing when you know what happens next. I help first-time buyers across Charlotte and Lake Norman understand the payment, financing choices, pre-approval, offer strategy, appraisal, and closing process before those decisions feel urgent.
        </p>
        <p className="mt-4 max-w-3xl text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. My job is to give you a clear plan and explain the tradeoffs in plain language.
        </p>

        <section className="mt-12">
          <h2 className="text-3xl font-bold tracking-tight text-navy">The first four steps I walk buyers through</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {STEPS.map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
                <h3 className="text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Questions first-time buyers ask me most</h2>
          <div className="mt-5 space-y-4 text-charcoal">
            {FAQS.map(([question, answer]) => (
              <p key={question}>
                <strong>{question}</strong> {answer}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-navy/10 bg-white p-8">
          <h2 className="text-2xl font-bold text-navy">Build the financing plan before you shop</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">
            First-time buyers usually have several questions at the same time. These guides go deeper on the parts of qualification and cash planning that most often shape the buying range.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Pre-Approval</Link>
            <Link href="/mortgage-credit-score-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Credit</Link>
            <Link href="/mortgage-dti-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Debt-to-Income</Link>
            <Link href="/mortgage-closing-costs-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Closing Costs</Link>
            <Link href="/mortgage-appraisal-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Appraisal</Link>
            <Link href="/down-payment-assistance-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Down Payment Assistance</Link>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-charcoal/10 bg-offwhite p-8">
          <h2 className="text-2xl font-bold text-navy">Official homebuyer resources</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-charcoal">
            I use primary sources where they help buyers verify program information. HUD publishes a step-by-step homebuying resource and FHA loan information, while the North Carolina Housing Finance Agency publishes current information about state-supported homebuyer assistance programs.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
            <a href={HUD_BUYING_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">HUD: Buying a Home</a>
            <a href={HUD_FHA_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">HUD: FHA Loan Information</a>
            <a href={NCHFA_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">NC Housing Finance Agency</a>
          </div>
        </section>

        <div className="mt-14">
          <AuthorBox />
        </div>

        <section className="mt-14 flex flex-wrap gap-4">
          <Link href="/calculators/affordability" className="rounded-lg bg-navy px-5 py-3 font-semibold text-white hover:bg-slate">Use the Affordability Calculator</Link>
          <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Build My Buying Plan</Link>
          <Link href="/mortgage-guides" className="rounded-lg border border-navy/20 px-5 py-3 font-semibold text-navy hover:border-gold hover:text-gold">More Mortgage Guides</Link>
        </section>
      </section>
    </div>
  );
}
