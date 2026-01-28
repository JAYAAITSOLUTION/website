"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Search, Shield, LineChart, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assess & Plan",
    description: "Comprehensive security audit of your infrastructure. We identify vulnerabilities, assess risks, and create a tailored security roadmap aligned with your business goals.",
    features: ["Vulnerability Assessment", "Risk Analysis", "Compliance Gap Analysis"],
  },
  {
    number: "02",
    icon: Shield,
    title: "Implement & Secure",
    description: "Deploy zero trust architecture and advanced security controls. Our experts implement enterprise-grade solutions with minimal disruption to your operations.",
    features: ["Zero Trust Deployment", "SIEM Integration", "Cloud Security Setup"],
  },
  {
    number: "03",
    icon: LineChart,
    title: "Monitor & Optimize",
    description: "24/7 SOC monitoring with AI-driven threat detection. Continuous optimization ensures your security posture evolves with emerging threats.",
    features: ["24/7 SOC Monitoring", "Threat Intelligence", "Continuous Improvement"],
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-md-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-md-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade inView>
            <div className="section-label mx-auto w-fit mb-6">
              <span>How We Work</span>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              AI-Powered Platform to{" "}
              <span className="gradient-text">Simplify Your Security</span>{" "}
              Workflow
            </h2>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="text-lg text-md-on-surface-variant">
              Our proven three-step methodology delivers comprehensive security
              transformation with measurable results.
            </p>
          </BlurFade>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <BlurFade key={index} inView delay={0.3 + index * 0.1}>
              <div className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px">
                    <div className="w-full h-full bg-gradient-to-r from-md-outline-variant to-transparent" />
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-md-outline-variant" />
                  </div>
                )}

                <div className="bg-md-surface-container rounded-3xl p-8 border border-md-outline-variant hover:border-md-primary/30 transition-all duration-300 h-full card-glow">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-md-primary/20">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-md-primary-container flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-md-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-md-on-surface mb-3">
                    {step.title}
                  </h3>
                  <p className="text-md-on-surface-variant mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-md-on-surface-variant"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-md-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
