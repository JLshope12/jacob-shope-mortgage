import type { MetadataRoute } from "next";
import { getAllServiceAreaSlugs } from "@/data/service-areas";
import { LOAN_PROGRAMS } from "@/data/loan-programs";

const origin = "https://jacobshopemortgage.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = [
    "", "/about", "/apply", "/book", "/calculators", "/calculators/payment",
    "/calculators/affordability", "/calculators/refinance", "/calculators/amortization",
    "/contact", "/faq", "/loan-programs", "/mortgage-guides", "/newsletter", "/rates",
    "/service-areas", "/down-payment-assistance-charlotte", "/va-loans-charlotte",
    "/first-time-homebuyer-charlotte", "/investment-property-loans-charlotte",
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
  const programRoutes = LOAN_PROGRAMS.map((program) => `/loan-programs/${program.slug}`);

  return [...mainRoutes, ...serviceRoutes, ...programRoutes].map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: path === "/newsletter" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/mortgage-guides" || path === "/about"
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
            : path === "/newsletter"
              ? 0.8
              : 0.7,
  }));
}
