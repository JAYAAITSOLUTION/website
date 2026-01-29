import { Metadata } from "next";
import SolutionsPageClient from "./SolutionsPageClient";

export const metadata: Metadata = {
  title: "IT Solutions | Enterprise Monitoring & Security - JAYAA IT Solution",
  description: "Explore our comprehensive range of 15+ monitoring and security solutions designed to protect your enterprise from advanced cyber threats.",
  keywords: ["IT Solutions", "Security Solutions", "Monitoring Solutions", "Enterprise Security", "Cybersecurity Solutions", "Network Monitoring"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/solutions",
  },
  openGraph: {
    title: "IT Solutions | Enterprise Monitoring & Security - JAYAA IT Solution",
    description: "Explore our comprehensive range of 15+ monitoring and security solutions designed to protect your enterprise.",
    url: "https://www.jayaaitsolution.com/solutions",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Solutions | Enterprise Monitoring & Security - JAYAA IT Solution",
    description: "Explore our comprehensive range of 15+ monitoring and security solutions designed to protect your enterprise.",
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

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
