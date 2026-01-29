"use client";

import Link from "next/link";
import { ArrowRight, Star, Shield, Users, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 24, suffix: "/7/365", label: "Real-Time Threat Monitoring", icon: Shield },
  { value: 50, suffix: "+", label: "Enterprise Clients Protected", icon: Users },
  { value: 99.9, suffix: "%", label: "Compliance-Driven Uptime SLA", icon: Activity, decimalPlaces: 1 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAFA] pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Soft warm gradient - top left */}
        <div
          className="absolute -left-32 top-0 w-[600px] h-[700px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,230,211,0.8) 0%, rgba(245,230,211,0) 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Soft lavender - top center-right */}
        <div
          className="absolute left-[30%] -top-32 w-[500px] h-[600px] opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(232,224,240,0.8) 0%, rgba(232,224,240,0) 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Soft blue - right side */}
        <div
          className="absolute -right-20 top-10 w-[450px] h-[600px] opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(224,232,245,0.8) 0%, rgba(224,232,245,0) 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Brand color subtle accent - bottom left */}
        <div
          className="absolute -left-20 bottom-0 w-[400px] h-[400px] opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(154,27,33,0.6) 0%, rgba(154,27,33,0) 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Very subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Headline with Gradient Styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-8">
              <span className="bg-gradient-to-r from-[#9A1B21] via-[#B83236] to-[#9A1B21] bg-clip-text text-transparent">
                Protect, Prevent,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#7A5C00] via-[#9A1B21] to-[#7A5C00] bg-clip-text text-transparent">
                and Prevail
              </span>
            </h1>

            {/* Two-column subtext with arrow */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
              <p className="text-base text-[#4A4A4A] leading-relaxed max-w-xs">
                At JAYAA IT Solution, we empower businesses to stay ahead of evolving cyber threats
              </p>

              <ArrowRight className="w-5 h-5 text-[#9A1B21] hidden sm:block flex-shrink-0" />

              <p className="text-base text-[#4A4A4A] leading-relaxed max-w-xs">
                through intelligent, proactive, and compliance-driven security solutions
              </p>
            </div>

            {/* Rating / Social Proof */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-[#1A1A1A]">4.9/5</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#9A1B21] text-[#9A1B21]" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#6A6A6A] hidden sm:inline">Trusted by enterprises across BFSI, Healthcare, Government, and Technology</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:from-[#7A1519] hover:to-[#9A1B21] shadow-lg hover:shadow-xl hover:shadow-[#9A1B21]/25 transition-all duration-300 text-base font-medium"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-full border-2 border-[#E8E8E8] text-[#1A1A1A] hover:border-[#9A1B21]/50 hover:bg-[#9A1B21]/5 transition-all duration-300 text-base font-medium"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>

          {/* Right Column - Globe */}
          <div className="relative h-[400px] lg:h-[500px] flex items-start justify-center z-20">
            <Globe className="top-0 z-50"  />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(250,250,250,0)_0%,rgba(250,250,250,0.8)_100%)] z-30" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-[#E0E0E0] pt-10 mt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A] mb-8 text-center">
            Trusted by Industry Leaders Worldwide
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E8E8] hover:border-[#9A1B21]/30 hover:shadow-lg hover:shadow-[#9A1B21]/5 transition-all duration-300"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9A1B21]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#9A1B21]/10 to-[#9A1B21]/5 flex items-center justify-center group-hover:from-[#9A1B21]/20 group-hover:to-[#9A1B21]/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#9A1B21]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] tracking-tight">
                          <NumberTicker
                            value={stat.value}
                            decimalPlaces={stat.decimalPlaces || 0}
                            className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]"
                          />
                        </span>
                        <span className="text-xl lg:text-2xl font-semibold text-[#9A1B21]">
                          {stat.suffix}
                        </span>
                      </div>
                      <p className="text-sm text-[#6A6A6A] font-medium mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
