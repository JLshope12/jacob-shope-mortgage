import type { MetadataRoute } from "next";
import { getAllServiceAreaSlugs } from "@/data/service-areas";
import { LOAN_PROGRAMS } from "@/data/loan-programs";

const origin = "https://jacobshopemortgage.com";
const siteRefreshDate = new Date("2026-09-20T00:00:00-04:00");
const aboutRefreshDate = new Date("2026-09-20T00:00:00-04:00");
const firstTimeBuyerRefreshDate = new Date("2026-09-20T00:00:00-04:00");
const localServiceRefreshDate = new Date("2026-09-21T00:00:00-04:00");
const licensingRefreshDate = new Date("2026-09-22T00:00:00-04:00");
const creditGuideRefreshDate = new Date("2026-09-24T00:00:00-04:00");
const consolidatedProgramSlugs = new Set(["first-time-buyer", "va"]);
const refreshedLocalServiceRoutes = new Set([
  "/service-areas/charlotte",
  "/service-areas/lake-norman",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = [
    "", "/about", "/apply", "/book", "/blog", "/calculators", "/calculators/payment",
    "/calculators/affordability", "/calculators/refinance", "/calculators/amortization",
    "/contact", "/faq", "/licensing", "/loan-programs", "/mortgage-guides", "/newsletter", "/rates",
    "/service-areas", "/down-payment-assistance-charlotte", "/va-loans-charlotte",
    "/first-time-homebuyer-charlotte", "/first-responder-home-loans-charlotte",
    "/charlotte-home-buying-mortgage-guide", "/charlotte-housing-market-september-2026",
    "/charlotte-mortgage-loan-limits-2026", "/investment-property-loans-charlotte",
    "/construction-loans-charlotte", "/mortgage-broker-vs-lender-charlotte",
    "/mortgage-preapproval-charlotte", "/mortgage-credit-score-charlotte",
    "/mortgage-dti-charlotte", "/mortgage-income-employment-charlotte",
    "/seller-concessions-north-carolina", "/refinance-charlotte",
    "/home-equity-heloc-charlotte", "/how-much-house-can-i-afford-charlotte",
    "/mortgage-closing-costs-charlotte", "/mortgage-appraisal-charlotte",
    "/fha-vs-conventional-charlotte", "/dscr-loans-charlotte",
    "/private-mortgage-insurance-charlotte", "/cash-out-refinance-charlotte",
    "/bridge-loans-charlotte",
  ];
  const serviceRoutes = getAllServiceAreaSlugs().map((slug) => `/service-areas/${slug}`);
  const programRoutes = LOAN_PROGRAMS
    .filter((program) => !consolidatedProgramSlugs.has(program.slug))
    .map((program) => `/loan-programs/${program.slug}`);

  return [...mainRoutes, ...serviceRoutes, ...programRoutes].map((path) => ({
    url: `${origin}${path}`,
    lastModified:
      refreshedLocalServiceRoutes.has(path)
        ? localServiceRefreshDate
        : path === "/about"
          ? aboutRefreshDate
          : path === "/first-time-homebuyer-charlotte"
            ? firstTimeBuyerRefreshDate
            : path === "/licensing"
              ? licensingRefreshDate
              : path === "/mortgage-credit-score-charlotte"
                ? creditGuideRefreshDate
                : siteRefreshDate,
    changeFrequency:
      path === "/newsletter" || path === "/charlotte-housing-market-september-2026"
        ? "weekly"
        : "monthly",
    priority:
      path === ""
        ? 1
        : [
            "/mortgage-guides",
            "/about",
            "/blog",
            "/charlotte-home-buying-mortgage-guide",
            "/charlotte-housing-market-september-2026",
            "/charlotte-mortgage-loan-limits-2026",
            "/first-responder-home-loans-charlotte",
          ].includes(path)
          ? 0.9
          : [
              "/va-loans-charlotte",
              "/first-time-homebuyer-charlotte",
              "/investment-property-loans-charlotte",
              "/construction-loans-charlotte",
              "/mortgage-broker-vs-lender-charlotte",
              "/mortgage-preapproval-charlotte",
              "/mortgage-credit-score-charlotte",
              "/mortgage-dti-charlotte",
              "/mortgage-income-employment-charlotte",
              "/seller-concessions-north-carolina",
              "/refinance-charlotte",
              "/home-equity-heloc-charlotte",
              "/how-much-house-can-i-afford-charlotte",
              "/mortgage-closing-costs-charlotte",
              "/mortgage-appraisal-charlotte",
              "/fha-vs-conventional-charlotte",
              "/dscr-loans-charlotte",
              "/private-mortgage-insurance-charlotte",
              "/cash-out-refinance-charlotte",
              "/bridge-loans-charlotte",
            ].includes(path)
            ? 0.85
            : path === "/newsletter" || path === "/licensing"
              ? 0.8
              : 0.7,
  }));
}
