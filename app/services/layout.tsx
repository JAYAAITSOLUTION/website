import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Enterprise IT & Cybersecurity Solutions - JAYAA IT Solution",
  description: "Explore our comprehensive range of cybersecurity and IT services including Zero Trust Security, Digital Transformation, Advanced IT Solutions, and Professional Services for enterprises.",
  keywords: ["IT Services", "Cybersecurity Services", "Zero Trust", "Digital Transformation", "IT Consulting", "Enterprise Security"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/services",
  },
  openGraph: {
    title: "Our Services | Enterprise IT & Cybersecurity Solutions - JAYAA IT Solution",
    description: "Explore our comprehensive range of cybersecurity and IT services including Zero Trust Security, Digital Transformation, and more.",
    url: "https://www.jayaaitsolution.com/services",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Enterprise IT & Cybersecurity Solutions - JAYAA IT Solution",
    description: "Explore our comprehensive range of cybersecurity and IT services including Zero Trust Security, Digital Transformation, and more.",
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
