import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Payment Calculator | Jacob Shope",
  description:
    "Estimate your monthly mortgage payment with our free calculator. Home price, down payment, rate, taxes, insurance, and HOA. Charlotte, NC.",
};

export default function PaymentCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
