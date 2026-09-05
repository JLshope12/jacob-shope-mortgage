import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata = {
  title: "Jacob Shope Licensing | NMLS# 2090979 | Mpire Financial",
  description:
    "Licensing and disclosure information for Jacob Shope, Mortgage Loan Officer NMLS# 2090979 with Mpire Financial LLC, NMLS# 2108504.",
  alternates: { canonical: "/licensing" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://jacobshopemortgage.com/licensing#webpage",
  url: "https://jacobshopemortgage.com/licensing",
  name: "Jacob Shope Licensing and Disclosures",
  about: { "@id": "https://jacobshopemortgage.com/#jacob-shope" },
  publisher: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
  isPartOf: { "@id": "https://jacobshopemortgage.com/#website" },
};

export default function LicensingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LegalPage
        title="Licensing and Disclosures"
        updated="September 5, 2026"
        sections={[
          {
            title: "Jacob Shope",
            content: (
              <>
                <p>Jacob Shope, Mortgage Loan Officer, NMLS# 2090979.</p>
                <p>
                  Mortgage guidance and educational resources on this site are associated with Jacob Shope and his work with Mpire Financial LLC.
                </p>
                <p>
                  <Link className="font-medium text-gold underline" href="/about" rel="author">
                    About Jacob Shope
                  </Link>
                </p>
              </>
            ),
          },
          {
            title: "Mpire Financial LLC",
            content: (
              <>
                <p>Mpire Financial LLC, NMLS# 2108504.</p>
                <p>189 S Orange Ave #2020, Orlando, FL 32801.</p>
              </>
            ),
          },
          {
            title: "Consumer verification",
            content: (
              <p>
                Verify licensing information through{" "}
                <a
                  className="font-medium text-gold underline"
                  href="https://www.nmlsconsumeraccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NMLS Consumer Access
                </a>
                .
              </p>
            ),
          },
          {
            title: "Official Jacob Shope profiles",
            content: (
              <p>
                Website: jacobshopemortgage.com. Social profiles: {" "}
                <a
                  className="font-medium text-gold underline"
                  href="https://www.instagram.com/jlshopeloans/"
                  target="_blank"
                  rel="noopener noreferrer me"
                >
                  Instagram @jlshopeloans
                </a>{" "}
                and{" "}
                <a
                  className="font-medium text-gold underline"
                  href="https://www.facebook.com/jacob.shope.33"
                  target="_blank"
                  rel="noopener noreferrer me"
                >
                  Facebook
                </a>
                .
              </p>
            ),
          },
          {
            title: "General disclosure",
            content: (
              <p>
                All loan programs, rates, terms, and conditions are subject to change without notice. Other restrictions and limitations may apply. This is not a commitment to lend or extend credit. All loans are subject to credit approval. Equal Housing Opportunity.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
