import Link from "next/link";
import { Building2, Handshake, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { clients, partners, regulatoryBodies } from "@/data/clients-partners";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-4 flex items-center justify-center px-8 py-6 rounded-xl bg-md-surface-container border border-md-outline-variant min-w-[180px]">
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
    <div className="p-6 rounded-2xl bg-md-surface border border-md-outline-variant text-center hover:border-md-tertiary/50 transition-colors flex items-center justify-center min-h-[100px]">
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

export const metadata = {
  title: "Clients & Partners - Our Valued Collaborators",
  description: "Discover JAYAA IT Solution's valued clients and strategic technology partners. We collaborate with industry leaders to deliver exceptional results.",
};

export default function ClientsPartnersPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" />
                <span>Clients & Partners</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Trusted by <span className="text-md-primary">Industry Leaders</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto mb-8">
                Discover JAYAA IT Solution&apos;s valued clients and strategic technology partners. We collaborate with industry leaders to deliver exceptional results and drive innovation across sectors.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="h-12 px-8 bg-md-primary text-white hover:bg-md-primary/90 rounded-full">
                  <Link href="/contact" className="flex items-center gap-2">
                    Partner With Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </BlurFade>

          {/* Stats */}
          <BlurFade delay={0.2} inView>
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto mt-12">
              <div className="p-6 rounded-2xl bg-md-surface border border-md-outline-variant text-center">
                <div className="text-3xl font-bold text-md-primary mb-1">50+</div>
                <p className="text-sm text-md-on-surface-variant">Satisfied Clients</p>
              </div>
              <div className="p-6 rounded-2xl bg-md-surface border border-md-outline-variant text-center">
                <div className="text-3xl font-bold text-md-primary mb-1">99.9%</div>
                <p className="text-sm text-md-on-surface-variant">Client Satisfaction</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 bg-md-surface overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-secondary-container text-md-on-secondary-container text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                <span>Our Clients</span>
              </div>
              <h2 className="text-2xl font-bold text-md-on-surface mb-2">
                Trusted by Leading Organizations
              </h2>
              <p className="text-md-on-surface-variant text-sm max-w-xl mx-auto">
                Axis Bank, Bajaj, Kotak, SBI, Indusland, Arohi, ICICI Lombard, DCB Bank, HDFC Sales, ICICI Bank, Greater Bank, Oman Development Bank
              </p>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView>
          <Marquee pauseOnHover className="[--duration:40s]">
            {clients.map((client) => (
              <ClientLogo key={client.id} name={client.name} logo={client.logo} />
            ))}
          </Marquee>
        </BlurFade>
      </section>

      {/* Partners Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-tertiary-container text-md-on-tertiary-container text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>Technology Partners</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Our <span className="text-md-tertiary">Partners</span>
              </h2>
              <p className="text-md-on-surface-variant">
                We partner with leading technology providers to deliver
                best-in-class solutions to our clients.
              </p>
              <p className="text-sm text-md-on-surface-variant mt-4">
                Cisco, Fortinet, Palo Alto Networks, CyberArk, RSA Security, Forcepoint, ManageEngine, Commvault, Citrix, Broadcom, BMC, AppDynamics, Arcon, Versa Networks, Beyond Trust, Vyomlab, Seclore, Silver Peak, Accops
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <BlurFade key={partner.id} delay={0.1 + index * 0.05} inView>
                <PartnerCard name={partner.name} logo={partner.logo} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Bodies Section */}
      <section className="py-20 lg:py-32 bg-md-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Compliance & Certifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Regulatory <span className="text-md-primary">Standards</span>
              </h2>
              <p className="text-md-on-surface-variant">
                We adhere to industry-leading regulatory frameworks and
                certification standards to ensure the highest level of
                security and compliance.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulatoryBodies.map((body, index) => (
              <BlurFade key={body.id} delay={0.1 + index * 0.05} inView>
                <div className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant text-center hover:border-md-primary/50 transition-colors flex items-center justify-center min-h-[100px]">
                  <Image
                    src={body.logo}
                    alt={body.name}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
