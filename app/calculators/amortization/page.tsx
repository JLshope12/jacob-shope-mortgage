"use client";

import { useState } from "react";
import Link from "next/link";
import { NumberField } from "@/components/calculators/NumberField";

function money(value: number) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value); }

export default function AmortizationCalculatorPage() {
  const [amount, setAmount] = useState(350_000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);
  const months = Math.max(1, years * 12);
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment = monthlyRate === 0 ? amount / months : amount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  let balance = amount;
  const annualRows = [];
  let annualPrincipal = 0;
  let annualInterest = 0;

  for (let month = 1; month <= months; month += 1) {
    const interest = balance * monthlyRate;
    const principal = Math.min(balance, monthlyPayment - interest);
    balance = Math.max(0, balance - principal);
    annualPrincipal += principal;
    annualInterest += interest;
    if (month % 12 === 0 || month === months) {
      annualRows.push({ year: Math.ceil(month / 12), principal: annualPrincipal, interest: annualInterest, balance });
      annualPrincipal = 0;
      annualInterest = 0;
    }
  }
  const totalPaid = monthlyPayment * months;

  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="text-4xl font-bold text-navy md:text-5xl">Amortization calculator</h1>
        <p className="mt-4 max-w-3xl text-charcoal md:text-lg">See how the principal balance and interest portion change over a fixed-rate loan term.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="h-fit grid gap-5 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <NumberField id="loan-amount" label="Loan amount" value={amount} onChange={setAmount} prefix="$" step={1000} />
            <NumberField id="interest-rate" label="Interest rate" value={rate} onChange={setRate} suffix="%" step={0.125} max={20} />
            <NumberField id="loan-term" label="Loan term" value={years} onChange={setYears} suffix="years" min={1} max={40} />
            <div className="rounded-xl bg-navy p-6 text-white">
              <p className="text-sm text-white/70">Monthly principal and interest</p>
              <p className="mt-1 text-3xl font-bold">{money(monthlyPayment)}</p>
              <p className="mt-4 text-sm text-white/80">Total interest: {money(totalPaid - amount)}</p>
            </div>
            <Link href="/contact" className="text-center font-semibold text-gold underline">Review This Payment With Jacob</Link>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="bg-navy text-white"><tr><th className="px-5 py-4">Year</th><th className="px-5 py-4">Principal</th><th className="px-5 py-4">Interest</th><th className="px-5 py-4">Ending balance</th></tr></thead>
                <tbody>{annualRows.map((row) => <tr key={row.year} className="border-b border-charcoal/10 last:border-0"><td className="px-5 py-3 font-medium text-navy">{row.year}</td><td className="px-5 py-3">{money(row.principal)}</td><td className="px-5 py-3">{money(row.interest)}</td><td className="px-5 py-3">{money(row.balance)}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs text-charcoal/70">Estimate only. The schedule shows principal and interest and does not include taxes, insurance, mortgage insurance, HOA dues, or other costs.</p>
      </div>
    </div>
  );
}
