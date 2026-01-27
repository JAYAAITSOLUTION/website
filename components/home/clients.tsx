"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

const clients = [
  "Bank of India",
  "HDFC Bank",
  "Apollo Hospitals",
  "Max Healthcare",
  "Reliance Retail",
  "Tata Motors",
  "Infosys",
  "Wipro",
  "Tech Mahindra",
  "State Bank of India",
];

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="mx-8 flex items-center justify-center px-8 py-4 rounded-xl bg-md-surface-container border border-md-outline-variant">
      <span className="text-lg font-semibold text-md-on-surface-variant whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function Clients() {
  return (
    <section className="py-16 bg-md-surface overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-md-on-surface-variant">
              Trusted by Leading Organizations
            </p>
          </div>
        </BlurFade>
      </div>

      <BlurFade delay={0.2} inView>
        <Marquee pauseOnHover className="[--duration:30s]">
          {clients.map((client) => (
            <ClientLogo key={client} name={client} />
          ))}
        </Marquee>
      </BlurFade>
    </section>
  );
}
