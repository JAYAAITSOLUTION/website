import { Metadata } from "next";
import ZeroTrustPageClient from "./ZeroTrustPageClient";

export const metadata: Metadata = {
  title: "Zero Trust Security | Enterprise Protection - JAYAA IT Solution",
  description: "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring. Protect your enterprise from modern threats.",
  keywords: ["Zero Trust", "Zero Trust Security", "Identity Verification", "Micro-segmentation", "Network Security", "Enterprise Security"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/services/zero-trust",
  },
  openGraph: {
    title: "Zero Trust Security | Enterprise Protection - JAYAA IT Solution",
    description: "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring.",
    url: "https://www.jayaaitsolution.com/services/zero-trust",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Trust Security | Enterprise Protection - JAYAA IT Solution",
    description: "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring.",
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
  "name": "Zero Trust Security Implementation",
  "description": "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring. Protect your enterprise from modern threats.",
  "provider": {
    "@type": "Organization",
    "name": "JAYAA IT Solution Pvt. Ltd.",
    "url": "https://www.jayaaitsolution.com",
  },
  "areaServed": ["India", "Global"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Zero Trust Security Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Identity & Access Management (IAM)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Continuous Risk-Based Authentication"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Network Micro-Segmentation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zero Trust Network Access (ZTNA)"
        }
      }
    ]
  }
};

export default function ZeroTrustPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ZeroTrustPageClient />
    </>
  );
}
