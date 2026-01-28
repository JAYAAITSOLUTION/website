"use client";

import {
  Award,
  Layers,
  HeadphonesIcon,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const benefits = [
  {
    icon: Award,
    title: "Expertise & Experience",
    description:
      "Decades of industry experience and a team of certified professionals delivering world-class solutions.",
  },
  {
    icon: Layers,
    title: "Comprehensive Solutions",
    description:
      "End-to-end IT services covering security, infrastructure, and consultancy with seamless integration.",
  },
  {
    icon: HeadphonesIcon,
    title: "Client-Focused Support",
    description:
      "Dedicated 24/7 support and tailored solutions designed to meet your unique business challenges.",
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
              <span>Our Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              Why Partner with{" "}
              <span className="text-md-primary">JAYAA IT</span>
            </h2>
          </div>
        </BlurFade>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BlurFade key={benefit.title} delay={0.1 + index * 0.1} inView>
              <div className="group p-8 rounded-3xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-md-primary-container flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-md-primary" />
                </div>
                <h3 className="text-xl font-bold text-md-on-surface mb-4">
                  {benefit.title}
                </h3>
                <p className="text-md-on-surface-variant">
                  {benefit.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
