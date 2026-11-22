import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceAreaBySlug,
  getAllServiceAreaSlugs,
  type ServiceArea,
} from "@/data/service-areas";
import { LOAN_PROGRAMS } from "@/data/loan-programs";
import { AuthorBox } from "@/components/seo/AuthorBox";

type Props = { params: Promise<{ slug: string }> };

const origin = "https://jacobshopemortgage.com";
const CHARLOTTE_HOMEOWNERSHIP_URL =
  "https://www.charlottenc.gov/Streets-and-Neighborhoods/Housing/Resources-for-Homeowners-Renters/Homeownership";
const MECKLENBURG_TAX_URL = "https://tax.mecknc.gov/";
const MECKLENBURG_2027_REVALUATION_URL = "https://news.mecknc.gov/we-value-mecklenburg-county-update-2027-property-revaluation";
const CFPB_COMPARE_ESTIMATES_URL = "https://www.consumerfinance.gov/owning-a-home/compare/compare-loan-estimates/";
const NCHFA_HOME_BUYERS_URL = "https://www.nchfa.com/home-buyers";
const DAVIDSON_PROPERTY_TAX_URL = "https://www.townofdavidson.org/1472/Property-Taxes";
const DAVIDSON_TAX_INFORMATION_URL = "https://www.townofdavidson.org/975/Tax-Information";
const DAVIDSON_GIS_URL = "https://www.townofdavidson.org/1524/Geographic-Information-Systems-GIS";
const DAVIDSON_HISTORIC_DISTRICT_URL = "https://www.townofdavidson.org/1285/Local-Historic-District";
const IREDELL_TAX_URL = "https://iredellcountync.gov/368/Tax-Administration-Land-Records";
const LINCOLN_TAX_URL = "https://www.lincolncountync.gov/73/Tax-Department";
const CATAWBA_TAX_URL = "https://catawbacountync.gov/county-services/tax/";
const CABARRUS_TAX_BILLS_URL = "https://www.cabarruscounty.us/Government/Departments/Tax-Administration/Tax-Collections/Tax-Bill-Inquiry";
const CABARRUS_TAX_RATES_URL = "https://www.cabarruscounty.us/Government/Departments/Tax-Administration/Tax-Collections/Tax-Rates";
const CABARRUS_LAND_RECORDS_URL = "https://www.cabarruscounty.us/Government/Departments/Tax-Administration/Land-Records";
const GASTON_TAX_URL = "https://www.gastongov.com/583/Tax-Office";
const GASTON_GIS_URL = "https://www.gastongov.com/677/Tax-Mapping-GIS";
const USDA_HOUSING_URL = "https://www.rd.usda.gov/programs-services/single-family-housing-programs";

const LOCAL_RESOURCES: Record<
  string,
  { href: string; label: string; detail: string }[]
