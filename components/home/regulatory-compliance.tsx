"use client";

import { Shield, CheckCircle2, ArrowRight, FileCheck, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const trustIndicators = [
  { icon: FileCheck, label: "100% Compliance Rate", description: "Across all audits" },
  { icon: Users, label: "50+ Enterprise Clients", description: "Trust our expertise" },
  { icon: Award, label: "Certified Experts", description: "Industry recognized" },
];

export function RegulatoryCompliance() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#9A1B21]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#7A5C00]/5 to-transparent rounded-full blur-3xl" />
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
            <Shield className="w-4 h-4" />
            <span>Regulatory Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Aligned with Leading{" "}
            <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">
              Regulatory Standards
            </span>
          </h2>
          <p className="text-lg text-[#6A6A6A] leading-relaxed">
            We ensure our services and solutions meet the highest regulatory standards
            across various industries, providing you with confidence and compliance assurance.
          </p>
        </motion.div>

        {/* Regulatory Bodies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {regulatoryBodies.map((body, index) => (
            <motion.div
              key={body.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 shadow-sm hover:shadow-xl hover:shadow-[#9A1B21]/5 transition-all duration-500 h-full">
                {/* Logo */}
                <div className="relative w-full h-20 mb-4 flex items-center justify-center bg-[#FAFAFA] rounded-xl p-2 border border-[#E8E8E8] group-hover:border-[#9A1B21]/10 transition-colors duration-300">
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
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">
                    {body.name}
                  </h3>
                  <p className="text-xs text-[#9A1B21] font-medium mb-3">
                    {body.fullName}
                  </p>
                  <p className="text-sm text-[#6A6A6A] leading-relaxed">
                    {body.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Trust Indicators + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="p-8 lg:p-12 rounded-3xl bg-[#1A1A1A] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative z-10">
              {/* Top Row - Icon + Headline */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-[#9A1B21] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Comprehensive Compliance Assurance
                    </h3>
                    <p className="text-[#9A9A9A] max-w-2xl leading-relaxed">
                      Our team stays updated with the latest regulatory requirements and
                      implements robust compliance frameworks to ensure your organization
                      meets all necessary standards.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white text-[#1A1A1A] hover:bg-[#9A1B21] hover:text-white transition-all duration-300 font-medium flex-shrink-0 shadow-lg"
                >
                  Get Compliance Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

              {/* Trust Indicators */}
              <div className="grid sm:grid-cols-3 gap-6">
                {trustIndicators.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#9A1B21]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.label}</p>
                      <p className="text-sm text-[#9A9A9A]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
