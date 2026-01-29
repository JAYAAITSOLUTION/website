import { Metadata } from "next";
import DigitalTransformationPageClient from "./DigitalTransformationPageClient";

export const metadata: Metadata = {
  title: "Digital Transformation Services | Cloud & Automation - JAYAA IT Solution",
  description: "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions. Transform your business for the digital age.",
  keywords: ["Digital Transformation", "Cloud Migration", "Automation", "Modern Workplace", "Digital Innovation", "Business Transformation"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/services/digital-transformation",
  },
  openGraph: {
    title: "Digital Transformation Services | Cloud & Automation - JAYAA IT Solution",
    description: "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions.",
    url: "https://www.jayaaitsolution.com/services/digital-transformation",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Transformation Services | Cloud & Automation - JAYAA IT Solution",
    description: "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions.",
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
  "name": "Digital Transformation Services",
  "description": "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions. Transform your business for the digital age.",
  "provider": {
    "@type": "Organization",
    "name": "JAYAA IT Solution Pvt. Ltd.",
    "url": "https://www.jayaaitsolution.com",
  },
  "areaServed": ["India", "Global"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Transformation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Migration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Process Automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Modern Workplace Solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Strategy Consulting"
        }
      }
    ]
  }
};

export default function DigitalTransformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <DigitalTransformationPageClient />
    </>
  );
}
