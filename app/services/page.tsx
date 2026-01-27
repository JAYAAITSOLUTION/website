import Link from "next/link";
import { ArrowRight, Shield, Cloud, Cpu, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const services = [
  {
    icon: Shield,
    title: "Zero Trust Security",
    description:
      "Implement comprehensive Zero Trust architecture with identity verification, micro-segmentation, and continuous monitoring to protect your critical assets.",
    href: "/services/zero-trust",
    features: [
      "Identity & Access Management",
      "Network Segmentation",
      "Continuous Verification",
      "Least Privilege Access",
    ],
    color: "bg-md-primary-container",
    iconColor: "text-md-primary",
  },
  {
    icon: Cloud,
    title: "Digital Transformation",
    description:
      "Accelerate your digital journey with cloud migration, automation, and modern workplace solutions that drive efficiency and innovation.",
    href: "/services/digital-transformation",
    features: [
      "Cloud Migration Strategy",
      "Process Automation",
      "Modern Workplace",
      "Legacy Modernization",
    ],
    color: "bg-md-secondary-container",
    iconColor: "text-md-secondary",
  },
  {
    icon: Cpu,
    title: "Advanced IT Solutions",
    description:
      "Cutting-edge infrastructure, network security, and endpoint protection designed for the modern enterprise landscape.",
    href: "/services/advanced-it",
    features: [
      "Network Security",
      "Endpoint Protection",
      "Infrastructure Management",
      "Disaster Recovery",
    ],
    color: "bg-md-tertiary-container",
    iconColor: "text-md-tertiary",
  },
  {
    icon: Users,
    title: "Professional Services",
    description:
      "Strategic IT consulting, compliance advisory, and managed security services tailored to your organization's unique needs.",
    href: "/services/professional",
    features: [
      "IT Consulting",
      "Compliance Advisory",
      "Security Audits",
      "Managed Services",
    ],
    color: "bg-md-primary-container",
    iconColor: "text-md-primary",
  },
];

const benefits = [
  "Reduced security incidents by up to 80%",
  "Compliance with industry regulations",
  "24/7 expert support and monitoring",
  "Scalable solutions for growing businesses",
  "Cost-effective security management",
  "Proactive threat detection and response",
];

export const metadata = {
  title: "Our Services | JAYAA IT Solution Pvt. Ltd.",
  description: "Explore our comprehensive range of cybersecurity and IT services including Zero Trust Security, Digital Transformation, Advanced IT Solutions, and Professional Services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>Our Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Comprehensive{" "}
                <span className="text-md-primary">IT Solutions</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                From cybersecurity to digital transformation, we provide
                end-to-end services to secure and optimize your technology
                infrastructure.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <BlurFade key={service.href} delay={0.1 + index * 0.1} inView>
                <div className="group p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  <h2 className="text-2xl font-bold text-md-on-surface mb-4">
                    {service.title}
                  </h2>

                  <p className="text-md-on-surface-variant mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-md-on-surface"
                      >
                        <CheckCircle2 className="w-4 h-4 text-md-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full h-12 rounded-full border-md-outline text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container hover:border-transparent transition-all duration-300"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
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
                  Why Choose Our{" "}
                  <span className="text-md-primary">Services</span>?
                </h2>
                <p className="text-md-on-surface-variant">
                  Our services are designed to deliver measurable results,
                  helping you reduce risk, ensure compliance, and drive business
                  growth through secure technology adoption.
                </p>
                <Button
                  asChild
                  className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
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
                    <div className="w-10 h-10 rounded-full bg-md-primary-container flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-md-primary" />
                    </div>
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
