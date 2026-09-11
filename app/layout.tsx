import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const GA_MEASUREMENT_ID = "G-GEG0J8SFCX";
const NMLS_URL = "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/2090979";
const MPIRE_URL = "https://www.mpirefinancialgroup.com/";
const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jacob+Shope+Mortgage+Broker&query_place_id=ChIJoYVzko0AvIcRA-l3WlYdLW8";
const CORE_AUTHORITY_URLS = [
  "https://jacobshopemortgage.com/about",
  "https://jacobshopemortgage.com/mortgage-guides",
  "https://jacobshopemortgage.com/va-loans-charlotte",
  "https://jacobshopemortgage.com/first-time-homebuyer-charlotte",
  "https://jacobshopemortgage.com/investment-property-loans-charlotte",
  "https://jacobshopemortgage.com/construction-loans-charlotte",
  "https://jacobshopemortgage.com/mortgage-preapproval-charlotte",
  "https://jacobshopemortgage.com/mortgage-credit-score-charlotte",
] as const;

export const metadata: Metadata = {
  metadataBase: new URL("https://jacobshopemortgage.com"),
  applicationName: "Jacob Shope Mortgage",
  authors: [{ name: "Jacob Shope", url: "/about" }],
  creator: "Jacob Shope",
  publisher: "Mpire Financial LLC",
  category: "Mortgage and real estate financing",
  title: "Jacob Shope | Charlotte Mortgage Broker",
  description:
    "Local mortgage guidance for buyers, homeowners, veterans, first responders, and real estate investors across Charlotte and Lake Norman. NMLS# 2090979.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Jacob Shope Mortgage",
    title: "Jacob Shope | Charlotte Mortgage Broker",
    description:
      "Straightforward mortgage guidance for Charlotte, Huntersville, Cornelius, Davidson, Ballantyne, and Lake Norman.",
    images: [{ url: "/images/DSC_0084.jpg", alt: "Jacob Shope, Charlotte mortgage broker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Shope | Charlotte Mortgage Broker",
    description:
      "Straightforward mortgage guidance for Charlotte and Lake Norman homebuyers.",
    images: ["/images/DSC_0084.jpg"],
  },
  verification: {
    google: "5HRFCHh4-CxFunRQ8uAW2mYLrbTsbnFD7nbjMabhzhM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          `}
        </Script>
        <GoogleAnalytics />
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://jacobshopemortgage.com/#website",
                url: "https://jacobshopemortgage.com",
                name: "Jacob Shope Mortgage",
                description: "Mortgage guidance and resources for Charlotte and Lake Norman.",
                publisher: { "@id": "https://jacobshopemortgage.com/#jacob-shope-mortgage" },
                about: { "@id": "https://jacobshopemortgage.com/#jacob-shope" },
                hasPart: CORE_AUTHORITY_URLS.map((url) => ({
                  "@type": "WebPage",
                  url,
                })),
              },
              {
                "@type": "Person",
                "@id": "https://jacobshopemortgage.com/#jacob-shope",
                name: "Jacob Shope",
                alternateName: ["Jacob Shope Mortgage", "Jacob Shope Mortgage Broker"],
                disambiguatingDescription:
                  "Mortgage Loan Officer with Mpire Financial, NMLS# 2090979, serving Charlotte and Lake Norman, North Carolina.",
                url: "https://jacobshopemortgage.com/about",
                image: "https://jacobshopemortgage.com/images/DSC_0084.jpg",
                description:
                  "Charlotte-area mortgage broker and Mortgage Loan Officer with Mpire Financial, NMLS# 2090979, serving homebuyers, homeowners, veterans, first responders, and real estate investors across Charlotte and Lake Norman.",
                telephone: "+1-704-614-5340",
                email: "shope@mpirefi.com",
                jobTitle: "Mortgage Loan Officer",
                identifier: {
                  "@type": "PropertyValue",
                  propertyID: "NMLS",
                  value: "2090979",
                  url: NMLS_URL,
                },
                mainEntityOfPage: { "@id": "https://jacobshopemortgage.com/about#profile" },
                subjectOf: [
                  {
                    "@type": "WebPage",
                    url: NMLS_URL,
                    name: "NMLS Consumer Access profile for Jacob Shope",
                  },
                  {
                    "@type": "WebPage",
                    url: GOOGLE_BUSINESS_URL,
                    name: "Jacob Shope Mortgage Broker Google Business Profile",
                  },
                ],
                sameAs: [
                  NMLS_URL,
                  "https://www.linkedin.com/in/jacob-shope-9b8972282",
                  "https://www.instagram.com/jlshopeloans/",
                  "https://www.facebook.com/jacob.shope.33",
                ],
                knowsAbout: [
                  "Mortgage lending",
                  "Mortgage brokerage",
                  "VA loans",
                  "FHA loans",
                  "Conventional loans",
                  "First-time homebuyer financing",
                  "First responder home financing",
                  "Investment property financing",
                  "DSCR loans",
                  "Construction loans",
                  "Refinancing",
                  "Cash-out refinancing",
                  "Home equity",
                  "HELOCs",
                  "Mortgage qualification",
                  "Mortgage appraisals",
                ],
                worksFor: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
              },
              {
                "@type": "Organization",
                "@id": "https://jacobshopemortgage.com/#jacob-shope-mortgage",
                name: "Jacob Shope Mortgage",
                alternateName: "Jacob Shope Mortgage Broker",
                url: "https://jacobshopemortgage.com",
                sameAs: [GOOGLE_BUSINESS_URL],
                telephone: "+1-704-614-5340",
                email: "shope@mpirefi.com",
                parentOrganization: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
                employee: { "@id": "https://jacobshopemortgage.com/#jacob-shope" },
                areaServed: [
                  "Charlotte",
                  "Huntersville",
                  "Cornelius",
                  "Davidson",
                  "Mooresville",
                  "Lake Norman",
                  "Ballantyne",
                  "Charlotte Metro",
                ],
              },
              {
                "@type": "Organization",
                "@id": "https://jacobshopemortgage.com/#mpire-financial",
                name: "Mpire Financial LLC",
                url: MPIRE_URL,
                sameAs: [MPIRE_URL],
                identifier: {
                  "@type": "PropertyValue",
                  propertyID: "NMLS",
                  value: "2108504",
                },
              },
            ],
          })}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <NewsletterSignup />
        <Footer />
      </body>
    </html>
  );
}