> = {
  charlotte: [
    {
      href: CHARLOTTE_HOMEOWNERSHIP_URL,
      label: "City of Charlotte homeownership resources",
      detail: "Current City information for House Charlotte and other homeownership resources.",
    },
    {
      href: MECKLENBURG_TAX_URL,
      label: "Mecklenburg County property tax resources",
      detail: "Official property values, tax bills, payments, and real-property information for Mecklenburg County.",
    },
    {
      href: NCHFA_HOME_BUYERS_URL,
      label: "North Carolina Housing Finance Agency home buyers",
      detail: "State homebuyer and down-payment-assistance resources maintained by NCHFA.",
    },
  ],
  huntersville: [
    {
      href: MECKLENBURG_TAX_URL,
      label: "Mecklenburg County property tax records",
      detail: "Check assessed value and actual tax-bill information before estimating the monthly escrow amount.",
    },
    {
      href: NCHFA_HOME_BUYERS_URL,
      label: "NC Housing Finance Agency homebuyer options",
      detail: "Review official state mortgage and down-payment-assistance program information and eligibility.",
    },
  ],
  cornelius: [
    {
      href: MECKLENBURG_TAX_URL,
      label: "Mecklenburg County property tax records",
      detail: "Review the property's assessed value and tax information when estimating the payment for an inland or waterfront home.",
    },
    {
      href: NCHFA_HOME_BUYERS_URL,
      label: "NC Housing Finance Agency homebuyer options",
      detail: "See current state-supported mortgage and down-payment-assistance resources.",
    },
  ],
  davidson: [
    {
      href: DAVIDSON_PROPERTY_TAX_URL,
      label: "Town of Davidson: FY2027 property-tax rates",
      detail: "Official town and county rate examples per $100 of assessed value. Check the parcel's taxing jurisdictions and the current tax year before estimating escrow.",
    },
    {
      href: DAVIDSON_TAX_INFORMATION_URL,
      label: "Town of Davidson: tax administration and assessments",
      detail: "The town explains how tax billing and assessments are handled by Mecklenburg or Iredell County, depending on the property.",
    },
    {
      href: DAVIDSON_GIS_URL,
      label: "Town of Davidson: county GIS and property mapping",
      detail: "Links to public Mecklenburg and Iredell mapping tools for checking the actual parcel, its county and property details.",
    },
    {
      href: MECKLENBURG_TAX_URL,
      label: "Mecklenburg County property tax records",
      detail: "Verify assessed value and tax information for a property located in Mecklenburg County.",
    },
    {
      href: IREDELL_TAX_URL,
      label: "Iredell County tax and land records",
      detail: "For an address in Iredell County, use the county's official parcel and tax-record resources.",
    },
    {
      href: NCHFA_HOME_BUYERS_URL,
      label: "NC Housing Finance Agency homebuyer options",
      detail: "Explore official first-time buyer and other state home-financing resources.",
    },
  ],
  concord: [
    {
      href: CABARRUS_TAX_BILLS_URL,
      label: "Cabarrus County real estate tax bill inquiry",
      detail: "Look up current or historical tax bills for the actual parcel. The county recommends township/map/parcel searches for historical records.",
    },
    {
      href: CABARRUS_TAX_RATES_URL,
      label: "Cabarrus County official tax rates",
      detail: "Check county, city or town, and any applicable district tax rates before estimating your monthly property-tax escrow.",
    },
    {
      href: CABARRUS_LAND_RECORDS_URL,
      label: "Cabarrus County land and parcel records",
      detail: "Use official land and GIS records to verify property identification and location before selecting tax jurisdictions.",
    },
    {
      href: NCHFA_HOME_BUYERS_URL,
      label: "North Carolina Housing Finance Agency home buyers",
      detail: "Review state-supported mortgage and down-payment-assistance options and confirm program eligibility with a participating lender.",
    },
  ],
  gastonia: [
    {
      href: GASTON_TAX_URL,
      label: "Gaston County Tax Office: property values and tax bills",
      detail: "Use official property-tax search, current bills, and valuation resources for the actual parcel rather than relying only on a listing estimate.",
    },
    {
      href: GASTON_GIS_URL,
      label: "Gaston County tax mapping and GIS",
      detail: "Check the parcel and its mapped location; confirm jurisdiction and other property details with primary records.",
    },
    {
      href: USDA_HOUSING_URL,
      label: "USDA Rural Development housing program resources",
      detail: "Use the official address-level eligibility tools and confirm household qualifications before assuming zero-down USDA financing is available.",
    },
    {
      href: NCHFA_HOME_BUYERS_URL,
      label: "North Carolina Housing Finance Agency homebuyer resources",
      detail: "Find state-supported homebuyer financing and assistance information; program terms and availability require verification.",
    },
  ],
  mooresville: [
    {
      href: "https://taxweb.iredellcountync.gov/PublicAccess/RealEstate.aspx",
      label: "Iredell County real estate and parcel search",
      detail: "Look up the actual property address and parcel before relying on a seller's tax estimate.",
    },
    {
      href: IREDELL_TAX_URL,
      label: "Iredell County tax administration",
      detail: "Confirm current property assessments and tax details, including applicable taxing jurisdictions.",
    },
    {
      href: "https://www.iredellcountync.gov/DocumentCenter/View/23242/Town-of-Mooresville-Building-Permitting--Inspections-Information?bidId=",
      label: "Iredell County guidance on Mooresville building permits",
      detail: "Official county explanation that the Town handles building permits and inspections within Mooresville and its extraterritorial jurisdiction, while certain well, septic, and other reviews remain with the county.",
    },
    {
      href: "https://www.rd.usda.gov/programs-services/single-family-housing-programs",
      label: "USDA Rural Development property eligibility resources",
      detail: "Check an address through USDA's official eligibility tools; a Mooresville mailing address does not establish USDA eligibility.",
    },
    {
      href: NCHFA_HOME_BUYERS_URL,
      label: "NC Housing Finance Agency homebuyer options",
      detail: "Review statewide mortgage and down-payment-assistance programs and current borrower requirements.",
    },
  ],
  "lake-norman": [
    {
      href: "https://msc.fema.gov/portal/home",
      label: "FEMA Flood Map Service Center",
      detail: "Search an individual property address for official flood-hazard maps; confirm insurance requirements and pricing before relying on a payment estimate.",
    },
    {
      href: "https://lnmc.org/faq-items/who-do-i-contact-about-docks-piers-shoreline-management-and-dredging/",
      label: "Lake Norman Marine Commission: shoreline and dock permits",
      detail: "The Marine Commission directs owners to Duke Energy Lake Use Permitting for questions about piers, docks, shoreline work, and dredging.",
    },
    {
      href: MECKLENBURG_TAX_URL,
      label: "Mecklenburg County property tax resources",
      detail: "Official property-tax information for Huntersville, Cornelius, Davidson, and other Mecklenburg County properties.",
    },
    {
      href: IREDELL_TAX_URL,
      label: "Iredell County tax and land records",
      detail: "Official property assessment, land-record, and tax information for Iredell County, including Mooresville-area properties.",
    },
    {
      href: LINCOLN_TAX_URL,
      label: "Lincoln County Tax Department",
      detail: "Official real-property appraisal and tax information for Lincoln County properties around the lake.",
    },
    {
      href: CATAWBA_TAX_URL,
      label: "Catawba County Tax Office",
      detail: "Official property-tax and real-estate records for Catawba County properties around Lake Norman.",
    },
    {
      href: NCHFA_HOME_BUYERS_URL,
      label: "North Carolina Housing Finance Agency home buyers",
      detail: "State homebuyer and down-payment-assistance resources maintained by NCHFA.",
    },
  ],
};

