import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceAreaBySlug,
  getAllServiceAreaSlugs,
  type ServiceArea,
} from "@/data/service-areas";
import { LOAN_PROGRAMS } from "@/data/loan-programs";
import { AuthorBox } from "@/components/seo/AuthorBox";

type Props = { params: Promise<{ slug: string }> };

const origin = "https://jacobshopemortgage.com";

export async function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return { title: "Service Area | Jacob Shope" };

  const title =
    area.slug === "charlotte"
      ? "Charlotte Home Loans | FHA, VA, Conventional & More | Jacob Shope"
      : area.slug === "lake-norman"
        ? "Lake Norman Mortgage Broker | Jacob Shope"
        : area.slug === "north-carolina"
          ? "North Carolina Mortgage Lender | Jacob Shope"
          : area.slug === "south-carolina"
            ? "South Carolina Mortgage Lender | Jacob Shope"
            : area.slug === "nationwide"
              ? "Nationwide Mortgage Lender | Jacob Shope"
              : area.slug === "charlotte-metro"
                ? "Charlotte Metro Home Loans | Jacob Shope"
                : `${area.name} Mortgage Broker | Jacob Shope`;

  return {
    title,
    description: area.shortDescription,
    alternates: { canonical: `/service-areas/${area.slug}` },
    authors: [{ name: "Jacob Shope", url: "/about" }],
  };
}

function getH1(area: ServiceArea): string {
  if (area.slug === "charlotte") return "Mortgage Options for Charlotte Homebuyers";
  if (area.slug === "lake-norman") return "Lake Norman Mortgage Broker";
  if (area.slug === "north-carolina") return "North Carolina Mortgage Lender";
  if (area.slug === "south-carolina") return "South Carolina Mortgage Lender";
  if (area.slug === "nationwide") return "Nationwide Mortgage Lender";
  if (area.slug === "charlotte-metro") return "Mortgage Options Across the Charlotte Metro";
  return `${area.name} Mortgage Broker`;
}

function getCTAText(area: ServiceArea): string {
  if (area.slug === "north-carolina") return "Get Pre-Approved in North Carolina";
  if (area.slug === "south-carolina") return "Get Pre-Approved in South Carolina";
  if (area.slug === "nationwide") return "Get Pre-Approved";
  return `Get Pre-Approved for a Home in ${area.name}`;
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  const nearbyAreas = area.nearbySlugs
    .map((s) => getServiceAreaBySlug(s))
    .filter(Boolean) as ServiceArea[];

  const pageUrl = `${origin}/service-areas/${area.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: getH1(area),
        description: area.shortDescription,
        author: { "@id": `${origin}/#jacob-shope` },
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": `${pageUrl}#mortgage-service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#mortgage-service`,
        name: `Mortgage guidance in ${area.name}`,
        serviceType: "Mortgage brokerage and home loan guidance",
        provider: { "@id": `${origin}/#mpire-financial` },
        areaServed: { "@type": "Place", name: area.name },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${origin}/service-areas` },
          { "@type": "ListItem", position: 3, name: area.name, item: pageUrl },
        ],
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
        <p className="font-semibold text-gold">Local mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          {getH1(area)}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
          {area.introParagraph}
        </p>

        {area.slug === "charlotte" && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">Buying real estate in Charlotte?</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              The financing should fit the property and the buyer, not the other way around. I help Charlotte buyers compare conventional, FHA, VA, jumbo, first-time buyer, investment-property, construction, bridge, and other available mortgage options while keeping the payment, cash to close, appraisal, and offer strategy clear.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
              <Link href="/charlotte-home-buying-mortgage-guide" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Charlotte Real Estate Financing Guide</Link>
              <Link href="/down-payment-assistance-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Down Payment Assistance</Link>
              <Link href="/first-time-homebuyer-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">First-Time Buyers</Link>
              <Link href="/va-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">VA Loans</Link>
              <Link href="/investment-property-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Investment Property Loans</Link>
            </div>
          </section>
        )}

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Loan Programs Available</h2>
          <p className="mt-2 text-charcoal">Explore mortgage options for buyers and homeowners in this area:</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {LOAN_PROGRAMS.map((program) => (
              <li key={program.slug}>
                <Link href={`/loan-programs/${program.slug}`} className="inline-flex items-center font-medium text-gold hover:underline">
                  {program.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Why Choose a Local Mortgage Professional</h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">{area.whyLocal}</p>
        </section>

        {nearbyAreas.length > 0 && (
          <section className="mt-14 border-t border-charcoal/10 pt-14">
            <h2 className="text-xl font-bold tracking-tight text-navy md:text-2xl">Nearby Areas We Serve</h2>
            <ul className="mt-6 flex flex-wrap gap-4">
              {nearbyAreas.map((nearby) => (
                <li key={nearby.slug}>
                  <Link href={`/service-areas/${nearby.slug}`} className="font-medium text-gold hover:underline">
                    {nearby.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-14">
          <AuthorBox />
        </div>

        <section className="mt-14 text-center">
          <Link href="/contact" className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90">
            {getCTAText(area)}
          </Link>
        </section>
      </div>
    </div>
  );
}
