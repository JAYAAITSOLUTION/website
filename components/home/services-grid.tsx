"use client";

import Link from "next/link";
import {
  Shield,
  Cloud,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "motion/react";

const services = [
  {
    icon: Shield,
    title: "Zero Trust Security",
    description:
      "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring.",
    href: "/services/zero-trust",
    color: "from-red-500/20 via-red-600/10 to-transparent",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
    borderColor: "#9A1B21",
    glowColor: "shadow-red-500/20",
  },
  {
    icon: Cloud,
    title: "Digital Transformation",
    description:
      "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions.",
    href: "/services/digital-transformation",
    color: "from-amber-500/20 via-amber-600/10 to-transparent",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    borderColor: "#7A5C00",
    glowColor: "shadow-amber-500/20",
  },
  {
    icon: Cpu,
    title: "Advanced IT Solutions",
    description:
      "Cutting-edge infrastructure, network security, and endpoint protection for modern enterprises.",
    href: "/services/advanced-it",
    color: "from-orange-500/20 via-orange-600/10 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    borderColor: "#9A5A00",
    glowColor: "shadow-orange-500/20",
  },
  {
    icon: Users,
    title: "Professional Services",
    description:
      "Strategic IT consulting, compliance advisory, and managed security services tailored to your needs.",
    href: "/services/professional",
    color: "from-red-500/20 via-red-600/10 to-transparent",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
    borderColor: "#9A1B21",
    glowColor: "shadow-red-500/20",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-md-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-md-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6"
            >
              <span>Our Services</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              Comprehensive <span className="text-md-primary">IT Solutions</span>
            </h2>
            <p className="text-lg text-md-on-surface-variant">
              From cybersecurity to digital transformation, we provide end-to-end
              services to secure and optimize your technology infrastructure.
            </p>
          </div>
        </BlurFade>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <BlurFade key={service.href} delay={0.2 + index * 0.1} inView>
              <Link
                href={service.href}
                className="group block relative"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-transparent"
                  style={{
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  {/* Animated gradient background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Border beam effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <BorderBeam
                      size={80}
                      duration={6}
                      colorFrom={service.borderColor}
                      colorTo={service.borderColor}
                      borderWidth={2}
                    />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10`}
                    >
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-md-on-surface mb-3 group-hover:text-md-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-md-on-surface-variant mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-md-primary font-medium">
                      <span className="relative">
                        Learn More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-md-primary group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
