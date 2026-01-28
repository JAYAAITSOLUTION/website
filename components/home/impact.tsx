"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  TrendingUp,
  Shield,
  Users,
  Activity,
  Lock,
  Globe,
} from "lucide-react";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Enterprise Clients Protected",
    icon: Users,
  },
  {
    value: 500,
    suffix: "Cr+",
    label: "Assets Secured",
    icon: Lock,
  },
  {
    value: 99,
    suffix: "%",
    label: "Threat Detection Rate",
    icon: Shield,
  },
  {
    value: 15,
    suffix: "+",
    label: "Countries Served",
    icon: Globe,
  },
];

export function Impact() {
  return (
    <section className="py-20 lg:py-32 bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(154,27,33,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(122,92,0,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <BlurFade inView>
              <div className="section-label-dark">
                <TrendingUp className="w-3 h-3" />
                <span>Our Impact</span>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Security Made{" "}
                <span className="text-red-400">Simple</span>.
                <br />
                Growth Made{" "}
                <span className="text-amber-400">Inevitable</span>.
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg text-white/60 leading-relaxed">
                We&apos;ve helped hundreds of enterprises transform their security
                posture while enabling business growth. Our AI-powered platform
                delivers measurable results that you can see and trust.
              </p>
            </BlurFade>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <BlurFade key={index} inView delay={0.3 + index * 0.1}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-red-400 mb-4" />
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                      <NumberTicker value={stat.value} className="text-white" />
                      <span className="text-red-400">{stat.suffix}</span>
                    </div>
                    <p className="text-sm text-white/50">{stat.label}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <BlurFade inView delay={0.4} direction="left">
            <div className="relative">
              <div className="relative bg-[#272221] rounded-3xl p-6 border border-white/10 shadow-2xl">
                <BorderBeam duration={6} size={200} />

                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">
                        Security Analytics
                      </h3>
                      <p className="text-xs text-white/50">Real-time insights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Analytics Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-white/50">
                        Threats Blocked
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-white">12,847</p>
                    <p className="text-xs text-green-400 mt-1">+23% this week</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-white/50">
                        Compliance Score
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-white">98.5%</p>
                    <p className="text-xs text-green-400 mt-1">+2.1% this month</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white">
                      Security Posture Trend
                    </span>
                    <span className="text-xs text-white/50">Last 30 days</span>
                  </div>
                  <div className="h-32 flex items-end gap-2">
                    {[40, 55, 45, 60, 50, 70, 65, 75, 80, 85, 82, 90].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-red-500/50 to-red-400/80 transition-all duration-500 hover:from-red-400 hover:to-red-300"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-white/30">
                    <span>Day 1</span>
                    <span>Day 15</span>
                    <span>Day 30</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-red-500 to-amber-500 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/80">Security Score</p>
                    <p className="text-xl font-bold text-white">A+</p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
