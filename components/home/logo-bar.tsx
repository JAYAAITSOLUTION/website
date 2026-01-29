"use client";

import { motion } from "framer-motion";
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
    <section className="py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-[#9A1B21]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold tracking-widest text-[#8A8A8A] uppercase mb-12"
        >
          Trusted by Leading Organizations
        </motion.p>

        {/* Logo grid with borders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          >
            {displayClients.map((client, index) => (
              <div
                key={client.id}
                className={`
                  relative
                  ${index < 5 ? "border-b border-[#E8E8E8]" : ""}
                  ${index % 5 !== 4 ? "lg:border-r lg:border-[#E8E8E8]" : ""}
                  ${index % 3 !== 2 ? "sm:border-r sm:border-[#E8E8E8] lg:border-r-0" : ""}
                  ${index % 2 !== 1 ? "border-r border-[#E8E8E8] sm:border-r-0" : ""}
                  ${index < 3 ? "sm:border-b sm:border-[#E8E8E8]" : ""}
                  ${index < 2 ? "border-b border-[#E8E8E8] sm:border-b-0" : ""}
                `}
              >
                <ClientLogoGrid name={client.name} logo={client.logo} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
