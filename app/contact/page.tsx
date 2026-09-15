import { ContactContent } from "./ContactContent";

const origin = "https://jacobshopemortgage.com";
const pageUrl = `${origin}/contact`;
const NMLS_URL = "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/2090979";
const MPIRE_URL = "https://www.mpirefinancialgroup.com/";
const LINKEDIN_URL = "https://www.linkedin.com/in/jacob-shope-9b8972282";
const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jacob+Shope+Mortgage+Broker&query_place_id=ChIJoYVzko0AvIcRA-l3WlYdLW8";

export const metadata = {
  title: "Contact Jacob Shope | Charlotte Mortgage Broker",
  description:
    "Get in touch with Jacob Shope, Charlotte NC mortgage loan officer. Call (704) 614-5340 or fill out the form to get started.",
  alternates: { canonical: "/contact" },
  authors: [{ name: "Jacob Shope", url: "/about" }],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${pageUrl}#contact-page`,
  url: pageUrl,
  name: "Contact Jacob Shope",
  isPartOf: { "@id": `${origin}/#website` },
  about: { "@id": `${origin}/#jacob-shope` },
  mainEntity: { "@id": `${origin}/#jacob-shope` },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactContent />
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Verify who you are working with</p>
          <h2 className="mt-2 text-2xl font-bold text-navy">Jacob Shope · Mpire Financial · NMLS# 2090979</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-charcoal">
            Review Jacob&apos;s current licensing and professional profiles before starting a mortgage conversation.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium">
            <a href={NMLS_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">NMLS Consumer Access</a>
            <a href={MPIRE_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mpire Financial</a>
            <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Business &amp; Reviews</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer me" className="text-gold hover:underline">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
