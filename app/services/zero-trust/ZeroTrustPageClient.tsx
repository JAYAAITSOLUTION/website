"use client";

import Link from "next/link";
import { Shield, Lock, Eye, Network, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Clock, Key, UserCheck, FileCheck, Monitor, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Ripple } from "@/components/ui/ripple";

const services = [
  { icon: Key, title: "Identity & Access Management (IAM)", description: "Comprehensive identity management and access control solutions" },
  { icon: UserCheck, title: "Continuous Risk-Based Authentication", description: "Dynamic authentication based on user behavior and risk factors" },
  { icon: Network, title: "Network Micro-Segmentation", description: "Isolate and secure network segments to limit lateral movement" },
  { icon: Monitor, title: "Device Compliance Enforcement", description: "Ensure all devices meet security standards before access" },
  { icon: Eye, title: "End-to-End Threat Visibility", description: "Complete visibility across your entire infrastructure" },
  { icon: Lock, title: "Privileged Access Management", description: "Secure and monitor privileged user accounts" },
  { icon: ShieldCheck, title: "Multi-Factor Authentication Implementation", description: "Advanced MFA solutions for enhanced security" },
  { icon: Shield, title: "Zero Trust Network Access (ZTNA)", description: "Secure remote access without traditional VPN limitations" },
  { icon: FileCheck, title: "Security Policy Engine", description: "Automated policy enforcement and management" },
];

const benefits = [
  { text: "Prevent lateral movement", icon: Network },
  { text: "Reduce insider threats", icon: Shield },
  { text: "Ensure compliance readiness", icon: FileCheck },
  { text: "Protect remote and hybrid work environments", icon: Lock },
  { text: "Enhanced visibility and control", icon: Eye },
  { text: "Reduced attack surface", icon: ShieldCheck },
];

const stats = [
  { value: "Zero", label: "Trust Model", icon: Shield },
  { value: "100%", label: "Access Verification", icon: CheckCircle2 },
  { value: "Continuous", label: "Monitoring", icon: Clock },
  { value: "Real-time", label: "Threat Response", icon: TrendingUp },
];


export default function ZeroTrustPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] overflow-hidden">
        {/* MagicUI Ripple Background */}
        <Ripple
          className="absolute inset-0"
          mainCircleSize={210}
          mainCircleOpacity={0.15}
          numCircles={6}
        />
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
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20"
              >
                <Shield className="w-4 h-4" />
                <span>Security Service</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Zero Trust{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Security Services</span>
              </h1>

              <p className="text-lg text-[#6A6A6A] max-w-2xl mb-4">
                <strong className="text-[#1A1A1A]">Never Trust, Always Verify</strong> — Secure Every Access Point. In today&apos;s perimeter-less digital world, traditional security models are obsolete.
              </p>

              <p className="text-[#6A6A6A] max-w-2xl mb-8">
                Our Zero Trust Security Services enforce strict identity verification, micro-segmentation, and least-privilege access across users, devices, and networks. We implement a comprehensive security framework that eliminates implicit trust and continuously validates every transaction.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
              >
                Implement Zero Trust
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#9A1B21]/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#9A1B21]" />
                </div>
                <div className="text-3xl font-bold text-[#1A1A1A] mb-2">{stat.value}</div>
                <div className="text-[#6A6A6A]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Zero Trust Services</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              Comprehensive Zero Trust implementation covering all critical aspects of modern security architecture.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#9A1B21]/10 border border-[#9A1B21]/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#9A1B21]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6A6A6A]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#E0E8F5]/50 via-[#D5E0F0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium border border-[#9A1B21]/20">
                  <Sparkles className="w-4 h-4" />
                  <span>Why Zero Trust</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                  Benefits of{" "}
                  <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Zero Trust</span>
                </h2>
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  Adopting Zero Trust architecture provides significant security
                  advantages for modern enterprises dealing with sophisticated
                  cyber threats.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#9A1B21]/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#9A1B21]" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
