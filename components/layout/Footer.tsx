import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Jacob" },
  { href: "/mortgage-guides", label: "Mortgage Guides" },
  { href: "/blog", label: "Mortgage & Real Estate Insights" },
  { href: "/loan-programs", label: "Loan Programs" },
  { href: "/calculators", label: "Calculators" },
  { href: "/rates", label: "Rates" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/service-areas", label: "Service Areas" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">Jacob Shope</p>
            <p className="mt-1 text-sm text-white/80">Charlotte Mortgage Broker | Charlotte &amp; Lake Norman</p>
            <p className="mt-2 text-sm text-white/70">
              Mortgage Loan Officer · NMLS# 2090979 · Mpire Financial
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              <a
                href="https://www.instagram.com/jlshopeloans/"
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex text-sm font-medium text-gold hover:underline"
              >
                Instagram @jlshopeloans
              </a>
              <a
                href="https://www.facebook.com/jacob.shope.33"
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex text-sm font-medium text-gold hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/80 transition-colors hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="tel:+17046145340" className="hover:text-gold">(704) 614-5340</a></li>
              <li><a href="mailto:shope@mpirefi.com" className="hover:text-gold">shope@mpirefi.com</a></li>
              <li>Charlotte, NC</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/20 pt-8 text-center text-xs text-white/80">
          <div className="flex items-center justify-center gap-4">
            <Image src="/images/equal-housing-lender.png.png" alt="Equal Housing Lender" width={70} height={70} />
            <Image src="/images/equal-housing-opportunity.png.png" alt="Equal Housing Opportunity" width={70} height={70} />
          </div>

          <div className="space-y-1">
            <p>Jacob Shope, NMLS# 2090979 | Mpire Financial LLC, NMLS# 2108504</p>
            <p>189 S Orange Ave #2020, Orlando, FL 32801</p>
            <p>
              For licensing information, go to{" "}
              <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2 hover:text-gold">
                www.nmlsconsumeraccess.org
              </a>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[0.7rem] md:text-xs">
            <Link href="/privacy" className="text-white hover:text-gold">Privacy Policy</Link>
            <span className="text-white/50">|</span>
            <Link href="/terms" className="text-white hover:text-gold">Terms of Use</Link>
            <span className="text-white/50">|</span>
            <Link href="/licensing" className="text-white hover:text-gold">Licensing &amp; Disclosures</Link>
            <span className="text-white/50">|</span>
            <Link href="/accessibility" className="text-white hover:text-gold">Accessibility</Link>
            <span className="text-white/50">|</span>
            <a href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">NMLS Consumer Access</a>
          </div>

          <p className="text-[0.65rem] leading-relaxed text-white/70 md:text-[0.7rem]">
            All loan programs, rates, terms, and conditions are subject to change without notice. Not all loan programs are available in all states. Other restrictions and limitations may apply. This is not a commitment to lend or extend credit. All loans are subject to credit approval. Equal Housing Opportunity.
          </p>

          <p className="text-[0.65rem] text-white/60 md:text-[0.7rem]">
            © {new Date().getFullYear()} Jacob Shope | Mpire Financial LLC, NMLS# 2108504. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
