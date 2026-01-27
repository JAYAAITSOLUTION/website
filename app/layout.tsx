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

export const metadata: Metadata = {
  title: "JAYAA IT Solution Pvt. Ltd. | Enterprise Cybersecurity & IT Solutions",
  description: "JAYAA IT Solution delivers enterprise-grade cybersecurity, Zero Trust architecture, digital transformation, and IT consulting services for BFSI, Healthcare, and Government sectors.",
  keywords: ["cybersecurity", "Zero Trust", "IT solutions", "digital transformation", "enterprise security", "JAYAA IT"],
  authors: [{ name: "JAYAA IT Solution" }],
  openGraph: {
    title: "JAYAA IT Solution Pvt. Ltd.",
    description: "Enterprise Cybersecurity & IT Solutions Partner",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
