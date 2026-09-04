import Link from "next/link";

export const metadata = {
  title: "Start Your Mortgage Application",
  description: "Start a mortgage conversation with Jacob Shope. NMLS# 2090979.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="font-semibold text-gold">Let&apos;s start with the right plan</p>
        <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">Ready to get started?</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal">
          Before you complete a full loan application, send me a few details about what you are
          trying to do. I will make sure you start in the right place and send you the secure next step.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-lg bg-gold px-6 py-3 font-semibold text-white hover:bg-gold/90">Start Here</Link>
          <Link href="/book" className="rounded-lg border-2 border-navy px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-white">Book a Conversation</Link>
        </div>
      </div>
    </div>
  );
}
