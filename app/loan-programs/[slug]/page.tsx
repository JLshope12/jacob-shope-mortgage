import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getProgramBySlug, getAllProgramSlugs } from "@/data/loan-programs";
import { ProgramFAQ } from "@/components/loan-programs/ProgramFAQ";
import { AuthorBox } from "@/components/seo/AuthorBox";

type Props = { params: Promise<{ slug: string }> };

const origin = "https://jacobshopemortgage.com";

const RELATED_GUIDES: Record<string, readonly [string, string][]> = {
  conventional: [
    ["FHA vs Conventional in Charlotte", "/fha-vs-conventional-charlotte"],
    ["Private Mortgage Insurance in Charlotte", "/private-mortgage-insurance-charlotte"],
    ["Mortgage Pre-Approval in Charlotte", "/mortgage-preapproval-charlotte"],
  ],
  fha: [
    ["FHA vs Conventional in Charlotte", "/fha-vs-conventional-charlotte"],
    ["Charlotte Down Payment Assistance", "/down-payment-assistance-charlotte"],
    ["Mortgage Appraisals in Charlotte", "/mortgage-appraisal-charlotte"],
  ],
  va: [
    ["VA Loans in Charlotte", "/va-loans-charlotte"],
    ["Mortgage Appraisals in Charlotte", "/mortgage-appraisal-charlotte"],
    ["Seller Concessions in North Carolina", "/seller-concessions-north-carolina"],
  ],
  usda: [
    ["First-Time Homebuyer Guide for Charlotte", "/first-time-homebuyer-charlotte"],
    ["Charlotte Down Payment Assistance", "/down-payment-assistance-charlotte"],
    ["Mortgage Pre-Approval in Charlotte", "/mortgage-preapproval-charlotte"],
  ],
  jumbo: [
    ["2026 Charlotte Mortgage Loan Limits", "/charlotte-mortgage-loan-limits-2026"],
    ["Mortgage Pre-Approval in Charlotte", "/mortgage-preapproval-charlotte"],
    ["Mortgage Appraisals in Charlotte", "/mortgage-appraisal-charlotte"],
  ],
  refinance: [
    ["Mortgage Refinance in Charlotte", "/refinance-charlotte"],
    ["Cash-Out Refinance in Charlotte", "/cash-out-refinance-charlotte"],
    ["HELOC & Home Equity Options", "/home-equity-heloc-charlotte"],
  ],
  "first-time-buyer": [
    ["First-Time Homebuyer Guide for Charlotte", "/first-time-homebuyer-charlotte"],
    ["Charlotte Down Payment Assistance", "/down-payment-assistance-charlotte"],
    ["Charlotte Home Buying & Real Estate Financing Guide", "/charlotte-home-buying-mortgage-guide"],
  ],
};

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Loan Program | Jacob Shope" };
  return {
    title: `${program.name} Loans in Charlotte, NC | Jacob Shope`,
    description: program.description.slice(0, 155) + "...",
    alternates: { canonical: `/loan-programs/${program.slug}` },
    authors: [{ name: "Jacob Shope", url: "/about" }],
  };
}

export default async function LoanProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const pageUrl = `${origin}/loan-programs/${program.slug}`;
  const relatedGuides = RELATED_GUIDES[program.slug] ?? [
    ["Charlotte Mortgage Guides", "/mortgage-guides"],
    ["Charlotte Home Buying & Real Estate Financing Guide", "/charlotte-home-buying-mortgage-guide"],
    ["Charlotte Mortgage Options", "/service-areas/charlotte"],
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${program.name} Loans in Charlotte, NC`,
        description: program.description,
        author: { "@id": `${origin}/#jacob-shope` },
        publisher: { "@id": `${origin}/#mpire-financial` },
        isPartOf: { "@id": `${origin}/#website` },
        mainEntity: { "@id": `${origin}/#jacob-shope` },
        about: [
          { "@type": "Thing", name: program.name },
          { "@type": "Place", name: "Charlotte, North Carolina" },
          { "@type": "Thing", name: "Mortgage financing" },
        ],
        relatedLink: relatedGuides.map(([, href]) => `${origin}${href}`),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Loan Programs", item: `${origin}/loan-programs` },
          { "@type": "ListItem", position: 3, name: program.name, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: program.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="bg-offwhite">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          {program.name} in Charlotte, NC
        </h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
          {program.description}
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Key Benefits</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {program.keyBenefits.map((benefit, i) => (
              <li key={i} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm md:p-5">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-gold" />
                <span className="text-charcoal">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Requirements</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-charcoal/10 bg-navy/5">
                  <th className="px-4 py-3 text-sm font-semibold text-navy md:px-6">Requirement</th>
                  <th className="px-4 py-3 text-sm font-semibold text-navy md:px-6">Details</th>
                </tr>
              </thead>
              <tbody>
                {program.requirements.map((req, i) => (
                  <tr key={i} className="border-b border-charcoal/5 last:border-0">
                    <td className="px-4 py-3 text-sm font-medium text-charcoal md:px-6">{req.label}</td>
                    <td className="px-4 py-3 text-sm text-charcoal md:px-6">{req.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">How It Works</h2>
          <ol className="mt-6 space-y-6">
            {program.howItWorks.map((step) => (
              <li key={step.step} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm md:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white" aria-hidden>
                  {step.step}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6 rounded-xl border border-charcoal/10 bg-white p-4 shadow-sm md:p-6">
            <ProgramFAQ faq={program.faq} />
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy/5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">Related Charlotte mortgage guides</p>
          <h2 className="mt-2 text-2xl font-bold text-navy">Keep researching the financing behind your next move</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            These guides connect this loan program to the Charlotte-specific questions buyers, homeowners, veterans, and investors usually need to solve next.
          </p>
          <ul className="mt-5 space-y-3">
            {relatedGuides.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="font-medium text-gold hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/mortgage-guides" className="text-gold hover:underline">All Mortgage Guides</Link>
            <Link href="/service-areas/charlotte" className="text-gold hover:underline">Charlotte Mortgage Options</Link>
            <Link href="/blog" className="text-gold hover:underline">Charlotte Mortgage & Real Estate Insights</Link>
          </div>
        </section>

        <div className="mt-14">
          <AuthorBox />
        </div>

        <section className="mt-14 text-center">
          <p className="text-lg text-charcoal">Ready to review your options? Get in touch for a personalized mortgage conversation.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90">
            Talk With Jacob
          </Link>
        </section>
      </div>
    </div>
  );
}
