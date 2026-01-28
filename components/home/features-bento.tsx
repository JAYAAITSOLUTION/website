"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Shield,
  Radar,
  FileCheck,
  Cloud,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Zero Trust Security",
    description:
      "Implement comprehensive zero trust architecture with identity verification, least privilege access, and continuous monitoring.",
    className: "md:col-span-2 md:row-span-2",
    href: "/services/zero-trust",
  },
  {
    icon: Radar,
    title: "AI Threat Detection",
    description: "Machine learning-powered threat detection with 99.9% accuracy.",
    className: "md:col-span-1",
    href: "/services/advanced-it",
  },
  {
    icon: FileCheck,
    title: "Compliance Management",
    description: "Automated compliance for ISO 27001, SOC 2, GDPR, and RBI guidelines.",
    className: "md:col-span-1",
    href: "/services/professional",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Unified security across AWS, Azure, and GCP environments.",
    className: "md:col-span-1",
    href: "/services/advanced-it",
  },
  {
    icon: Users,
    title: "Identity Management",
    description: "Enterprise IAM with SSO, MFA, and privileged access management.",
    className: "md:col-span-1",
    href: "/services/zero-trust",
  },
  {
    icon: Activity,
    title: "24/7 SOC",
    description: "Round-the-clock security operations center with expert analysts.",
    className: "md:col-span-1",
    href: "/services/advanced-it",
  },
];

export function FeaturesBento() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade inView>
            <div className="section-label mx-auto w-fit mb-6">
              <span>Our Solutions</span>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              Comprehensive{" "}
              <span className="gradient-text">Security Suite</span>
            </h2>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="text-lg text-md-on-surface-variant">
              End-to-end cybersecurity solutions designed to protect your
              enterprise from evolving threats.
            </p>
          </BlurFade>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {features.map((feature, index) => (
            <BlurFade
              key={index}
              inView
              delay={0.3 + index * 0.1}
              className={feature.className}
            >
              <Link href={feature.href} className="block h-full">
                <div className="group relative h-full bg-md-surface-container rounded-3xl p-6 border border-md-outline-variant hover:border-md-primary/30 transition-all duration-300 overflow-hidden card-glow">
                  {/* Border Beam Effect */}
                  <BorderBeam
                    duration={6}
                    size={100}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-md-primary-container flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-md-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-md-on-surface-variant opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-md-on-surface mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-md-on-surface-variant text-sm leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-md-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
