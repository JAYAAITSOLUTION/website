"use client";

import Link from "next/link";
import { ArrowLeft, Users, ClipboardCheck, GraduationCap, FileSearch, CheckCircle2, Sparkles, TrendingUp, Award, Zap, Briefcase, UserPlus, RefreshCw, Shield, Lightbulb, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";

const services = [
  { icon: Lightbulb, title: "Strategic IT Consulting", description: "Expert guidance on technology strategy and digital roadmap" },
  { icon: UserPlus, title: "Staff Augmentation & Project Support", description: "Skilled professionals to complement your team" },
  { icon: RefreshCw, title: "System Integrations & Migrations", description: "Seamless migration and integration services" },
  { icon: ClipboardCheck, title: "IT Audits & Compliance Readiness", description: "Comprehensive audits and compliance preparation" },
  { icon: Shield, title: "Managed Services & SLA-Based Support", description: "Reliable ongoing support with guaranteed SLAs" },
  { icon: TrendingUp, title: "Technology Advisory Services", description: "Strategic technology investment guidance" },
  { icon: Briefcase, title: "Digital Strategy Consulting", description: "Digital transformation strategy and planning" },
  { icon: FolderKanban, title: "Project Management & Delivery", description: "End-to-end project execution and delivery" },
  { icon: Users, title: "Change Management Support", description: "Support for organizational change initiatives" },
];

const benefits = [
  { text: "Proven implementation track record", icon: Award },
  { text: "Transparent engagement models", icon: CheckCircle2 },
  { text: "Local presence, national reach", icon: TrendingUp },
  { text: "Flexible resource allocation", icon: Zap },
  { text: "Industry-specific expertise", icon: Briefcase },
  { text: "Results-driven approach", icon: TrendingUp },
];

const stats = [
  { value: "Expert", label: "Consultants", icon: Users },
  { value: "Proven", label: "Track Record", icon: Award },
  { value: "Transparent", label: "Engagement", icon: CheckCircle2 },
  { value: "National", label: "Reach", icon: TrendingUp },
];

const processSteps = [
  { step: "01", title: "Consult", description: "Understand your business needs and challenges" },
  { step: "02", title: "Strategize", description: "Develop a tailored solution strategy" },
  { step: "03", title: "Implement", description: "Execute with precision and expertise" },
  { step: "04", title: "Support", description: "Provide ongoing support and optimization" },
];

export default function ProfessionalServicesPageClient() {
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
              <Button
                asChild
                variant="ghost"
                className="mb-6 text-md-on-surface-variant hover:text-md-primary"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6"
              >
                <Users className="w-4 h-4" />
                <span>Professional Service</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Professional{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">IT Services</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl mb-4">
                <strong>IT Expertise, Delivered On-Demand</strong>
              </p>

              <p className="text-md-on-surface-variant max-w-2xl mb-8">
                Deep technical expertise and project execution excellence with strategic consulting and comprehensive managed services support. We provide the expertise you need, when you need it.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Button className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Engage Our Experts
                  <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-full border-md-outline hover:bg-md-primary-container hover:text-md-on-primary-container transition-all duration-300">
                  Schedule Consultation
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
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Professional Services</span>
              </h2>
              <p className="text-md-on-surface-variant">
                Expert professional services delivered by certified consultants with deep industry experience.
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

      {/* Process Timeline */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Engagement <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-md-on-surface-variant">
                A streamlined approach to delivering professional services that meet your needs.
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
                  <div className="text-5xl font-bold text-red-600/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-md-on-surface mb-2">{item.title}</h3>
                  <p className="text-md-on-surface-variant text-sm">{item.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-500/30" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Why Choose Us</span>
                  </div>
                </motion.div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Why Our{" "}
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Professional Services</span>?
                </h2>
                <p className="text-md-on-surface-variant">
                  Leverage our expertise to accelerate your security initiatives,
                  ensure compliance, and optimize your IT operations.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">Engage Our Experts</Link>
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
