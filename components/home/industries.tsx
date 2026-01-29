"use client";

import { Building2, HeartPulse, ShoppingCart, Landmark, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-[#9A1B21]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-[#7A5C00]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
            <span>Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Specialized Solutions for{" "}
            <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-lg text-[#6A6A6A] leading-relaxed">
            We deliver tailored cybersecurity and IT solutions across diverse industries,
            ensuring regulatory compliance and robust protection for your specific sector needs.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 shadow-sm hover:shadow-xl hover:shadow-[#9A1B21]/5 transition-all duration-500 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#9A1B21]/10 border border-[#9A1B21]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A1B21] group-hover:border-[#9A1B21] transition-all duration-300">
                    <industry.icon className="w-8 h-8 text-[#9A1B21] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-[#9A1B21] mb-1 block">
                      {industry.fullName}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-[#6A6A6A] mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAFAFA] border border-[#E8E8E8] text-[#4A4A4A] group-hover:border-[#9A1B21]/20 group-hover:bg-[#9A1B21]/5 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 font-medium"
          >
            Discuss Your Industry Needs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
