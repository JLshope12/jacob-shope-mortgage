import Link from "next/link";

type Props = { area: "charlotte" | "lake-norman" };

export function LocalPropertyResources({ area }: Props) {
  const isLakeNorman = area === "lake-norman";

  return (
    <section className="mt-10 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8" aria-labelledby="local-property-resources">
      <h2 id="local-property-resources" className="text-2xl font-bold text-navy">
        {isLakeNorman ? "Research a Lake Norman property before comparing loans" : "Charlotte property records to check before making an offer"}
      </h2>
      <p className="mt-4 leading-relaxed text-charcoal">
        {isLakeNorman
          ? "Start with the property's street address and county, rather than the Lake Norman label. Use the records for the county where the parcel is located. When comparing homes, keep each property's tax information, insurance quote, association dues, and intended use alongside its purchase price."
          : "For a Charlotte property in Mecklenburg County, start with the county's parcel record and tax information. Save the parcel number and check that the address matches the home you are considering. Then bring those records to the conversation about your proposed payment and cash to close."}
      </p>
      <ol className="mt-6 list-decimal space-y-6 pl-5 text-charcoal">
        <li className="pl-1">
          <h3 className="font-bold text-navy">Confirm the parcel and mapped restrictions</h3>
          <p className="mt-2 leading-relaxed">
            <a href="https://gis.mecknc.gov/" className="font-medium text-gold underline">Mecklenburg County GIS and POLARIS</a>{" "}
            provide property ownership mapping and overlays for zoning, floodplains, and other restrictions.
            {isLakeNorman && <> For a parcel in Iredell County, use <a href="https://www.iredellcountync.gov/554/GIS-Mapping" className="font-medium text-gold underline">Iredell County GIS Mapping</a>, which includes tax, zoning, and floodplain maps.</>}
            {" "}Use these as research tools and confirm property-specific questions with the relevant county office.
          </p>
        </li>
        <li className="pl-1">
          <h3 className="font-bold text-navy">Gather the tax record for the payment discussion</h3>
          <p className="mt-2 leading-relaxed">
            The <a href="https://tax.mecknc.gov/" className="font-medium text-gold underline">Mecklenburg County Office of Tax Administration</a>{" "}
            links to property values, records, and tax bills.
            {isLakeNorman && <> <a href="https://taxweb.iredellcountync.gov/PublicAccess/" className="font-medium text-gold underline">Iredell County Online Tax Services</a> offers real estate and tax bill searches for Iredell parcels.</>}
            {" "}Ask which tax estimate should be used for the proposed loan, especially when considering new construction. A county record is a starting point, not a quote for your future monthly payment.
          </p>
        </li>
        <li className="pl-1">
          <h3 className="font-bold text-navy">Review flood information for the exact address</h3>
          <p className="mt-2 leading-relaxed">
            Use the <a href="https://msc.fema.gov/portal/home" className="font-medium text-gold underline">FEMA Flood Map Service Center</a>{" "}
            to research published flood hazard maps. Bring questions about the mapped area and insurance to your lender and insurance professional before finalizing the budget.
          </p>
        </li>
      </ol>
      <p className="mt-6 leading-relaxed text-charcoal">
        {isLakeNorman
          ? <>If you are comparing a resale home with a build, read the <Link href="/construction-loans-charlotte" className="font-medium text-gold underline">construction financing guide</Link>. For either option, review <Link href="/mortgage-appraisal-charlotte" className="font-medium text-gold underline">how the mortgage appraisal fits into the loan</Link>, then use the <Link href="/calculators/payment" className="font-medium text-gold underline">payment calculator</Link> to compare scenarios with the property costs included.</>
          : <>Next, review <Link href="/mortgage-closing-costs-charlotte" className="font-medium text-gold underline">mortgage closing costs</Link> and <Link href="/mortgage-appraisal-charlotte" className="font-medium text-gold underline">the appraisal process</Link>. Bring the address and your questions to a <Link href="/mortgage-preapproval-charlotte" className="font-medium text-gold underline">preapproval conversation</Link> so the financing discussion reflects the property you want to buy.</>}
      </p>
      <p className="mt-4 text-sm text-charcoal/75">Official resource links checked September 8, 2026.</p>
    </section>
  );
}
