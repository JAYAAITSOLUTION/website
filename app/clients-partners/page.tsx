"use client";

import Link from "next/link";
import { Building2, Handshake, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { clients, partners, regulatoryBodies } from "@/data/clients-partners";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-4 flex items-center justify-center px-8 py-6 rounded-3xl bg-white border border-[#E8E8E8] min-w-[180px]">
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

function PartnerCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] text-center hover:border-[#9A1B21]/50 transition-colors flex items-center justify-center min-h-[100px]">
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


export default function ClientsPartnersPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E8F5]/50 via-[#E5EDF8]/30 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F5E6D3]/40 via-[#F0DDD0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" />
                <span>Clients & Partners</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6">
                Trusted by <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Industry Leaders</span>
              </h1>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-8">
                Discover JAYAA IT Solution&apos;s valued clients and strategic technology partners. We collaborate with industry leaders to deliver exceptional results and drive innovation across sectors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="h-12 px-8 bg-gradient-to-r from-[#9A1B21] to-[#B83236] text-white hover:opacity-90 rounded-full">
                  <Link href="/contact" className="flex items-center gap-2">
                    Partner With Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto mt-12">
              <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] text-center">
                <div className="text-3xl font-bold text-[#9A1B21] mb-1">50+</div>
                <p className="text-sm text-[#4A4A4A]">Satisfied Clients</p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] text-center">
                <div className="text-3xl font-bold text-[#9A1B21] mb-1">99.9%</div>
                <p className="text-sm text-[#4A4A4A]">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                <span>Our Clients</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                Trusted by Leading Organizations
              </h2>
              <p className="text-[#4A4A4A] text-sm max-w-xl mx-auto">
                Axis Bank, Bajaj, Kotak, SBI, Indusland, Arohi, ICICI Lombard, DCB Bank, HDFC Sales, ICICI Bank, Greater Bank, Oman Development Bank
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Marquee pauseOnHover className="[--duration:40s]">
            {clients.map((client) => (
              <ClientLogo key={client.id} name={client.name} logo={client.logo} />
            ))}
          </Marquee>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Soft Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#E0E8F5]/50 via-[#E5EDF8]/30 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-[#F5E6D3]/40 via-[#F0DDD0]/20 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#9A1B21]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>Technology Partners</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                Our <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Partners</span>
              </h2>
              <p className="text-[#4A4A4A]">
                We partner with leading technology providers to deliver
                best-in-class solutions to our clients.
              </p>
              <p className="text-sm text-[#6A6A6A] mt-4">
                Cisco, Fortinet, Palo Alto Networks, CyberArk, RSA Security, Forcepoint, ManageEngine, Commvault, Citrix, Broadcom, BMC, AppDynamics, Arcon, Versa Networks, Beyond Trust, Vyomlab, Seclore, Silver Peak, Accops
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <PartnerCard name={partner.name} logo={partner.logo} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Bodies Section */}
      <section className="py-20 lg:py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9A1B21]/10 text-[#9A1B21] text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Compliance & Certifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                Regulatory <span className="bg-gradient-to-r from-[#9A1B21] to-[#B83236] bg-clip-text text-transparent">Standards</span>
              </h2>
              <p className="text-[#4A4A4A]">
                We adhere to industry-leading regulatory frameworks and
                certification standards to ensure the highest level of
                security and compliance.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulatoryBodies.map((body, index) => (
              <motion.div
                key={body.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="p-6 rounded-3xl bg-white border border-[#E8E8E8] text-center hover:border-[#9A1B21]/50 transition-colors flex items-center justify-center min-h-[100px]">
                  <Image
                    src={body.logo}
                    alt={body.name}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
