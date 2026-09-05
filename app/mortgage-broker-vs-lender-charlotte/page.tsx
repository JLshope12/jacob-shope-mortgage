import Link from "next/link";

export const metadata = {
  title: "Mortgage Broker vs Lender in Charlotte | Jacob Shope",
  description:
    "Understand the difference between a mortgage broker and a direct lender in Charlotte, and how to decide which approach fits your home financing needs.",
  alternates: { canonical: "/mortgage-broker-vs-lender-charlotte" },
};

const faq = [
  ["What is a mortgage broker?", "A mortgage broker helps borrowers evaluate loan options from multiple lending sources rather than being limited to one institution's product menu."],
  ["What is a direct mortgage lender?", "A direct lender typically originates and funds loans using its own lending platform or a defined set of in-house products."],
  ["Is a mortgage broker the same as a loan officer?", "Not exactly. A loan officer is the licensed professional working with the borrower. A loan officer may work for a bank, direct lender, credit union, or mortgage brokerage."],
  ["Why might a Charlotte buyer use a mortgage broker?", "A broker can be useful when a buyer wants to compare structures, has a property or income scenario that needs more than one option, or simply wants someone to evaluate alternatives across multiple lending sources."],
] as const;

export default function MortgageBrokerVsLenderCharlottePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mortgage Broker vs Lender in Charlotte",
    author: { "@type": "Person", "@id": "https://jacobshopemortgage.com/#jacob-shope", name: "Jacob Shope" },
    publisher: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
    mainEntityOfPage: "https://jacobshopemortgage.com/mortgage-broker-vs-lender-charlotte",
  };

  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Mortgage Broker vs Lender in Charlotte</h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal">
          If you are shopping for a mortgage in Charlotte, one of the first decisions is who you want helping you structure the loan. Banks, credit unions, direct lenders, and mortgage brokers can all originate mortgages, but they do not all work the same way.
        </p>
        <p className="mt-4 text-charcoal">
          I&apos;m Jacob Shope, a Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979. My role is to help borrowers understand the differences, compare options, and choose a financing path based on the borrower, property, and goal.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">The simplest difference</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            A direct lender generally offers loans through its own lending platform. A mortgage broker works with multiple lending sources and can compare different loan structures rather than relying on a single institution&apos;s menu.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            That does not automatically make one approach better in every situation. The value is in matching the borrower to the right structure, service level, timeline, and property type.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
            <h2 className="text-xl font-bold text-navy">A mortgage broker may be helpful when...</h2>
            <ul className="mt-4 space-y-3 text-charcoal">
              <li>You want to compare multiple lending options.</li>
              <li>Your income or employment needs a more thoughtful review.</li>
              <li>You are buying an investment property or unusual property type.</li>
              <li>You want to compare conventional, FHA, VA, jumbo, or other possible structures.</li>
              <li>You have been told no by one lender and want another set of eyes on the scenario.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
            <h2 className="text-xl font-bold text-navy">A direct lender may be a fit when...</h2>
            <ul className="mt-4 space-y-3 text-charcoal">
              <li>You already know and prefer that institution.</li>
              <li>The lender has a specific program that fits your situation well.</li>
              <li>You value keeping banking and lending relationships under one roof.</li>
              <li>You have a straightforward scenario and are comfortable with the available options.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">What matters more than the label</h2>
          <p className="mt-4 leading-relaxed text-charcoal">
            The person handling the loan matters. Ask how clearly they explain the payment, cash needed, loan structure, risks, appraisal process, and next steps. Ask how quickly they communicate with you and your Realtor. Ask whether they understand the kind of property and borrower profile involved.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal">
            A strong mortgage professional should be able to explain why a loan fits, not just quote a rate and ask you to apply.
          </p>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-2xl font-bold text-navy">Common questions</h2>
          <div className="mt-6 space-y-6">
            {faq.map(([q, a]) => (
              <div key={q}>
                <h3 className="font-semibold text-navy">{q}</h3>
                <p className="mt-2 leading-relaxed text-charcoal">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Want me to compare the options with you?</h2>
          <p className="mt-3 text-white/85">Send me the purchase price, down payment, property type, and what you are trying to accomplish. I&apos;ll help you understand the financing paths available.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Ask Jacob a Mortgage Question</Link>
            <Link href="/mortgage-guides" className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white hover:text-navy">More Mortgage Guides</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
