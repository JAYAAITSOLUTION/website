"use client";

import Link from "next/link";
import { ArrowRight, FileSearch, FileCheck, Lock, Mail, Target, Code, Shield, Globe, Zap, AlertTriangle, Search, GraduationCap, Key, Network, Monitor, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const solutions = [
  // Data Protection Solutions
  { icon: FileSearch, title: "Data Classification", description: "Automated identification and categorization of sensitive data", category: "Data Protection" },
  { icon: FileCheck, title: "Document Rights Management", description: "Control access and usage with advanced DRM", category: "Data Protection" },
  { icon: Lock, title: "Data Loss Prevention", description: "Prevent unauthorized data transmission", category: "Data Protection" },
  // Email Security Solutions
  { icon: Mail, title: "DMARC Email Protection", description: "Prevent email spoofing and phishing", category: "Email Security" },
  { icon: Target, title: "Phishing Simulations", description: "Quarterly testing of employee awareness", category: "Email Security" },
  // Code Security Solutions
  { icon: Code, title: "Source Code Review", description: "Quarterly comprehensive security analysis", category: "Code Security" },
  { icon: Shield, title: "API Security", description: "Comprehensive protection against threats and vulnerabilities", category: "Code Security" },
  // Threat Management Solutions
  { icon: Globe, title: "Attack Surface Management", description: "Monitor and manage external attack vectors", category: "Threat Management" },
  { icon: Zap, title: "Breach & Attack Simulation", description: "Continuous security validation", category: "Threat Management" },
  // Security Testing Solutions
  { icon: AlertTriangle, title: "Red Teaming", description: "Advanced persistent threat simulation", category: "Security Testing" },
  { icon: Search, title: "VA and Penetration Testing", description: "Comprehensive vulnerability assessment", category: "Security Testing" },
  // Training Solutions
  { icon: GraduationCap, title: "Security Awareness Training", description: "Weekly security emails and educational wallpapers", category: "Training" },
  // Access Control Solutions
  { icon: Key, title: "Privileged Access Management", description: "Control and monitor privileged user access", category: "Access Control" },
  // Network Security Solutions
  { icon: Network, title: "SD-WAN Solutions", description: "Software-defined wide area networking", category: "Network Security" },
  // Managed Services
  { icon: Monitor, title: "Comprehensive Managed Services", description: "24/7 security operations and monitoring", category: "Managed Services" },
];

const challenges = [
  { title: "Data Overload & Alert Fatigue", priority: "High Priority" },
  { title: "Staff Shortage of Skilled Professionals", priority: "High Priority" },
  { title: "False Positives & Negatives", priority: "Medium Priority" },
  { title: "Integration Issues with Security Tools", priority: "Medium Priority" },
  { title: "Latency in Threat Detection", priority: "High Priority" },
  { title: "Insider Threats & Compromised Users", priority: "High Priority" },
  { title: "Compliance & Reporting Challenges", priority: "Medium Priority" },
  { title: "Shadow IT Risks & Unauthorized Apps", priority: "Medium Priority" },
];

export default function SolutionsPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] overflow-hidden">
        {/* MagicUI Flickering Grid Background */}
        <div className="absolute inset-0 pointer-events-none">
          <FlickeringGrid
            className="absolute inset-0"
            squareSize={4}
            gridGap={6}
            color="#9A1B21"
            maxOpacity={0.12}
            flickerChance={0.3}
          />
        </div>
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E8F5]/50 via-[#E5EDF8]/30 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F5E6D3]/40 via-[#F0DDD0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
                <Sparkles className="w-4 h-4" />
                <span>Our Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                IT Solutions -{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Monitoring & Security</span>
              </h1>

              <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto leading-relaxed mb-8">
                Discover our comprehensive suite of 15+ monitoring and security solutions designed to protect your enterprise from evolving threats.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Explore All Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 text-base font-medium"
                >
                  Get Security Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-[#E8E0F0]/50 via-[#E5DDF0]/20 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <span>Solutions Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
              15+ Monitoring{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-[#6A6A6A] text-lg">
              End-to-end security solutions covering every aspect of your digital infrastructure.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-xl hover:shadow-[#9A1B21]/5 transition-all duration-300 h-full overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#9A1B21]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-[#9A1B21]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-[#6A6A6A] mb-3">
                  {solution.description}
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-[#9A1B21]/5 text-[#9A1B21] font-medium">
                  {solution.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Security Challenges Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#E0E8F5]/50 via-[#D5E0F0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20">
              <span>Security Challenges</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
              Common Challenges{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Addressed</span>
            </h2>
            <p className="text-[#6A6A6A] text-lg">
              We help organizations overcome critical security challenges with our comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300 h-full"
              >
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-4 ${
                  challenge.priority === "High Priority"
                    ? "bg-red-100 text-red-700"
                    : "bg-amber-100 text-amber-700"
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    challenge.priority === "High Priority" ? "bg-red-500" : "bg-amber-500"
                  }`} />
                  {challenge.priority}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {challenge.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
