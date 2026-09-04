import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Jacob Shope | Charlotte Mortgage Broker & Loan Officer",
  description:
    "Meet Jacob Shope, a Charlotte-area mortgage broker and Mortgage Loan Officer with Mpire Financial, serving Charlotte, Huntersville, Lake Norman, and surrounding communities. NMLS# 2090979.",
  alternates: { canonical: "/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://jacobshopemortgage.com/#jacob-shope",
  name: "Jacob Shope",
  url: "https://jacobshopemortgage.com/about",
  image: "https://jacobshopemortgage.com/images/DSC_0084.jpg",
  jobTitle: "Mortgage Loan Officer",
  identifier: "NMLS 2090979",
  email: "shope@mpirefi.com",
  telephone: "+1-704-614-5340",
  worksFor: {
    "@type": "Organization",
    name: "Mpire Financial LLC",
  },
  areaServed: [
    "Charlotte, North Carolina",
    "Huntersville, North Carolina",
    "Cornelius, North Carolina",
    "Davidson, North Carolina",
    "Lake Norman, North Carolina",
    "Mooresville, North Carolina",
  ],
  knowsAbout: [
    "Mortgages",
    "Mortgage brokerage",
    "Home financing",
    "First-time homebuyer financing",
    "VA loans",
    "FHA loans",
    "Conventional loans",
    "Investment property financing",
    "Construction loans",
    "Refinancing",
    "Mortgage qualification",
    "Mortgage rates",
  ],
  sameAs: ["https://www.instagram.com/jlshopeloans/"],
};

export default function AboutPage() {
  return (
    <div className="bg-offwhite">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="font-semibold text-gold">Charlotte mortgage guidance with a local connection</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Jacob Shope, Charlotte Mortgage Broker
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal">
            I&apos;m Jacob Shope, a Mortgage Loan Officer with Mpire Financial and a Charlotte Fire
            Department captain. I help homebuyers, homeowners, veterans, first-time buyers, and
            real estate investors understand their mortgage options and build a financing plan
            around the property and the goal.
          </p>
          <p className="mt-4 font-medium text-charcoal">
            Mortgage Loan Officer · Mpire Financial · NMLS# 2090979
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">
              Talk With Jacob
            </Link>
            <Link href="/mortgage-guides" className="rounded-lg border border-navy/20 px-5 py-3 font-semibold text-navy hover:border-gold hover:text-gold">
              Read Mortgage Guides
            </Link>
          </div>
        </div>
        <Image
          src="/images/family-field.jpg"
          alt="Jacob Shope with his wife Christine and their sons"
          width={883}
          height={1294}
          className="h-auto w-full rounded-2xl shadow-lg"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="space-y-5 text-base leading-relaxed text-charcoal md:text-lg">
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">A mortgage resource for Charlotte and Lake Norman</h2>
            <p>
              My goal is to be the person clients and Realtors can call when a mortgage question
              comes up. That includes straightforward purchases as well as VA financing, FHA and
              conventional loans, first-time buyer scenarios, investment properties, construction,
              refinancing, and files that need a little more problem-solving.
            </p>
            <p>
              I work throughout Charlotte, Huntersville, Cornelius, Davidson, Lake Norman,
              Mooresville, and the surrounding region. The website is built to answer real mortgage
              questions clearly, so buyers can understand the options before they make a decision.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-base font-medium text-gold">
              <Link href="/loan-programs/va" className="hover:underline">VA Loans</Link>
              <Link href="/loan-programs/fha" className="hover:underline">FHA Loans</Link>
              <Link href="/loan-programs/conventional" className="hover:underline">Conventional Loans</Link>
              <Link href="/loan-programs/first-time-buyer" className="hover:underline">First-Time Buyers</Link>
              <Link href="/calculators" className="hover:underline">Mortgage Calculators</Link>
              <Link href="/faq" className="hover:underline">Mortgage FAQs</Link>
            </div>
          </div>
          <Image
            src="/images/DSC_0156.jpg"
            alt="Jacob Shope's Charlotte Fire captain helmet"
            width={1800}
            height={1200}
            className="h-auto w-full rounded-2xl shadow-lg"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Image
              src="/images/family-station.jpg"
              alt="Jacob Shope with his wife Christine and their son at the fire station"
              width={935}
              height={1247}
              className="h-auto w-full rounded-2xl shadow-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
            />
            <Image
              src="/images/couple-sunset.jpg"
              alt="Jacob and Christine Shope"
              width={930}
              height={1247}
              className="h-auto w-full rounded-2xl shadow-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">Local to Huntersville. Serving the Charlotte region.</h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
              My wife Christine and I are raising our two sons here. I understand why the school,
              commute, neighborhood, monthly payment, and long-term plan all matter at the same
              time. Being local is not a tagline for me. It is why I care about getting the details right.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/service-areas/charlotte" className="font-medium text-gold hover:underline">Charlotte</Link>
              <Link href="/service-areas/huntersville" className="font-medium text-gold hover:underline">Huntersville</Link>
              <Link href="/service-areas/lake-norman" className="font-medium text-gold hover:underline">Lake Norman</Link>
              <Link href="/service-areas/davidson" className="font-medium text-gold hover:underline">Davidson</Link>
              <Link href="/service-areas/cornelius" className="font-medium text-gold hover:underline">Cornelius</Link>
            </div>
            <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90">Tell Me What You&apos;re Planning</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
