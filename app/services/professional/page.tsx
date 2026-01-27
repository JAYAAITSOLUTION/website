import Link from "next/link";
import { ArrowLeft, Users, ClipboardCheck, GraduationCap, FileSearch, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const features = [
  {
    icon: ClipboardCheck,
    title: "IT Consulting",
    description: "Strategic technology consulting to align your IT investments with business objectives.",
  },
  {
    icon: FileSearch,
    title: "Compliance Advisory",
    description: "Expert guidance on regulatory compliance including ISO 27001, GDPR, HIPAA, and industry standards.",
  },
  {
    icon: GraduationCap,
    title: "Security Audits",
    description: "Comprehensive security assessments and penetration testing to identify vulnerabilities.",
  },
  {
    icon: Users,
    title: "Managed Services",
    description: "End-to-end managed security and IT services with 24/7 support and monitoring.",
  },
];

const benefits = [
  "Access to certified experts",
  "Reduced operational overhead",
  "Improved compliance posture",
  "Proactive risk management",
  "Scalable service delivery",
  "Cost-effective solutions",
];

export const metadata = {
  title: "Professional Services | JAYAA IT Solution",
  description: "Strategic IT consulting, compliance advisory, and managed security services tailored to your needs.",
};

export default function ProfessionalServicesPage() {
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
                <Users className="w-4 h-4" />
                <span>Professional Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Professional{" "}
                <span className="text-md-primary">Services</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl">
                Strategic IT consulting, compliance advisory, and managed
                security services tailored to your organization&apos;s unique
                needs and objectives.
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
                Service <span className="text-md-primary">Offerings</span>
              </h2>
              <p className="text-md-on-surface-variant">
                Expert professional services delivered by certified consultants
                with deep industry experience.
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
                  Why Our{" "}
                  <span className="text-md-primary">Professional Services</span>?
                </h2>
                <p className="text-md-on-surface-variant">
                  Leverage our expertise to accelerate your security initiatives,
                  ensure compliance, and optimize your IT operations.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90"
                >
                  <Link href="/contact">Engage Our Experts</Link>
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
