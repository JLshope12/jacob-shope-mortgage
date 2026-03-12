export const metadata = {
  title: "Book a Free Mortgage Consultation | Jacob Shope",
  description:
    "Schedule a free 30-minute mortgage consultation with Jacob Shope, Charlotte NC loan officer. No pressure, no obligation.",
};

export default function BookPage() {
  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Book a Free Consultation
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal md:text-lg">
          Schedule a free 30-minute consultation. We&apos;ll talk through your
          goals, review your options, and I&apos;ll give you a clear picture of
          what you can afford and what your next steps are. No pressure, no
          obligation.
        </p>
        <div className="mt-10 w-full overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-md">
          <iframe
            src="https://cal.com/JacobShope"
            title="Book a consultation with Jacob Shope"
            className="h-[700px] w-full min-h-[600px] border-0"
            style={{ minHeight: "700px" }}
          />
        </div>
      </div>
    </div>
  );
}
