import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Affordability Calculator",
  description: "Estimate a comfortable home price based on income, debts, down payment, and housing costs.",
  alternates: { canonical: "/calculators/affordability" },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
