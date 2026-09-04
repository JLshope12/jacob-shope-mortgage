import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Jacob Shope",
  description:
    "Meet Jacob Shope, a Charlotte Fire Department captain and local mortgage broker serving Charlotte and Lake Norman. NMLS# 2090979.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-offwhite">
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="font-semibold text-gold">A little about me</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">I&apos;m Jacob Shope</h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal">
            I&apos;m a Charlotte Fire Department captain, a mortgage broker, a husband, and a dad.
            Both of my careers are built around the same thing: being someone people can count on
            when the details matter.
          </p>
          <p className="mt-4 text-charcoal">Mortgage Loan Officer · NMLS# 2090979 · Mpire Financial</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">Same dedication, different uniform</h2>
            <p>
              I joined the Charlotte Fire Department because I wanted to serve the place I call
              home. Over the years I have had the privilege of becoming a captain and leading a
              crew I trust.
            </p>
            <p>
              Mortgage lending became another way to help local families. My job is to slow the
              process down, explain the choices, and build a financing plan that fits the person
              and the property. I do not believe in forcing every borrower into the same box.
            </p>
          </div>
          <Image src="/images/DSC_0156.jpg" alt="Jacob Shope's Charlotte Fire captain helmet" width={1800} height={1200} className="h-auto w-full rounded-2xl shadow-lg" sizes="(max-width: 1024px) 100vw, 45vw" />
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
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">At home in Huntersville</h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
              My wife Christine and I are raising our two sons here. I understand why the school,
              commute, neighborhood, and monthly payment all matter at the same time. Being local
              is not a tagline for me. It is why I care about getting the details right.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90">Tell Me What You&apos;re Planning</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
