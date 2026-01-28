"use client";

import Link from "next/link";
import { ArrowRight, Shield, Cloud, Cpu, Users, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Shield,
    title: "Zero Trust Security",
    description:
      "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring to protect your critical assets.",
    href: "/services/zero-trust",
    features: [
      "Identity & Access Management",
      "Network Segmentation",
      "Continuous Verification",
      "Least Privilege Access",
    ],
    gradient: "from-red-500/20 via-red-600/10 to-transparent",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
    borderColor: "#9A1B21",
    accentColor: "bg-red-500",
  },
  {
    icon: Cloud,
    title: "Digital Transformation",
    description:
      "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions that drive efficiency and innovation.",
    href: "/services/digital-transformation",
    features: [
      "Cloud Migration Strategy",
      "Process Automation",
      "Modern Workplace",
      "Legacy Modernization",
    ],
    gradient: "from-amber-500/20 via-amber-600/10 to-transparent",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    borderColor: "#7A5C00",
    accentColor: "bg-amber-500",
  },
  {
    icon: Cpu,
    title: "Advanced IT Solutions",
    description:
      "Cutting-edge infrastructure, network security, and endpoint protection designed for modern enterprise landscape.",
    href: "/services/advanced-it",
    features: [
      "Network Security",
      "Endpoint Protection",
      "Infrastructure Management",
      "Disaster Recovery",
    ],
    gradient: "from-orange-500/20 via-orange-600/10 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    borderColor: "#9A5A00",
    accentColor: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Professional Services",
    description:
      "Strategic IT consulting, compliance advisory, and managed security services tailored to your organization's unique needs.",
    href: "/services/professional",
    features: [
      "IT Consulting",
      "Compliance Advisory",
      "Security Audits",
      "Managed Services",
    ],
    gradient: "from-red-500/20 via-red-600/10 to-transparent",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
    borderColor: "#9A1B21",
    accentColor: "bg-red-500",
  },
];

const benefits = [
  { text: "Reduced security incidents by up to 80%", icon: Shield },
  { text: "Compliance with industry regulations", icon: CheckCircle2 },
  { text: "24/7 expert support and monitoring", icon: Sparkles },
  { text: "Scalable solutions for growing businesses", icon: Cloud },
  { text: "Cost-effective security management", icon: CheckCircle2 },
  { text: "Proactive threat detection and response", icon: Shield },
];

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Flickering Grid Background */}
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#9A1B21"
          maxOpacity={0.12}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-20 w-64 h-64 bg-md-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-md-secondary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span>Our Services</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-md-primary to-md-secondary bg-clip-text text-transparent">IT Solutions</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                From cybersecurity to digital transformation, we provide
                end-to-end services to secure and optimize your technology
                infrastructure.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <BlurFade key={service.href} delay={0.1 + index * 0.1} inView>
                <Link href={service.href} className="group block">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant overflow-hidden h-full flex flex-col"
                  >
                    {/* Gradient background on hover */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Border beam */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <BorderBeam
                        size={100}
                        duration={5}
                        colorFrom={service.borderColor}
                        colorTo={service.borderColor}
                        borderWidth={2}
                      />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20`}
                      >
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </motion.div>

                      <h2 className="text-2xl font-bold text-md-on-surface mb-4 group-hover:text-md-primary transition-colors duration-300">
                        {service.title}
                      </h2>

                      <p className="text-md-on-surface-variant mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8 flex-grow">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center gap-3 text-sm text-md-on-surface"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${service.accentColor}`} />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-12 rounded-full border-md-outline text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container hover:border-transparent transition-all duration-300 group/btn"
                      >
                        <div className="flex items-center justify-center">
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-secondary-container text-md-on-secondary-container text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Why Choose Us</span>
                  </div>
                </motion.div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Why Choose Our{" "}
                  <span className="bg-gradient-to-r from-md-primary to-md-secondary bg-clip-text text-transparent">Services</span>?
                </h2>
                <p className="text-md-on-surface-variant">
                  Our services are designed to deliver measurable results,
                  helping you reduce risk, ensure compliance, and drive business
                  growth through secure technology adoption.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-md-surface border border-md-outline-variant hover:border-md-primary/30 hover:shadow-lg transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-md-primary-container flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-md-primary" />
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
