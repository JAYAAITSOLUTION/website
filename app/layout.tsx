import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Organization Schema for JSON-LD
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JAYAA IT Solution Pvt. Ltd.",
  "url": "https://www.jayaaitsolution.com",
  "logo": "https://www.jayaaitsolution.com/logo-jayaa.png",
  "description": "Enterprise cybersecurity and IT solutions provider specializing in Zero Trust architecture, digital transformation, and advanced IT consulting for BFSI, Healthcare, and Government sectors.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8268949507",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://in.linkedin.com/company/jayaaitsolution",
    "https://twitter.com/jayaaitsolution",
    "https://www.facebook.com/JayaaITSolution/"
  ],
  "areaServed": ["India", "Global"]
};

export const metadata: Metadata = {
  title: "JAYAA IT Solution | Enterprise Cybersecurity & IT Solutions",
  description: "JAYAA IT Solution delivers enterprise-grade cybersecurity and IT consulting services. Transform your business with innovative security solutions.",
  keywords: ["cybersecurity", "Zero Trust", "IT solutions", "digital transformation", "enterprise security", "JAYAA IT"],
  authors: [{ name: "JAYAA IT Solution" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.jayaaitsolution.com",
  },
  openGraph: {
    title: "JAYAA IT Solution Pvt. Ltd.",
    description: "Enterprise Cybersecurity & IT Solutions Partner",
    type: "website",
    url: "https://www.jayaaitsolution.com",
    siteName: "JAYAA IT Solution",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAYAA IT Solution Pvt. Ltd.",
    description: "Enterprise Cybersecurity & IT Solutions Partner",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
