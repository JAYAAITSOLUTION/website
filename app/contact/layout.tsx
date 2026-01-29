import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get Expert IT Support & Consultation - JAYAA IT Solution",
  description: "Get in touch with JAYAA IT Solution for expert IT support and consultation. We're here to help transform your business with innovative solutions.",
  keywords: ["Contact", "IT Support", "IT Consultation", "Get in Touch", "Help", "Support"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/contact",
  },
  openGraph: {
    title: "Contact Us | Get Expert IT Support & Consultation - JAYAA IT Solution",
    description: "Get in touch with JAYAA IT Solution for expert IT support and consultation. We're here to help transform your business.",
    url: "https://www.jayaaitsolution.com/contact",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Get Expert IT Support & Consultation - JAYAA IT Solution",
    description: "Get in touch with JAYAA IT Solution for expert IT support and consultation. We're here to help transform your business.",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
