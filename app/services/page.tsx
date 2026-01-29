import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "IT Services | Comprehensive Technology Solutions - JAYAA IT Solution",
  description: "Empowering businesses with cutting-edge technology, robust security, and expert guidance. Our comprehensive suite of services covers everything from zero trust security to digital transformation.",
  keywords: ["IT Services", "Technology Solutions", "Cybersecurity", "Zero Trust", "Digital Transformation", "IT Consulting"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/services",
  },
  openGraph: {
    title: "IT Services | Comprehensive Technology Solutions - JAYAA IT Solution",
    description: "Empowering businesses with cutting-edge technology, robust security, and expert guidance.",
    url: "https://www.jayaaitsolution.com/services",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services | Comprehensive Technology Solutions - JAYAA IT Solution",
    description: "Empowering businesses with cutting-edge technology, robust security, and expert guidance.",
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

export default ServicesPageClient;
