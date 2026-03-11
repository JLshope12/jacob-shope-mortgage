import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Jacob Shope | Captain, Charlotte Fire Dept. & Mortgage Loan Officer",
  description:
    "Captain Jacob Shope serves Charlotte as a firefighter and mortgage loan officer. Same dedication, different uniform. NMLS# 2090979.",
};

export default function AboutPage() {
  return (
    <div className="bg-offwhite">
      {/* Section 1 - Hero Banner */}
      <section className="relative min-h-[500px] w-full md:min-h-[600px]">
        <Image
          src="/images/family-field.jpg"
          alt="Jacob Shope and family in a field"
          fill
          className="object-cover object-[center_50%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" aria-hidden />
        <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-4 py-20 text-center md:min-h-[600px] md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Captain Jacob Shope
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/95 md:text-xl">
            Charlotte Fire Department Captain · Mortgage Loan Officer · NMLS# 2090979
          </p>
        </div>
      </section>

      {/* Section 2 - My Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Same Dedication. Different Uniform.
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_400px] lg:items-start">
            <div className="space-y-6 text-base leading-relaxed text-charcoal md:text-lg">
              <p>
                I joined the Charlotte Fire Department because I wanted to be part of something
                bigger than myself, to show up when it matters and to protect the people and
                places that make this city home. Over the years I&apos;ve had the privilege of
                rising to captain, leading a crew I trust, and serving our community on some of
                its hardest days. That work has never been just a job. It&apos;s a commitment to
                the families and neighborhoods I see every day.
              </p>
              <p>
                When I got into mortgage lending, it wasn&apos;t a pivot away from that mission.
                It was an extension of it. As a firefighter I help keep families safe. As a loan
                officer I help them build something lasting. Homeownership is one of the most
                powerful ways to create stability and wealth for the next generation. I wanted to
                be part of that too: helping people get into the right loan, understand their
                options, and move into a home they can be proud of.
              </p>
              <p>
                My mission is simple. I believe in using real estate as a tool for generational
                wealth, and I believe in serving Charlotte in both roles, as a captain and as a
                loan officer, with the same integrity and care. Whether I&apos;m on a call or at
                the closing table, I&apos;m here for this community.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/dress-uniform.jpg"
                alt="Jacob Shope in Charlotte Fire Department dress uniform"
                width={500}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Family */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
                At Home in Huntersville
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
                I live in the Huntersville area with my wife Christine and our two sons. We&apos;re
                not just working in this community. We&apos;re raising our family here. I know
                what it means to want a great school district, a safe neighborhood, and a place
                where your people can gather. That&apos;s the same thing my clients are looking
                for. Being a local isn&apos;t a tagline for me; it&apos;s why I care about getting
                the details right and helping families find a home that fits their life.
              </p>
            </div>
            <div className="order-1 flex justify-center lg:order-2">
              <Image
                src="/images/couple-sunset.jpg"
                alt="Jacob and Christine Shope at sunset"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Credentials */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Credentials & Trust
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <p className="text-sm font-medium text-charcoal/80">NMLS</p>
              <p className="mt-1 font-semibold text-navy">#2090979</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <p className="text-sm font-medium text-charcoal/80">Licensed In</p>
              <p className="mt-1 font-semibold text-navy">North Carolina</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <p className="text-sm font-medium text-charcoal/80">Company</p>
              <p className="mt-1 font-semibold text-navy">Mpire Financial</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <p className="text-sm font-medium text-charcoal/80">Fire Service</p>
              <p className="mt-1 font-semibold text-navy">Captain, Charlotte Fire Department</p>
            </div>
          </div>
          <p className="mt-8 text-center">
            <a
              href="https://www.nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-medium hover:underline"
            >
              NMLS Consumer Access →
            </a>
          </p>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section className="bg-navy py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Let&apos;s Talk About Your Goals
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Whether you&apos;re buying your first home, refinancing, or just exploring options,
            I&apos;m here to help.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
