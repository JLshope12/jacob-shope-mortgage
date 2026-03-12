import Link from "next/link";
import { FAQ_ITEMS } from "@/data/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export const metadata = {
  title: "Mortgage FAQ | Common Questions Answered | Jacob Shope",
  description:
    "Answers to the most common mortgage questions. Learn about pre-approval, down payments, credit scores, FHA vs Conventional, closing costs, and more.",
};

function buildFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function FAQPage() {
  const schema = buildFAQPageSchema();

  return (
    <div className="bg-offwhite py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Frequently Asked Mortgage Questions
        </h1>
        <p className="mt-4 text-lg text-charcoal">
          Get answers to common questions about the home buying and mortgage
          process
        </p>

        <div className="mt-12 rounded-xl border border-charcoal/10 bg-white p-4 shadow-sm md:p-6">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>

        <section className="mt-14 text-center">
          <p className="text-lg font-medium text-charcoal">
            Still have questions?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
          >
            Contact Jacob
          </Link>
        </section>
      </div>
    </div>
  );
}
