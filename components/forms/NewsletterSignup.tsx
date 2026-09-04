"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="newsletter-signup" className="scroll-mt-20 border-b border-gold/30 bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
          <p className="text-center text-base text-white md:text-lg">
            You&apos;re on the list. Watch your inbox for the next Sunday Rundown.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter-signup" className="scroll-mt-20 border-b border-gold/30 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            The Real Estate Rundown
          </h2>
          <p className="mt-3 text-sm text-white/85 md:text-base">
            A quick Sunday preview of rates, Lake Norman real estate, and the
            conversations worth having with clients in the week ahead.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-center"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email"
              className="min-h-11 flex-1 rounded-lg border border-gold/40 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 sm:max-w-md"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="min-h-11 shrink-0 rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90 disabled:opacity-70"
            >
              {status === "submitting" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {status === "error" && (
            <p className="mt-3 text-sm text-gold" role="alert" aria-live="polite">
              I couldn&apos;t add you just yet. Please try again or email shope@mpirefi.com.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