const LAKE_NORMAN_TOWN_BUYER_NOTES: Record<string, string[]> = {
  huntersville: [
    "Compare the total payment, not just the sale price: municipal and county property taxes, insurance, and HOA dues may all affect affordability.",
    "For new construction, confirm the property completion timeline, builder requirements, and when the mortgage can close.",
    "For townhomes or condominiums, ask early about any HOA fees and lender project-review requirements.",
  ],
  cornelius: [
    "For waterfront or near-water properties, check the address-specific insurance needs and appraisal considerations before assuming the payment will match an inland home.",
    "Review any HOA dues, property-use restrictions, or dock-related obligations that apply to the particular property.",
    "Use the county's official property tax information to make a more realistic estimate of monthly escrows.",
  ],
  davidson: [
    "Confirm whether the actual parcel is in Mecklenburg or Iredell County and whether it is inside Davidson town limits. A Davidson mailing address alone does not establish taxing jurisdiction.",
    "Check any HOA or condominium dues and lender project review early. Older homes may also raise appraisal or property-condition questions.",
    "For a home in Davidson's local historic district, verify any proposed exterior work and applicable review requirements with the town before budgeting for renovations.",
    "Use official parcel assessments and a property-specific insurance quote instead of assuming the seller's current escrow will be the future payment.",
  ],
  mooresville: [
    "Look up the specific parcel in Iredell County records. Use current tax and assessment information as a starting point, and confirm the expected post-purchase tax bill and insurance cost rather than copying a seller's monthly escrow.",
    "For completed builder inventory, review completion and occupancy documentation. For land plus construction, ask early about builder approval, plans, budget, contingencies, draws, and the lender's closing structure.",
    "For properties on acreage or with a well or septic system, ask whether the loan program requires extra property, appraisal, water, or septic documentation.",
    "For lakefront homes, check address-specific flood risk, request an insurance quote, and ask about existing dock or shoreline paperwork. A waterfront home may need a different appraisal review than an inland property.",
    "For USDA financing, check the property's eligibility on USDA's official tools and the borrower's income and program qualifications. Do not assume all Mooresville addresses are eligible.",
  ],
};

