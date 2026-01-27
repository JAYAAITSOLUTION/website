"use client";

import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Server,
  Network,
  Fingerprint,
  Key,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const solutions = [
  {
    icon: Shield,
    title: "Threat Detection & Response",
    description: "24/7 SOC monitoring with AI-powered threat intelligence and rapid incident response.",
  },
  {
    icon: Lock,
    title: "Data Loss Prevention",
    description: "Comprehensive DLP strategies to protect sensitive data across all endpoints and cloud services.",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "Real-time visibility into your security posture with advanced SIEM and log management.",
  },
  {
    icon: FileCheck,
    title: "Compliance Management",
    description: "Streamlined compliance for RBI, SEBI, HIPAA, GDPR, and other regulatory frameworks.",
  },
  {
    icon: Server,
    title: "Cloud Security",
    description: "Secure cloud migration and multi-cloud security posture management.",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Next-gen firewalls, intrusion detection, and network segmentation solutions.",
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    description: "Zero Trust identity verification and privileged access management.",
  },
  {
    icon: Key,
    title: "Encryption Services",
    description: "End-to-end encryption for data at rest and in transit across your infrastructure.",
  },
];

export function CybersecuritySolutions() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Cybersecurity Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              Enterprise-Grade <span className="text-md-primary">Security</span>
            </h2>
            <p className="text-lg text-md-on-surface-variant">
              Comprehensive cybersecurity solutions designed to protect your
              organization from evolving threats while maintaining compliance
              with industry regulations.
            </p>
          </div>
        </BlurFade>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <BlurFade key={solution.title} delay={0.1 + index * 0.05} inView>
              <div className="group p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-md-primary" />
                </div>
                <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-md-on-surface-variant">
                  {solution.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
