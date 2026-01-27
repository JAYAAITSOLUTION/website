"use client";

import {
  Shield,
  Clock,
  Award,
  Users,
  Headphones,
  Zap,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Bank-level security protocols and advanced threat protection for organizations of all sizes.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description:
      "Round-the-clock security operations center ensuring continuous protection and rapid response.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "Team of certified security professionals with CISSP, CISM, CEH, and other industry certifications.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Personalized support with dedicated account managers and technical specialists.",
  },
  {
    icon: Headphones,
    title: "Proactive Approach",
    description:
      "We identify and mitigate threats before they impact your business operations.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Quick implementation of security solutions with minimal disruption to your business.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              The <span className="text-md-primary">JAYAA IT</span> Advantage
            </h2>
            <p className="text-lg text-md-on-surface-variant">
              Partner with us for comprehensive cybersecurity solutions backed by
              expertise, experience, and unwavering commitment to your security.
            </p>
          </div>
        </BlurFade>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <BlurFade key={reason.title} delay={0.1 + index * 0.05} inView>
              <div className="group p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-md-primary" />
                </div>
                <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-md-on-surface-variant">
                  {reason.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
