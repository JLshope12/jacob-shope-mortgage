import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Real Estate Rundown",
  description:
    "Subscribe to Jacob Shope's Sunday Real Estate Rundown for Lake Norman rates, market context, and practical Realtor talking points.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <div className="bg-offwhite">
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="font-semibold text-gold">A Sunday preview for the week ahead</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">The Real Estate Rundown</h1>
          <p className="mt-6 text-lg leading-relaxed text-charcoal">
            A quick weekly email for Charlotte and Lake Norman Realtors. I pull together what
            happened with rates, the latest available local numbers, and the conversations worth
            having with buyers and sellers in the week ahead.
          </p>
          <Link href="#newsletter-signup" className="mt-8 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90">
            Subscribe to the Rundown
          </Link>
        </div>
        <Image src="/images/DSC_0088.jpg" alt="Jacob Shope, host of The Real Estate Rundown" width={1800} height={1200} className="h-auto w-full rounded-2xl shadow-lg" sizes="(max-width: 1024px) 100vw, 55vw" priority />
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-3xl font-bold text-navy">What you will get each Sunday</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["What I’m watching", "A plain-language look at mortgage rates and the week ahead."],
              ["Around Lake Norman", "The latest available housing numbers with the dates clearly shown."],
              ["What to say", "Simple talking points you can use with buyers and sellers."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-xl bg-offwhite p-6 ring-1 ring-navy/5">
                <h3 className="font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-charcoal">
            It is designed to take about three minutes to read and arrives Sunday at 7:00 PM Eastern.
          </p>
        </div>
      </section>
    </div>
  );
}
