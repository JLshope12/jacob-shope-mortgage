import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  CheckCircle,
  ChevronRight,
  Heart,
  Home as HomeIcon,
  Landmark,
  MapPin,
  Medal,
  RefreshCw,
  Shield,
  Sprout,
} from "lucide-react";

const LOAN_PROGRAMS = [
  { slug: "conventional", title: "Conventional", description: "Flexible financing for qualified buyers.", icon: HomeIcon },
  { slug: "fha", title: "FHA", description: "Lower down payment and flexible credit options.", icon: Landmark },
  { slug: "va", title: "VA", description: "Powerful benefits for eligible veterans and service members.", icon: Medal },
  { slug: "usda", title: "USDA", description: "100% financing in eligible rural and suburban areas.", icon: Sprout },
  { slug: "jumbo", title: "Jumbo", description: "Options for homes above conforming loan limits.", icon: Banknote },
  { slug: "refinance", title: "Refinance", description: "Review your rate, term, or equity options.", icon: RefreshCw },
  { slug: "first-time-buyer", title: "First-Time Buyer", description: "A clear plan for your first purchase.", icon: Heart },
] as const;

const SERVICE_AREAS = [
  ["charlotte", "Charlotte"],
  ["huntersville", "Huntersville"],
  ["cornelius", "Cornelius"],
  ["davidson", "Davidson"],
  ["lake-norman", "Lake Norman"],
  ["ballantyne", "Ballantyne"],
  ["charlotte-metro", "Charlotte Metro"],
] as const;

const FAQS = [
  {
    question: "What does a mortgage broker do?",
    answer:
      "A mortgage broker helps borrowers compare loan options from multiple lending sources instead of being limited to one bank's products. The goal is to match the loan structure to the borrower, property, and transaction.",
  },
  {
    question: "How much down payment do I need to buy a home in Charlotte?",
    answer:
      "It depends on the loan program. Some conventional options can start around 3% down, FHA commonly starts at 3.5%, and eligible VA and USDA borrowers may qualify for zero-down financing. Down payment assistance may also be available depending on the borrower and program.",
  },
  {
    question: "Can I get pre-approved before I find a house?",
    answer:
      "Yes. In most cases that is the better order. A pre-approval helps you understand your price range, expected payment, and cash needed before you start writing offers.",
  },
  {
    question: "Do you work with VA loans?",
    answer:
      "Yes. I work with eligible veterans and service members on VA purchase and refinance options, including more complex scenarios that may need a broker with access to multiple lenders.",
  },
  {
    question: "Do you finance investment properties?",
    answer:
      "Yes. Depending on the scenario, options may include conventional investment loans, DSCR financing, HELOC or cash-out strategies, bridge financing, and investor construction loans.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "I serve Charlotte, Huntersville, Cornelius, Davidson, Lake Norman, Mooresville, and the surrounding Charlotte region, plus borrowers in other states where I am licensed.",
  },
] as const;

