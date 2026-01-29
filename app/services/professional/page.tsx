import { Metadata } from "next";
import ProfessionalServicesPageClient from "./ProfessionalServicesPageClient";

export const metadata: Metadata = {
  title: "Professional IT Services | Consulting & Compliance - JAYAA IT Solution",
  description: "Strategic IT consulting, compliance advisory, and managed security services tailored to your business needs. Expert guidance for your IT journey.",
  keywords: ["Professional Services", "IT Consulting", "Compliance Advisory", "Managed Security", "Strategic IT", "IT Advisory"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/services/professional",
  },
  openGraph: {
    title: "Professional IT Services | Consulting & Compliance - JAYAA IT Solution",
    description: "Strategic IT consulting, compliance advisory, and managed security services tailored to your needs.",
    url: "https://www.jayaaitsolution.com/services/professional",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional IT Services | Consulting & Compliance - JAYAA IT Solution",
    description: "Strategic IT consulting, compliance advisory, and managed security services tailored to your needs.",
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
  "name": "Professional IT Services",
  "description": "Strategic IT consulting, compliance advisory, and managed security services tailored to your business needs. Expert guidance for your IT journey.",
  "provider": {
    "@type": "Organization",
    "name": "JAYAA IT Solution Pvt. Ltd.",
    "url": "https://www.jayaaitsolution.com",
  },
  "areaServed": ["India", "Global"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Professional IT Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IT Consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compliance Advisory"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Managed Security Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VAPT Services"
        }
      }
    ]
  }
};

export default function ProfessionalServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ProfessionalServicesPageClient />
    </>
  );
}
