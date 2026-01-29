import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Enterprise IT & Cybersecurity Company - JAYAA IT Solution",
  description: "Learn about JAYAA IT Solution - a premier IT service provider delivering innovative cybersecurity, Zero Trust architecture, and digital transformation solutions globally.",
  keywords: ["About Us", "JAYAA IT Solution", "IT Company", "Cybersecurity Company", "Enterprise IT", "IT Services Provider"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/about",
  },
  openGraph: {
    title: "About Us | Enterprise IT & Cybersecurity Company - JAYAA IT Solution",
    description: "Learn about JAYAA IT Solution - a premier IT service provider delivering innovative cybersecurity and digital transformation solutions.",
    url: "https://www.jayaaitsolution.com/about",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Enterprise IT & Cybersecurity Company - JAYAA IT Solution",
    description: "Learn about JAYAA IT Solution - a premier IT service provider delivering innovative cybersecurity and digital transformation solutions.",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
