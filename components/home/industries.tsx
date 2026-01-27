"use client";

import { Building2, HeartPulse, ShoppingCart, Landmark } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const industries = [
  {
    icon: Building2,
    title: "BFSI",
    fullName: "Banking, Financial Services & Insurance",
    description:
      "Compliant security solutions for RBI, SEBI, and IRDAI regulations. Protect financial data and ensure transaction security.",
    features: ["RBI Compliance", "Fraud Detection", "Secure Transactions"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    fullName: "Healthcare & Pharmaceuticals",
    description:
      "HIPAA-compliant security for patient data protection and healthcare infrastructure. Secure medical devices and EMR systems.",
    features: ["HIPAA Compliance", "EMR Security", "Medical IoT"],
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    fullName: "Retail & E-Commerce",
    description:
      "Protect customer data and payment systems. Secure e-commerce platforms and supply chain operations.",
    features: ["PCI DSS", "Payment Security", "Supply Chain"],
  },
  {
    icon: Landmark,
    title: "Government",
    fullName: "Government & Public Sector",
    description:
      "Meet stringent government security standards. Protect critical infrastructure and citizen data.",
    features: ["Data Sovereignty", "Critical Infrastructure", "Citizen Services"],
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
              <span className="text-md-primary">Every Sector</span>
            </h2>
            <p className="text-lg text-md-on-surface-variant">
              We understand the unique challenges of different industries and
              deliver tailored security solutions that meet sector-specific
              compliance requirements.
            </p>
          </div>
        </BlurFade>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
      </div>
    </section>
  );
}
