"use client";

import Link from "next/link";
import { Shield, Lock, Eye, Network, CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Clock, Key, UserCheck, FileCheck, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";

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
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6"
              >
                <Shield className="w-4 h-4" />
                <span>Security Service</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Zero Trust{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Security Services</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl mb-4">
                <strong>Never Trust, Always Verify</strong> — Secure Every Access Point. In today&apos;s perimeter-less digital world, traditional security models are obsolete.
              </p>

              <p className="text-md-on-surface-variant max-w-2xl mb-8">
                Our Zero Trust Security Services enforce strict identity verification, micro-segmentation, and least-privilege access across users, devices, and networks. We implement a comprehensive security framework that eliminates implicit trust and continuously validates every transaction.
              </p>

              <Button className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                Implement Zero Trust
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-md-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-8 rounded-2xl bg-md-surface-container border border-md-outline-variant text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-md-on-surface mb-2">{stat.value}</div>
                  <div className="text-md-on-surface-variant">{stat.label}</div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Our{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Zero Trust Services</span>
              </h2>
              <p className="text-md-on-surface-variant">
                Comprehensive Zero Trust implementation covering all critical aspects of modern security architecture.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <BlurFade key={service.title} delay={0.1 + index * 0.05} inView>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-red-500/30 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-md-on-surface-variant">
                    {service.description}
                  </p>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Why Zero Trust</span>
                  </div>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Benefits of{" "}
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Zero Trust</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  Adopting Zero Trust architecture provides significant security
                  advantages for modern enterprises dealing with sophisticated
                  cyber threats.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-md-surface-container border border-md-outline-variant hover:border-red-500/30 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <span className="text-md-on-surface font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
