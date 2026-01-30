import { Metadata } from "next";
import VulspherePageClient from "./VulspherePageClient";

export const metadata: Metadata = {
  title: "VulSphere - Enterprise Vulnerability Management Platform | JAYAA IT Solution",
  description: "Comprehensive vulnerability management platform for modern security teams. Track 50K+ vulnerabilities, achieve 73% faster remediation, and ensure compliance across 15+ frameworks.",
  keywords: [
    "vulnerability management",
    "vulnerability scanner",
    "security compliance",
    "enterprise security",
    "vulnerability assessment",
    "cybersecurity platform",
    "SOC 2 compliance",
    "penetration testing",
    "risk management",
    "VulSphere"
  ],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/products/vulsphere"
  },
  openGraph: {
    title: "VulSphere - Enterprise Vulnerability Management Platform",
    description: "Comprehensive vulnerability management platform for modern security teams.",
    url: "https://www.jayaaitsolution.com/products/vulsphere",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/products/vulsphere/og-image.png",
        width: 1200,
        height: 630,
        alt: "VulSphere Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "VulSphere - Enterprise Vulnerability Management Platform",
    description: "Comprehensive vulnerability management platform for modern security teams.",
    images: ["/images/products/vulsphere/og-image.png"],
    site: "@jayaaitsolution",
    creator: "@jayaaitsolution"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// Software Application Schema for JSON-LD
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "VulSphere",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web, Cloud, On-Premise",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free 14-day trial available"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150"
  },
  creator: {
    "@type": "Organization",
    name: "JAYAA IT Solution",
    url: "https://www.jayaaitsolution.com"
  },
  description: "Comprehensive vulnerability management platform for modern security teams. Track 50K+ vulnerabilities, achieve 73% faster remediation, and ensure compliance across 15+ frameworks."
};

export default function VulspherePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <VulspherePageClient />
    </>
  );
}
