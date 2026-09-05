import Link from "next/link";

const FAQS = [
  {
    question: "What down payment assistance is available in Charlotte?",
    answer:
      "Charlotte-area buyers may have access to City of Charlotte programs such as HouseCharlotte as well as statewide North Carolina Housing Finance Agency programs. Eligibility depends on income, property, loan type, occupancy, purchase price, and the participating lender.",
  },
  {
    question: "Can first-time buyers get down payment assistance in North Carolina?",
    answer:
      "Yes. The North Carolina Housing Finance Agency offers NC Home Advantage Mortgage options with down payment assistance for qualified buyers, plus a separate $15,000 NC 1st Home Advantage Down Payment option for eligible first-time buyers and military veterans.",
  },
  {
    question: "Do I have to be a first-time buyer to use NC Home Advantage?",
    answer:
      "Not necessarily. The standard NC Home Advantage Mortgage can be available to qualified first-time and move-up buyers. The separate $15,000 NC 1st Home Advantage Down Payment option has additional first-time buyer or military veteran eligibility rules.",
  },
  {
    question: "Can down payment assistance be used with FHA, VA, USDA, or conventional loans?",
    answer:
      "Depending on the program, yes. NC Home Advantage works with eligible FHA, VA, USDA, and conventional purchase loans through participating lenders.",
  },
  {
    question: "Does down payment assistance have to be repaid?",
    answer:
      "It depends on the program. Some assistance is structured as a deferred or forgivable subordinate lien and may become repayable if you sell, refinance, or transfer the property before a specified period. The exact terms should be reviewed before closing.",
  },
];

export const metadata = {
  title: "Down Payment Assistance Charlotte NC | Jacob Shope",
  description:
    "Learn about Charlotte and North Carolina down payment assistance programs, including HouseCharlotte and NC Home Advantage. Jacob Shope explains eligibility, loan options, and next steps.",
  alternates: { canonical: "/down-payment-assistance-charlotte" },
};

export default function DownPaymentAssistanceCharlottePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Down Payment Assistance in Charlotte, NC",
    author: {
      "@type": "Person",
      name: "Jacob Shope",
      url: "https://jacobshopemortgage.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Mpire Financial",
    },
    mainEntityOfPage: "https://jacobshopemortgage.com/down-payment-assistance-charlotte",
  };

  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Charlotte homebuyer guide</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Down Payment Assistance in Charlotte, NC
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          You do not always need 20% down to buy a home. Depending on your income, loan program,
          property, and where you are buying, there may be local or statewide assistance that can
          help with the down payment and other eligible purchase costs.
        </p>
        <p className="mt-4 leading-relaxed text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial.
          My job is to help you compare the assistance program with the first mortgage so you understand
          the payment, cash needed at closing, and any repayment or forgiveness terms before you make an offer.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Two programs Charlotte buyers should know about</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-charcoal/10 bg-offwhite p-7">
              <h3 className="text-2xl font-semibold text-navy">HouseCharlotte</h3>
              <p className="mt-4 leading-relaxed text-charcoal">
                HouseCharlotte is a City of Charlotte down payment assistance program administered with DreamKey Partners.
                Program funds may be used for eligible down payment, closing-cost, interest-rate buydown, or principal-reduction purposes.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal">
                Eligibility is tied to factors such as household income, property location within eligible City of Charlotte areas,
                purchase price, homebuyer education, and use of an approved lender. Program limits and funding can change, so the current
                program rules should be checked for the specific property and borrower.
              </p>
              <a
                href="https://dreamkeypartners.org/house-charlotte-program/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex font-medium text-gold hover:underline"
              >
                Review HouseCharlotte program information
              </a>
            </article>

            <article className="rounded-2xl border border-charcoal/10 bg-offwhite p-7">
              <h3 className="text-2xl font-semibold text-navy">NC Home Advantage Mortgage</h3>
              <p className="mt-4 leading-relaxed text-charcoal">
                The North Carolina Housing Finance Agency offers NC Home Advantage Mortgage financing through participating lenders.
                Qualified first-time and move-up buyers may receive down payment assistance up to 3% of the first-mortgage loan amount.
              </p>
              <p className="mt-4 leading-relaxed text-charcoal">
                The Agency also offers a $15,000 NC 1st Home Advantage Down Payment option for eligible first-time buyers and military veterans.
                Current NCHFA guidance lists a 640 minimum credit score for the standard program, an income limit of $158,000, and eligible FHA,
                VA, USDA, and conventional 30-year fixed-rate purchase loans, subject to program and underwriting requirements.
              </p>
              <a
                href="https://www.nchfa.com/home-buyers/buy-home/nc-home-advantage-mortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex font-medium text-gold hover:underline"
              >
                Review NC Home Advantage details
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy">How the process usually works</h2>
          <ol className="mt-8 space-y-5 text-charcoal">
            <li><strong className="text-navy">1. Start with the mortgage qualification.</strong> We review income, credit, debt, assets, and the loan programs that fit your scenario.</li>
            <li><strong className="text-navy">2. Check assistance eligibility.</strong> We compare the borrower, property location, purchase price, and program requirements.</li>
            <li><strong className="text-navy">3. Compare the full payment.</strong> Assistance can help with cash to close, but the first mortgage rate, mortgage insurance, taxes, insurance, and second-lien terms still matter.</li>
            <li><strong className="text-navy">4. Build the offer around real numbers.</strong> Before you write an offer, you should know the estimated payment, cash needed, and whether seller concessions could improve the structure further.</li>
          </ol>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Down payment assistance is not automatically the best option</h2>
          <div className="mt-6 space-y-5 leading-relaxed text-charcoal">
            <p>
              Assistance can be extremely useful, but I still compare it against other structures. A lower-rate conventional or FHA option,
              seller-paid closing costs, gift funds, or a different down payment may sometimes produce a better long-term result.
            </p>
            <p>
              The right question is not just, “How much assistance can I get?” It is, “Which financing structure gives me the best combination
              of cash needed, monthly payment, flexibility, and long-term cost?”
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy">Charlotte down payment assistance FAQs</h2>
          <div className="mt-8 divide-y divide-charcoal/10 rounded-2xl border border-charcoal/10 bg-white px-6 md:px-8">
            {FAQS.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="text-lg font-semibold text-navy">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-charcoal">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold">Want to know what you may qualify for?</h2>
          <p className="mt-4 text-white/85 md:text-lg">
            Send me your price range and a little about your situation. I&apos;ll help you compare the loan and assistance options that may fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90">Check My Options</Link>
            <Link href="/loan-programs/first-time-buyer" className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-navy">First-Time Buyer Guide</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 text-sm leading-relaxed text-charcoal/70 md:px-6 lg:px-8">
        <p>
          Program information can change and funding may be limited. Eligibility and terms are determined by the applicable program,
          participating lender, underwriting guidelines, and property. This page is educational and is not a commitment to lend or a guarantee of assistance.
        </p>
        <p className="mt-3">
          Sources: City of Charlotte / DreamKey Partners HouseCharlotte program information and North Carolina Housing Finance Agency NC Home Advantage Mortgage guidance, reviewed September 2026.
        </p>
      </section>
    </div>
  );
}
