import Link from "next/link";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/loan-programs", label: "Loan Programs" },
  { href: "/calculators", label: "Calculators" },
  { href: "/rates", label: "Rates" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/service-areas", label: "Service Areas" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">Jacob Shope</p>
            <p className="mt-1 text-sm text-white/80">Serving Charlotte. Building Futures.</p>
            <p className="mt-2 text-sm text-white/70">
              Mortgage Loan Officer · NMLS# 2090979 · Mpire Financial
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/80 transition-colors hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a href="tel:+17046145340" className="hover:text-gold">
                  (704) 614-5340
                </a>
              </li>
              <li>
                <a href="mailto:shope@mpirefi.com" className="hover:text-gold">
                  shope@mpirefi.com
                </a>
              </li>
              <li>Charlotte, NC</li>
            </ul>
          </div>
        </div>

        {/* Compliance bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/20 pt-8 text-center">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Jacob Shope | NMLS# 2090979 | Mpire Financial NMLS# 2090979
            {" · "}
            <span className="inline-flex items-center gap-1">
              Equal Housing Lender
              <span
                className="inline-block h-4 w-4 rounded bg-white/20"
                title="Equal Housing Lender"
                aria-hidden
              />
            </span>
          </p>
          <a
            href="https://www.nmlsconsumeraccess.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gold underline hover:text-gold/90"
          >
            NMLS Consumer Access
          </a>
        </div>
      </div>
    </footer>
  );
}
