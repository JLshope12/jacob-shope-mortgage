import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import {
  SERVICE_AREAS,
  type ServiceAreaGroup,
} from "@/data/service-areas";

const GROUP_LABELS: Record<ServiceAreaGroup, string> = {
  "charlotte-metro": "Charlotte Metro",
  "north-carolina": "North Carolina",
  "south-carolina": "South Carolina",
  nationwide: "Nationwide",
};

const GROUP_ORDER: ServiceAreaGroup[] = [
  "charlotte-metro",
  "north-carolina",
  "south-carolina",
  "nationwide",
];

export const metadata = {
  title: "Mortgage Lender Serving Charlotte, NC & Beyond | Jacob Shope",
  description:
    "Jacob Shope provides mortgage loans throughout Charlotte, Huntersville, Cornelius, Lake Norman, Mooresville, Concord, and all of North Carolina.",
};

export default function ServiceAreasHubPage() {
  const byGroup = GROUP_ORDER.map((group) => ({
    label: GROUP_LABELS[group],
    areas: SERVICE_AREAS.filter((a) => a.group === group),
  })).filter((section) => section.areas.length > 0);

  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Areas We Serve
        </h1>
        {byGroup.map(({ label, areas }) => (
          <section key={label} className="mt-12 first:mt-12">
            <h2 className="text-xl font-bold tracking-tight text-navy md:text-2xl">
              {label}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group flex flex-col rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10 text-navy">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy">{area.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">
                    {area.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-gold group-hover:underline">
                    Learn more
                    <ChevronRight className="ml-0.5 h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
