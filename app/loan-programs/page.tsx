import React from "react";
import Link from "next/link";
import {
  Home as HomeIcon,
  Landmark,
  Medal,
  Sprout,
  Banknote,
  RefreshCw,
  Heart,
  ChevronRight,
} from "lucide-react";
import { LOAN_PROGRAMS } from "@/data/loan-programs";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  conventional: HomeIcon,
  fha: Landmark,
  va: Medal,
  usda: Sprout,
  jumbo: Banknote,
  refinance: RefreshCw,
  "first-time-buyer": Heart,
};

export const metadata = {
  title: "Loan Programs | Jacob Shope | Charlotte Mortgage",
  description:
    "Explore conventional, FHA, VA, USDA, jumbo, refinance, and first-time buyer programs in Charlotte, NC. Find the right loan for your situation.",
};

export default function LoanProgramsHubPage() {
  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Loan Programs
        </h1>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LOAN_PROGRAMS.map((program) => {
            const Icon = ICONS[program.slug] ?? HomeIcon;
            return (
              <Link
                key={program.slug}
                href={`/loan-programs/${program.slug}`}
                className="group flex flex-col rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10 text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 font-semibold text-navy">{program.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">
                  {program.description.slice(0, 100)}…
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-gold group-hover:underline">
                  Learn More
                  <ChevronRight className="ml-0.5 h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
