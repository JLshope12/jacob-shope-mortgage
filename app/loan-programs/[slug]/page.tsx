import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getProgramBySlug, getAllProgramSlugs } from "@/data/loan-programs";
import { ProgramFAQ } from "@/components/loan-programs/ProgramFAQ";
import { AuthorBox } from "@/components/seo/AuthorBox";

type Props = { params: Promise<{ slug: string }> };

const origin = "https://jacobshopemortgage.com";
const CONSOLIDATED_PROGRAM_ROUTES: Record<string, string> = {
  va: "/va-loans-charlotte",
  "first-time-buyer": "/first-time-homebuyer-charlotte",
};

const FHFA_2026_LIMITS = "https://www.fhfa.gov/data/conforming-loan-limit";
const HUD_2026_FHA_LIMITS = "https://www.hud.gov/LENDERS";

const CURRENT_FAQ_OVERRIDES: Record<string, Record<string, string>> = {
  conventional: {
    "Are conventional loan limits different in Charlotte, NC?":
      "Conforming loan limits are set annually by the Federal Housing Finance Agency. For 2026, the national baseline limit for a one-unit property is $832,750. County-specific limits should always be confirmed with the current FHFA lookup before a purchase price or loan structure is finalized.",
  },
  fha: {
    "Are FHA loan limits different in the Charlotte area?":
      "Yes. FHA loan limits are set by county and property size. For 2026, HUD set the national one-unit FHA floor at $541,287 and the high-cost ceiling at $1,249,125. The exact county limit should be confirmed with HUD's current FHA mortgage limits before a buyer relies on a maximum loan amount.",
  },
  jumbo: {
    "What is the jumbo loan limit in Charlotte, NC?":
      "A jumbo loan generally starts above the applicable conforming loan limit. For 2026, the national baseline conforming limit for a one-unit property is $832,750. The exact county limit should be confirmed with FHFA because high-cost areas can have higher limits.",
  },
};

const OFFICIAL_RESOURCES: Record<string, { href: string; label: string }[]> = {
  conventional: [
    { href: FHFA_2026_LIMITS, label: "FHFA: 2026 conforming loan limits" },
  ],
  fha: [
    { href: HUD_2026_FHA_LIMITS, label: "HUD: 2026 FHA mortgage limits" },
  ],
  jumbo: [
    { href: FHFA_2026_LIMITS, label: "FHFA: 2026 conforming loan limits" },
  ],
};

const RELATED_GUIDES: Record<string, { href: string; label: string }[]> = {
  conventional: [
    { href: "/mortgage-preapproval-charlotte", label: "Charlotte Mortgage Pre-Approval" },
    { href: "/mortgage-credit-score-charlotte", label: "Mortgage Credit Score Guide" },
    { href: "/first-time-homebuyer-charlotte", label: "First-Time Homebuyer Guide" },
    { href: "/fha-vs-conventional-charlotte", label: "FHA vs. Conventional" },
  ],
  fha: [
    { href: "/first-time-homebuyer-charlotte", label: "First-Time Homebuyer Guide" },
    { href: "/down-payment-assistance-charlotte", label: "Down Payment Assistance" },
    { href: "/mortgage-credit-score-charlotte", label: "Mortgage Credit Score Guide" },
    { href: "/fha-vs-conventional-charlotte", label: "FHA vs. Conventional" },
  ],
  usda: [
    { href: "/mortgage-preapproval-charlotte", label: "Charlotte Mortgage Pre-Approval" },
    { href: "/mortgage-credit-score-charlotte", label: "Mortgage Credit Score Guide" },
    { href: "/service-areas/charlotte-metro", label: "Charlotte Metro Mortgage Options" },
    { href: "/service-areas/north-carolina", label: "North Carolina Mortgage Options" },
  ],
  jumbo: [
    { href: "/mortgage-preapproval-charlotte", label: "Charlotte Mortgage Pre-Approval" },
    { href: "/mortgage-dti-charlotte", label: "Debt-to-Income Guide" },
    { href: "/mortgage-income-employment-charlotte", label: "Income & Employment Guide" },
    { href: "/mortgage-appraisal-charlotte", label: "Mortgage Appraisal Guide" },
  ],
  refinance: [
    { href: "/refinance-charlotte", label: "Charlotte Refinance Guide" },
    { href: "/cash-out-refinance-charlotte", label: "Cash-Out Refinance" },
    { href: "/home-equity-heloc-charlotte", label: "Home Equity & HELOC" },
    { href: "/mortgage-credit-score-charlotte", label: "Mortgage Credit Score Guide" },
  ],
};

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const consolidatedRoute = CONSOLIDATED_PROGRAM_ROUTES[slug];
  if (consolidatedRoute) {
    return {
      robots: { index: false, follow: true },
      alternates: { canonical: consolidatedRoute },
    };
  }

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
  const consolidatedRoute = CONSOLIDATED_PROGRAM_ROUTES[slug];
  if (consolidatedRoute) permanentRedirect(consolidatedRoute);

  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const faq = program.faq.map((item) => ({
    ...item,
    answer: CURRENT_FAQ_OVERRIDES[program.slug]?.[item.question] ?? item.answer,
  }));
  const officialResources = OFFICIAL_RESOURCES[program.slug] ?? [];
  const relatedGuides = RELATED_GUIDES[program.slug] ?? [
    { href: "/mortgage-preapproval-charlotte", label: "Charlotte Mortgage Pre-Approval" },
    { href: "/mortgage-guides", label: "Mortgage Guides" },
    { href: "/service-areas/charlotte", label: "Charlotte Mortgage Options" },
  ];

  const pageUrl = `${origin}/loan-programs/${program.slug}`;
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
        isPartOf: { "@id": `${origin}/#website` },
        about: [
          { "@type": "Thing", name: program.name },
          { "@type": "Place", name: "Charlotte, North Carolina" },
        ],
        citation: officialResources.map((resource) => resource.href),
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
        mainEntity: faq.map((item) => ({
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

        {officialResources.length > 0 && (
          <section className="mt-14 rounded-2xl border border-navy/10 bg-white p-6 md:p-7">
            <h2 className="text-2xl font-bold text-navy">Official program resources</h2>
            <p className="mt-3 leading-relaxed text-charcoal">
              Loan limits and program rules change over time. These government resources are the source used to verify current limits before relying on a maximum loan amount.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
              {officialResources.map((resource) => (
                <a key={resource.href} href={resource.href} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  {resource.label}
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6 rounded-xl border border-charcoal/10 bg-white p-4 shadow-sm md:p-6">
            <ProgramFAQ faq={faq} />
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 md:p-7">
          <h2 className="text-2xl font-bold text-navy">Related Charlotte mortgage guides</h2>
          <p className="mt-3 leading-relaxed text-charcoal">
            The loan program is only one part of the financing decision. These guides connect the program to qualification, credit, property, and local Charlotte planning.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">
                {guide.label}
              </Link>
            ))}
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
