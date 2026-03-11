import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getProgramBySlug, getAllProgramSlugs } from "@/data/loan-programs";
import { ProgramFAQ } from "@/components/loan-programs/ProgramFAQ";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Loan Program | Jacob Shope" };
  return {
    title: `${program.name} Loans in Charlotte, NC | Jacob Shope`,
    description: program.description.slice(0, 155) + "...",
  };
}

export default async function LoanProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return (
    <div className="bg-offwhite">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          {program.name} in Charlotte, NC
        </h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
          {program.description}
        </p>

        {/* Key Benefits */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Key Benefits
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {program.keyBenefits.map((benefit, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl bg-white p-4 shadow-sm md:p-5"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-gold" />
                <span className="text-charcoal">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Requirements */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Requirements
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-charcoal/10 bg-navy/5">
                  <th className="px-4 py-3 text-sm font-semibold text-navy md:px-6">
                    Requirement
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-navy md:px-6">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {program.requirements.map((req, i) => (
                  <tr
                    key={i}
                    className="border-b border-charcoal/5 last:border-0"
                  >
                    <td className="px-4 py-3 text-sm font-medium text-charcoal md:px-6">
                      {req.label}
                    </td>
                    <td className="px-4 py-3 text-sm text-charcoal md:px-6">
                      {req.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
            How It Works
          </h2>
          <ol className="mt-6 space-y-6">
            {program.howItWorks.map((step) => (
              <li
                key={step.step}
                className="flex gap-4 rounded-xl bg-white p-5 shadow-sm md:p-6"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white"
                  aria-hidden
                >
                  {step.step}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 rounded-xl border border-charcoal/10 bg-white p-4 shadow-sm md:p-6">
            <ProgramFAQ faq={program.faq} />
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 text-center">
          <p className="text-lg text-charcoal">
            Ready to see if you qualify? Get in touch for a personalized review.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
          >
            See If You Qualify
          </Link>
        </section>
      </div>
    </div>
  );
}
