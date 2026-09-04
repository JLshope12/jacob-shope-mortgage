import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Refinance Calculator",
  description: "Compare an existing mortgage payment with a possible refinance and estimate the break-even period.",
  alternates: { canonical: "/calculators/refinance" },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
