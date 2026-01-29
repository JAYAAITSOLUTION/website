"use client";

import Link from "next/link";
import { ArrowLeft, Cloud, CloudCog, Workflow, Monitor, CheckCircle2, Sparkles, TrendingUp, Clock, Zap, Code, Database, FileText, Settings, BarChart3, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const services = [
  { icon: Cloud, title: "Legacy-to-Cloud Modernization", description: "Migrate legacy systems to modern cloud infrastructure" },
  { icon: Workflow, title: "Robotic Process Automation (RPA)", description: "Automate repetitive business processes with intelligent bots" },
  { icon: Settings, title: "Smart Workflow Engineering", description: "Design and optimize intelligent business workflows" },
  { icon: BarChart3, title: "Business Intelligence Dashboards", description: "Real-time analytics and visualization solutions" },
  { icon: RefreshCw, title: "API & System Integration", description: "Seamless integration of disparate systems and applications" },
  { icon: FileText, title: "Digital Process Optimization", description: "Streamline and optimize digital business processes" },
  { icon: Database, title: "Intelligent Document Processing", description: "AI-powered document capture and processing" },
  { icon: Code, title: "Cloud-Native Application Development", description: "Build scalable applications for cloud environments" },
  { icon: CloudCog, title: "DevOps & CI/CD Implementation", description: "Streamlined development and deployment pipelines" },
];

const benefits = [
  { text: "70% Faster Processes", icon: Zap },
  { text: "Real-time Decision Making", icon: TrendingUp },
  { text: "90% Error Reduction", icon: CheckCircle2 },
  { text: "Scalable Infrastructure", icon: Cloud },
];

const stats = [
  { value: "70%", label: "Faster Processes", icon: Zap },
  { value: "Real-time", label: "Decision Making", icon: TrendingUp },
  { value: "90%", label: "Error Reduction", icon: CheckCircle2 },
  { value: "Scalable", label: "Infrastructure", icon: Cloud },
];

const processSteps = [
  { step: "01", title: "Discover", description: "Analyze current processes and identify digital opportunities" },
  { step: "02", title: "Design", description: "Create a tailored digital transformation roadmap" },
  { step: "03", title: "Deploy", description: "Implement solutions with agile methodology" },
  { step: "04", title: "Optimize", description: "Continuously improve based on data and feedback" },
];

export default function DigitalTransformationPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] overflow-hidden">
        {/* MagicUI Animated Grid Pattern Background */}
        <AnimatedGridPattern
          className="absolute inset-0 text-[#9A1B21]/20"
          width={40}
          height={40}
          numSquares={30}
          maxOpacity={0.3}
          duration={4}
          repeatDelay={0.5}
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
                <Cloud className="w-4 h-4" />
                <span>Transformation Service</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Digital{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Transformation Services</span>
              </h1>

              <p className="text-lg text-[#6A6A6A] max-w-2xl mb-4">
                <strong className="text-[#1A1A1A]">Reimagining Business Through Intelligence</strong>
              </p>

              <p className="text-[#6A6A6A] max-w-2xl mb-8">
                Transform your business with intelligent automation, cloud modernization, and digital-first strategies that drive efficiency and innovation. We help organizations modernize their operations and embrace the digital future.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Start Digital Transformation
                  <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 text-base font-medium"
                >
                  Get Free Assessment
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
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Digital Services</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              End-to-end digital transformation services covering all aspects of modern business technology.
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
              Transformation{" "}
              <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-[#6A6A6A]">
              A proven framework for successfully transforming your business digitally.
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
                  <span>Why Transform</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                  Benefits of{" "}
                  <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Digital Transformation</span>
                </h2>
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  Embrace digital transformation to unlock new opportunities,
                  improve operational efficiency, and stay competitive in
                  the digital age.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                >
                  Start Your Journey
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
