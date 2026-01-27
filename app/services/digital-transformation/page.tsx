import Link from "next/link";
import { ArrowLeft, Cloud, CloudCog, Workflow, Monitor, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const features = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless migration of workloads to cloud with minimal disruption to business operations.",
  },
  {
    icon: CloudCog,
    title: "Cloud Optimization",
    description: "Optimize cloud infrastructure for performance, cost, and security across multi-cloud environments.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate repetitive business processes to improve efficiency and reduce operational costs.",
  },
  {
    icon: Monitor,
    title: "Modern Workplace",
    description: "Enable remote work with secure collaboration tools and modern productivity solutions.",
  },
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Accelerate time-to-market",
  "Improve business agility",
  "Enhance customer experience",
  "Enable data-driven decisions",
  "Future-proof your business",
];

export const metadata = {
  title: "Digital Transformation | JAYAA IT Solution",
  description: "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions.",
};

export default function DigitalTransformationPage() {
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

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-secondary-container text-md-on-secondary-container text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                <span>Transformation Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Digital <span className="text-md-secondary">Transformation</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl">
                Accelerate your digital journey with comprehensive cloud migration,
                process automation, and modern workplace solutions that drive
                innovation and business growth.
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
                Transformation <span className="text-md-secondary">Areas</span>
              </h2>
              <p className="text-md-on-surface-variant">
                End-to-end digital transformation services covering all aspects
                of modern business technology.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <BlurFade key={feature.title} delay={0.1 + index * 0.1} inView>
                <div className="p-8 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-secondary/50 transition-colors h-full">
                  <div className="w-14 h-14 rounded-xl bg-md-secondary-container flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-md-secondary" />
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
                  Benefits of <span className="text-md-secondary">Digital Transformation</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  Embrace digital transformation to unlock new opportunities,
                  improve operational efficiency, and stay competitive in the
                  digital age.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-secondary text-md-on-secondary hover:bg-md-secondary/90"
                >
                  <Link href="/contact">
                    Start Your Journey
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
                    <CheckCircle2 className="w-5 h-5 text-md-secondary flex-shrink-0" />
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
