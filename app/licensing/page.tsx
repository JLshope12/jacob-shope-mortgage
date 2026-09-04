import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = { title: "Licensing and Disclosures", alternates: { canonical: "/licensing" } };

export default function LicensingPage() {
  return <LegalPage title="Licensing and Disclosures" updated="September 3, 2026" sections={[
    { title: "Licensing information", content: <><p>Jacob Shope, Mortgage Loan Officer, NMLS# 2090979.</p><p>Mpire Financial LLC, NMLS# 2108504. 189 S Orange Ave #2020, Orlando, FL 32801.</p></> },
    { title: "Consumer access", content: <p>Verify licensing information through <a className="font-medium text-gold underline" href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer">NMLS Consumer Access</a>.</p> },
    { title: "General disclosure", content: <p>All loan programs, rates, terms, and conditions are subject to change without notice. Other restrictions and limitations may apply. This is not a commitment to lend or extend credit. All loans are subject to credit approval. Equal Housing Opportunity.</p> },
  ]} />;
}
