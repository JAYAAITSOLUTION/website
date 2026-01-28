"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { clients } from "@/data/clients-partners";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-8 flex items-center justify-center px-8 py-6 rounded-xl bg-md-surface-container border border-md-outline-variant min-w-[180px]">
      <Image
        src={logo}
        alt={name}
        width={120}
        height={60}
        className="object-contain"
      />
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
            <ClientLogo key={client.id} name={client.name} logo={client.logo} />
          ))}
        </Marquee>
      </BlurFade>
    </section>
  );
}
