export type LoanProgram = {
  slug: string;
  name: string;
  description: string;
  keyBenefits: string[];
  requirements: { label: string; value: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const LOAN_PROGRAMS: LoanProgram[] = [
  {
    slug: "conventional",
    name: "Conventional",
    description:
      "Conventional loans in Charlotte and across North Carolina are not backed by the federal government. They offer flexible terms, competitive rates, and are a strong fit for buyers with good credit and a solid down payment. In the Charlotte metro, conventional financing is the most common choice for move-up buyers and those who can put down at least 3–5%.",
    keyBenefits: [
      "Competitive interest rates for borrowers with good credit (typically 620+).",
      "Flexible down payment options: as low as 3% for qualified buyers.",
      "No upfront mortgage insurance with 20% or more down; PMI can be removed once you reach 20% equity.",
      "Wide variety of terms (15, 20, 30 years) to match your goals in the Charlotte market.",
    ],
    requirements: [
      { label: "Credit score", value: "Typically 620+ (better rates at 740+)" },
      { label: "Down payment", value: "As low as 3%; 20% avoids PMI" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Get pre-approved",
        description:
          "We review your income, assets, and credit to determine how much you can borrow. Pre-approval strengthens your offer in Charlotte’s competitive market.",
      },
      {
        step: 2,
        title: "Find your home and go under contract",
        description:
          "Once you’re under contract, we order the appraisal and move your file into processing.",
      },
      {
        step: 3,
        title: "Underwriting and closing",
        description:
          "The underwriter verifies your documentation. After clear-to-close, we schedule closing so you can get the keys.",
      },
    ],
    faq: [
      {
        question: "What is the minimum down payment for a conventional loan in North Carolina?",
        answer:
          "You can put as little as 3% down on a conventional loan with programs like Freddie Mac Home Possible or Fannie Mae HomeReady. If you put less than 20% down, you’ll typically pay private mortgage insurance (PMI) until you reach 20% equity. Many buyers in the Charlotte area use 5–10% down and then refinance or request PMI removal once their home appreciates.",
      },
      {
        question: "How does PMI work on a conventional loan?",
        answer:
          "PMI protects the lender if you default. It’s usually required when your down payment is less than 20%. Monthly PMI is added to your payment and can often be removed once your loan-to-value drops to 80% (by paying down the loan or through home appreciation). You can also request removal with a new appraisal in some cases.",
      },
      {
        question: "Are conventional loan limits different in Charlotte, NC?",
        answer:
          "Conforming loan limits are set by the FHFA and apply nationwide, including Charlotte. For 2025, the baseline limit for a single-family home is $766,550 in most areas. Higher-cost counties can have higher limits. Loans above the conforming limit are considered jumbo and have different underwriting standards.",
      },
    ],
  },
  {
    slug: "fha",
    name: "FHA",
    description:
      "FHA loans are government-insured and popular with first-time buyers in Charlotte and across North Carolina. They allow lower credit scores and a down payment as low as 3.5%, making homeownership more accessible. FHA financing is well-suited to buyers who are still building credit or have limited savings for a down payment.",
    keyBenefits: [
      "Down payment as low as 3.5% with a credit score of 580 or higher.",
      "More flexible credit guidelines; some lenders consider scores down to 500 with a 10% down payment.",
      "Competitive rates and one upfront mortgage insurance premium plus annual MIP.",
      "Widely accepted by sellers in the Charlotte area; common for first-time and repeat buyers.",
    ],
    requirements: [
      { label: "Credit score", value: "580+ for 3.5% down; 500–579 with 10% down" },
      { label: "Down payment", value: "Minimum 3.5%" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Confirm eligibility",
        description:
          "We review your credit, income, and employment. FHA has specific limits on loan size in the Charlotte area, which we’ll check for your county.",
      },
      {
        step: 2,
        title: "Get pre-approved and shop",
        description:
          "Your pre-approval shows sellers you’re a serious buyer. FHA appraisals include both value and minimum property standards.",
      },
      {
        step: 3,
        title: "Underwriting and closing",
        description:
          "We collect your documents and work with FHA underwriting guidelines. After clear-to-close, you’ll sign at closing and get your keys.",
      },
    ],
    faq: [
      {
        question: "What is FHA mortgage insurance and how long do I pay it?",
        answer:
          "FHA charges an upfront mortgage insurance premium (UFMIP) at closing and an annual premium (MIP) paid in monthly installments. For most loans with a down payment of less than 10%, MIP is paid for the life of the loan. If you put 10% or more down, MIP typically drops off after 11 years. Refinancing to a conventional loan once you have enough equity is one way to eliminate FHA MIP.",
      },
      {
        question: "Can I use an FHA loan for a condo in Charlotte?",
        answer:
          "Yes, if the condo project is on the FHA approved list. Not all condos are FHA-approved. We can help you check whether a specific complex in Charlotte or the surrounding areas is eligible before you make an offer.",
      },
      {
        question: "Are FHA loan limits different in the Charlotte area?",
        answer:
          "FHA limits are set by county. In Mecklenburg County (Charlotte), the 2025 limit for a single-family home is typically higher than the national floor. We’ll look up the exact limit for the county where you’re buying.",
      },
    ],
  },
  {
    slug: "va",
    name: "VA",
    description:
      "VA loans are for eligible veterans, active-duty service members, and certain surviving spouses. They offer zero down payment, no private mortgage insurance, and competitive rates. If you served and call the Charlotte area or North Carolina home, a VA loan can be one of the best ways to buy or refinance.",
    keyBenefits: [
      "No down payment required for eligible borrowers (up to the VA loan limit).",
      "No PMI, which can save hundreds of dollars per month compared to conventional low-down-payment options.",
      "Competitive interest rates and flexible credit guidelines from VA-backed lenders.",
      "VA funding fee can be waived for certain disabled veterans or may be rolled into the loan.",
    ],
    requirements: [
      { label: "Eligibility", value: "Certificate of Eligibility (COE) from VA" },
      { label: "Credit score", value: "Varies by lender; many accept 620+" },
      { label: "Down payment", value: "0% for most; may apply above county loan limit" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Get your Certificate of Eligibility",
        description:
          "We can help you request your COE from the VA. This confirms your entitlement and is required to proceed with a VA loan.",
      },
      {
        step: 2,
        title: "Pre-approval and home search",
        description:
          "With your COE and financial details, we get you pre-approved. You’ll know your max purchase price and can shop with confidence in Charlotte or anywhere in NC.",
      },
      {
        step: 3,
        title: "Appraisal, underwriting, and closing",
        description:
          "The property must meet VA minimum property requirements. Once underwriting approves your file and we have clear-to-close, you’ll close and get the keys.",
      },
    ],
    faq: [
      {
        question: "Who is eligible for a VA loan in North Carolina?",
        answer:
          "Eligibility is based on your military service: typically 90 days of active duty during wartime, 181 days during peacetime, or 6 years in the Reserves or National Guard. Certain surviving spouses may also qualify. We’ll help you obtain your Certificate of Eligibility from the VA to confirm.",
      },
      {
        question: "What is the VA funding fee and can it be waived?",
        answer:
          "The VA funding fee helps fund the program and is a one-time fee at closing. It varies by down payment and whether you’ve used your benefit before. It can be waived for veterans with a service-connected disability or for surviving spouses of veterans who died in service or from a service-connected disability.",
      },
      {
        question: "Can I use a VA loan more than once?",
        answer:
          "Yes. If you’ve paid off a previous VA loan or sold the home and the loan was assumed, you may have your full entitlement restored and use a VA loan again. We can help you understand your remaining entitlement if you’ve used it before.",
      },
    ],
  },
  {
    slug: "usda",
    name: "USDA",
    description:
      "USDA loans offer 100% financing for eligible homes in designated rural and suburban areas. Many neighborhoods in the Charlotte region—including parts of surrounding counties—qualify. If you meet income limits and are buying in an eligible area, a USDA loan can help you buy with no down payment and competitive rates.",
    keyBenefits: [
      "100% financing: no down payment required for eligible buyers and properties.",
      "Competitive fixed rates and lower mortgage insurance than some other low-down-payment options.",
      "Eligible areas include many suburbs and towns around Charlotte and across North Carolina.",
      "Income limits apply but are set at the area median; many working families qualify.",
    ],
    requirements: [
      { label: "Property", value: "Must be in a USDA-eligible area" },
      { label: "Income", value: "At or below area median (household income limits)" },
      { label: "Credit score", value: "Typically 640+ (guidelines may vary)" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Check area and income eligibility",
        description:
          "We verify that the home you want is in a USDA-eligible zone and that your household income is within limits for your county. The USDA eligibility map includes many areas near Charlotte.",
      },
      {
        step: 2,
        title: "Get pre-approved",
        description:
          "We review your credit, income, and assets. USDA has specific documentation requirements we’ll guide you through.",
      },
      {
        step: 3,
        title: "Underwriting and closing",
        description:
          "USDA loans are processed through an approved lender and then submitted to USDA for guarantee. After clear-to-close, you’ll close with no down payment required.",
      },
    ],
    faq: [
      {
        question: "What areas near Charlotte qualify for USDA loans?",
        answer:
          "USDA eligibility is based on population and other factors. Many towns and suburbs in the counties surrounding Charlotte—such as parts of Gaston, Lincoln, Union, Cabarrus, and Iredell—have eligible zones. The USDA website has a property eligibility map; we can also check specific addresses for you.",
      },
      {
        question: "What are USDA income limits?",
        answer:
          "Income limits are set at 115% of the area median income for your household size and county. Limits vary by area and family size. We’ll calculate whether your household income qualifies for the county where you’re buying.",
      },
      {
        question: "Is there mortgage insurance on a USDA loan?",
        answer:
          "Yes. USDA charges an upfront guarantee fee and an annual fee that’s paid in monthly installments. The annual fee is typically lower than FHA’s MIP. Both can be rolled into the loan for qualified borrowers.",
      },
    ],
  },
  {
    slug: "jumbo",
    name: "Jumbo",
    description:
      "Jumbo loans finance amounts above the conforming loan limits set by the FHFA. In the Charlotte area, higher-priced homes often require jumbo financing. These loans have stricter underwriting—higher credit scores, larger down payments, and more reserve requirements—but make it possible to buy or refinance in the upper tier of the market.",
    keyBenefits: [
      "Finance loan amounts above conforming limits for Charlotte and high-cost areas.",
      "Fixed and adjustable-rate options to match your timeline and risk tolerance.",
      "Competitive jumbo rates for well-qualified borrowers with strong income and assets.",
      "Flexible terms so you can customize your payment and payoff strategy.",
    ],
    requirements: [
      { label: "Credit score", value: "Often 700+; varies by lender" },
      { label: "Down payment", value: "Typically 10–20% or more" },
      { label: "Reserves", value: "Often 6–18+ months of PITIA in reserves" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Confirm loan amount and eligibility",
        description:
          "We determine whether your purchase or refinance exceeds the conforming limit and what programs we have for jumbo financing. We’ll review income, assets, and credit.",
      },
      {
        step: 2,
        title: "Documentation and underwriting",
        description:
          "Jumbo loans require thorough documentation of income, assets, and sometimes a second appraisal. We’ll guide you through what’s needed.",
      },
      {
        step: 3,
        title: "Closing",
        description:
          "Once the investor approves your loan, we schedule closing. You’ll sign and fund the loan to complete your purchase or refinance.",
      },
    ],
    faq: [
      {
        question: "What is the jumbo loan limit in Charlotte, NC?",
        answer:
          "Conforming limits are set annually by the FHFA. For 2025, the baseline single-family limit is $766,550 in most areas. Loans above that (and above any higher local limit) are jumbo. We’ll confirm the exact limit for the county where you’re buying.",
      },
      {
        question: "Why do jumbo loans have stricter requirements?",
        answer:
          "Jumbo loans are not purchased by Fannie Mae or Freddie Mac, so lenders keep them on their books or sell to other investors. To manage risk, they often require higher credit scores, larger down payments, and more cash reserves than conforming loans.",
      },
      {
        question: "Can I refinance from a jumbo to a conforming loan later?",
        answer:
          "If your loan balance drops below the conforming limit (e.g., through paydown or a drop in the limit), you might qualify for a conforming refinance. That can sometimes mean simpler underwriting or different pricing. We can evaluate that when you’re ready to refinance.",
      },
    ],
  },
  {
    slug: "refinance",
    name: "Refinance",
    description:
      "Refinancing in Charlotte and across North Carolina can lower your rate, shorten your term, or tap into your home’s equity. Whether you want to reduce your monthly payment, pay off your mortgage faster, or get cash for home improvements or other goals, we’ll walk you through the best refinance options for your situation.",
    keyBenefits: [
      "Lower your monthly payment by securing a lower interest rate.",
      "Shorten your term (e.g., 30 to 15 years) to build equity faster and pay less interest over time.",
      "Cash-out refinance to access equity for renovations, debt consolidation, or other needs.",
      "Switch from an adjustable-rate mortgage to a fixed rate for predictable payments.",
    ],
    requirements: [
      { label: "Equity", value: "Typically 20%+ for best rates; cash-out may require more" },
      { label: "Credit score", value: "Varies by program; 620+ common for rate-and-term" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Define your goal",
        description:
          "We discuss whether you want a lower payment, a shorter term, or cash out. That drives which product and term we recommend.",
      },
      {
        step: 2,
        title: "Get your rate and terms",
        description:
          "We run your scenario and provide rate options. You’ll see estimated payments, closing costs, and break-even so you can decide if refinancing makes sense.",
      },
      {
        step: 3,
        title: "Application and closing",
        description:
          "You complete the application and we collect documents. After underwriting and clear-to-close, we schedule closing. Your new loan pays off the old one and any cash-out is disbursed at closing.",
      },
    ],
    faq: [
      {
        question: "When does it make sense to refinance in North Carolina?",
        answer:
          "Refinancing usually makes sense when your new rate is meaningfully lower than your current rate and you plan to stay in the home long enough to recoup closing costs (often 2–3 years). We’ll calculate your break-even and total savings so you can decide.",
      },
      {
        question: "What is a cash-out refinance?",
        answer:
          "A cash-out refinance replaces your current mortgage with a larger loan. The difference between the new loan amount and what you owe (minus closing costs) is paid to you at closing. You can use the funds for home improvements, debt payoff, or other purposes. Loan-to-value limits and pricing apply.",
      },
      {
        question: "Can I refinance an FHA or VA loan?",
        answer:
          "Yes. You can refinance FHA to conventional (often to remove MIP once you have enough equity) or do an FHA streamline. VA offers IRRRL (streamline) refinances for existing VA loans and full VA refinances for cash-out. We’ll match you with the right option.",
      },
    ],
  },
  {
    slug: "first-time-buyer",
    name: "First-Time Buyer",
    description:
      "First-time home buyer programs in Charlotte and North Carolina can make the leap to homeownership more affordable. From NCHFA down payment assistance and forgivable loans to FHA and conventional low-down-payment options, we help you find a path that fits your budget and your goals in the Charlotte metro.",
    keyBenefits: [
      "Down payment assistance and forgivable second mortgages through NCHFA and other programs.",
      "Low-down-payment options: FHA 3.5%, conventional 3%, and VA/USDA 0% for those who qualify.",
      "Education and guidance so you understand the process from pre-approval to closing.",
      "Local expertise in Charlotte-area programs and what works for first-time buyers in NC.",
    ],
    requirements: [
      { label: "Eligibility", value: "First-time buyer or haven’t owned in 3 years (NCHFA)" },
      { label: "Credit score", value: "Varies by program; often 640+ for assistance" },
      { label: "Income", value: "Within program limits for your area" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Explore programs and get pre-approved",
        description:
          "We review your income, credit, and goals and explain which first-time buyer programs you may qualify for in the Charlotte area. Then we get you pre-approved so you can shop with confidence.",
      },
      {
        step: 2,
        title: "Find a home and apply for assistance",
        description:
          "Once you’re under contract, we lock your rate and complete any second-loan or assistance applications (e.g., NCHFA) so everything is ready for closing.",
      },
      {
        step: 3,
        title: "Close and get the keys",
        description:
          "We coordinate with the down payment assistance program and your Realtor. At closing, you’ll sign your loan documents and receive the keys to your first home.",
      },
    ],
    faq: [
      {
        question: "What is NCHFA and how can it help first-time buyers in Charlotte?",
        answer:
          "The North Carolina Housing Finance Agency (NCHFA) offers down payment assistance and other programs for qualified first-time buyers. Options include forgivable second mortgages and competitive first mortgages. Income and purchase price limits apply. We work with NCHFA programs and can tell you if you qualify for the Charlotte area.",
      },
      {
        question: "Do I have to be a first-time buyer to use these programs?",
        answer:
          "Many programs define “first-time buyer” as someone who has not owned a home in the past three years. So even if you owned before, you might qualify. NCHFA and other programs have specific rules we’ll go over with you.",
      },
      {
        question: "What’s the first step to buying my first home in Charlotte?",
        answer:
          "Getting pre-approved is the best first step. We’ll review your income, credit, and savings and tell you how much you can borrow and which programs you might use. From there, you can work with a Realtor to find a home that fits your budget and goals.",
      },
    ],
  },
];

export function getProgramBySlug(slug: string): LoanProgram | undefined {
  return LOAN_PROGRAMS.find((p) => p.slug === slug);
}

export function getAllProgramSlugs(): string[] {
  return LOAN_PROGRAMS.map((p) => p.slug);
}
