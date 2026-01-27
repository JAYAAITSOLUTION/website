"use client";

import { FileCheck, Shield, Scale, Lock } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const compliances = [
  {
    icon: Shield,
    name: "ISO 27001",
    description: "Information Security Management System certification",
  },
  {
    icon: FileCheck,
    name: "SOC 2",
    description: "Service Organization Control compliance",
  },
  {
    icon: Scale,
    name: "GDPR",
    description: "General Data Protection Regulation compliance",
  },
  {
    icon: Lock,
    name: "HIPAA",
    description: "Healthcare data protection standards",
  },
];

export function Compliance() {
  return (
    <section className="py-16 bg-md-surface-container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-md-on-surface-variant mb-4">
              Compliant with Industry Standards
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {compliances.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-md-primary" />
                </div>
                <h3 className="font-semibold text-md-on-surface mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-md-on-surface-variant">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
