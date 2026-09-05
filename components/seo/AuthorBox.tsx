import Link from "next/link";

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
        <a href="https://www.instagram.com/jlshopeloans/" target="_blank" rel="noopener noreferrer me" className="text-gold hover:underline">Instagram</a>
        <a href="https://www.facebook.com/jacob.shope.33" target="_blank" rel="noopener noreferrer me" className="text-gold hover:underline">Facebook</a>
      </div>
    </aside>
  );
}
