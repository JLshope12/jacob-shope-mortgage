"use client";

import { useState } from "react";
import Link from "next/link";
import { NumberField } from "@/components/calculators/NumberField";

function payment(principal: number, annualRate: number, years: number) {
  const months = Math.max(1, years * 12);
  const rate = annualRate / 100 / 12;
  return rate === 0 ? principal / months : principal * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
}
function money(value: number) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value); }

export default function RefinanceCalculatorPage() {
  const [balance, setBalance] = useState(300_000);
  const [currentRate, setCurrentRate] = useState(7.25);
  const [yearsLeft, setYearsLeft] = useState(27);
  const [newRate, setNewRate] = useState(6.25);
  const [newTerm, setNewTerm] = useState(30);
  const [closingCosts, setClosingCosts] = useState(6_000);
  const currentPayment = payment(balance, currentRate, yearsLeft);
  const newPayment = payment(balance, newRate, newTerm);
  const savings = currentPayment - newPayment;
  const breakEven = savings > 0 ? closingCosts / savings : 0;

  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h1 className="text-4xl font-bold text-navy md:text-5xl">Refinance calculator</h1>
        <p className="mt-4 max-w-3xl text-charcoal md:text-lg">Compare principal and interest payments and estimate how long monthly savings could take to recover closing costs.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <NumberField id="balance" label="Current loan balance" value={balance} onChange={setBalance} prefix="$" step={1000} />
            <NumberField id="current-rate" label="Current interest rate" value={currentRate} onChange={setCurrentRate} suffix="%" step={0.125} max={20} />
            <NumberField id="years-left" label="Years remaining" value={yearsLeft} onChange={setYearsLeft} suffix="years" min={1} max={40} />
            <NumberField id="new-rate" label="Possible new interest rate" value={newRate} onChange={setNewRate} suffix="%" step={0.125} max={20} />
            <NumberField id="new-term" label="New loan term" value={newTerm} onChange={setNewTerm} suffix="years" min={1} max={40} />
            <NumberField id="costs" label="Estimated closing costs" value={closingCosts} onChange={setClosingCosts} prefix="$" step={500} />
          </div>
          <div className="rounded-2xl bg-navy p-8 text-white">
            <p className="text-sm text-white/70">Estimated monthly principal and interest savings</p>
            <p className="mt-2 text-4xl font-bold">{money(savings)}</p>
            <dl className="mt-8 space-y-4 border-t border-white/20 pt-6 text-sm">
              <div className="flex justify-between"><dt>Current payment</dt><dd className="font-semibold">{money(currentPayment)}</dd></div>
              <div className="flex justify-between"><dt>Possible new payment</dt><dd className="font-semibold">{money(newPayment)}</dd></div>
              <div className="flex justify-between"><dt>Estimated break-even</dt><dd className="font-semibold">{savings > 0 ? `${Math.ceil(breakEven)} months` : "No monthly savings"}</dd></div>
            </dl>
            <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Run the Complete Comparison</Link>
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-charcoal/70">Estimate only. This comparison excludes taxes, insurance, mortgage insurance, escrow changes, cash received, term-reset effects, and other costs that may affect the decision.</p>
      </div>
    </div>
  );
}
