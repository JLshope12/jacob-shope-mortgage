# Phase 11: useful local property research on existing hubs

Date: September 8, 2026

Charlotte and Lake Norman now connect official parcel, tax, and flood-map resources to the existing appraisal, preapproval, closing-cost, construction, and payment guides. The county links are research sources, not endorsements of Jacob or Mpire. No new landing pages, rates, qualification thresholds, or claimed affiliations were added.

The two hub introductions no longer make unsupported school-quality, market-demand, transaction-volume, or guaranteed-closing claims. All service-area pages now display breadcrumbs consistent with their existing BreadcrumbList schema; their WebPage schema references that list. The remaining down-payment-assistance link to the retired first-time-buyer URL now points directly to the canonical guide.

## Sources verified

- Mecklenburg GIS/POLARIS: https://gis.mecknc.gov/
- Mecklenburg tax records: https://tax.mecknc.gov/
- Iredell GIS: https://www.iredellcountync.gov/554/GIS-Mapping
- Iredell property/tax search: https://taxweb.iredellcountync.gov/PublicAccess/
- FEMA Flood Map Service Center: https://msc.fema.gov/portal/home

## Validation

- Production build and repository ESLint passed.
- Built HTML checks passed for Charlotte, Lake Norman, Huntersville, and down-payment assistance: self-canonicals, one H1, indexability, valid JSON-LD, internal link destinations, retired-link absence, and sitemap inclusion.
- Resource sections are limited to the two hubs; county links differ appropriately.
- All 19 tracked image assets match their Git blob hashes from baseline commit 9a039a92fab51fe35dacecbfdf0761293f213e5c. Existing photo references and presentation were not edited.
- Browser inspection confirmed the resource section renders with the existing design.

The sitemap already records September 8, 2026; its date was not advanced merely for this deployment. Search Console performance and ranking gains were not measured in this pass.
