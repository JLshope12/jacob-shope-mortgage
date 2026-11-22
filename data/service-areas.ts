export type ServiceAreaGroup =
  | "charlotte-metro"
  | "north-carolina"
  | "south-carolina"
  | "nationwide";

export type ServiceArea = {
  slug: string;
  name: string;
  group: ServiceAreaGroup;
  shortDescription: string;
  introParagraph: string;
  whyLocal: string;
  nearbySlugs: string[];
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "charlotte-metro",
    group: "charlotte-metro",
    name: "Charlotte Metro",
    shortDescription:
      "Mortgage guidance throughout Mecklenburg County and the greater Charlotte region.",
    introParagraph:
      "The Charlotte metro includes a wide range of communities, property types, and price points across Mecklenburg and the surrounding counties. Buyers may be comparing an in-town condo, a suburban single-family home, new construction, or an investment property. I help clients compare the complete payment and loan structure, prepare a strong pre-approval, and keep the financing on track from offer through closing.",
    whyLocal:
      "I was born and raised in the Charlotte area and serve the community as both a mortgage professional and Charlotte Fire Department captain. My clients get straightforward answers, local availability, and access to multiple lending options through a mortgage broker.",
    nearbySlugs: ["charlotte", "huntersville", "ballantyne", "lake-norman", "concord"],
  },
  {
    slug: "charlotte",
    group: "charlotte-metro",
    name: "Charlotte",
    shortDescription:
      "Serving the Queen City and Mecklenburg County with conventional, FHA, VA, and first-time buyer loans.",
    introParagraph:
      "Charlotte buyers may be comparing a South End condo, an established home in Dilworth, or a new build farther from the center of the city. The financing details can differ by property: condominium project review, HOA dues, property taxes, insurance, appraisal conditions, and cash needed for closing all affect the plan. I help buyers and their Realtors compare conventional, FHA, VA, jumbo, and other available mortgage options while checking the full payment, pre-approval details, and timeline before an offer.",
    whyLocal:
      "I grew up in the Charlotte area and serve the community as a Charlotte Fire Department captain as well as a mortgage professional. I help Charlotte buyers understand the property-specific numbers, compare mortgage structures, and coordinate the financing side with their Realtor. Final terms and approval depend on the borrower, property, and lender.",
    nearbySlugs: ["matthews", "mint-hill", "huntersville", "lake-norman", "concord"],
  },
  {
    slug: "huntersville",
    group: "charlotte-metro",
    name: "Huntersville",
    shortDescription:
      "Mortgage lending in Huntersville and the Lake Norman region. New construction, resales, and first-time buyers.",
    introParagraph:
      "Huntersville is in northern Mecklenburg County along the I-77 and Lake Norman corridor. Buyers may be comparing established neighborhoods, new construction, townhomes, or condominium properties. The full mortgage payment can depend on county and town property taxes, homeowners insurance, HOA dues, and any lender review required for the property. I help buyers check pre-approval, cash to close, builder timelines, and loan options before making an offer in Huntersville.",
    whyLocal:
      "I live in the Lake Norman area and work with buyers and Realtors across Huntersville and the north Charlotte corridor. My role is to make the financing practical: compare the full payment and cash needed, identify any property or underwriting questions early, and keep the parties informed as the file moves toward closing.",
    nearbySlugs: ["cornelius", "lake-norman", "charlotte", "mooresville"],
  },
  {
    slug: "ballantyne",
    group: "charlotte-metro",
    name: "Ballantyne",
    shortDescription:
      "Mortgage options for homebuyers and homeowners in Ballantyne and south Charlotte.",
    introParagraph:
      "Ballantyne and south Charlotte offer established neighborhoods, newer communities, townhomes, and convenient access to major employers, shopping, and the I-485 corridor. Buyers in this part of Mecklenburg County may be comparing conventional, jumbo, first-time buyer, or relocation financing. I help clients understand the full payment, prepare for the offer, and choose a loan structure that fits both the property and their longer-term goals.",
    whyLocal:
      "I know the Charlotte market and work with buyers, homeowners, and Realtors across Mecklenburg County. You will get direct communication and a financing plan built around your actual scenario, not a generic online quote.",
    nearbySlugs: ["charlotte", "charlotte-metro", "matthews", "indian-trail"],
  },
  {
    slug: "cornelius",
    group: "charlotte-metro",
    name: "Cornelius",
    shortDescription:
      "Serving Cornelius on the eastern side of Lake Norman with purchase and refinance options.",
    introParagraph:
      "Cornelius sits along the eastern side of Lake Norman in northern Mecklenburg County and offers a mix of lakefront living, golf communities, and established neighborhoods. The town's parks, greenways, and access to Charlotte along I-77 appeal to buyers comparing inland neighborhoods and waterfront properties. From Jetton Park to popular subdivisions, buyers here often look at both conventional and jumbo financing for higher-priced homes. I help Cornelius buyers get pre-approved and choose the right loan for their budget and goals.",
    whyLocal:
      "I serve the Lake Norman corridor daily and understand how the Cornelius market works—from lakefront to inland subdivisions. You'll get straightforward advice and a smooth process so you can focus on finding your home.",
    nearbySlugs: ["huntersville", "lake-norman", "charlotte"],
  },
  {
    slug: "davidson",
    group: "charlotte-metro",
    name: "Davidson",
    shortDescription:
      "Local mortgage guidance for Davidson, North Carolina and the Lake Norman area.",
    introParagraph:
      "Davidson stretches across Mecklenburg and Iredell counties along the Lake Norman corridor. Buyers may be comparing an older home near downtown, a condo, newer construction, or a waterfront property. The exact parcel matters: town limits, county and special-district property taxes, insurance, HOA or condo requirements, property condition, and appraisal details can change the full payment and loan review. I help Davidson buyers compare conventional, jumbo, VA, and other available mortgage options and prepare a useful pre-approval before making an offer.",
    whyLocal:
      "I work with buyers and Realtors across Davidson and the Lake Norman corridor. My job is to help check the full payment and cash needed, flag property-specific questions early, and coordinate financing with your agent. Loan terms and final approval depend on the borrower, property, and lender.",
    nearbySlugs: ["cornelius", "huntersville", "lake-norman", "mooresville"],
  },
  {
    slug: "lake-norman",
    group: "charlotte-metro",
    name: "Lake Norman",
    shortDescription:
      "Lake Norman mortgage lending: Cornelius, Davidson, Huntersville, Mooresville, and the greater lake region.",
    introParagraph:
      "Lake Norman stretches across Mecklenburg, Iredell, Catawba, and Lincoln counties. Buyers in Cornelius, Davidson, Huntersville, Mooresville, Troutman, Sherrills Ford, and nearby communities may be comparing waterfront homes, inland resales, condos, and new construction. The property's county, taxes, insurance, appraisal, HOA or condo requirements, and any shoreline permits can affect the financing plan. I help buyers compare conventional, jumbo, FHA, and VA options when appropriate; USDA financing depends on the exact property's eligibility and the borrower's qualifications.",
    whyLocal:
      "I work with buyers, homeowners, and Realtors across the Lake Norman corridor. For lakefront properties, I help flag financing questions early, including flood insurance, appraisal considerations, condo review where applicable, and dock or shoreline documentation. Final eligibility, insurance requirements, and permit status must be confirmed for the specific property with the appropriate lender, insurer, county, or shoreline authority.",
    nearbySlugs: ["huntersville", "cornelius", "mooresville", "charlotte"],
  },
  {
    slug: "mooresville",
    group: "charlotte-metro",
    name: "Mooresville",
    shortDescription:
      "Local mortgage guidance for Mooresville and Iredell County, from lakefront and resale homes to new builds and acreage.",
    introParagraph:
      "Mooresville sits in Iredell County along the north and eastern side of Lake Norman. Buyers may be comparing established homes near downtown, newer subdivisions, waterfront property, or homes with acreage. Those properties can require different financing reviews. A realistic mortgage plan starts with the exact parcel, its property taxes, insurance, HOA dues, and any property-specific appraisal or construction requirements. I help Mooresville buyers compare conventional, FHA, VA, jumbo, and, where the address and borrower qualify, USDA financing.",
    whyLocal:
      "I work with buyers and Realtors across Mooresville and the Lake Norman corridor. I'll help you compare the total payment and cash needed, identify property-specific documentation early, and coordinate the financing details with your agent. Final loan eligibility and terms depend on the borrower and property.",
    nearbySlugs: ["lake-norman", "huntersville", "concord", "north-carolina"],
  },
  {
    slug: "concord",
    group: "charlotte-metro",
    name: "Concord",
    shortDescription:
      "Practical mortgage guidance for Concord and Cabarrus County, including tax estimates, new construction and first-time buyers.",
    introParagraph:
      "Concord is in Cabarrus County northeast of Charlotte, along the I-85 corridor. Buyers may compare established neighborhoods, townhomes, condominiums, and new construction, including areas near downtown Concord and the Charlotte Motor Speedway. The actual parcel matters: property-tax districts, HOA dues, insurance, appraisal requirements, and builder completion dates can change the payment or closing plan. I help Concord buyers compare conventional, FHA, VA, jumbo, and other available options; USDA eligibility must be checked for the specific address and borrower.",
    whyLocal:
      "I serve Concord and the surrounding Cabarrus County communities as a Charlotte-area mortgage professional. I help buyers check county and municipal property taxes, total monthly payment, cash to close, and property-specific lending requirements before making an offer. Final terms and approval depend on the borrower, property, and lender.",
    nearbySlugs: ["charlotte", "mooresville", "gastonia", "north-carolina"],
  },
  {
    slug: "gastonia",
    group: "charlotte-metro",
    name: "Gastonia",
    shortDescription:
      "Mortgage lending in Gastonia and Gaston County. First-time buyers, conventional, FHA, and VA loans.",
    introParagraph:
      "Gastonia sits west of Charlotte along I-85, with older homes near downtown, established neighborhoods, and new construction in surrounding communities. The actual parcel, taxing jurisdictions, HOA dues, property condition, and insurance needs can change the monthly payment or mortgage review. USDA financing may be an option for an eligible borrower and eligible address, but a Gastonia mailing address does not prove eligibility. I help Gaston County buyers compare conventional, FHA, VA, USDA, and first-time buyer options based on the specific home, total payment, and cash needed at closing.",
    whyLocal:
      "I work with buyers in Gastonia and across Gaston County. Before a purchase, I help review the financing structure alongside tax and insurance estimates, property-specific lender requirements, and the documentation needed for a useful pre-approval.",
    nearbySlugs: ["charlotte", "concord", "matthews", "north-carolina"],
  },
  {
    slug: "matthews",
    group: "charlotte-metro",
    name: "Matthews",
    shortDescription:
      "Serving Matthews and southeast Mecklenburg with purchase and refinance loans.",
    introParagraph:
      "Matthews is a popular town in southeast Mecklenburg County with a walkable downtown, strong schools, and a family-friendly feel. The area appeals to buyers who want a suburban setting with good access to Charlotte, Ballantyne, and I-485. Housing includes single-family homes, townhomes, and new construction in developments like Stallings and Weddington nearby. I help Matthews buyers with conventional, FHA, VA, and first-time buyer programs so you can compete in this active market.",
    whyLocal:
      "I know the southeast Mecklenburg market and work with buyers in Matthews regularly. You'll get local insight and a straightforward process from pre-approval to closing.",
    nearbySlugs: ["charlotte", "mint-hill", "indian-trail"],
  },
  {
    slug: "mint-hill",
    group: "charlotte-metro",
    name: "Mint Hill",
    shortDescription:
      "Mortgage loans in Mint Hill and the eastern Charlotte suburbs.",
    introParagraph:
      "Mint Hill sits in eastern Mecklenburg County and offers a mix of rural character and suburban convenience. The town is known for its Independence Day celebration, community feel, and access to Charlotte and Indian Trail. Home styles and prices vary from older homes to new construction, and buyers often appreciate the slightly lower density and good schools. I help Mint Hill buyers with conventional, FHA, VA, and first-time buyer programs so you can secure financing and close on time.",
    whyLocal:
      "I serve the greater Charlotte area, including Mint Hill. I'll help you get pre-approved and choose the right loan so you're ready to make an offer when you find your home.",
    nearbySlugs: ["charlotte", "matthews", "indian-trail"],
  },
  {
    slug: "indian-trail",
    group: "charlotte-metro",
    name: "Indian Trail",
    shortDescription:
      "Serving Indian Trail, Union County, and the eastern Charlotte metro.",
    introParagraph:
      "Indian Trail is one of the fastest-growing towns in Union County and sits east of Charlotte. The area attracts families with strong schools (including Union County Public Schools), newer housing stock, and a balance of affordability and commute options to Charlotte and Monroe. Neighborhoods range from master-planned communities to smaller subdivisions. I help Indian Trail buyers with conventional, FHA, VA, USDA (in eligible zones), and first-time buyer programs so you can buy with confidence in this growing market.",
    whyLocal:
      "I work with buyers across the Charlotte region, including Indian Trail and Union County. You'll get clear guidance and a smooth process so you can focus on finding the right home for your family.",
    nearbySlugs: ["matthews", "mint-hill", "charlotte", "north-carolina"],
  },
  {
    slug: "north-carolina",
    group: "north-carolina",
    name: "North Carolina",
    shortDescription:
      "Licensed to serve home buyers and refinancers across the state of North Carolina.",
    introParagraph:
      "I'm licensed to help home buyers and refinancers across North Carolina. While my primary focus is the Charlotte metro and Lake Norman, I work with clients buying or refinancing elsewhere in the state—from the Triad and Triangle to the coast and the mountains. Whether you're relocating to NC, buying a second home, or refinancing an existing property, I'll walk you through loan options, get you pre-approved, and keep the process on track so you can close with confidence.",
    whyLocal:
      "I'm a North Carolina-licensed loan officer and Charlotte Fire Department captain with deep ties to this state. You'll get honest advice, clear communication, and a process designed to get you to the closing table without surprises.",
    nearbySlugs: ["charlotte", "lake-norman", "mooresville", "concord", "gastonia"],
  },
  {
    slug: "south-carolina",
    group: "south-carolina",
    name: "South Carolina",
    shortDescription:
      "Licensed to serve home buyers and refinancers across South Carolina.",
    introParagraph:
      "I'm licensed to help home buyers and refinancers across South Carolina. From the Upstate and Greenville to Charleston, Columbia, Myrtle Beach, and the Lowcountry, I work with clients buying or refinancing throughout the state. Whether you're relocating to SC, moving from Charlotte across the state line, or refinancing an existing property, I'll walk you through loan options, get you pre-approved, and keep the process on track so you can close with confidence.",
    whyLocal:
      "I serve clients in both North and South Carolina and understand the nuances of each market. You'll get clear communication and a process designed to get you to the closing table, no matter where you're buying or refinancing in the Palmetto State.",
    nearbySlugs: ["charlotte", "north-carolina", "nationwide"],
  },
  {
    slug: "nationwide",
    group: "nationwide",
    name: "Additional States",
    shortDescription:
      "Mortgage availability in additional states depends on current licensing and program eligibility.",
    introParagraph:
      "My home base is the Charlotte area, and I primarily serve clients in North Carolina and South Carolina. For borrowers relocating, buying a second home, or financing property in another state, availability depends on current licensing and program eligibility. Reach out and I'll confirm whether I can help with your specific state and scenario.",
    whyLocal:
      "Even when we're working across state lines, you get a dedicated loan officer who will keep you informed and guide you through each step. I'll help you choose the right loan and get you to closing without surprises.",
    nearbySlugs: ["north-carolina", "south-carolina", "charlotte"],
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}

export function getAllServiceAreaSlugs(): string[] {
  return SERVICE_AREAS.map((a) => a.slug);
}
