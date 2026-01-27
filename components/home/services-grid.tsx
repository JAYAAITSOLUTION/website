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

const services = [
  {
    icon: Shield,
    title: "Zero Trust Security",
    description:
      "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring.",
    href: "/services/zero-trust",
    color: "bg-md-primary-container",
    iconColor: "text-md-primary",
  },
  {
    icon: Cloud,
    title: "Digital Transformation",
    description:
      "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions.",
    href: "/services/digital-transformation",
    color: "bg-md-secondary-container",
    iconColor: "text-md-secondary",
  },
  {
    icon: Cpu,
    title: "Advanced IT Solutions",
    description:
      "Cutting-edge infrastructure, network security, and endpoint protection for modern enterprises.",
    href: "/services/advanced-it",
    color: "bg-md-tertiary-container",
    iconColor: "text-md-tertiary",
  },
  {
    icon: Users,
    title: "Professional Services",
    description:
      "Strategic IT consulting, compliance advisory, and managed security services tailored to your needs.",
    href: "/services/professional",
    color: "bg-md-primary-container",
    iconColor: "text-md-primary",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
              <span>Our Services</span>
            </div>
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
                className="group block p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-md-on-surface mb-3">
                    {service.title}
                  </h3>
                  <p className="text-md-on-surface-variant mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-md-primary font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
