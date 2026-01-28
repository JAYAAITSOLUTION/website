"use client";

import Link from "next/link";
import { ArrowRight, Shield, Cloud, Cpu, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "motion/react";

const services = [
  {
    icon: Shield,
    title: "Zero Trust Security Services",
    description: "Comprehensive Security Framework",
    href: "/services/zero-trust",
    gradient: "from-red-500/20 via-red-600/10 to-transparent",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
    borderColor: "#9A1B21",
    accentColor: "bg-red-500",
  },
  {
    icon: Cloud,
    title: "Digital Transformation & Automation",
    description: "Modernize & Streamline Operations",
    href: "/services/digital-transformation",
    gradient: "from-amber-500/20 via-amber-600/10 to-transparent",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    borderColor: "#7A5C00",
    accentColor: "bg-amber-500",
  },
  {
    icon: Cpu,
    title: "Advance IT Solutions",
    description: "Cutting-Edge Technology Solutions",
    href: "/services/advanced-it",
    gradient: "from-orange-500/20 via-orange-600/10 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    borderColor: "#9A5A00",
    accentColor: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Professional Services",
    description: "Expert Consulting & Support",
    href: "/services/professional",
    gradient: "from-red-500/20 via-red-600/10 to-transparent",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
    borderColor: "#9A1B21",
    accentColor: "bg-red-500",
  },
];

const benefits = [
  { title: "Advanced Security", description: "Zero trust architecture", icon: Shield },
  { title: "Digital Innovation", description: "Intelligent automation", icon: Cloud },
  { title: "Expert Support", description: "24/7 professional services", icon: Users },
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Our Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-md-primary to-md-secondary bg-clip-text text-transparent">IT Solutions</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                Empowering businesses with cutting-edge technology, robust security, and expert guidance. Our comprehensive suite of services covers everything from zero trust security to digital transformation.
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

                      <h2 className="text-2xl font-bold text-md-on-surface mb-2 group-hover:text-md-primary transition-colors duration-300">
                        {service.title}
                      </h2>

                      <p className="text-md-on-surface-variant mb-6">
                        {service.description}
                      </p>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full h-12 rounded-full border-md-outline text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container hover:border-transparent transition-all duration-300 group/btn mt-auto"
                      >
                        <div className="flex items-center justify-center">
                          <span>View All Services</span>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-secondary-container text-md-on-secondary-container text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Why Choose Us</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Our Core Service{" "}
                  <span className="bg-gradient-to-r from-md-primary to-md-secondary bg-clip-text text-transparent">Pillars</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  Comprehensive IT solutions designed to empower your business with cutting-edge technology and unmatched expertise.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    asChild
                    className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90"
                  >
                    <Link href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="h-12 px-8 text-md-on-surface hover:bg-md-primary-container rounded-full"
                  >
                    <Link href="/solutions">Explore Solutions</Link>
                  </Button>
                </div>
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
                    className="flex items-center gap-4 p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-md-primary-container flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-7 h-7 text-md-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-md-on-surface mb-1">{benefit.title}</h3>
                      <p className="text-sm text-md-on-surface-variant">{benefit.description}</p>
                    </div>
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