const LOCAL_PAGE_MODIFIED: Record<string, string> = {
  charlotte: "2026-11-18",
  "lake-norman": "2026-11-15",
  huntersville: "2026-11-18",
  cornelius: "2026-11-16",
  davidson: "2026-11-22",
  mooresville: "2026-11-16",
  concord: "2026-11-19",
  gastonia: "2026-11-20",
};

export async function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return { title: "Service Area | Jacob Shope" };

  const title =
    area.slug === "charlotte"
      ? "Charlotte Mortgage Lender Options | Jacob Shope"
      : area.slug === "lake-norman"
        ? "Lake Norman Mortgage Broker | Jacob Shope"
        : area.slug === "north-carolina"
          ? "North Carolina Mortgage Lender | Jacob Shope"
          : area.slug === "south-carolina"
            ? "South Carolina Mortgage Lender | Jacob Shope"
            : area.slug === "nationwide"
              ? "Out-of-State Mortgage Inquiries | Jacob Shope"
              : area.slug === "charlotte-metro"
                ? "Charlotte Metro Home Loans | Jacob Shope"
                : `${area.name} Mortgage Broker | Jacob Shope`;

  const description =
    area.slug === "charlotte"
      ? "Compare Charlotte mortgage lender and loan options through Jacob Shope, a local mortgage broker and Mortgage Loan Officer with Mpire Financial. FHA, VA, conventional, jumbo, first-time buyer, investor, and construction financing."
      : area.slug === "lake-norman"
        ? "Local Lake Norman mortgage guidance from Jacob Shope for buyers and homeowners across Huntersville, Cornelius, Davidson, Mooresville, and the surrounding lake region."
        : area.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${area.slug}` },
    ...(area.slug === "nationwide" ? { robots: { index: false, follow: true } } : {}),
    authors: [{ name: "Jacob Shope", url: "/about" }],
  };
}

function getH1(area: ServiceArea): string {
  if (area.slug === "charlotte") return "Mortgage Lender Options in Charlotte";
  if (area.slug === "lake-norman") return "Lake Norman Mortgage Broker";
  if (area.slug === "north-carolina") return "North Carolina Mortgage Lender";
  if (area.slug === "south-carolina") return "South Carolina Mortgage Lender";
  if (area.slug === "nationwide") return "Mortgage Availability Outside the Carolinas";
  if (area.slug === "charlotte-metro") return "Mortgage Options Across the Charlotte Metro";
  return `${area.name} Mortgage Broker`;
}

function getCTAText(area: ServiceArea): string {
  if (area.slug === "north-carolina") return "Get Pre-Approved in North Carolina";
  if (area.slug === "south-carolina") return "Get Pre-Approved in South Carolina";
  if (area.slug === "nationwide") return "Ask About State Availability";
  return `Get Pre-Approved for a Home in ${area.name}`;
}

function getProgramHref(slug: string): string {
  if (slug === "va") return "/va-loans-charlotte";
  if (slug === "first-time-buyer") return "/first-time-homebuyer-charlotte";
  return `/loan-programs/${slug}`;
}

function getAreaServed(area: ServiceArea) {
  if (area.slug === "charlotte") {
    return [
      { "@type": "City", name: "Charlotte, North Carolina" },
      { "@type": "AdministrativeArea", name: "Mecklenburg County, North Carolina" },
    ];
  }

  if (area.slug === "mooresville") {
    return [
      { "@type": "City", name: "Mooresville, North Carolina" },
      { "@type": "AdministrativeArea", name: "Iredell County, North Carolina" },
    ];
  }

  if (area.slug === "lake-norman") {
    return [
      { "@type": "Place", name: "Lake Norman, North Carolina" },
      { "@type": "City", name: "Huntersville, North Carolina" },
      { "@type": "City", name: "Cornelius, North Carolina" },
      { "@type": "City", name: "Davidson, North Carolina" },
      { "@type": "City", name: "Mooresville, North Carolina" },
      { "@type": "AdministrativeArea", name: "Mecklenburg County, North Carolina" },
      { "@type": "AdministrativeArea", name: "Iredell County, North Carolina" },
      { "@type": "AdministrativeArea", name: "Lincoln County, North Carolina" },
      { "@type": "AdministrativeArea", name: "Catawba County, North Carolina" },
    ];
  }

  return { "@type": "Place", name: area.name };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  const nearbyAreas = area.nearbySlugs
    .map((s) => getServiceAreaBySlug(s))
    .filter(Boolean) as ServiceArea[];
  const localResources = LOCAL_RESOURCES[area.slug] ?? [];
  const localPageModified = LOCAL_PAGE_MODIFIED[area.slug];
  const townBuyerNotes = LAKE_NORMAN_TOWN_BUYER_NOTES[area.slug];

  const pageUrl = `${origin}/service-areas/${area.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: getH1(area),
        description:
          area.slug === "charlotte"
            ? "Charlotte mortgage lender and loan options available through Jacob Shope, a local mortgage broker and Mortgage Loan Officer with Mpire Financial."
            : area.shortDescription,
        author: { "@id": `${origin}/#jacob-shope` },
        isPartOf: { "@id": `${origin}/#website` },
        about: { "@id": `${pageUrl}#mortgage-service` },
        ...(localPageModified ? { dateModified: localPageModified } : {}),
        ...(localResources.length > 0
          ? { citation: localResources.map((resource) => resource.href) }
          : {}),
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#mortgage-service`,
        name:
          area.slug === "charlotte"
            ? "Mortgage lender comparison and home loan guidance in Charlotte"
            : `Mortgage guidance in ${area.name}`,
        serviceType: "Mortgage brokerage and home loan guidance",
        provider: { "@id": `${origin}/#mpire-financial` },
        areaServed: getAreaServed(area),
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${origin}/service-areas` },
          { "@type": "ListItem", position: 3, name: area.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="bg-offwhite">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <p className="font-semibold text-gold">Local mortgage guidance from Jacob Shope</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          {getH1(area)}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">
          {area.introParagraph}
        </p>

        {area.slug === "charlotte" && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">Comparing mortgage lenders in Charlotte?</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              I work as a mortgage broker, which means I can compare loan options from multiple lending sources rather than being limited to one bank&apos;s product menu. For Charlotte buyers, that can include conventional, FHA, VA, jumbo, first-time buyer, investment-property, construction, bridge, and other available mortgage options. I help you compare the payment, cash to close, loan structure, appraisal considerations, credit requirements, and timing before you choose a path.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
              <Link href="/mortgage-broker-vs-lender-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Broker vs Lender</Link>
              <Link href="/charlotte-home-buying-mortgage-guide" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Charlotte Real Estate Financing Guide</Link>
              <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Pre-Approval</Link>
              <Link href="/mortgage-credit-score-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Credit</Link>
              <Link href="/first-time-homebuyer-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">First-Time Buyers</Link>
              <Link href="/va-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">VA Loans</Link>
              <Link href="/construction-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Construction Loans</Link>
              <Link href="/investment-property-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Investment Property Loans</Link>
              <Link href="/mortgage-appraisal-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Appraisals</Link>
            </div>
          </section>
        )}

        {(area.slug === "charlotte" || area.slug === "huntersville") && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">Check the 2027 Mecklenburg property revaluation before estimating your payment</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              Mecklenburg County is updating property assessments using January 1, 2027 values. The county says notices are
              expected in early 2027, while city, county, and town officials will set tax rates in the spring and tax bills
              will follow in the summer. The revaluation announcement alone does not establish a future tax bill.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal">
              For a Charlotte or Huntersville purchase, verify the actual parcel and current property taxes, including
              applicable municipal taxes, and get a property-specific insurance quote. Do not assume that the seller&apos;s
              existing tax bill or an online payment estimate will match your future cost. Compare the projected tax,
              insurance, and escrow figures across Loan Estimates, along with the interest rate and closing costs.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <a href={MECKLENBURG_2027_REVALUATION_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mecklenburg County: 2027 revaluation update</a>
              <a href={MECKLENBURG_TAX_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mecklenburg property tax records</a>
              <a href={CFPB_COMPARE_ESTIMATES_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">CFPB: Compare Loan Estimates</a>
              <Link href="/how-much-house-can-i-afford-charlotte" className="text-gold hover:underline">Charlotte affordability guide</Link>
              <Link href="/mortgage-closing-costs-charlotte" className="text-gold hover:underline">Charlotte closing-cost guide</Link>
            </div>
          </section>
        )}

        {area.slug === "davidson" && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">Davidson property taxes: why the exact county and parcel matter</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              Davidson spans Mecklenburg and Iredell counties. The Town of Davidson&apos;s FY2027
              property-tax page lists a town rate of $0.276 per $100 of assessed value, with
              Mecklenburg County at $0.4927 and Iredell County at $0.50 per $100. Town taxes
              apply only where the property is in the town&apos;s taxing jurisdiction. A Davidson
              mailing address by itself does not prove a parcel is inside town limits.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal">
              For an <strong>illustrative $500,000 assessed value</strong> inside town limits,
              Davidson plus the standard Mecklenburg County rate would total about
              <strong> $3,843.50 per year ($320.29 per month)</strong>, while Davidson plus the
              standard Iredell County rate would total about
              <strong> $3,880 per year ($323.33 per month)</strong>. Those examples exclude
              other applicable taxing districts, exemptions, insurance, and HOA costs. They
              are not a tax quote or a promise of future escrow. The assessed value is not
              necessarily the purchase price.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal">
              Both counties have 2027 property revaluations scheduled. Mecklenburg County&apos;s
              November 2, 2026 update says new values will be announced in early 2027 and
              tax rates will subsequently be set by local officials. Before a purchase,
              verify the parcel and current bills with the appropriate county, account for
              the possibility of future assessment changes, and request a property-specific
              insurance quote. For an older home, condominium, or historic-district property,
              also check relevant property-condition, project, and town review requirements.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <a href={DAVIDSON_PROPERTY_TAX_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Town of Davidson: FY2027 tax rates</a>
              <a href={DAVIDSON_TAX_INFORMATION_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Town of Davidson: tax information</a>
              <a href={MECKLENBURG_2027_REVALUATION_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mecklenburg: 2027 revaluation update</a>
              <a href={DAVIDSON_HISTORIC_DISTRICT_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Davidson historic-district requirements</a>
              <Link href="/how-much-house-can-i-afford-charlotte" className="text-gold hover:underline">Compare the full monthly payment</Link>
              <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Mortgage pre-approval guide</Link>
              <Link href="/mortgage-closing-costs-charlotte" className="text-gold hover:underline">Closing costs and cash to close</Link>
            </div>
          </section>
        )}

        {area.slug === "concord" && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">What Concord buyers should check before estimating a payment</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              Cabarrus County publishes its 2026–2027 property-tax rates by jurisdiction. For that fiscal year,
              the county rate is $0.576 per $100 of taxable value and the City of Concord rate is $0.42 per $100.
              For illustration, a property assessed at $400,000 inside Concord city limits would have $3,984
              per year, or $332 per month, in combined county and standard city property tax alone. That is
              not a property-specific tax quote. Additional districts may apply, and assessed value is not
              necessarily the purchase price. Tax rates can change in future budget years.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal">
              Before making an offer, verify the parcel and its actual tax districts, request a homeowners
              insurance estimate, and account for HOA dues if applicable. For condos, ask about lender
              project-review requirements. For new construction, clarify completion and occupancy timing
              and whether the builder&apos;s quoted payment includes realistic tax and insurance estimates.
              Your Loan Estimate and final loan approval will depend on the borrower and property.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <a href={CABARRUS_TAX_RATES_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Cabarrus County: 2026–2027 tax rates</a>
              <a href={CABARRUS_TAX_BILLS_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Check the parcel tax bill</a>
              <Link href="/how-much-house-can-i-afford-charlotte" className="text-gold hover:underline">Full-payment affordability</Link>
              <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Mortgage pre-approval</Link>
              <Link href="/construction-loans-charlotte" className="text-gold hover:underline">Construction financing</Link>
              <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">First-time buyer guide</Link>
            </div>
          </section>
        )}

        {area.slug === "gastonia" && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">What Gastonia homebuyers should check before making an offer</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              Before quoting the monthly payment, look up the specific home through Gaston County&apos;s
              tax and parcel resources. Confirm whether county, municipal, or additional district
              property taxes apply, plus HOA dues and a property-specific insurance estimate.
              A seller&apos;s existing bill or an online estimate may not match the buyer&apos;s future
              escrow amount, and assessed value does not necessarily equal the purchase price.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal">
              Older homes, acreage, manufactured homes, condominiums, and new construction can raise
              different questions about appraisal, property condition, foundation requirements,
              permits, and project eligibility. With a USDA loan, check the individual property
              address and borrower qualifications through official USDA resources before relying
              on the possibility of zero down. Program availability and final approval depend on
              the lender, borrower, and property.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <a href={GASTON_TAX_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Gaston County property taxes</a>
              <a href={GASTON_GIS_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Gaston County parcel mapping</a>
              <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Mortgage pre-approval</Link>
              <Link href="/how-much-house-can-i-afford-charlotte" className="text-gold hover:underline">Full payment and affordability</Link>
              <Link href="/mortgage-closing-costs-charlotte" className="text-gold hover:underline">Cash-to-close guide</Link>
              <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">First-time buyer guide</Link>
            </div>
          </section>
        )}

        {area.slug === "lake-norman" && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">Mortgage guidance across the Lake Norman corridor</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              Lake Norman financing can look very different depending on the property. Buyers may be comparing an inland single-family home, new construction, a condominium, a higher-priced property, or an investment property. I help buyers and homeowners across Huntersville, Cornelius, Davidson, Mooresville, and the surrounding lake area compare the financing structure, payment, credit, appraisal considerations, and cash needed before making the next move.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
              <Link href="/service-areas/huntersville" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Huntersville</Link>
              <Link href="/service-areas/cornelius" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Cornelius</Link>
              <Link href="/service-areas/davidson" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Davidson</Link>
              <Link href="/service-areas/mooresville" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mooresville</Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
              <Link href="/mortgage-preapproval-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Pre-Approval</Link>
              <Link href="/mortgage-credit-score-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Credit</Link>
              <Link href="/first-time-homebuyer-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">First-Time Buyers</Link>
              <Link href="/va-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">VA Loans</Link>
              <Link href="/construction-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Construction Loans</Link>
              <Link href="/investment-property-loans-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Investment Property Loans</Link>
              <Link href="/mortgage-appraisal-charlotte" className="rounded-full border border-navy/20 px-4 py-2 text-navy hover:border-gold hover:text-gold">Mortgage Appraisals</Link>
            </div>
          </section>
        )}

        {area.slug === "lake-norman" && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">Buying a waterfront home around Lake Norman?</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              Waterfront properties can require more review than an inland home. Before you write an offer, build the
              mortgage payment around the specific address rather than assuming every lake property has the same
              insurance, appraisal, or property-use considerations.
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-charcoal">
              <li>
                Check the address on the official{" "}
                <a href="https://msc.fema.gov/portal/home" target="_blank" rel="noopener noreferrer" className="font-medium text-gold hover:underline">
                  FEMA Flood Map Service Center
                </a>
                , then request a property-specific insurance quote. A map is a starting point, not an insurance quote.
              </li>
              <li>
                Ask the seller and your real estate agent for available dock, pier, and shoreline paperwork.
                The{" "}
                <a href="https://lnmc.org/faq-items/who-do-i-contact-about-docks-piers-shoreline-management-and-dredging/" target="_blank" rel="noopener noreferrer" className="font-medium text-gold hover:underline">
                  Lake Norman Marine Commission
                </a>{" "}
                directs shoreline-permit questions to Duke Energy Lake Use Permitting. Verify the status of
                any existing structures and any proposed changes with the appropriate authority.
              </li>
              <li>
                Review property taxes, HOA dues, insurance costs, and any special property features early so the
                total monthly payment is realistic. Confirm survey, access, and property-use questions with
                the appropriate property professionals.
              </li>
              <li>
                Discuss unusual waterfront features with the lender before appraisal ordering. Financing
                requirements depend on the property, loan program, and appraisal findings.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Mortgage Pre-Approval</Link>
              <Link href="/mortgage-appraisal-charlotte" className="text-gold hover:underline">Mortgage Appraisal Guide</Link>
              <Link href="/construction-loans-charlotte" className="text-gold hover:underline">Construction Financing</Link>
              <Link href="/service-areas/cornelius" className="text-gold hover:underline">Cornelius Mortgage Guide</Link>
            </div>
          </section>
        )}

        {townBuyerNotes && (
          <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-navy">What to review before an offer in {area.name}</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              The property details can change the loan review and monthly payment. These are
              practical questions worth resolving before you commit to a purchase.
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-charcoal">
              {townBuyerNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              <Link href="/mortgage-preapproval-charlotte" className="text-gold hover:underline">Pre-Approval Guide</Link>
              <Link href="/mortgage-closing-costs-charlotte" className="text-gold hover:underline">Closing Costs</Link>
              <Link href="/mortgage-appraisal-charlotte" className="text-gold hover:underline">Appraisal Guide</Link>
              <Link href="/service-areas/lake-norman" className="text-gold hover:underline">Lake Norman Mortgage Guide</Link>
              {area.slug === "mooresville" && (
                <>
                  <Link href="/construction-loans-charlotte" className="text-gold hover:underline">Construction Loan Guide</Link>
                  <Link href="/first-time-homebuyer-charlotte" className="text-gold hover:underline">First-Time Buyer Guide</Link>
                </>
              )}
            </div>
          </section>
        )}

        {localResources.length > 0 && (
          <section className="mt-10 rounded-2xl border border-gold/25 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Official local sources</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">Homebuying and property resources for {area.name}</h2>
            <p className="mt-4 leading-relaxed text-charcoal">
              Property taxes, assistance programs, and public property records can affect a buyer&apos;s monthly payment and cash planning. I use official city, county, and state sources when those details matter to a mortgage scenario.
            </p>
            <ul className="mt-6 space-y-4">
              {localResources.map((resource) => (
                <li key={resource.href}>
                  <a href={resource.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline">
                    {resource.label}
                  </a>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/80">{resource.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Loan Programs Available</h2>
          <p className="mt-2 text-charcoal">Explore mortgage options for buyers and homeowners in this area:</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {LOAN_PROGRAMS.map((program) => (
              <li key={program.slug}>
                <Link href={getProgramHref(program.slug)} className="inline-flex items-center font-medium text-gold hover:underline">
                  {program.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Why Choose a Local Mortgage Professional</h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal md:text-lg">{area.whyLocal}</p>
        </section>

        {nearbyAreas.length > 0 && (
          <section className="mt-14 border-t border-charcoal/10 pt-14">
            <h2 className="text-xl font-bold tracking-tight text-navy md:text-2xl">Nearby Areas We Serve</h2>
            <ul className="mt-6 flex flex-wrap gap-4">
              {nearbyAreas.map((nearby) => (
                <li key={nearby.slug}>
                  <Link href={`/service-areas/${nearby.slug}`} className="font-medium text-gold hover:underline">
                    {nearby.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-14">
          <AuthorBox />
        </div>

        <section className="mt-14 text-center">
          <Link href="/contact" className="inline-flex rounded-lg bg-gold px-6 py-3 font-semibold text-white transition-colors hover:bg-gold/90">
            {getCTAText(area)}
          </Link>
        </section>
      </div>
    </div>
  );
}
