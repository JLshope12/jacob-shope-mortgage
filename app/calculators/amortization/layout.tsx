import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Amortization Calculator",
  description: "See how principal and interest change during the life of a fixed-rate mortgage.",
  alternates: { canonical: "/calculators/amortization" },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
