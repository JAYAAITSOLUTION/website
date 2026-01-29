import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Cybersecurity Insights & IT Updates - JAYAA IT Solution",
  description: "Stay informed with the latest trends, insights, and best practices in cybersecurity, digital transformation, and IT technology from our expert team.",
  keywords: ["Blog", "Cybersecurity Insights", "IT Updates", "Digital Transformation", "Technology Trends", "IT Best Practices"],
  alternates: {
    canonical: "https://www.jayaaitsolution.com/blogs",
  },
  openGraph: {
    title: "Blog | Cybersecurity Insights & IT Updates - JAYAA IT Solution",
    description: "Stay informed with the latest trends, insights, and best practices in cybersecurity and IT technology.",
    url: "https://www.jayaaitsolution.com/blogs",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Cybersecurity Insights & IT Updates - JAYAA IT Solution",
    description: "Stay informed with the latest trends, insights, and best practices in cybersecurity and IT technology.",
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

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
