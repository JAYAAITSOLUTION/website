import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Expert IT & Cybersecurity Professionals - JAYAA IT Solution",
  description: "Meet the expert team at JAYAA IT Solution. Our experienced professionals deliver innovative cybersecurity and IT solutions with decades of combined industry expertise.",
  keywords: ["Team", "Our Team", "IT Professionals", "Cybersecurity Experts", "IT Team", "Leadership"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/team",
  },
  openGraph: {
    title: "Our Team | Expert IT & Cybersecurity Professionals - JAYAA IT Solution",
    description: "Meet the expert team at JAYAA IT Solution delivering innovative cybersecurity and IT solutions.",
    url: "https://www.jayaaitsolution.com/team",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Expert IT & Cybersecurity Professionals - JAYAA IT Solution",
    description: "Meet the expert team at JAYAA IT Solution delivering innovative cybersecurity and IT solutions.",
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

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
