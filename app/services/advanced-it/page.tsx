import Link from "next/link";
import { ArrowLeft, Cpu, Server, Shield, Network, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const features = [
  {
    icon: Network,
    title: "Network Security",
    description: "Next-generation firewalls, intrusion detection systems, and secure network architecture design.",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    description: "Comprehensive IT infrastructure management including servers, storage, and virtualization.",
  },
  {
    icon: Shield,
    title: "Endpoint Protection",
    description: "Advanced endpoint detection and response (EDR) solutions for all devices.",
  },
  {
    icon: Cpu,
    title: "Disaster Recovery",
    description: "Business continuity planning and disaster recovery solutions to minimize downtime.",
  },
];

const benefits = [
  "99.9% infrastructure uptime",
  "Reduced IT operational costs",
  "Proactive threat prevention",
  "Scalable architecture",
  "24/7 monitoring and support",
  "Rapid incident response",
];

export const metadata = {
  title: "Advanced IT Solutions | JAYAA IT Solution",
  description: "Cutting-edge infrastructure, network security, and endpoint protection for modern enterprises.",
};

export default function AdvancedITPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl">
              <Button
                asChild
                variant="ghost"
                className="mb-6 text-md-on-surface-variant hover:text-md-primary"
              >
                <Link href="/services">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Services
                </Link>
              </Button>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-tertiary-container text-md-on-tertiary-container text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                <span>IT Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Advanced IT <span className="text-md-tertiary">Solutions</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl">
                Cutting-edge infrastructure, network security, and endpoint
                protection designed for the modern enterprise landscape.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Solution <span className="text-md-tertiary">Areas</span>
              </h2>
              <p className="text-md-on-surface-variant">
                Comprehensive IT solutions covering infrastructure, security,
                and business continuity.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <BlurFade key={feature.title} delay={0.1 + index * 0.1} inView>
                <div className="p-8 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-tertiary/50 transition-colors h-full">
                  <div className="w-14 h-14 rounded-xl bg-md-tertiary-container flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-md-tertiary" />
                  </div>
                  <h3 className="text-xl font-semibold text-md-on-surface mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-md-on-surface-variant">
                    {feature.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Benefits of <span className="text-md-tertiary">Advanced IT</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  Modernize your IT infrastructure with solutions that deliver
                  reliability, security, and scalability for your business.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-tertiary text-md-on-tertiary hover:bg-md-tertiary/90"
                >
                  <Link href="/contact">
                    Discuss Your Needs
                  </Link>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-md-surface border border-md-outline-variant"
                  >
                    <CheckCircle2 className="w-5 h-5 text-md-tertiary flex-shrink-0" />
                    <span className="text-md-on-surface">{benefit}</span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
