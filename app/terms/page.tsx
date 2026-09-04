import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <LegalPage title="Terms of Use" updated="September 3, 2026" sections={[
    { title: "Educational information", content: <p>Website content and calculators are provided for general educational purposes. They are not a loan approval, rate lock, commitment to lend, financial advice, tax advice, or legal advice.</p> },
    { title: "Loan terms", content: <p>Loan programs, rates, costs, eligibility, and terms may change without notice. Not every program is available in every location or to every borrower. A complete application and underwriting review are required before credit approval.</p> },
    { title: "Calculator estimates", content: <p>Calculator results are estimates and may not include every cost. Taxes, insurance, mortgage insurance, association dues, prepaid items, and closing costs can change the actual payment and cash needed.</p> },
    { title: "External links", content: <p>Links to third-party websites are provided for convenience. Jacob Shope and Mpire Financial do not control those websites or guarantee their availability or content.</p> },
  ]} />;
}
