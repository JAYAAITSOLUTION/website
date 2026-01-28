"use client";

import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import { Building2, Landmark, HeartPulse, ShieldCheck, Briefcase, Factory } from "lucide-react";

const clients = [
  { name: "Bank of India", icon: Landmark },
  { name: "HDFC Bank", icon: Landmark },
  { name: "Apollo Hospitals", icon: HeartPulse },
  { name: "Government of Telangana", icon: ShieldCheck },
  { name: "Tata Consultancy", icon: Briefcase },
  { name: "Infosys", icon: Building2 },
  { name: "Wipro", icon: Factory },
  { name: "Tech Mahindra", icon: Building2 },
];

export function LogoBar() {
  return (
    <section className="py-12 lg:py-16 bg-md-surface border-y border-md-outline-variant/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <BlurFade inView>
          <p className="text-center text-sm font-medium text-md-on-surface-variant uppercase tracking-wider">
            Trusted by Leading Organizations
          </p>
        </BlurFade>
      </div>

      <BlurFade inView delay={0.1}>
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-md-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-md-surface to-transparent z-10" />

          <Marquee pauseOnHover className="[--duration:30s]" repeat={6}>
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 mx-4 rounded-xl bg-md-surface-container/50 border border-md-outline-variant/50 hover:border-md-primary/30 transition-all duration-300 hover:shadow-md"
              >
                <client.icon className="w-6 h-6 text-md-primary" />
                <span className="text-md-on-surface font-medium whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </BlurFade>
    </section>
  );
}
