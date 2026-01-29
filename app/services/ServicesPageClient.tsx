"use client";

import Link from "next/link";
import { ArrowRight, Shield, Cloud, Cpu, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const services = [
  {
    icon: Shield,
    title: "Zero Trust Security Services",
    description: "Comprehensive Security Framework",
    href: "/services/zero-trust",
    gradient: "from-[#9A1B21]/20 via-[#B83236]/10 to-transparent",
    iconBg: "bg-[#9A1B21]/10",
    iconColor: "text-[#9A1B21]",
    borderColor: "#9A1B21",
  },
  {
    icon: Cloud,
    title: "Digital Transformation & Automation",
    description: "Modernize & Streamline Operations",
    href: "/services/digital-transformation",
    gradient: "from-[#9A1B21]/20 via-[#B83236]/10 to-transparent",
    iconBg: "bg-[#9A1B21]/10",
    iconColor: "text-[#9A1B21]",
    borderColor: "#9A1B21",
  },
  {
    icon: Cpu,
    title: "Advance IT Solutions",
    description: "Cutting-Edge Technology Solutions",
    href: "/services/advanced-it",
    gradient: "from-[#9A1B21]/20 via-[#B83236]/10 to-transparent",
    iconBg: "bg-[#9A1B21]/10",
    iconColor: "text-[#9A1B21]",
    borderColor: "#9A1B21",
  },
  {
    icon: Users,
    title: "Professional Services",
    description: "Expert Consulting & Support",
    href: "/services/professional",
    gradient: "from-[#9A1B21]/20 via-[#B83236]/10 to-transparent",
    iconBg: "bg-[#9A1B21]/10",
    iconColor: "text-[#9A1B21]",
    borderColor: "#9A1B21",
  },
];

const benefits = [
  { title: "Advanced Security", description: "Zero trust architecture", icon: Shield },
  { title: "Digital Innovation", description: "Intelligent automation", icon: Cloud },
  { title: "Expert Support", description: "24/7 professional services", icon: Users },
];

export default function ServicesPageClient() {
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
            maxOpacity={0.15}
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
                <span>Our Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">IT Solutions</span>
              </h1>
              <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
                Empowering businesses with cutting-edge technology, robust security, and expert guidance. Our comprehensive suite of services covers everything from zero trust security to digital transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 relative">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-[#E8E0F0]/50 via-[#E5DDF0]/20 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={service.href} className="group block">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-8 rounded-3xl bg-white border border-[#E8E8E8] overflow-hidden h-full flex flex-col hover:border-[#9A1B21]/30 hover:shadow-xl hover:shadow-[#9A1B21]/5 transition-all duration-500"
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 backdrop-blur-sm border border-[#9A1B21]/20`}
                      >
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </motion.div>

                      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#9A1B21] transition-colors duration-300">
                        {service.title}
                      </h2>

                      <p className="text-[#6A6A6A] mb-6">
                        {service.description}
                      </p>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-12 rounded-full border-[#E8E8E8] text-[#1A1A1A] hover:bg-[#9A1B21]/5 hover:text-[#9A1B21] hover:border-[#9A1B21]/30 transition-all duration-300 group/btn mt-auto"
                      >
                        <div className="flex items-center justify-center">
                          <span>View All Services</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                      </Button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] overflow-hidden">
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
                  <span>Why Choose Us</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                  Our Core Service{" "}
                  <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Pillars</span>
                </h2>
                <p className="text-[#6A6A6A] text-lg leading-relaxed">
                  Comprehensive IT solutions designed to empower your business with cutting-edge technology and unmatched expertise.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 text-base font-medium"
                  >
                    Explore Solutions
                  </Link>
                </div>
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
                    className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#9A1B21]/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-7 h-7 text-[#9A1B21]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">{benefit.title}</h3>
                      <p className="text-sm text-[#6A6A6A]">{benefit.description}</p>
                    </div>
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
