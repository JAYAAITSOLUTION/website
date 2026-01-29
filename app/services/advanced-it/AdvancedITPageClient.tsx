"use client";

import Link from "next/link";
import { ArrowLeft, Cpu, Server, Shield, Network, CheckCircle2, Sparkles, TrendingUp, Clock, Zap, Cloud, HardDrive, Activity, Settings, Lock, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { RetroGrid } from "@/components/ui/retro-grid";

const services = [
  { icon: Network, title: "Secure Network Architecture Design", description: "Design and implement secure, scalable network infrastructure" },
  { icon: Shield, title: "Endpoint Protection & Patch Management", description: "Comprehensive endpoint security and automated patching" },
  { icon: Cloud, title: "Virtualization & Cloud Services (AWS, Azure)", description: "Cloud migration and virtualization solutions" },
  { icon: HardDrive, title: "Data Backup & Disaster Recovery Planning", description: "Robust backup solutions and business continuity planning" },
  { icon: Activity, title: "AI-Powered IT Monitoring", description: "Intelligent monitoring and predictive analytics" },
  { icon: Lock, title: "Enterprise Security Solutions", description: "Comprehensive security for enterprise environments" },
  { icon: Settings, title: "Infrastructure Optimization", description: "Optimize IT infrastructure for performance and cost" },
  { icon: Server, title: "High-Availability System Design", description: "Design resilient systems with minimal downtime" },
  { icon: Monitor, title: "Performance Monitoring & Analytics", description: "Real-time performance tracking and insights" },
];

const benefits = [
  { text: "Industry-certified engineers", icon: CheckCircle2 },
  { text: "Built-in security from day one", icon: Shield },
  { text: "24/7 technical support", icon: Clock },
  { text: "Scalable, cost-efficient deployments", icon: TrendingUp },
  { text: "Future-proof architecture", icon: Zap },
  { text: "Proactive maintenance and monitoring", icon: Activity },
];

const stats = [
  { value: "24/7", label: "Technical Support", icon: Clock },
  { value: "99.9%", label: "System Uptime", icon: TrendingUp },
  { value: "Certified", label: "Engineers", icon: CheckCircle2 },
  { value: "Scalable", label: "Solutions", icon: Zap },
];

const processSteps = [
  { step: "01", title: "Assessment", description: "Evaluate your current IT infrastructure and identify improvement areas" },
  { step: "02", title: "Planning", description: "Design a customized solution tailored to your business needs" },
  { step: "03", title: "Implementation", description: "Deploy solutions with minimal disruption to your operations" },
  { step: "04", title: "Support", description: "Provide ongoing monitoring, maintenance, and optimization" },
];

export default function AdvancedITPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] overflow-hidden">
        {/* MagicUI Retro Grid Background */}
        <RetroGrid
          className="absolute inset-0"
          angle={65}
          cellSize={60}
          opacity={0.4}
          lightLineColor="#9A1B21"
          darkLineColor="#9A1B21"
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
              <Button
                asChild
                variant="ghost"
                className="mb-6 text-[#6A6A6A] hover:text-[#9A1B21]"
              >
                <Link href="/services">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Services
                </Link>
              </Button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#9A1B21]/10 to-[#9A1B21]/5 text-[#9A1B21] text-sm font-medium mb-6 border border-[#9A1B21]/20"
              >
                <Cpu className="w-4 h-4" />
                <span>IT Service</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Advanced{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">IT Solutions</span>
              </h1>

              <p className="text-lg text-[#6A6A6A] max-w-2xl mb-4">
                <strong className="text-[#1A1A1A]">Future-Ready Tech Solutions Built Around You</strong>
              </p>

              <p className="text-[#6A6A6A] max-w-2xl mb-8">
                Cutting-edge, customized IT infrastructure solutions built around your needs with secure architecture and intelligent monitoring. We deliver technology that scales with your business.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Discuss Your Needs
                  <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 text-base font-medium"
                >
                  Request Quote
                </Link>
              </div>
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
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              Comprehensive IT solutions covering infrastructure, security, and business continuity.
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

      {/* Process Timeline */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Implementation{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              A structured approach to deploying and managing your IT infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-3xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-[#9A1B21]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-[#6A6A6A] text-sm">{item.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#9A1B21]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-[#E8E0F0]/50 via-[#E5DDF0]/20 to-transparent rounded-full blur-[100px]" />
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
                  <span>Why Choose Us</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                  Benefits of{" "}
                  <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Advanced IT</span>
                </h2>
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  Modernize your IT infrastructure with solutions that deliver
                  reliability, security, and scalability for your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Discuss Your Needs
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
