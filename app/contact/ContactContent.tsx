"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  loanType: z.enum(["Buying", "Refinancing"]),
  residencyType: z.enum(["Primary Residence", "Investment Property"]),
  purchaseTimeline: z.enum([
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring",
  ]),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const LOAN_TYPE_OPTIONS = ["Buying", "Refinancing"] as const;
const RESIDENCY_TYPE_OPTIONS = [
  "Primary Residence",
  "Investment Property",
] as const;
const TIMELINE_OPTIONS = [
  "ASAP",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Just exploring",
] as const;

export function ContactContent() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      loanType: "Buying",
      residencyType: "Primary Residence",
      purchaseTimeline: "Just exploring",
    },
  });

  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(data: ContactFormData) {
    // TODO: Send to server action / Resend / Formspree
    await new Promise((r) => setTimeout(r, 500));
    reset();
    setSubmitted(true);
  }

  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Get in Touch
        </h1>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left - Form */}
          <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
            {submitted ? (
              <p className="text-lg text-charcoal">
                Thank you! I&apos;ll be in touch within 24 hours.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-charcoal">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      className="h-10 border-charcoal/20 bg-background"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-charcoal">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      className="h-10 border-charcoal/20 bg-background"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-charcoal">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="h-10 border-charcoal/20 bg-background"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-charcoal">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="h-10 border-charcoal/20 bg-background"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="text-charcoal">Loan type</Label>
                  <Controller
                    name="loanType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="h-10 w-full border-charcoal/20 bg-background">
                          <SelectValue placeholder="Select loan type" />
                        </SelectTrigger>
                        <SelectContent>
                          {LOAN_TYPE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-charcoal">Residency type</Label>
                  <Controller
                    name="residencyType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="h-10 w-full border-charcoal/20 bg-background">
                          <SelectValue placeholder="Select residency type" />
                        </SelectTrigger>
                        <SelectContent>
                          {RESIDENCY_TYPE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-charcoal">Purchase timeline</Label>
                  <Controller
                    name="purchaseTimeline"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="h-10 w-full border-charcoal/20 bg-background">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIMELINE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-charcoal">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="border-charcoal/20 bg-background"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-lg bg-gold px-6 font-semibold text-white hover:bg-gold/90"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Right - Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-navy">Contact info</h2>
              <ul className="mt-4 space-y-3 text-charcoal">
                <li>
                  <span className="text-sm text-charcoal/80">Phone</span>
                  <br />
                  <a
                    href="tel:+17046145340"
                    className="font-medium text-navy hover:text-gold"
                  >
                    (704) 614-5340
                  </a>
                </li>
                <li>
                  <span className="text-sm text-charcoal/80">Email</span>
                  <br />
                  <a
                    href="mailto:shope@mpirefi.com"
                    className="font-medium text-navy hover:text-gold"
                  >
                    shope@mpirefi.com
                  </a>
                </li>
                <li>
                  <span className="text-sm text-charcoal/80">Instagram</span>
                  <br />
                  <span className="font-medium text-navy">@jlshopeloans</span>
                </li>
                <li>
                  <span className="text-sm text-charcoal/80">NMLS#</span>
                  <br />
                  <span className="font-medium text-navy">2090979</span>
                </li>
              </ul>
            </div>
            <Link
              href="/book"
              className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
