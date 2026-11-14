import Link from "next/link";
import { AuthorBox } from "@/components/seo/AuthorBox";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/mortgage-preapproval-charlotte`;
const CFPB_PREAPPROVAL_URL = "https://www.consumerfinance.gov/owning-a-home/explore/get-a-preapproval-letter/";
const CFPB_SHOP_URL = "https://www.consumerfinance.gov/consumer-tools/mortgages/shopping-for-a-mortgage/";
const CFPB_PAPERWORK_URL = "https://www.consumerfinance.gov/owning-a-home/explore/gather-and-update-your-paperwork/";
const CFPB_PREQUAL_VS_PREAPPROVAL_URL = "https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-prequalification-letter-and-a-preapproval-letter-en-127/";
const CFPB_LOAN_ESTIMATES_URL = "https://www.consumerfinance.gov/owning-a-home/compare/compare-loan-estimates/";
const NCREC_DUE_DILIGENCE_URL = "https://bulletins.ncrec.gov/due-diligence-fees-when-must-they-be-deposited/";

export const metadata = {
  title: "Mortgage Pre-Approval in Charlotte | Jacob Shope",
  description:
    "A practical guide to mortgage pre-approval in Charlotte from Jacob Shope, Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.",
  alternates: { canonical: "/mortgage-preapproval-charlotte" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const FAQS = [
  [
    "Is pre-approval the same as final approval?",
    "No. Final approval also depends on the property, appraisal, title, insurance, updated borrower information, and the lender's final review.",
  ],
  [
    "Should I shop only at the highest price I qualify for?",
    "Qualification and comfort are different. It is useful to compare payment ranges rather than focus only on a maximum purchase price.",
  ],
  [
    "Can a pre-approval be updated?",
    "Yes. If a home search takes time or finances change, the review may need to be refreshed.",
  ],
  [
    "Is a prequalification as reliable as a preapproval?",
    "Not necessarily. Lenders use both terms differently. Ask what income, assets, debts, and credit were actually verified and what conditions remain instead of relying on the letter's label.",
  ],
  [
    "Does a preapproval lock in my mortgage rate or lender?",
    "No. A preapproval letter is not a guaranteed loan offer or an interest-rate lock. You can still compare official Loan Estimates from different lenders when you have a property and a signed offer.",
  ],
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: "Mortgage Pre-Approval in Charlotte",
      description:
        "A practical Charlotte mortgage pre-approval guide covering income, employment, credit, monthly obligations, funds, and property considerations.",
      author: { "@id": `${origin}/#jacob-shope` },
      publisher: { "@id": `${origin}/#mpire-financial` },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      dateModified: "2026-11-14",
      citation: [CFPB_PREAPPROVAL_URL, CFPB_SHOP_URL, CFPB_PAPERWORK_URL, CFPB_PREQUAL_VS_PREAPPROVAL_URL, CFPB_LOAN_ESTIMATES_URL, NCREC_DUE_DILIGENCE_URL],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Mortgage Pre-Approval in Charlotte",
      author: { "@id": `${origin}/#jacob-shope` },
      isPartOf: { "@id": `${origin}/#website` },
      about: [
        { "@type": "Thing", name: "Mortgage pre-approval" },
        { "@type": "Thing", name: "Mortgage qualification" },
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
        { "@type": "ListItem", position: 3, name: "Mortgage Pre-Approval in Charlotte", item: pageUrl },
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

export default function MortgagePreapprovalCharlottePage() {
  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Mortgage Pre-Approval in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          A mortgage pre-approval helps a buyer understand an estimated buying range, expected payment, and the information a lender will review before a home offer is made.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. I work with buyers across Charlotte and Lake Norman to make the financing side of a home search easier to understand.
        </p>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What CFPB says about pre-approval</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            The Consumer Financial Protection Bureau describes a pre-approval letter as a lender&apos;s tentative willingness to lend up to a stated amount. It is not a final loan approval, but it can help a seller see that a buyer is likely to obtain financing.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            CFPB also recommends comparing multiple pre-approvals and loan offers instead of assuming the first option is automatically the best fit.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <a href={CFPB_PREAPPROVAL_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB pre-approval guidance</a>
            <a href={CFPB_SHOP_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB mortgage shopping guide</a>
            <a href={CFPB_PAPERWORK_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB paperwork checklist</a>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What is reviewed during pre-approval?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A typical review looks at income, employment, credit history, monthly obligations, available funds, the planned property type, and the loan program being considered. The exact documentation depends on the borrower and the loan.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <Link href="/mortgage-credit-score-charlotte" className="text-gold hover:underline">Mortgage Credit Guide</Link>
            <Link href="/mortgage-dti-charlotte" className="text-gold hover:underline">Debt-to-Income Guide</Link>
            <Link href="/mortgage-income-employment-charlotte" className="text-gold hover:underline">Income &amp; Employment Guide</Link>
            <Link href="/mortgage-closing-costs-charlotte" className="text-gold hover:underline">Closing Costs Guide</Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">What to have ready for a mortgage pre-approval</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            You do not have to guess what paperwork applies to your situation. This is the starting list I use to identify what a Charlotte-area buyer may need before a serious home search.
          </p>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-charcoal">
            <li><strong>Income:</strong> Recent pay stubs and W-2s, or tax returns and business records when self-employed. Variable pay, overtime, and other income may require additional history.</li>
            <li><strong>Funds:</strong> Recent bank or asset statements for the proposed down payment, closing costs, and any reserves. If you expect gift funds, mention them early.</li>
            <li><strong>Debts and credit:</strong> Know your current monthly obligations and flag any recent late payments, disputed accounts, or planned new debt so the full credit profile can be reviewed.</li>
            <li><strong>Purchase plan:</strong> Share the expected price range, down payment, timeline, and whether you are considering a condo, existing home, or new construction.</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            Documentation varies by loan program and borrower. Request a secure upload method for financial records rather than sending sensitive documents in an ordinary email.
          </p>
          <a href={CFPB_PAPERWORK_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-gold hover:underline">Read the CFPB paperwork guidance</a>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Income and employment", "How income is earned and documented can affect the financing review."],
            ["Credit history", "Credit is one part of determining which loan options may be available."],
            ["Monthly obligations", "Existing recurring debts are considered alongside income and the proposed housing payment."],
            ["Funds for the transaction", "A lender may review funds for down payment, closing costs, and any required reserves."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
              <h3 className="font-bold text-navy">{title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">What makes a preapproval useful when you write an offer?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            Two letters may both say &ldquo;preapproved&rdquo; even when one is based mostly on information the buyer provided and the other involved a deeper document review. The CFPB cautions that lenders use the terms prequalification and preapproval differently, so ask about the review behind the letter rather than its title.
          </p>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-charcoal">
            <li><strong>What was verified?</strong> Ask whether credit, income, employment, assets, and monthly debts were reviewed using supporting documents or only estimated from the initial conversation.</li>
            <li><strong>What still needs approval?</strong> Confirm any remaining documentation, underwriting conditions, and whether the loan still depends on property appraisal, insurance, title, and the lender&apos;s final review.</li>
            <li><strong>Does the letter fit the offer?</strong> Check that purchase price, intended occupancy, loan type, down payment, and proposed closing timeline are consistent with the offer you plan to make.</li>
            <li><strong>When does it need refreshing?</strong> Ask about the letter&apos;s expiration and what could change the financing picture, including a new debt, job or income change, or a different property type.</li>
          </ul>
          <p className="mt-4 leading-relaxed text-charcoal">
            A preapproval is neither a promise of final approval nor a rate lock. When you have a signed purchase contract, compare actual Loan Estimates for rate, discount points, lender fees, credits, payment, and cash to close. Choosing a preapproval provider does not require you to choose that lender for the final mortgage.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <a href={CFPB_PREQUAL_VS_PREAPPROVAL_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB: prequalification vs. preapproval</a>
            <a href={CFPB_LOAN_ESTIMATES_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB: comparing Loan Estimates</a>
            <Link href="/mortgage-broker-vs-lender-charlotte" className="text-gold hover:underline">How to compare mortgage offers</Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Why do this before shopping?</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            It gives the buyer and Realtor a clearer starting point. It also creates time to compare loan structures and resolve documentation questions before a property is under contract.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Buyers who are early in the process can also review the <Link href="/first-time-homebuyer-charlotte" className="font-medium text-gold hover:underline">Charlotte first-time homebuyer guide</Link> and the broader <Link href="/mortgage-guides" className="font-medium text-gold hover:underline">mortgage guide library</Link> before deciding what to do next.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Before you submit an offer in Charlotte or Lake Norman</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            I recommend revisiting the numbers on the specific home before an offer is written. Your pre-approval amount is not a promise that every property or payment will fit the same way.
          </p>
          <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-charcoal">
            <li>Run a payment estimate using the property's expected taxes, homeowners insurance, HOA dues, and mortgage insurance when applicable. <Link href="/how-much-house-can-i-afford-charlotte" className="font-medium text-gold hover:underline">Review Charlotte affordability</Link>.</li>
            <li>Confirm the funds you expect to need at closing, and discuss whether the offer should include seller-paid closing costs or a temporary rate buydown. <Link href="/seller-concessions-north-carolina" className="font-medium text-gold hover:underline">Understand seller concessions</Link>.</li>
            <li>Tell your lender about the property type and timing. Condos, manufactured homes, and new construction may have requirements beyond your personal pre-approval. <Link href="/mortgage-appraisal-charlotte" className="font-medium text-gold hover:underline">Review appraisal considerations</Link>.</li>
          </ul>
          <p className="mt-4 leading-relaxed text-charcoal">
            When your Realtor is preparing an offer, I can help check how the proposed price, financing terms, and closing timeline work together.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">North Carolina cash planning before the contract</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            For a Charlotte or Lake Norman purchase using the standard North Carolina Offer to Purchase and Contract, ask your Realtor about any proposed due diligence fee and earnest money deposit before you sign. These are separate from your down payment and can create an immediate need for cash well before the closing date.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            Under the standard contract described by the North Carolina Real Estate Commission, a due diligence fee is typically paid to the seller and credited to the buyer at closing, but generally is not refundable if the buyer ends the contract, subject to the contract&apos;s exceptions. The terms of the actual agreement control. A financing setback does not automatically mean the buyer receives the fee back.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            My role is to help check the financing and cash-to-close estimates before those contract decisions. Your Realtor and closing attorney should answer questions about the legal effect of your deposit terms and deadlines.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <a href={NCREC_DUE_DILIGENCE_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">NC Real Estate Commission: due diligence fee</a>
            <Link href="/mortgage-closing-costs-charlotte" className="text-gold hover:underline">Charlotte cash-to-close guide</Link>
            <Link href="/seller-concessions-north-carolina" className="text-gold hover:underline">North Carolina seller concessions</Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-7">
          <h2 className="text-2xl font-bold text-navy">Local mortgage planning</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            Pre-approval is the starting point for many Charlotte and Lake Norman purchases, whether the property is a first home, new construction, a VA purchase, or an investment property. These local hubs connect the financing guidance to the markets I serve.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            <Link href="/service-areas/charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Charlotte Mortgage Options</Link>
            <Link href="/service-areas/lake-norman" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Lake Norman Mortgage Options</Link>
            <Link href="/construction-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Construction Loans</Link>
            <Link href="/va-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">VA Loans</Link>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common pre-approval questions</h2>
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
          <h2 className="text-2xl font-bold">Planning a home purchase in Charlotte?</h2>
          <p className="mt-3 text-white/85">Use the mortgage guides and calculators on this site to understand the financing process before you make an offer.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/mortgage-guides" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Mortgage Guides</Link>
            <Link href="/calculators/affordability" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">Affordability Calculator</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
