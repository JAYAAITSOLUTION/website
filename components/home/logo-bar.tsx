"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";
import { clients } from "@/data/clients-partners";

// Client logo for the grid
function ClientLogoGrid({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center p-6 h-20 group">
      <Image
        src={logo}
        alt={name}
        width={120}
        height={40}
        className="object-contain max-h-8 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

export function LogoBar() {
  // Take first 10 clients for the grid display
  const displayClients = clients.slice(0, 10);

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade inView>
          <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-12">
            Trusted by Leading Organizations
          </p>
        </BlurFade>

        {/* Logo grid with borders */}
        <BlurFade inView delay={0.1}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {displayClients.map((client, index) => (
                <div
                  key={client.id}
                  className={`
                    relative
                    ${index < 5 ? "border-b border-slate-100" : ""}
                    ${index % 5 !== 4 ? "lg:border-r lg:border-slate-100" : ""}
                    ${index % 3 !== 2 ? "sm:border-r sm:border-slate-100 lg:border-r-0" : ""}
                    ${index % 2 !== 1 ? "border-r border-slate-100 sm:border-r-0" : ""}
                    ${index < 3 ? "sm:border-b sm:border-slate-100" : ""}
                    ${index < 2 ? "border-b border-slate-100 sm:border-b-0" : ""}
                  `}
                >
                  <ClientLogoGrid name={client.name} logo={client.logo} />
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
