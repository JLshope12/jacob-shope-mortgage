import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceAreaBySlug,
  getAllServiceAreaSlugs,
  type ServiceArea,
} from "@/data/service-areas";
import { LOAN_PROGRAMS } from "@/data/loan-programs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return { title: "Service Area | Jacob Shope" };
  const title =
    area.slug === "lake-norman"
      ? "Lake Norman Mortgage Lender | Jacob Shope"
      : area.slug === "north-carolina"
        ? "North Carolina Mortgage Lender | Jacob Shope"
        : area.slug === "south-carolina"
          ? "South Carolina Mortgage Lender | Jacob Shope"
          : area.slug === "nationwide"
            ? "Nationwide Mortgage Lender | Jacob Shope"
            : `Mortgage Lender in ${area.name}, NC | Jacob Shope`;
  return {
    title,
    description: area.shortDescription,
  };
}

function getH1(area: ServiceArea): string {
  if (area.slug === "lake-norman") return "Lake Norman Mortgage Lender";
  if (area.slug === "north-carolina") return "North Carolina Mortgage Lender";
  if (area.slug === "south-carolina") return "South Carolina Mortgage Lender";
  if (area.slug === "nationwide") return "Nationwide Mortgage Lender";
  return `Mortgage Lender in ${area.name}, NC`;
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

  return (
    <div className="bg-offwhite">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          {getH1(area)}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
          {area.introParagraph}
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Loan Programs Available
          </h2>
          <p className="mt-2 text-charcoal">
            I offer a full range of loan options for buyers and refinancers in
            this area:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {LOAN_PROGRAMS.map((program) => (
              <li key={program.slug}>
                <Link
                  href={`/loan-programs/${program.slug}`}
                  className="inline-flex items-center text-gold font-medium hover:underline"
                >
                  {program.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Why Choose a Local Mortgage Professional
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
            {area.whyLocal}
          </p>
        </section>

        <section className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
          >
            {getCTAText(area)}
          </Link>
        </section>

        {nearbyAreas.length > 0 && (
          <section className="mt-14 border-t border-charcoal/10 pt-14">
            <h2 className="text-xl font-bold tracking-tight text-navy md:text-2xl">
              Nearby Areas We Serve
            </h2>
            <ul className="mt-6 flex flex-wrap gap-4">
              {nearbyAreas.map((nearby) => (
                <li key={nearby.slug}>
                  <Link
                    href={`/service-areas/${nearby.slug}`}
                    className="text-gold font-medium hover:underline"
                  >
                    {nearby.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
