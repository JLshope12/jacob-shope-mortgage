import Link from "next/link";
import { Calculator, Home, RefreshCw, ListOrdered, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Mortgage Calculators | Jacob Shope",
  description:
    "Free mortgage calculators: payment, affordability, refinance savings, and amortization schedule. Estimate your monthly payment and see how much home you can afford.",
};

const CALCULATORS = [
  {
    href: "/calculators/payment",
    title: "Payment Calculator",
    description: "Estimate your monthly mortgage payment",
    icon: Calculator,
  },
  {
    href: "/calculators/affordability",
    title: "Affordability Calculator",
    description: "Find out how much home you can afford",
    icon: Home,
  },
  {
    href: "/calculators/refinance",
    title: "Refinance Calculator",
    description: "See how much you could save by refinancing",
    icon: RefreshCw,
  },
  {
    href: "/calculators/amortization",
    title: "Amortization Schedule",
    description: "View your full payment schedule",
    icon: ListOrdered,
  },
] as const;

export default function CalculatorsPage() {
  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Mortgage Calculators
        </h1>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CALCULATORS.map(({ href, title, description, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-navy">{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">
                {description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-gold group-hover:underline">
                Use Calculator
                <ChevronRight className="ml-0.5 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
