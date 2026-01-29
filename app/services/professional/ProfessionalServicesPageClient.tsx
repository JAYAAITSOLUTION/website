"use client";

import Link from "next/link";
import { ArrowLeft, Users, ClipboardCheck, GraduationCap, FileSearch, CheckCircle2, Sparkles, TrendingUp, Award, Zap, Briefcase, UserPlus, RefreshCw, Shield, Lightbulb, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { DotPattern } from "@/components/ui/dot-pattern";

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
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] overflow-hidden">
        {/* MagicUI Dot Pattern Background */}
        <DotPattern
          className="absolute inset-0 text-[#9A1B21]/30"
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          glow={true}
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
                <Users className="w-4 h-4" />
                <span>Professional Service</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Professional{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">IT Services</span>
              </h1>

              <p className="text-lg text-[#6A6A6A] max-w-2xl mb-4">
                <strong className="text-[#1A1A1A]">IT Expertise, Delivered On-Demand</strong>
              </p>

              <p className="text-[#6A6A6A] max-w-2xl mb-8">
                Deep technical expertise and project execution excellence with strategic consulting and comprehensive managed services support. We provide the expertise you need, when you need it.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Engage Our Experts
                  <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 text-base font-medium"
                >
                  Schedule Consultation
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
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Professional Services</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              Expert professional services delivered by certified consultants with deep industry experience.
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
              Engagement <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              A streamlined approach to delivering professional services that meet your needs.
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
                  Why Our{" "}
                  <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Professional Services</span>?
                </h2>
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  Leverage our expertise to accelerate your security initiatives,
                  ensure compliance, and optimize your IT operations.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Engage Our Experts
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
