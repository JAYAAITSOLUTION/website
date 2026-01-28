"use client";

import Link from "next/link";
import { ArrowRight, Shield, Lock, Zap, Star, CheckCircle2, Globe, Users, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

const floatingCards = [
  {
    icon: Globe,
    value: "100+",
    label: "Global Clients",
    position: "top-8 -right-4",
    delay: "delay-100",
  },
  {
    icon: CheckCircle2,
    value: "24/7",
    label: "Security Monitoring",
    position: "bottom-24 -left-8",
    delay: "delay-300",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Threat Blocked",
    position: "-bottom-4 right-8",
    delay: "delay-500",
  },
];

const stats = [
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "Cr+", label: "Assets Protected" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-md-surface pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.md.primary\/0.08)_1px,transparent_0)] [background-size:24px_24px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-md-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-md-secondary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container/50 text-md-on-primary-container text-sm font-medium border border-md-primary/20">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by 100+ Enterprises</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface leading-[1.1] tracking-tight">
                Secure Your{" "}
                <span className="text-md-primary italic font-serif">Business</span>
                <br />
                With Confidence
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-lg text-md-on-surface-variant max-w-lg leading-relaxed">
                Protect your critical assets with enterprise-grade cybersecurity solutions.
                Tailored for BFSI, Healthcare, and Government sectors.
              </p>
            </BlurFade>

            {/* Skill Tags */}
            <BlurFade delay={0.35}>
              <div className="flex flex-wrap gap-2">
                {["Cloud Security", "Compliance", "SOC"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-md-surface-container border border-md-outline-variant text-sm text-md-on-surface-variant hover:border-md-primary/30 transition-colors"
                  >
                    + {tag}
                  </span>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-2">
                <ShimmerButton
                  className="h-12 px-6 rounded-full text-base font-medium"
                  shimmerColor="#ffffff"
                  background="#9A1B21"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started - Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </ShimmerButton>
                <Button
                  asChild
                  variant="ghost"
                  className="h-12 px-6 text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container transition-all duration-300 text-base"
                >
                  <Link href="/services">View Solutions</Link>
                </Button>
              </div>
            </BlurFade>
          </div>

          {/* Right Column - Hero Image with Floating Cards */}
          <BlurFade delay={0.3} direction="left">
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-md-primary/10" />
                <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-md-primary/5" />
              </div>

              {/* Main Image Container */}
              <div className="relative mx-auto w-[280px] h-[350px] sm:w-[340px] sm:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-md-primary/5 to-transparent" />
                <Image
                  src="/hero-security.jpg"
                  alt="Cybersecurity Professional"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-md-surface/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card, index) => (
                <div
                  key={index}
                  className={`absolute ${card.position} bg-md-surface/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-md-outline-variant animate-float-${index === 0 ? 'delayed' : index === 2 ? 'slow' : ''} hidden sm:block`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-md-primary-container flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-md-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-md-on-surface">{card.value}</p>
                      <p className="text-xs text-md-on-surface-variant">{card.label}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Small Pills */}
              <div className="absolute top-4 -left-4 bg-md-surface rounded-full px-4 py-2 shadow-lg border border-md-outline-variant hidden sm:flex items-center gap-2">
                <Users className="w-4 h-4 text-md-primary" />
                <span className="text-sm font-medium text-md-on-surface">Expert Team</span>
              </div>

              <div className="absolute bottom-12 -right-4 bg-md-primary text-white rounded-full px-4 py-2 shadow-lg hidden sm:flex items-center gap-2">
                <Server className="w-4 h-4" />
                <span className="text-sm font-medium">SOC Ready</span>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Bottom Stats Row */}
        <BlurFade delay={0.5}>
          <div className="mt-16 lg:mt-24 pt-8 border-t border-md-outline-variant/50">
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-md-on-surface">
                    <NumberTicker value={stat.value} />
                    <span className="text-md-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-md-on-surface-variant mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
