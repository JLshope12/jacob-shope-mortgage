import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  MapPin,
  Star,
  Home as HomeIcon,
  Landmark,
  Medal,
  Sprout,
  Banknote,
  RefreshCw,
  Heart,
  ChevronRight,
} from "lucide-react";

const LOAN_PROGRAMS = [
  {
    slug: "conventional",
    title: "Conventional",
    description: "Flexible terms and competitive rates for qualified buyers.",
    icon: HomeIcon,
  },
  {
    slug: "fha",
    title: "FHA",
    description: "Lower down payment and credit requirements for first-time buyers.",
    icon: Landmark,
  },
  {
    slug: "va",
    title: "VA",
    description: "Zero down payment and no PMI for eligible veterans and service members.",
    icon: Medal,
  },
  {
    slug: "usda",
    title: "USDA",
    description: "100% financing for homes in eligible rural and suburban areas.",
    icon: Sprout,
  },
  {
    slug: "jumbo",
    title: "Jumbo",
    description: "Financing for higher-priced homes beyond conforming limits.",
    icon: Banknote,
  },
  {
    slug: "refinance",
    title: "Refinance",
    description: "Lower your rate, shorten your term, or tap into your equity.",
    icon: RefreshCw,
  },
  {
    slug: "first-time-buyer",
    title: "First-Time Buyer",
    description: "Programs and guidance tailored to your first home purchase.",
    icon: Heart,
  },
] as const;

