"use client";

import { Shield, CheckCircle2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

const regulatoryBodies = [
  {
    name: "RBI",
    fullName: "Reserve Bank of India",
    description: "Banking and financial services regulatory compliance with stringent security and operational guidelines.",
    logo: "/logos/regulatory/rbi.png",
  },
  {
    name: "SEBI",
    fullName: "Securities and Exchange Board of India",
    description: "Capital markets and securities regulation compliance for investment and trading platforms.",
    logo: "/logos/regulatory/sebi.png",
  },
  {
    name: "Cert-IN",
    fullName: "Indian Computer Emergency Response Team",
    description: "National cybersecurity guidelines and incident response framework compliance.",
    logo: "/logos/regulatory/CERTIN.png",
  },
  {
    name: "IRDAI",
    fullName: "Insurance Regulatory and Development Authority of India",
    description: "Insurance sector regulatory compliance with comprehensive risk management and security protocols.",
    logo: "/logos/regulatory/IRDA.png",
  },
  {
    name: "NIST",
    fullName: "NIST Framework",
    description: "International cybersecurity framework standards for comprehensive risk management and security controls.",
    logo: "/logos/regulatory/NIST.png",
  },
  {
    name: "NBFC",
    fullName: "Non-Banking Financial Company",
    description: "Non-banking financial services compliance with regulatory frameworks and operational standards.",
    logo: "/logos/regulatory/nbfc.png",
  },
  {
    name: "ADHICS",
    fullName: "Abu Dhabi Healthcare Information and Cyber Security",
    description: "Guidelines designed to protect sensitive healthcare data and improve cybersecurity resilience in Abu Dhabi.",
    logo: "/logos/regulatory/adhics.webp",
  },
  {
    name: "NESA",
    fullName: "National Electronic Security Authority",
    description: "National electronic security standards and cryptographic compliance for secure communications.",
    logo: "/logos/regulatory/NESA.png",
  },
];

export function RegulatoryCompliance() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Regulatory Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              Aligned with Leading{" "}
              <span className="text-md-primary">Regulatory Standards</span>
            </h2>
            <p className="text-lg text-md-on-surface-variant">
              We ensure our services and solutions meet the highest regulatory standards
              across various industries, providing you with confidence and compliance assurance.
            </p>
          </div>
        </BlurFade>

        {/* Regulatory Bodies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regulatoryBodies.map((body, index) => (
            <BlurFade key={body.name} delay={0.1 + index * 0.05} inView>
              <div className="group p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                {/* Logo */}
                <div className="relative w-full h-20 mb-4 flex items-center justify-center bg-white rounded-xl p-2">
                  <Image
                    src={body.logo}
                    alt={body.fullName}
                    width={120}
                    height={60}
                    className="object-contain max-h-16"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-md-on-surface mb-1">
                    {body.name}
                  </h3>
                  <p className="text-xs text-md-primary font-medium mb-3">
                    {body.fullName}
                  </p>
                  <p className="text-sm text-md-on-surface-variant leading-relaxed">
                    {body.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Bottom CTA */}
        <BlurFade delay={0.5} inView>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-md-primary-container to-md-secondary-container/30 border border-md-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-md-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-md-on-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-md-on-surface mb-2">
                    Comprehensive Compliance Assurance
                  </h3>
                  <p className="text-md-on-surface-variant max-w-2xl">
                    Our team stays updated with the latest regulatory requirements and
                    implements robust compliance frameworks to ensure your organization
                    meets all necessary standards and maintains regulatory approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
