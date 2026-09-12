import Link from "next/link";

const NMLS_URL = "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/2090979";
const MPIRE_URL = "https://www.mpirefinancialgroup.com/";
const LINKEDIN_URL = "https://www.linkedin.com/in/jacob-shope-9b8972282";
const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jacob+Shope+Mortgage+Broker&query_place_id=ChIJoYVzko0AvIcRA-l3WlYdLW8";

const LOCAL_AREAS = [
  ["Charlotte", "/service-areas/charlotte"],
  ["Huntersville", "/service-areas/huntersville"],
  ["Lake Norman", "/service-areas/lake-norman"],
  ["Cornelius", "/service-areas/cornelius"],
  ["Davidson", "/service-areas/davidson"],
  ["Mooresville", "/service-areas/mooresville"],
] as const;

export function AuthorBox() {
  return (
    <aside className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5" aria-label="About the author">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">About the author</p>
      <h2 className="mt-2 text-xl font-bold text-navy">Jacob Shope</h2>
      <p className="mt-2 text-sm font-medium text-charcoal">
        Charlotte Mortgage Broker · Mortgage Loan Officer · Mpire Financial · NMLS# 2090979
      </p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/85">
        Jacob serves homebuyers, homeowners, veterans, first-time buyers, real estate investors,
        and Realtor partners across Charlotte, Huntersville, Lake Norman, and surrounding communities.
      </p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
        <Link href="/about" rel="author" className="text-gold hover:underline">About Jacob</Link>
        <Link href="/mortgage-guides" className="text-gold hover:underline">Mortgage Guides</Link>
        <Link href="/blog" className="text-gold hover:underline">Mortgage &amp; Real Estate Insights</Link>
        <Link href="/charlotte-home-buying-mortgage-guide" className="text-gold hover:underline">Charlotte Home Buying Guide</Link>
        <a href={NMLS_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Verify NMLS# 2090979</a>
        <a href={MPIRE_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mpire Financial</a>
        <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Business &amp; Reviews</a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer me" className="text-gold hover:underline">LinkedIn</a>
        <a href="https://www.instagram.com/jlshopeloans/" target="_blank" rel="noopener noreferrer me" className="text-gold hover:underline">Instagram</a>
        <a href="https://www.facebook.com/jacob.shope.33" target="_blank" rel="noopener noreferrer me" className="text-gold hover:underline">Facebook</a>
      </div>

      <div className="mt-5 border-t border-charcoal/10 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/65">Local mortgage areas</p>
        <nav className="mt-2 flex flex-wrap gap-x-3 gap-y-2 text-sm" aria-label="Jacob Shope local mortgage service areas">
          {LOCAL_AREAS.map(([label, href]) => (
            <Link key={href} href={href} className="text-navy hover:text-gold hover:underline">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
