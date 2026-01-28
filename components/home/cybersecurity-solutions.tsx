"use client";

import {
  Shield,
  Eye,
  Bug,
  Database,
  GraduationCap,
  Search,
  Monitor,
  Target,
  Lock,
  Key,
  FileWarning,
  Mail,
  ArrowRight,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

const categories = [
  {
    icon: Eye,
    title: "Threat Detection & Response",
    items: [
      { icon: Search, name: "Dark Web Monitoring", description: "Detect compromised credentials and organizational exposure" },
      { icon: Monitor, name: "SOC Monitoring 24/7", description: "Round-the-clock security operations center monitoring" },
      { icon: Shield, name: "Cybersecurity Dashboard", description: "Real-time visibility into security metrics and alerts" },
      { icon: Target, name: "Breach & Attack Simulation", description: "Test security controls against threats" },
    ],
  },
  {
    icon: Bug,
    title: "Security Testing",
    items: [
      { icon: Target, name: "Red Teaming", description: "Simulated cyberattacks to test detection and response" },
      { icon: Bug, name: "DAST Testing", description: "Dynamic application security testing for running apps" },
      { icon: FileWarning, name: "SAST Testing", description: "Static code analysis for early vulnerability detection" },
      { icon: Search, name: "VA-PT Services", description: "Comprehensive testing for infrastructure, apps, and APIs" },
    ],
  },
  {
    icon: Database,
    title: "Data Protection & Access Control",
    items: [
      { icon: Search, name: "Auto Data Discovery & Classification", description: "Automated identification and protection of sensitive data" },
      { icon: Key, name: "Privileged Access Management", description: "Secure access to critical systems with role-based controls" },
      { icon: Lock, name: "Data Loss Prevention (DLP)", description: "Prevent accidental or malicious data leaks" },
      { icon: Shield, name: "API Security", description: "Secure APIs through encryption and threat monitoring" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Security Awareness & Training",
    items: [
      { icon: Mail, name: "Phishing Drills & Simulations", description: "Test and train user awareness with simulated attacks" },
      { icon: GraduationCap, name: "Security Awareness Training", description: "Comprehensive cybersecurity education programs" },
      { icon: Mail, name: "Security Awareness Emailers", description: "Regular educational content and best practices" },
      { icon: Shield, name: "DMARC Implementation", description: "Secure your domain from spoofing and phishing" },
    ],
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
              Complete Security <span className="text-md-primary">Protection Suite</span>
            </h2>
            <p className="text-lg text-md-on-surface-variant">
              Advanced cybersecurity solutions covering threat detection, security testing,
              data protection, and awareness training.
            </p>
          </div>
        </BlurFade>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => (
            <BlurFade key={category.title} delay={0.1 + index * 0.1} inView>
              <div className="group p-8 rounded-3xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-md-primary-container flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-md-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-md-on-surface">
                    {category.title}
                  </h3>
                </div>

                {/* Items List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl bg-md-surface-container border border-md-outline-variant/50 hover:border-md-primary/30 hover:bg-md-primary-container/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-md-primary-container/50 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-md-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-md-on-surface mb-1">
                            {item.name}
                          </h4>
                          <p className="text-xs text-md-on-surface-variant leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA Buttons */}
        <BlurFade delay={0.5} inView>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Explore All Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-md-outline text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container hover:border-transparent transition-all duration-300 font-medium"
            >
              Get Security Assessment
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
