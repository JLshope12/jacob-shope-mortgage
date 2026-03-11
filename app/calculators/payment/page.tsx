"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCurrencyPrecise(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// Monthly P&I: M = P * [r(1+r)^n] / [(1+r)^n - 1]
function monthlyPI(principal: number, annualRate: number, years: number): number {
  if (principal <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

// PMI: ~0.5% of loan amount per year when LTV > 80%
function monthlyPMI(loanAmount: number, downPaymentPct: number): number {
  if (downPaymentPct >= 20) return 0;
  return (loanAmount * 0.005) / 12;
}

const LOAN_TERMS = [15, 20, 30] as const;

const CHART_COLORS = {
  pi: "#1B2A4A", // navy
  tax: "#C8963E", // gold
  insurance: "#3D4F6F", // slate
  pmi: "#5a6b8a", // slate-ish
  hoa: "#2D2D2D", // charcoal
};

export default function PaymentCalculatorPage() {
  const [homePrice, setHomePrice] = useState(350_000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState<15 | 20 | 30>(30);
  const [annualTax, setAnnualTax] = useState(3_000);
  const [annualInsurance, setAnnualInsurance] = useState(1_500);
  const [monthlyHOA, setMonthlyHOA] = useState(0);

  const breakdown = useMemo(() => {
    const loanAmount = homePrice * (1 - downPaymentPct / 100);
    const pi = monthlyPI(loanAmount, interestRate, loanTerm);
    const pmi = monthlyPMI(loanAmount, downPaymentPct);
    const taxMonthly = annualTax / 12;
    const insuranceMonthly = annualInsurance / 12;
    const total = pi + pmi + taxMonthly + insuranceMonthly + monthlyHOA;
    return {
      principalAndInterest: pi,
      propertyTax: taxMonthly,
      insurance: insuranceMonthly,
      pmi,
      hoa: monthlyHOA,
      total,
    };
  }, [
    homePrice,
    downPaymentPct,
    interestRate,
    loanTerm,
    annualTax,
    annualInsurance,
    monthlyHOA,
  ]);

  const downPaymentDollars = useMemo(
    () => (homePrice * downPaymentPct) / 100,
    [homePrice, downPaymentPct]
  );

  const pieData = useMemo(() => {
    const d = [
      { name: "Principal & Interest", value: breakdown.principalAndInterest, color: CHART_COLORS.pi },
      { name: "Property Tax", value: breakdown.propertyTax, color: CHART_COLORS.tax },
      { name: "Insurance", value: breakdown.insurance, color: CHART_COLORS.insurance },
    ];
    if (breakdown.pmi > 0) {
      d.push({ name: "PMI", value: breakdown.pmi, color: CHART_COLORS.pmi });
    }
    if (breakdown.hoa > 0) {
      d.push({ name: "HOA", value: breakdown.hoa, color: CHART_COLORS.hoa });
    }
    return d;
  }, [breakdown]);

  return (
    <div className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          Mortgage Payment Calculator
        </h1>
        <p className="mt-2 text-lg text-charcoal">
          Estimate your monthly mortgage payment
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-8 rounded-xl bg-white p-6 shadow-md md:p-8">
            {/* Home Price */}
            <div>
              <label className="mb-2 block text-sm font-medium text-charcoal">
                Home Price
              </label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min={50_000}
                  max={2_000_000}
                  step={5000}
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="h-2 flex-1 accent-navy"
                />
                <input
                  type="number"
                  min={50_000}
                  max={2_000_000}
                  step={1000}
                  value={homePrice}
                  onChange={(e) =>
                    setHomePrice(Math.min(2_000_000, Math.max(50_000, Number(e.target.value) || 0)))
                  }
                  className="w-28 rounded-lg border border-charcoal/20 px-3 py-2 text-right text-charcoal"
                />
              </div>
              <p className="mt-1 text-sm text-charcoal/70">{formatCurrency(homePrice)}</p>
            </div>

            {/* Down Payment % */}
            <div>
              <label className="mb-2 block text-sm font-medium text-charcoal">
                Down Payment %
              </label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="h-2 flex-1 accent-navy"
                />
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={downPaymentPct}
                  onChange={(e) =>
                    setDownPaymentPct(Math.min(100, Math.max(0, Number(e.target.value) || 0)))
                  }
                  className="w-20 rounded-lg border border-charcoal/20 px-3 py-2 text-right text-charcoal"
                />
              </div>
              <p className="mt-1 text-sm text-charcoal/70">
                {formatCurrency(downPaymentDollars)} down
              </p>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="mb-2 block text-sm font-medium text-charcoal">
                Interest Rate (%)
              </label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min={1}
                  max={12}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="h-2 flex-1 accent-navy"
                />
                <input
                  type="number"
                  min={1}
                  max={12}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(
                      Math.min(12, Math.max(1, Number(e.target.value) || 0))
                    )
                  }
                  className="w-20 rounded-lg border border-charcoal/20 px-3 py-2 text-right text-charcoal"
                />
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="mb-2 block text-sm font-medium text-charcoal">
                Loan Term
              </label>
              <div className="flex gap-2">
                {LOAN_TERMS.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setLoanTerm(term)}
                    className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors ${
                      loanTerm === term
                        ? "border-navy bg-navy text-white"
                        : "border-charcoal/30 text-charcoal hover:border-navy/50"
                    }`}
                  >
                    {term} years
                  </button>
                ))}
              </div>
            </div>

            {/* Annual Property Tax */}
            <div>
              <label className="mb-2 block text-sm font-medium text-charcoal">
                Annual Property Tax
              </label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min={0}
                  max={15000}
                  step={100}
                  value={annualTax}
                  onChange={(e) => setAnnualTax(Number(e.target.value))}
                  className="h-2 flex-1 accent-navy"
                />
                <input
                  type="number"
                  min={0}
                  max={50000}
                  step={100}
                  value={annualTax}
                  onChange={(e) =>
                    setAnnualTax(Math.max(0, Number(e.target.value) || 0))
                  }
                  className="w-28 rounded-lg border border-charcoal/20 px-3 py-2 text-right text-charcoal"
                />
              </div>
            </div>

            {/* Annual Home Insurance */}
            <div>
              <label className="mb-2 block text-sm font-medium text-charcoal">
                Annual Home Insurance
              </label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min={0}
                  max={5000}
                  step={100}
                  value={annualInsurance}
                  onChange={(e) => setAnnualInsurance(Number(e.target.value))}
                  className="h-2 flex-1 accent-navy"
                />
                <input
                  type="number"
                  min={0}
                  max={10000}
                  step={100}
                  value={annualInsurance}
                  onChange={(e) =>
                    setAnnualInsurance(Math.max(0, Number(e.target.value) || 0))
                  }
                  className="w-28 rounded-lg border border-charcoal/20 px-3 py-2 text-right text-charcoal"
                />
              </div>
            </div>

            {/* Monthly HOA */}
            <div>
              <label className="mb-2 block text-sm font-medium text-charcoal">
                Monthly HOA
              </label>
              <div className="flex gap-4">
                <input
                  type="range"
                  min={0}
                  max={1000}
                  step={25}
                  value={monthlyHOA}
                  onChange={(e) => setMonthlyHOA(Number(e.target.value))}
                  className="h-2 flex-1 accent-navy"
                />
                <input
                  type="number"
                  min={0}
                  max={2000}
                  step={25}
                  value={monthlyHOA}
                  onChange={(e) =>
                    setMonthlyHOA(Math.max(0, Number(e.target.value) || 0))
                  }
                  className="w-28 rounded-lg border border-charcoal/20 px-3 py-2 text-right text-charcoal"
                />
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="space-y-6 rounded-xl bg-white p-6 shadow-md md:p-8">
            <p className="text-sm font-medium text-charcoal/80">
              Total Monthly Payment
            </p>
            <p className="text-3xl font-bold text-navy md:text-4xl">
              {formatCurrencyPrecise(breakdown.total)}
            </p>

            <div className="h-64 w-full min-h-[240px] md:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    label={({ name, percent }) =>
                      percent > 0.05 ? `${name}: ${(percent * 100).toFixed(0)}%` : ""
                    }
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => formatCurrencyPrecise(value)}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <ul className="space-y-2 border-t border-charcoal/10 pt-4">
              <li className="flex justify-between text-sm">
                <span className="text-charcoal">Principal & Interest</span>
                <span className="font-medium text-navy">
                  {formatCurrencyPrecise(breakdown.principalAndInterest)}
                </span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-charcoal">Property Tax</span>
                <span className="font-medium text-gold">
                  {formatCurrencyPrecise(breakdown.propertyTax)}
                </span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-charcoal">Insurance</span>
                <span className="font-medium text-slate">
                  {formatCurrencyPrecise(breakdown.insurance)}
                </span>
              </li>
              {breakdown.pmi > 0 && (
                <li className="flex justify-between text-sm">
                  <span className="text-charcoal">PMI</span>
                  <span className="font-medium">
                    {formatCurrencyPrecise(breakdown.pmi)}
                  </span>
                </li>
              )}
              {breakdown.hoa > 0 && (
                <li className="flex justify-between text-sm">
                  <span className="text-charcoal">HOA</span>
                  <span className="font-medium">
                    {formatCurrencyPrecise(breakdown.hoa)}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90"
          >
            Get Your Personalized Rate
          </Link>
        </div>
      </div>
    </div>
  );
}
