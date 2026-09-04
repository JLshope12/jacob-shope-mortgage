import Link from "next/link";

export const metadata = {
  title: "Book a Mortgage Consultation",
  description:
    "Schedule a mortgage conversation with Jacob Shope, a Charlotte and Lake Norman mortgage broker. NMLS# 2090979.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="font-semibold text-gold">No pressure and no obligation</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">Book a conversation</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal">
          Pick a time that works for you. We will talk through your goals, the property, and the
          numbers so you leave knowing what your next step should be.
        </p>
        <a
          href="https://cal.com/JacobShope"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90"
        >
          Open My Calendar
        </a>
        <p className="mt-6 text-sm text-charcoal/75">
          If the calendar does not open, call <a className="font-medium text-navy underline" href="tel:+17046145340">(704) 614-5340</a> or <Link className="font-medium text-navy underline" href="/contact">send me a message</Link>.
        </p>
      </div>
    </div>
  );
}
