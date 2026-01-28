"use client";

import Link from "next/link";
import { ArrowLeft, Cpu, Server, Shield, Network, CheckCircle2, Sparkles, TrendingUp, Clock, Zap, Cloud, HardDrive, Activity, Settings, Lock, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";

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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl">
              <Button
                asChild
                variant="ghost"
                className="mb-6 text-md-on-surface-variant hover:text-md-tertiary"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-tertiary-container text-md-on-tertiary-container text-sm font-medium mb-6"
              >
                <Cpu className="w-4 h-4" />
                <span>IT Service</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Advanced{" "}
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">IT Solutions</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl mb-4">
                <strong>Future-Ready Tech Solutions Built Around You</strong>
              </p>

              <p className="text-md-on-surface-variant max-w-2xl mb-8">
                Cutting-edge, customized IT infrastructure solutions built around your needs with secure architecture and intelligent monitoring. We deliver technology that scales with your business.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Button className="h-12 px-8 rounded-full bg-md-tertiary text-md-on-tertiary hover:bg-md-tertiary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Discuss Your Needs
                  <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-full border-md-outline hover:bg-md-tertiary-container hover:text-md-on-tertiary-container transition-all duration-300">
                  Request Quote
                </Button>
              </div>
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
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-orange-600" />
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
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-md-on-surface-variant">
                Comprehensive IT solutions covering infrastructure, security, and business continuity.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <BlurFade key={service.title} delay={0.1 + index * 0.05} inView>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-orange-500/30 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-orange-600" />
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

      {/* Process Timeline */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Implementation{" "}
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-md-on-surface-variant">
                A structured approach to deploying and managing your IT infrastructure.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <BlurFade key={item.step} delay={0.1 + index * 0.1} inView>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative p-6 rounded-2xl bg-md-surface border border-md-outline-variant"
                >
                  <div className="text-5xl font-bold text-orange-600/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-md-on-surface mb-2">{item.title}</h3>
                  <p className="text-md-on-surface-variant text-sm">{item.description}</p>

                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-500/30" />
                  )}
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Why Choose Us</span>
                  </div>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Benefits of{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Advanced IT</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  Modernize your IT infrastructure with solutions that deliver
                  reliability, security, and scalability for your business.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-tertiary text-md-on-tertiary hover:bg-md-tertiary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Discuss Your Needs
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-md-surface-container border border-md-outline-variant hover:border-orange-500/30 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-orange-600" />
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
