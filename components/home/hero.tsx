"use client";

import Link from "next/link";
import { ArrowRight, Shield, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Particles } from "@/components/ui/particles";

const stats = [
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 100, suffix: "%", label: "Compliance Success" },
  { value: 24, suffix: "/7", label: "Security Monitoring" },
  { value: 15, suffix: "+", label: "Years Experience" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-md-surface">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        ease={80}
        color="#6750A4"
        refresh
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-md-primary-container/30 via-transparent to-md-tertiary-container/20 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>ISO 27001 Certified</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface leading-tight">
              Secure Your Digital Future with{" "}
              <span className="text-md-primary">Zero Trust</span> Architecture
            </h1>

            <p className="text-lg text-md-on-surface-variant max-w-xl">
              JAYAA IT Solution delivers enterprise-grade cybersecurity and IT
              transformation services. Protect your critical assets with our
              comprehensive security solutions tailored for BFSI, Healthcare,
              and Government sectors.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="h-14 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 text-base"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 px-8 rounded-full border-md-outline text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container hover:border-transparent transition-all duration-300 text-base"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-md-on-surface-variant">
                <Lock className="w-4 h-4 text-md-primary" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-md-on-surface-variant">
                <Shield className="w-4 h-4 text-md-primary" />
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-md-on-surface-variant">
                <Zap className="w-4 h-4 text-md-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-md-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-md-tertiary/10 rounded-full blur-3xl" />

            {/* Stats Grid */}
            <div className="relative bg-md-surface-container/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-md-outline-variant">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-md-surface hover:bg-md-primary-container/50 transition-colors duration-300"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-md-primary">
                      <NumberTicker value={stat.value} />
                      <span>{stat.suffix}</span>
                    </div>
                    <p className="text-sm text-md-on-surface-variant mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Featured Image/Graphic */}
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-md-primary-container to-md-tertiary-container/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-md-primary flex items-center justify-center">
                    <Shield className="w-8 h-8 text-md-on-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-md-on-surface">
                      Enterprise Security
                    </h3>
                    <p className="text-sm text-md-on-surface-variant">
                      Comprehensive protection for your digital assets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
