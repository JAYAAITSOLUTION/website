"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Clock, Cloud, AlertTriangle, Shield, FileCheck, Activity } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Manual Compliance Tracking",
    description: "Traditional compliance audits take weeks, delaying critical business operations and creating security gaps.",
  },
  {
    icon: Cloud,
    title: "Fragmented Multi-Cloud Security",
    description: "Managing security across AWS, Azure, and GCP requires multiple tools, creating blind spots and inefficiencies.",
  },
  {
    icon: AlertTriangle,
    title: "Evolving Threat Landscape",
    description: "New cyber threats emerge daily. Without AI-powered detection, organizations remain vulnerable to zero-day attacks.",
  },
];

export function PainPoints() {
  return (
    <section className="py-20 lg:py-32 bg-[#1a1a2e] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(154,27,33,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,92,0,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Dashboard Mockup */}
          <BlurFade inView direction="right">
            <div className="relative">
              <div className="relative bg-[#272221] rounded-3xl p-6 border border-white/10 shadow-2xl">
                <BorderBeam duration={6} size={200} />

                {/* Mock Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">Security Status</h3>
                      <p className="text-xs text-white/50">Critical alerts detected</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    At Risk
                  </div>
                </div>

                {/* Mock Alert Cards */}
                <div className="space-y-3">
                  {[
                    { title: "Compliance Overdue", desc: "ISO 27001 audit pending 15 days", level: "High" },
                    { title: "Unpatched Vulnerabilities", desc: "23 critical patches required", level: "Critical" },
                    { title: "Cloud Misconfiguration", desc: "S3 bucket exposed publicly", level: "Medium" },
                  ].map((alert, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                        <div>
                          <p className="text-sm font-medium text-white">{alert.title}</p>
                          <p className="text-xs text-white/50">{alert.desc}</p>
                        </div>
                      </div>
                      <span className={`
                        px-2 py-1 rounded text-xs font-medium
                        ${alert.level === "Critical" ? "bg-red-500/20 text-red-400" : ""}
                        ${alert.level === "High" ? "bg-orange-500/20 text-orange-400" : ""}
                        ${alert.level === "Medium" ? "bg-amber-500/20 text-amber-400" : ""}
                      `}>
                        {alert.level}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { label: "Open Issues", value: "47", icon: Activity },
                    { label: "Compliance", value: "62%", icon: FileCheck },
                    { label: "Risk Score", value: "7.8", icon: Shield },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-3 rounded-xl bg-white/5">
                      <stat.icon className="w-4 h-4 text-white/40 mx-auto mb-2" />
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/40">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <BlurFade inView>
              <div className="section-label-dark">
                <AlertTriangle className="w-3 h-3" />
                <span>The Challenge</span>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Cybersecurity Operations Are{" "}
                <span className="text-red-400">More Complex</span>{" "}
                Than They Should Be
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg text-white/60 leading-relaxed">
                Organizations struggle with fragmented security tools, manual compliance processes,
                and a shortage of skilled cybersecurity professionals. The result? Increased risk,
                delayed responses, and sleepless nights for CISOs.
              </p>
            </BlurFade>

            {/* Pain Points List */}
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <BlurFade key={index} inView delay={0.3 + index * 0.1}>
                  <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{point.title}</h3>
                      <p className="text-sm text-white/60">{point.description}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