export default function Home() {
  return (
    <div className="bg-offwhite">
      {/* Section 1 - Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
              Serving Charlotte. Building Futures.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal md:text-lg">
              I&apos;m Jacob Shope, a captain with the Charlotte Fire Department and a licensed
              mortgage loan officer. I&apos;ve built my career around one thing: showing up for my
              community. Whether I&apos;m leading my crew on a call or helping a family find the
              right path to homeownership, I bring the same dedication to everything I do.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/loan-programs"
                className="inline-flex rounded-lg border-2 border-navy px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Explore Loan Options
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/headshot-primary.jpg"
              alt="Jacob Shope - Charlotte Mortgage Loan Officer"
              width={500}
              height={600}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Trust Signals Bar */}
      <section className="border-y border-navy/10 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Shield className="h-6 w-6" />
              </div>
              <p className="mt-3 font-semibold text-navy">Captain, Charlotte Fire Dept.</p>
              <p className="mt-1 text-sm text-charcoal/80">Serving our community</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <CheckCircle className="h-6 w-6" />
              </div>
              <p className="mt-3 font-semibold text-navy">NMLS# 2090979</p>
              <p className="mt-1 text-sm text-charcoal/80">Licensed & verified</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="mt-3 font-semibold text-navy">Charlotte Metro & NC Statewide</p>
              <p className="mt-1 text-sm text-charcoal/80">Where you need me</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Star className="h-6 w-6" />
              </div>
              <p className="mt-3 font-semibold text-navy">5-Star Rated</p>
              <p className="mt-1 text-sm text-charcoal/80">Trusted by local families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Loan Programs */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Find the Right Loan for You
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {LOAN_PROGRAMS.map(({ slug, title, description, icon: Icon }) => (
              <Link
                key={slug}
                href={`/loan-programs/${slug}`}
                className="group flex flex-col rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10 text-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-navy">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">{description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-gold group-hover:underline">
                  Learn More
                  <ChevronRight className="ml-0.5 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Serving Charlotte, North Carolina, and Beyond
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal md:text-lg">
            I proudly serve homebuyers across the Charlotte metro, throughout North Carolina and
            South Carolina, and in most states nationwide.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/service-areas/charlotte"
              className="rounded-lg border-2 border-navy/20 px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy/5"
            >
              Charlotte
            </Link>
            <Link
              href="/service-areas/huntersville"
              className="rounded-lg border-2 border-navy/20 px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy/5"
            >
              Huntersville
            </Link>
            <Link
              href="/service-areas/cornelius"
              className="rounded-lg border-2 border-navy/20 px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy/5"
            >
              Cornelius
            </Link>
            <Link
              href="/service-areas/lake-norman"
              className="rounded-lg border-2 border-navy/20 px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy/5"
            >
              Lake Norman
            </Link>
            <Link
              href="/service-areas/mooresville"
              className="rounded-lg border-2 border-navy/20 px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy/5"
            >
              Mooresville
            </Link>
          </div>
          <p className="mt-6">
            <Link
              href="/service-areas"
              className="inline-flex items-center font-medium text-gold hover:underline"
            >
              View All Service Areas
              <ChevronRight className="ml-1 h-4 w-5" />
            </Link>
          </p>
        </div>
      </section>

      {/* Section 4 - Why Work With Me */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Why Charlotte Families Trust Jacob Shope
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-navy md:text-2xl">Community First</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal">
                I serve Charlotte as both a fire captain and a loan officer. The same commitment to
                showing up for neighbors and families drives everything I do, whether on a call or
                at the closing table.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy md:text-2xl">
                Wealth Through Homeownership
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal">
                I believe in real estate as a tool for building generational wealth. I help
                families choose the right loan and plan so that homeownership works for their
                long-term goals, not just today.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy md:text-2xl">
                Guidance You Can Trust
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal">
                Transparent process, no hidden fees, and honest advice. I explain your options in
                plain language so you can make confident decisions about one of the biggest
                steps you&apos;ll take.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Jacob */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-1 flex justify-center lg:justify-start">
              <Image
                src="/images/dress-uniform.jpg"
                alt="Jacob Shope in Charlotte Fire Department dress uniform"
                width={500}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-2">
              <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
                Meet Your Loan Officer
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
                I&apos;m Captain Jacob Shope, a Charlotte Fire Department captain and licensed
                mortgage loan officer. I&apos;ve spent my career serving this community, and I
                bring that same dedication to helping families build wealth through homeownership.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
              >
                Read My Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Mortgage Calculator Preview */}
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            What Can You Afford?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Use our calculators to estimate your monthly payment and see how much home you can
            afford.
          </p>
          <Link
            href="/calculators"
            className="mt-8 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
          >
            Try Our Full Calculator Suite
          </Link>
        </div>
      </section>

      {/* Section 6 - Testimonials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            What My Clients Say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "Jacob made our first home purchase straightforward and stress-free. He explained every step and got us to closing on time.",
                name: "Sarah M.",
                loanType: "Conventional",
              },
              {
                quote:
                  "As a veteran, the VA loan process can be confusing. Jacob walked us through it and we couldn't be happier with our new home.",
                name: "James T.",
                loanType: "VA Loan",
              },
              {
                quote:
                  "Refinancing with Jacob saved us money every month. Professional, responsive, and genuinely cared about our situation.",
                name: "Jennifer L.",
                loanType: "Refinance",
              },
            ].map(({ quote, name, loanType }) => (
              <div
                key={name}
                className="flex flex-col rounded-xl bg-white p-6 shadow-md md:p-8"
              >
                <div className="flex gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-charcoal">&quot;{quote}&quot;</p>
                <p className="mt-4 font-medium text-navy">{name}</p>
                <p className="text-sm text-charcoal/80">{loanType}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Blog Preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Mortgage Tips & Charlotte Market Insights
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { title: "Step-by-Step Guide to Buying a Home in Charlotte", excerpt: "From pre-approval to closing day. What to expect when buying in the Charlotte metro.", date: "Mar 2026" },
              { title: "First-Time Buyer Programs in North Carolina", excerpt: "NCHFA and other programs that can help you get into your first home.", date: "Feb 2026" },
              { title: "When Does Refinancing Make Sense?", excerpt: "How to decide if refinancing is right for you and how to run the numbers.", date: "Jan 2026" },
            ].map(({ title, excerpt, date }) => (
              <Link
                key={title}
                href="/blog"
                className="group block rounded-xl bg-offwhite p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-sm text-charcoal/70">{date}</p>
                <h3 className="mt-2 font-semibold text-navy group-hover:text-gold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{excerpt}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-gold">
                  Read More
                  <ChevronRight className="ml-0.5 h-4 w-5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center font-medium text-gold hover:underline"
            >
              View All Posts
              <ChevronRight className="ml-1 h-4 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8 - Final CTA */}
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Whether you&apos;re buying your first home or refinancing, I&apos;m here to help.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/apply"
              className="inline-flex rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Apply Now
            </Link>
          </div>
          <p className="mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center text-white/90 hover:text-gold"
            >
              Have questions? Check our FAQ
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
