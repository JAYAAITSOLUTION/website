import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Partners | Trusted by Industry Leaders - JAYAA IT Solution",
  description: "Discover JAYAA IT Solution's valued clients and strategic technology partners. We collaborate with industry leaders to deliver exceptional IT and cybersecurity results.",
  keywords: ["Clients", "Partners", "Technology Partners", "Industry Leaders", "Client Success", "Strategic Partners"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/clients-partners",
  },
  openGraph: {
    title: "Clients & Partners | Trusted by Industry Leaders - JAYAA IT Solution",
    description: "Discover JAYAA IT Solution's valued clients and strategic technology partners.",
    url: "https://www.jayaaitsolution.com/clients-partners",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clients & Partners | Trusted by Industry Leaders - JAYAA IT Solution",
    description: "Discover JAYAA IT Solution's valued clients and strategic technology partners.",
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

export default function ClientsPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
