"use client";

import { useState } from "react";
import Link from "next/link";
import { NumberField } from "@/components/calculators/NumberField";

function currency(value: number) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.max(0, value)); }

export default function AffordabilityCalculatorPage() {
  const [income, setIncome] = useState(10_000);
  const [debts, setDebts] = useState(750);
  const [downPayment, setDownPayment] = useState(50_000);
  const [rate, setRate] = useState(6.5);
  const [taxesInsurance, setTaxesInsurance] = useState(650);

  const housingBudget = Math.max(0, income * 0.36 - debts);
  const principalInterest = Math.max(0, housingBudget - taxesInsurance);
  const monthlyRate = rate / 100 / 12;
  const months = 360;
  const loanAmount = monthlyRate === 0 ? principalInterest * months : principalInterest * (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate;
  const homePrice = loanAmount + downPayment;

  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h1 className="text-4xl font-bold text-navy md:text-5xl">Home affordability calculator</h1>
        <p className="mt-4 max-w-3xl text-charcoal md:text-lg">A planning estimate based on a 36% total debt-to-income ratio. Actual approval limits and costs vary by loan program.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <NumberField id="income" label="Gross monthly income" value={income} onChange={setIncome} prefix="$" step={100} />
            <NumberField id="debts" label="Monthly debt payments" value={debts} onChange={setDebts} prefix="$" step={25} />
            <NumberField id="down" label="Down payment" value={downPayment} onChange={setDownPayment} prefix="$" step={1000} />
            <NumberField id="rate" label="Estimated interest rate" value={rate} onChange={setRate} suffix="%" step={0.125} max={20} />
            <NumberField id="housing-costs" label="Monthly taxes and insurance" value={taxesInsurance} onChange={setTaxesInsurance} prefix="$" step={25} />
          </div>
          <div className="rounded-2xl bg-navy p-8 text-white">
            <p className="text-sm text-white/70">Estimated home price</p>
            <p className="mt-2 text-4xl font-bold">{currency(homePrice)}</p>
            <dl className="mt-8 space-y-4 border-t border-white/20 pt-6 text-sm">
              <div className="flex justify-between gap-4"><dt>Estimated monthly housing budget</dt><dd className="font-semibold">{currency(housingBudget)}</dd></div>
              <div className="flex justify-between gap-4"><dt>Estimated loan amount</dt><dd className="font-semibold">{currency(loanAmount)}</dd></div>
              <div className="flex justify-between gap-4"><dt>Down payment</dt><dd className="font-semibold">{currency(downPayment)}</dd></div>
            </dl>
            <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-gold px-5 py-3 font-semibold text-white hover:bg-gold/90">Get a Personal Review</Link>
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-charcoal/70">Estimate only. This result is not a loan approval or commitment to lend and may not include mortgage insurance, HOA dues, or every housing expense.</p>
      </div>
    </div>
  );
}