export const metadata = {
  title: "Charlotte Mortgage Broker | Jacob Shope | NMLS# 2090979",
  description:
    "Jacob Shope is a local Charlotte mortgage broker and Mortgage Loan Officer with Mpire Financial, serving Charlotte and Lake Norman with FHA, VA, conventional, first-time buyer, investor, construction, and refinance options.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jacob Shope",
    url: "https://jacobshopemortgage.com",
    jobTitle: "Mortgage Loan Officer",
    worksFor: {
      "@type": "Organization",
      name: "Mpire Financial",
    },
    knowsAbout: [
      "Mortgage lending",
      "Charlotte mortgages",
      "Lake Norman mortgages",
      "FHA loans",
      "VA loans",
      "Conventional loans",
      "Down payment assistance",
      "Investment property financing",
      "Construction loans",
      "Mortgage refinancing",
    ],
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Jacob Shope Mortgage",
    url: "https://jacobshopemortgage.com",
    areaServed: ["Charlotte, NC", "Lake Norman, NC", "Huntersville, NC", "Cornelius, NC", "Davidson, NC", "Mooresville, NC"],
    telephone: "+1-704-614-5340",
    email: "shope@mpirefi.com",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-offwhite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-semibold text-gold">Local mortgage guidance from someone who lives here</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
              Charlotte Mortgage Broker for Homebuyers, Homeowners and Investors
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal md:text-lg">
              I&apos;m Jacob Shope, a local Charlotte mortgage broker, Charlotte Fire Department captain,
              and Mortgage Loan Officer with Mpire Financial. I help homebuyers, veterans, first-time buyers,
              homeowners, and real estate investors compare mortgage options and build a financing plan that fits
              the property and the goal.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90">
                Talk Through Your Options
              </Link>
              <Link href="/loan-programs" className="rounded-lg border-2 border-navy px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-white">
                Explore Loan Options
              </Link>
            </div>
          </div>
          <Image
            src="/images/DSC_0084.jpg"
            alt="Jacob Shope, Charlotte mortgage broker"
            width={1800}
            height={1200}
            className="h-auto w-full rounded-2xl shadow-lg"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 text-center sm:grid-cols-2 md:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Shield, title: "Charlotte Fire Captain", detail: "Calm guidance under pressure" },
            { icon: MapPin, title: "Charlotte and Lake Norman", detail: "Local market knowledge" },
            { icon: CheckCircle, title: "Mortgage Broker", detail: "More than one lending option" },
            { icon: HomeIcon, title: "NMLS# 2090979", detail: "Clear, accountable guidance" },
          ].map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex flex-col items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 font-semibold text-navy">{title}</p>
              <p className="mt-1 text-sm text-charcoal/75">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <p className="font-semibold text-gold">Why use a broker?</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">Why work with a mortgage broker in Charlotte?</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-charcoal md:text-lg">
            <p>
              A mortgage broker is not limited to one bank&apos;s loan menu. I can compare options across multiple lending sources and help match the loan structure to the borrower, property, and transaction.
            </p>
            <p>
              That matters when you&apos;re dealing with anything from a first home or VA purchase to investment property, new construction, jumbo financing, or a scenario that does not fit neatly into a standard box.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-sm font-medium">
              <Link href="/loan-programs/fha" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">FHA Loans</Link>
              <Link href="/loan-programs/va" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">VA Loans</Link>
              <Link href="/loan-programs/conventional" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Conventional</Link>
              <Link href="/loan-programs/first-time-buyer" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">First-Time Buyers</Link>
              <Link href="/down-payment-assistance-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Down Payment Assistance</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">Loan options without the runaround</h2>
          <p className="mt-4 max-w-2xl text-charcoal md:text-lg">
            The right loan depends on the property, your goals, and how you want the payment structured.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {LOAN_PROGRAMS.map(({ slug, title, description, icon: Icon }) => (
              <Link key={slug} href={`/loan-programs/${slug}`} className="group flex flex-col rounded-xl bg-offwhite p-6 shadow-sm ring-1 ring-navy/5 hover:shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10 text-navy"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-semibold text-navy">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">{description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-gold">Learn More <ChevronRight className="ml-1 h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">Mortgage help across the Charlotte area</h2>
          <p className="mt-4 max-w-2xl text-charcoal md:text-lg">
            I work throughout the Charlotte metro and Lake Norman, with local guidance for each market.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {SERVICE_AREAS.map(([slug, name]) => (
              <Link key={slug} href={`/service-areas/${slug}`} className="rounded-full border border-navy/20 px-4 py-2 text-sm font-medium text-navy hover:border-gold hover:text-gold">
                {name}
              </Link>
            ))}
          </div>
          <Link href="/service-areas" className="mt-7 inline-flex items-center font-medium text-gold hover:underline">
            View all service areas <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <p className="font-semibold text-gold">Common mortgage questions</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">Straight answers before you apply</h2>
          <div className="mt-10 divide-y divide-charcoal/10 rounded-2xl border border-charcoal/10 bg-offwhite px-6 md:px-8">
            {FAQS.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="text-lg font-semibold text-navy">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-charcoal">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <Image
            src="/images/dress-uniform.jpg"
            alt="Jacob Shope in his Charlotte Fire Department captain dress uniform"
            width={935}
            height={1247}
            className="h-auto w-full rounded-2xl shadow-lg"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div>
            <p className="font-semibold text-gold">Why I do this</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">Same commitment, different kind of call</h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
              Fire service taught me to listen, stay steady, and solve the problem in front of me.
              That is how I approach mortgages too. You will know what your options are, why they
              matter, and what happens next.
            </p>
            <Link href="/about" className="mt-7 inline-flex rounded-lg bg-navy px-6 py-3 font-semibold text-white hover:bg-slate">Read My Story</Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Have a property or payment in mind?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85 md:text-lg">
            Send me the purchase price and down payment you are considering. I&apos;ll help you see the numbers clearly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90">Get a Payment Breakdown</Link>
            <Link href="/book" className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-navy">Book a Conversation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
