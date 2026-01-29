"use client";

import {
  Shield,
  Eye,
  Bug,
  Database,
  GraduationCap,
  Search,
  Monitor,
  Target,
  Lock,
  Key,
  FileWarning,
  Mail,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    icon: Eye,
    title: "Threat Detection & Response",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    items: [
      { icon: Search, name: "Dark Web Monitoring", description: "Detect compromised credentials and organizational exposure" },
      { icon: Monitor, name: "SOC Monitoring 24/7", description: "Round-the-clock security operations center monitoring" },
      { icon: Shield, name: "Cybersecurity Dashboard", description: "Real-time visibility into security metrics and alerts" },
      { icon: Target, name: "Breach & Attack Simulation", description: "Test security controls against threats" },
    ],
  },
  {
    icon: Bug,
    title: "Security Testing",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    items: [
      { icon: Target, name: "Red Teaming", description: "Simulated cyberattacks to test detection and response" },
      { icon: Bug, name: "DAST Testing", description: "Dynamic application security testing for running apps" },
      { icon: FileWarning, name: "SAST Testing", description: "Static code analysis for early vulnerability detection" },
      { icon: Search, name: "VA-PT Services", description: "Comprehensive testing for infrastructure, apps, and APIs" },
    ],
  },
  {
    icon: Database,
    title: "Data Protection & Access Control",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    items: [
      { icon: Search, name: "Auto Data Discovery & Classification", description: "Automated identification and protection of sensitive data" },
      { icon: Key, name: "Privileged Access Management", description: "Secure access to critical systems with role-based controls" },
      { icon: Lock, name: "Data Loss Prevention (DLP)", description: "Prevent accidental or malicious data leaks" },
      { icon: Shield, name: "API Security", description: "Secure APIs through encryption and threat monitoring" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Security Awareness & Training",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    items: [
      { icon: Mail, name: "Phishing Drills & Simulations", description: "Test and train user awareness with simulated attacks" },
      { icon: GraduationCap, name: "Security Awareness Training", description: "Comprehensive cybersecurity education programs" },
      { icon: Mail, name: "Security Awareness Emailers", description: "Regular educational content and best practices" },
      { icon: Shield, name: "DMARC Implementation", description: "Secure your domain from spoofing and phishing" },
    ],
  },
];

export function CybersecuritySolutions() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#9A1B21]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#7A5C00]/5 to-transparent rounded-full blur-3xl" />
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
            <span>Cybersecurity Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Complete Security{" "}
            <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">
              Protection Suite
            </span>
          </h2>
          <p className="text-lg text-[#6A6A6A] leading-relaxed">
            Advanced cybersecurity solutions covering threat detection, security testing,
            data protection, and awareness training.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 shadow-sm hover:shadow-xl hover:shadow-[#9A1B21]/5 transition-all duration-500 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#9A1B21]/10 border border-[#9A1B21]/20 flex items-center justify-center group-hover:bg-[#9A1B21] group-hover:border-[#9A1B21] transition-all duration-300">
                    <category.icon className="w-7 h-7 text-[#9A1B21] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {category.title}
                  </h3>
                </div>

                {/* Items List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E8E8E8] hover:bg-white hover:border-[#9A1B21]/20 hover:shadow-md transition-all duration-300 group/item"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9A1B21]/10 to-[#9A1B21]/5 flex items-center justify-center flex-shrink-0 group-hover/item:from-[#9A1B21]/20 group-hover/item:to-[#9A1B21]/10 transition-all duration-300">
                          <item.icon className="w-4 h-4 text-[#9A1B21]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1 group-hover/item:text-[#9A1B21] transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#6A6A6A] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 font-medium"
          >
            Explore All Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 font-medium"
          >
            Get Security Assessment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
