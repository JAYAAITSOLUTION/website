"use client";

import Link from "next/link";
import { ArrowRight, FileSearch, FileCheck, Lock, Mail, Target, Code, Shield, Globe, Zap, AlertTriangle, Search, GraduationCap, Key, Network, Monitor, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";

const solutions = [
  // Data Protection Solutions
  { icon: FileSearch, title: "Data Classification", description: "Automated identification and categorization of sensitive data", category: "Data Protection" },
  { icon: FileCheck, title: "Document Rights Management", description: "Control access and usage with advanced DRM", category: "Data Protection" },
  { icon: Lock, title: "Data Loss Prevention", description: "Prevent unauthorized data transmission", category: "Data Protection" },
  // Email Security Solutions
  { icon: Mail, title: "DMARC Email Protection", description: "Prevent email spoofing and phishing", category: "Email Security" },
  { icon: Target, title: "Phishing Simulations", description: "Quarterly testing of employee awareness", category: "Email Security" },
  // Code Security Solutions
  { icon: Code, title: "Source Code Review", description: "Quarterly comprehensive security analysis", category: "Code Security" },
  { icon: Shield, title: "API Security", description: "Comprehensive protection against threats and vulnerabilities", category: "Code Security" },
  // Threat Management Solutions
  { icon: Globe, title: "Attack Surface Management", description: "Monitor and manage external attack vectors", category: "Threat Management" },
  { icon: Zap, title: "Breach & Attack Simulation", description: "Continuous security validation", category: "Threat Management" },
  // Security Testing Solutions
  { icon: AlertTriangle, title: "Red Teaming", description: "Advanced persistent threat simulation", category: "Security Testing" },
  { icon: Search, title: "VA and Penetration Testing", description: "Comprehensive vulnerability assessment", category: "Security Testing" },
  // Training Solutions
  { icon: GraduationCap, title: "Security Awareness Training", description: "Weekly security emails and educational wallpapers", category: "Training" },
  // Access Control Solutions
  { icon: Key, title: "Privileged Access Management", description: "Control and monitor privileged user access", category: "Access Control" },
  // Network Security Solutions
  { icon: Network, title: "SD-WAN Solutions", description: "Software-defined wide area networking", category: "Network Security" },
  // Managed Services
  { icon: Monitor, title: "Comprehensive Managed Services", description: "24/7 security operations and monitoring", category: "Managed Services" },
];

const challenges = [
  { title: "Data Overload & Alert Fatigue", priority: "High Priority" },
  { title: "Staff Shortage of Skilled Professionals", priority: "High Priority" },
  { title: "False Positives & Negatives", priority: "Medium Priority" },
  { title: "Integration Issues with Security Tools", priority: "Medium Priority" },
  { title: "Latency in Threat Detection", priority: "High Priority" },
  { title: "Insider Threats & Compromised Users", priority: "High Priority" },
  { title: "Compliance & Reporting Challenges", priority: "Medium Priority" },
  { title: "Shadow IT Risks & Unauthorized Apps", priority: "Medium Priority" },
];

export default function SolutionsPageClient() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium border border-md-primary/20 mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Our Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface leading-[1.1] tracking-tight mb-6">
                IT Solutions -{" "}
                <span className="gradient-text">Monitoring & Security</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-8">
                Discover our comprehensive suite of 15+ monitoring and security solutions designed to protect your enterprise from evolving threats.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="h-12 px-8 bg-md-primary text-white hover:bg-md-primary/90 rounded-full"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Explore All Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="h-12 px-8 text-md-on-surface hover:bg-md-primary-container rounded-full"
                >
                  <Link href="/contact">Get Security Assessment</Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-primary-container text-md-on-primary-container mb-6">
                <span>Solutions Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                15+ Monitoring{" "}
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-md-on-surface-variant text-lg">
                End-to-end security solutions covering every aspect of your digital infrastructure.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {solutions.map((solution, index) => (
              <BlurFade key={solution.title} delay={0.1 + index * 0.03} inView>
                <div className="group relative p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
                  <BorderBeam
                    size={60}
                    duration={4}
                    colorFrom="#9A1B21"
                    colorTo="#7A5C00"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-md-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-md-on-surface-variant mb-3">
                    {solution.description}
                  </p>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-md-secondary-container text-md-on-secondary-container">
                    {solution.category}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Common Security Challenges Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-secondary-container text-md-on-secondary-container mb-6">
                <span>Security Challenges</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                Common Challenges{" "}
                <span className="gradient-text">Addressed</span>
              </h2>
              <p className="text-md-on-surface-variant text-lg">
                We help organizations overcome critical security challenges with our comprehensive solutions.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <BlurFade key={challenge.title} delay={0.1 + index * 0.05} inView>
                <div className="group p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-4 ${
                    challenge.priority === "High Priority"
                      ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      challenge.priority === "High Priority" ? "bg-red-500" : "bg-amber-500"
                    }`} />
                    {challenge.priority}
                  </div>
                  <h3 className="text-lg font-semibold text-md-on-surface">
                    {challenge.title}
                  </h3>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
