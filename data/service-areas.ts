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
    slug: "charlotte",
    group: "charlotte-metro",
    name: "Charlotte",
    shortDescription:
      "Serving the Queen City and Mecklenburg County with conventional, FHA, VA, and first-time buyer loans.",
    introParagraph:
      "Charlotte is the largest city in North Carolina and one of the fastest-growing metros in the country. From South End and NoDa to Myers Park, Dilworth, and Ballantyne, neighborhoods offer a mix of historic bungalows, new construction, and townhomes. Strong school districts like Charlotte-Mecklenburg Schools (CMS) and proximity to top employers, the airport, and Lake Norman make the city a draw for families and professionals. Whether you're buying your first home in Plaza Midwood or upgrading in SouthPark, I help Charlotte buyers navigate pre-approval, competitive offers, and a smooth closing.",
    whyLocal:
      "I live and work in the Charlotte area and know the market from the inside. As a local mortgage loan officer and Charlotte Fire Department captain, I'm invested in helping families here get into the right loan and the right neighborhood. I'll walk you through programs that fit the Queen City market and your timeline.",
    nearbySlugs: ["matthews", "mint-hill", "huntersville", "lake-norman", "concord"],
  },
  {
    slug: "huntersville",
    group: "charlotte-metro",
    name: "Huntersville",
    shortDescription:
      "Mortgage lending in Huntersville and the Lake Norman region. New construction, resales, and first-time buyers.",
    introParagraph:
      "Huntersville sits just north of Charlotte in the Lake Norman corridor and has grown into one of the area's most sought-after towns. Top-rated schools, parks like Latta Plantation and Discovery Place Kids, and easy access to I-77 make it ideal for families. Neighborhoods range from established communities like Vermillion and Birkdale to new builds in areas like Torrence Creek. Home prices and inventory vary by subdivision, and I help buyers from pre-approval through closing so they can move quickly when the right house hits the market.",
    whyLocal:
      "I'm based in the Huntersville area and know the builders, neighborhoods, and what it takes to get to closing in this competitive market. I work with buyers and Realtors across Lake Norman and Mecklenburg so you get local expertise and personal attention.",
    nearbySlugs: ["cornelius", "lake-norman", "charlotte", "mooresville"],
  },
  {
    slug: "cornelius",
    group: "charlotte-metro",
    name: "Cornelius",
    shortDescription:
      "Serving Cornelius and the west shore of Lake Norman with purchase and refinance loans.",
    introParagraph:
      "Cornelius sits on the western shore of Lake Norman and offers a mix of lakefront living, golf communities, and family-friendly neighborhoods. The town's parks, greenways, and strong schools attract buyers who want a small-town feel with quick access to Charlotte via I-77. From Jetton Park to popular subdivisions, buyers here often look at both conventional and jumbo financing for higher-priced homes. I help Cornelius buyers get pre-approved and choose the right loan for their budget and goals.",
    whyLocal:
      "I serve the Lake Norman corridor daily and understand how the Cornelius market works—from lakefront to inland subdivisions. You'll get straightforward advice and a smooth process so you can focus on finding your home.",
    nearbySlugs: ["huntersville", "lake-norman", "charlotte"],
  },
  {
    slug: "lake-norman",
    group: "charlotte-metro",
    name: "Lake Norman",
    shortDescription:
      "Lake Norman mortgage lending: Cornelius, Davidson, Huntersville, Mooresville, and the greater lake region.",
    introParagraph:
      "Lake Norman is one of the Southeast's premier lake communities, spanning Mecklenburg, Iredell, Catawba, and Lincoln counties. Towns like Cornelius, Davidson, Huntersville, and Mooresville offer everything from waterfront estates and golf-course homes to family subdivisions and new construction. The lake drives demand for both primary residences and second homes, and school districts in the area—including Lake Norman Charter and strong public options—draw families from across the region. Whether you're buying a condo near the water or a single-family home in Troutman or Sherrills Ford, I help Lake Norman buyers and refinancers with conventional, jumbo, FHA, VA, and USDA loans tailored to this unique market.",
    whyLocal:
      "I've helped countless families buy and refinance around the lake. I know the nuances of lakefront lending, local appraisals, and how to get you to closing without surprises. You get a local partner who understands Lake Norman's neighborhoods and your goals.",
    nearbySlugs: ["huntersville", "cornelius", "mooresville", "charlotte"],
  },
  {
    slug: "mooresville",
    group: "charlotte-metro",
    name: "Mooresville",
    shortDescription:
      "Mortgage loans in Mooresville, NC. NASCAR country, strong schools, and growing housing options.",
    introParagraph:
      "Mooresville—known as Race City USA for its NASCAR ties—sits in Iredell County north of Lake Norman and offers a blend of small-town character and growth. The downtown area, Lake Norman access, and strong schools like Mooresville Graded School District attract families and commuters to Charlotte. New construction and resales are both active, with a range of price points. I work with Mooresville buyers on conventional, FHA, VA, and USDA loans so you can move quickly in this competitive area.",
    whyLocal:
      "I serve the greater Lake Norman and I-77 corridor, including Mooresville. I'll help you get pre-approved and find the right loan so you can compete confidently in the Mooresville market.",
    nearbySlugs: ["lake-norman", "huntersville", "concord", "north-carolina"],
  },
  {
    slug: "concord",
    group: "charlotte-metro",
    name: "Concord",
    shortDescription:
      "Serving Concord, Cabarrus County, and the I-85 corridor with purchase and refinance loans.",
    introParagraph:
      "Concord is Cabarrus County's largest city and sits along I-85 northeast of Charlotte. The area is known for the Charlotte Motor Speedway, strong schools including Cabarrus County Schools, and a mix of established neighborhoods and new development. Kannapolis and Harrisburg are nearby, and buyers often look for value and good commutes to Charlotte or the Research Triangle. I help Concord-area buyers with conventional, FHA, VA, USDA, and first-time buyer programs so you can lock in a rate and close with confidence.",
    whyLocal:
      "I serve the greater Charlotte region, including Concord and Cabarrus County. You'll get clear communication and a process built for today's market so you can focus on finding the right home.",
    nearbySlugs: ["charlotte", "mooresville", "gastonia", "north-carolina"],
  },
  {
    slug: "gastonia",
    group: "charlotte-metro",
    name: "Gastonia",
    shortDescription:
      "Mortgage lending in Gastonia and Gaston County. First-time buyers, conventional, FHA, and VA loans.",
    introParagraph:
      "Gastonia is the largest city in Gaston County and sits west of Charlotte along I-85. The area offers more affordable entry points into the Charlotte metro while still providing access to jobs, schools, and amenities. Neighborhoods range from downtown-adjacent to suburban and rural, and USDA eligibility in parts of the county can mean 100% financing for qualified buyers. I help Gastonia and Gaston County buyers with conventional, FHA, VA, USDA, and first-time buyer programs so you can buy with a plan that fits your budget.",
    whyLocal:
      "I work with buyers across the Charlotte metro, including Gastonia. I'll walk you through loan options and get you pre-approved so you're ready when you find the right place in Gaston County.",
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
    name: "Nationwide",
    shortDescription:
      "Licensed in most states nationwide. Purchase and refinance loans across the country.",
    introParagraph:
      "I'm licensed to originate mortgages in most states across the country. While my home base is the Charlotte area and I'm deeply connected to the Carolinas, I work with clients who are relocating, buying second homes, or refinancing properties in many other states. Whether you're moving to Florida, Texas, or another state where I'm licensed, I'll provide the same straightforward process: pre-approval, clear communication, and a path to closing. Licensing varies by state—reach out and I'll confirm whether I can help in your state.",
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
