import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const GA_MEASUREMENT_ID = "G-GEG0J8SFCX";

export const metadata: Metadata = {
  metadataBase: new URL("https://jacobshopemortgage.com"),
  title: {
    default: "Jacob Shope | Charlotte Mortgage Broker",
    template: "%s | Jacob Shope Mortgage",
  },
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
                "@type": "Person",
                "@id": "https://jacobshopemortgage.com/#jacob-shope",
                name: "Jacob Shope",
                url: "https://jacobshopemortgage.com",
                image: "https://jacobshopemortgage.com/images/DSC_0084.jpg",
                telephone: "+1-704-614-5340",
                email: "shope@mpirefi.com",
                jobTitle: "Mortgage Loan Officer",
                identifier: "NMLS 2090979",
                sameAs: [
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
                  "Investment property financing",
                  "Construction loans",
                  "Refinancing",
                  "Home equity",
                ],
                worksFor: { "@id": "https://jacobshopemortgage.com/#mpire-financial" },
              },
              {
                "@type": "FinancialService",
                "@id": "https://jacobshopemortgage.com/#mpire-financial",
                name: "Mpire Financial LLC - Jacob Shope",
                url: "https://jacobshopemortgage.com",
                telephone: "+1-704-614-5340",
                areaServed: [
                  "Charlotte",
                  "Huntersville",
                  "Cornelius",
                  "Davidson",
                  "Lake Norman",
                  "Ballantyne",
                  "Charlotte Metro",
                ],
                identifier: "Mpire Financial LLC NMLS 2108504",
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
