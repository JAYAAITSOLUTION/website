import { Metadata } from "next";
import AdvancedITPageClient from "./AdvancedITPageClient";

export const metadata: Metadata = {
  title: "Advanced IT Solutions | Infrastructure & Security - JAYAA IT Solution",
  description: "Cutting-edge infrastructure, network security, and endpoint protection for modern enterprises. Secure your IT environment with advanced solutions.",
  keywords: ["Advanced IT", "Network Security", "Infrastructure", "Endpoint Protection", "Enterprise IT", "IT Security"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/services/advanced-it",
  },
  openGraph: {
    title: "Advanced IT Solutions | Infrastructure & Security - JAYAA IT Solution",
    description: "Cutting-edge infrastructure, network security, and endpoint protection for modern enterprises.",
    url: "https://www.jayaaitsolution.com/services/advanced-it",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced IT Solutions | Infrastructure & Security - JAYAA IT Solution",
    description: "Cutting-edge infrastructure, network security, and endpoint protection for modern enterprises.",
    site: "@jayaaitsolution",
    creator: "@jayaaitsolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Service Schema for JSON-LD
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Advanced IT Solutions",
  "description": "Cutting-edge infrastructure, network security, and endpoint protection for modern enterprises. Secure your IT environment with advanced solutions.",
  "provider": {
    "@type": "Organization",
    "name": "JAYAA IT Solution Pvt. Ltd.",
    "url": "https://www.jayaaitsolution.com",
  },
  "areaServed": ["India", "Global"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Advanced IT Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Network Security Solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Endpoint Protection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Infrastructure Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Firewall & DLP Implementation"
        }
      }
    ]
  }
};

export default function AdvancedITPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <AdvancedITPageClient />
    </>
  );
}
