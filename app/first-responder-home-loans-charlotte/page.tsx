import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/first-responder-home-loans-charlotte`;
const CITY_HOMEOWNERSHIP_URL =
  "https://www.charlottenc.gov/Streets-and-Neighborhoods/Housing/Resources-for-Homeowners-Renters/Homeownership";
const HUD_GNND_URL = "https://www.hud.gov/helping-americans/good-neighbor";
const NCHFA_ADVANTAGE_URL = "https://www.nchfa.com/home-buyers/buy-home/nc-home-advantage-mortgage";

export const metadata = {
  title: "First Responder Home Loans in Charlotte | Jacob Shope",
  description:
    "Charlotte mortgage guidance for firefighters, police, EMTs and other first responders from Jacob Shope, Charlotte Fire captain and Mortgage Loan Officer, NMLS# 2090979.",
  alternates: { canonical: "/first-responder-home-loans-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const FAQS = [
  [
    "Is there one universal first responder mortgage program?",
    "No. First responder is a profession, not a single mortgage program. The right financing may be conventional, FHA, VA for eligible military borrowers, USDA for eligible properties and borrowers, or another option depending on the full scenario.",
  ],
  [
    "Can overtime or shift-based income be used for a mortgage?",
    "It can sometimes be considered, but the way overtime, bonus, differential, or other variable income is documented and averaged depends on the loan program, lender, history, and stability of the income.",
  ],
  [
    "Can Charlotte first responders use down payment assistance?",
    "Some local and state assistance programs may be available depending on income, property, occupancy, profession, and other eligibility rules. Program details can change, so current eligibility should be checked before relying on assistance in an offer strategy.",
  ],
  [
    "Does being a firefighter or police officer make someone eligible for a VA loan?",
    "Not by itself. VA loan eligibility is tied to qualifying military service. A first responder who is also an eligible veteran or service member may be able to use VA financing.",
  ],
  [
    "Does HUD have a home discount for every first responder?",
    "No. HUD's Good Neighbor Next Door program covers certain qualifying full-time law enforcement officers, teachers, firefighters and emergency medical technicians, but only for eligible HUD properties in designated revitalization areas. Availability is limited and the buyer must commit to 36 months of owner occupancy. Other job titles do not automatically qualify.",
  ],
  [
    "Is North Carolina down payment assistance restricted to first responders?",
    "No. NC Home Advantage Mortgage assistance is available to eligible first-time and repeat buyers through participating lenders, based on the current program rules. First responder employment alone does not establish eligibility or guarantee funding.",
  ],
  [
    "When should a first responder get pre-approved?",
    "Before making an offer is usually the most useful time. A pre-approval can help clarify the payment range, cash needed, income documentation, and loan structure before the buyer is under contract.",
  ],
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "First Responder Home Loans in Charlotte",
      description: "A practical Charlotte-area mortgage guide for firefighters, EMTs, police and other first responders, with verified assistance resources and income preparation.",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      dateModified: "2026-11-08",
      citation: [HUD_GNND_URL, NCHFA_ADVANTAGE_URL, CITY_HOMEOWNERSHIP_URL],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "First Responder Home Loans in Charlotte",
      description:
        "Mortgage and home financing guidance for Charlotte-area firefighters, police officers, EMTs, paramedics, dispatchers and other first responders.",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      isPartOf: { "@id": `${origin}/#website` },
      about: [
        { "@type": "Thing", name: "First responder mortgages" },
        { "@type": "Thing", name: "Firefighter home loans" },
        { "@type": "Thing", name: "Mortgage pre-approval" },
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
        { "@type": "ListItem", position: 3, name: "First Responder Home Loans in Charlotte", item: pageUrl },
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

export default function FirstResponderHomeLoansCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance for the people who answer the call</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          First Responder Home Loans in Charlotte
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          Firefighters, police officers, EMTs, paramedics, dispatchers, and other first responders often have income and schedules that do not look exactly like a standard nine-to-five job. The mortgage plan should account for that instead of forcing the file into a generic box.
        </p>
        <p className="mt-4 leading-relaxed text-charcoal">
          I&apos;m Jacob Shope, a Charlotte Fire Department captain and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I help first responders across Charlotte and Lake Norman compare home financing options, understand how their income may be reviewed, and build a plan before they make an offer.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Start with the loan that fits the buyer, not the job title</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            There is no single mortgage that is automatically best for every first responder. A firefighter buying a first home, a police officer using VA eligibility, an EMT purchasing with a spouse, and a veteran paramedic buying an investment property can all need different financing structures.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/fha-vs-conventional-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">FHA vs Conventional</Link>
            <Link href="/va-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">VA Loans</Link>
            <Link href="/first-time-homebuyer-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">First-Time Buyers</Link>
            <Link href="/down-payment-assistance-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Down Payment Assistance</Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Income questions that come up with first responders</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              ["Overtime", "Regular overtime may be reviewed differently from base pay. The history, consistency, and documentation matter."],
              ["Shift differential", "Night, weekend, specialty, or other differential pay can require a closer look at how the income has been earned."],
              ["Part-time or second jobs", "A second source of income can have separate history and documentation requirements depending on the loan."],
              ["Variable schedules", "A changing schedule does not automatically prevent approval, but the income calculation needs to reflect what can actually be documented and supported."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="font-semibold text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-charcoal">
            For a deeper look at how lenders review earnings, see the <Link href="/mortgage-income-employment-charlotte" className="font-medium text-gold hover:underline">Charlotte mortgage income and employment guide</Link>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Three homebuyer assistance paths to compare</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Not every program advertised as a &quot;first responder loan&quot; is actually tied to the job. Some are general mortgage or assistance programs with their own income, property, occupancy, and lender rules. These are three separate resources worth checking before you plan an offer around assistance.
          </p>
          <div className="mt-6 space-y-5">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <h3 className="text-lg font-semibold text-navy">HUD Good Neighbor Next Door: limited eligible properties</h3>
              <p className="mt-2 leading-relaxed text-charcoal">
                HUD describes a 50% discount from the list price for eligible HUD-owned homes in designated revitalization areas. The program is limited to qualifying full-time law enforcement officers, pre-K through 12th grade teachers, firefighters and emergency medical technicians who meet HUD&apos;s employment and locality rules. The buyer must agree to live in the home for 36 months. Inventory is limited, and this is not a blanket 50% discount on regular Charlotte listings.
              </p>
              <a href={HUD_GNND_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-medium text-gold hover:underline">
                HUD: Good Neighbor Next Door eligibility and available listings
              </a>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <h3 className="text-lg font-semibold text-navy">NC Home Advantage: assistance based on buyer eligibility</h3>
              <p className="mt-2 leading-relaxed text-charcoal">
                The North Carolina Housing Finance Agency offers qualifying first-time and repeat homebuyers assistance up to 3% of the loan amount through participating lenders. A separate $15,000 option may be available to eligible first-time buyers and military veterans. These are not automatic benefits of being a firefighter or EMT. Confirm current income, credit, property, occupancy, repayment and lender rules before budgeting around either option.
              </p>
              <a href={NCHFA_ADVANTAGE_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-medium text-gold hover:underline">
                NC Housing Finance Agency: NC Home Advantage Mortgage
              </a>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <h3 className="text-lg font-semibold text-navy">HouseCharlotte: a city-specific homebuyer resource</h3>
              <p className="mt-2 leading-relaxed text-charcoal">
                The City of Charlotte publishes HouseCharlotte program information and housing-counseling resources. Assistance depends on the current program criteria and the property location, so do not assume a home elsewhere in the Charlotte metro or Lake Norman qualifies simply because it has a Charlotte mailing address.
              </p>
              <a href={CITY_HOMEOWNERSHIP_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-medium text-gold hover:underline">
                City of Charlotte: homeownership and HouseCharlotte resources
              </a>
            </div>
          </div>
          <p className="mt-5 leading-relaxed text-charcoal">
            Assistance terms and available funds can change. See the <Link href="/down-payment-assistance-charlotte" className="font-medium text-gold hover:underline">Charlotte down payment assistance guide</Link> for more context, and verify lender and program eligibility before using assistance in an offer.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What to have ready if you work shifts or overtime</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Before estimating a homebuying budget from your highest paycheck, collect recent pay stubs that show base pay and additional earnings separately, W-2s and other income records requested by the lender, and a description of how regularly you work overtime or earn differential pay. If you also have part-time EMS, off-duty, or second-job income, flag that early rather than assuming it all qualifies.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            A lender may need to verify the earnings history and whether variable income is likely to continue. The qualifying amount can differ from your current take-home pay. This is especially useful to sort out before choosing a price range around Charlotte, Huntersville, Cornelius, Davidson or Mooresville. See the <Link href="/mortgage-income-employment-charlotte" className="font-medium text-gold hover:underline">income and employment guide</Link> for the broader documentation questions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">A practical first responder pre-approval plan</h2>
          <ol className="mt-6 space-y-5">
            {[
              ["Review the full income picture", "Separate base pay from overtime, differential, bonus, or secondary income so the calculation is clear."],
              ["Compare loan structures", "Look at conventional, FHA, VA if eligible, and any assistance options that fit the borrower and property."],
              ["Work backward from a comfortable payment", "Qualification is not the same thing as a payment that fits the household budget and long-term plan."],
              ["Get the documentation settled before the offer", "Resolve income, credit, asset, and program questions before a purchase contract creates a deadline."],
            ].map(([title, body], index) => (
              <li key={title} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-navy/5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="font-semibold text-navy">{title}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 leading-relaxed text-charcoal">
            The <Link href="/mortgage-preapproval-charlotte" className="font-medium text-gold hover:underline">Charlotte mortgage pre-approval guide</Link> explains the broader review process, and the <Link href="/how-much-house-can-i-afford-charlotte" className="font-medium text-gold hover:underline">Charlotte affordability guide</Link> can help frame the payment conversation.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common first responder mortgage questions</h2>
          <div className="mt-6 space-y-6">
            {FAQS.map(([question, answer]) => (
              <div key={question}>
                <h3 className="font-semibold text-navy">{question}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <AuthorBox />
        </div>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Buying a home around a first responder schedule?</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/85">
            Start with the income, payment, and loan structure before the property search gets serious. That makes the financing side easier to manage when shifts, overtime, and contract deadlines are all happening at once.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Talk With Jacob</Link>
            <Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Mortgage Guides</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
