import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Fingerprint, Network, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const features = [
  {
    icon: Fingerprint,
    title: "Identity Verification",
    description: "Multi-factor authentication and continuous identity verification for all users and devices.",
  },
  {
    icon: Network,
    title: "Micro-Segmentation",
    description: "Network segmentation that limits lateral movement and contains potential breaches.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Real-time monitoring and analytics to detect and respond to threats instantly.",
  },
  {
    icon: Lock,
    title: "Least Privilege Access",
    description: "Grant minimum necessary access based on user roles and contextual factors.",
  },
];

const benefits = [
  "Reduce attack surface by 80%",
  "Prevent lateral movement of threats",
  "Improve compliance posture",
  "Enhanced visibility and control",
  "Simplify security operations",
  "Protect remote workforce",
];

export const metadata = {
  title: "Zero Trust Security | JAYAA IT Solution",
  description: "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring.",
};

export default function ZeroTrustPage() {
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

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Security Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Zero Trust <span className="text-md-primary">Security</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl">
                Implement a comprehensive Zero Trust architecture that assumes
                no trust by default. Verify every access request, regardless of
                origin, to protect your critical assets.
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
                Core <span className="text-md-primary">Components</span>
              </h2>
              <p className="text-md-on-surface-variant">
                Our Zero Trust implementation covers all critical aspects of
                modern security architecture.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <BlurFade key={feature.title} delay={0.1 + index * 0.1} inView>
                <div className="p-8 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 transition-colors h-full">
                  <div className="w-14 h-14 rounded-xl bg-md-primary-container flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-md-primary" />
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
                  Benefits of <span className="text-md-primary">Zero Trust</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  Adopting Zero Trust architecture provides significant security
                  advantages for modern enterprises dealing with sophisticated
                  cyber threats.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90"
                >
                  <Link href="/contact">
                    Schedule a Consultation
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
                    <CheckCircle2 className="w-5 h-5 text-md-primary flex-shrink-0" />
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
