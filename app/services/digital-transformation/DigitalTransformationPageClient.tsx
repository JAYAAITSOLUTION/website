"use client";

import Link from "next/link";
import { ArrowLeft, Cloud, CloudCog, Workflow, Monitor, CheckCircle2, Sparkles, TrendingUp, Clock, Zap, Code, Database, FileText, Settings, BarChart3, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";

const services = [
  { icon: Cloud, title: "Legacy-to-Cloud Modernization", description: "Migrate legacy systems to modern cloud infrastructure" },
  { icon: Workflow, title: "Robotic Process Automation (RPA)", description: "Automate repetitive business processStepses with intelligent bots" },
  { icon: Settings, title: "Smart Workflow Engineering", description: "Design and optimize intelligent business workflows" },
  { icon: BarChart3, title: "Business Intelligence Dashboards", description: "Real-time analytics and visualization solutions" },
  { icon: RefreshCw, title: "API & System Integration", description: "Seamless integration of disparate systems and applications" },
  { icon: FileText, title: "Digital Process Optimization", description: "Streamline and optimize digital business processStepses" },
  { icon: Database, title: "Intelligent Document Processing", description: "AI-powered document capture and processStepsing" },
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl">
              <Button
                asChild
                variant="ghost"
                className="mb-6 text-md-on-surface-variant hover:text-md-secondary"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-secondary-container text-md-on-secondary-container text-sm font-medium mb-6"
              >
                <Cloud className="w-4 h-4" />
                <span>Transformation Service</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Digital{" "}
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Transformation Services</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl mb-4">
                <strong>Reimagining Business Through Intelligence</strong>
              </p>

              <p className="text-md-on-surface-variant max-w-2xl mb-8">
                Transform your business with intelligent automation, cloud modernization, and digital-first strategies that drive efficiency and innovation. We help organizations modernize their operations and embrace the digital future.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Button className="h-12 px-8 rounded-full bg-md-secondary text-md-on-secondary hover:bg-md-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Digital Transformation
                  <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-full border-md-outline hover:bg-md-secondary-container hover:text-md-on-secondary-container transition-all duration-300">
                  Get Free Assessment
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
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-amber-600" />
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
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Digital Services</span>
              </h2>
              <p className="text-md-on-surface-variant">
                End-to-end digital transformation services covering all aspects of modern business technology.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <BlurFade key={service.title} delay={0.1 + index * 0.05} inView>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-amber-500/30 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-amber-600" />
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
                Transformation{" "}
                <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-md-on-surface-variant">
                A proven framework for successfully transforming your business digitally.
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
                  <div className="text-5xl font-bold text-amber-600/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-md-on-surface mb-2">{item.title}</h3>
                  <p className="text-md-on-surface-variant text-sm">{item.description}</p>

                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-amber-500/30" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Why Transform</span>
                  </div>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Benefits of{" "}
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Digital Transformation</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  Embrace digital transformation to unlock new opportunities,
                  improve operational efficiency, and stay competitive in
                  the digital age.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-secondary text-md-on-secondary hover:bg-md-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Start Your Journey
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-md-surface-container border border-md-outline-variant hover:border-amber-500/30 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-amber-600" />
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
