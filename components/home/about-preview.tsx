"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const features = [
  "15+ years of industry expertise",
  "Certified security professionals",
  "Customized enterprise solutions",
  "24/7 dedicated support team",
];

const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower organizations with robust cybersecurity frameworks and innovative IT solutions.",
  },
  {
    icon: Users,
    title: "Our Approach",
    description: "Client-centric methodology with tailored solutions for unique business challenges.",
  },
  {
    icon: Award,
    title: "Our Expertise",
    description: "Industry-certified professionals with deep knowledge of compliance and security standards.",
  },
];

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <BlurFade delay={0.1} inView>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium">
                <span>About Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface">
                Trusted Partner for{" "}
                <span className="text-md-primary">Digital Transformation</span>
              </h2>

              <p className="text-lg text-md-on-surface-variant">
                JAYAA IT Solution Pvt. Ltd. is a leading provider of enterprise
                cybersecurity and IT solutions. We help organizations navigate
                the complex digital landscape with confidence, ensuring their
                critical assets remain protected while driving innovation.
              </p>

              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-md-on-surface"
                  >
                    <CheckCircle2 className="w-5 h-5 text-md-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="outline"
                className="h-12 px-6 rounded-full border-md-outline text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container hover:border-transparent transition-all duration-300"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </BlurFade>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <div className="p-6 rounded-2xl bg-md-surface hover:bg-md-primary-container/30 transition-colors duration-300 border border-md-outline-variant">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-md-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                        {item.title}
                      </h3>
                      <p className="text-md-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
