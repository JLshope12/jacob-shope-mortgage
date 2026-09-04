import Link from "next/link";
import { FAQ_ITEMS } from "@/data/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { AuthorBox } from "@/components/seo/AuthorBox";

export const metadata = {
  title: "Mortgage FAQ | Common Questions Answered | Jacob Shope",
  description:
    "Answers to common mortgage questions from Jacob Shope, Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979.",
  alternates: { canonical: "/faq" },
};

function buildFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://jacobshopemortgage.com/faq#faq",
    url: "https://jacobshopemortgage.com/faq",
    author: { "@id": "https://jacobshopemortgage.com/#jacob-shope" },
    publisher: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
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
        <p className="font-semibold text-gold">Mortgage answers from Jacob Shope</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Frequently Asked Mortgage Questions
        </h1>
        <p className="mt-4 text-lg text-charcoal">
          Clear answers to common questions about buying, qualifying, loan programs, closing costs,
          refinancing, and mortgage strategy in Charlotte and Lake Norman.
        </p>

        <div className="mt-12 rounded-xl border border-charcoal/10 bg-white p-4 shadow-sm md:p-6">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>

        <div className="mt-10">
          <AuthorBox />
        </div>

        <section className="mt-14 text-center">
          <p className="text-lg font-medium text-charcoal">Still have questions?</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
          >
            Ask Jacob
          </Link>
        </section>
      </div>
    </div>
  );
}
