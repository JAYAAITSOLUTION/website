"use client";

import { Building2, HeartPulse, ShoppingCart, Landmark, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

const industries = [
  {
    icon: Building2,
    title: "BFSI",
    fullName: "Banking, Financial Services & Insurance",
    description:
      "We ensure regulatory compliance and secure data exchange for financial institutions with RBI-ready documentation, real-time VAPT, and 24/7 SOC monitoring for fraud detection.",
    features: [
      "RBI-ready documentation",
      "Real-time VAPT",
      "24/7 SOC monitoring",
      "Fraud detection systems",
      "Regulatory compliance",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    fullName: "Healthcare & Pharmaceuticals",
    description:
      "With the rise of digital patient records, we support HIPAA and NDHM security compliance, EMR/HIMS testing, and phishing training for medical staff.",
    features: [
      "HIPAA compliance",
      "NDHM security compliance",
      "EMR/HIMS testing",
      "Phishing training for medical staff",
      "Patient data protection",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Retail & SaaS",
    fullName: "Retail & E-Commerce",
    description:
      "We help fast-growing online businesses secure user data and transactions through PCI-DSS gap analysis, DevSecOps services, and bot mitigation strategies.",
    features: [
      "PCI-DSS gap analysis",
      "DevSecOps services",
      "Bot mitigation strategies",
      "User data protection",
      "Transaction security",
    ],
  },
  {
    icon: Landmark,
    title: "Government/Public Sector",
    fullName: "Government & Public Sector",
    description:
      "Our team has conducted portal and infrastructure testing for state and central projects, aligning with CERT-IN methodologies and SCADA security guidelines.",
    features: [
      "Portal testing for government",
      "Infrastructure testing",
      "CERT-IN methodologies",
      "SCADA security guidelines",
      "Public sector compliance",
    ],
  },
];

export function Industries() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
              <span>Industries We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              Specialized Solutions for{" "}
              <span className="text-md-primary">Every Industry</span>
            </h2>
            <p className="text-lg text-md-on-surface-variant">
              We deliver tailored cybersecurity and IT solutions across diverse industries,
              ensuring regulatory compliance and robust protection for your specific sector needs.
            </p>
          </div>
        </BlurFade>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {industries.map((industry, index) => (
            <BlurFade key={industry.title} delay={0.2 + index * 0.1} inView>
              <div className="group p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-md-primary-container flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-md-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-md-primary mb-1 block">
                      {industry.fullName}
                    </span>
                    <h3 className="text-2xl font-bold text-md-on-surface mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-md-on-surface-variant mb-4">
                      {industry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-md-primary-container text-md-on-primary-container"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA Button */}
        <BlurFade delay={0.5} inView>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Discuss Your Industry Needs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
