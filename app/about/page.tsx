import Link from "next/link";
import { Shield, Award, Users, Heart, Lightbulb, Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
  "Vulnerability Assessment & Penetration Testing (VAPT)",
  "Threat Intelligence & Breach Simulation",
  "Red Teaming & Attack Surface Management",
  "Firewalls, DLP, and DRM Implementation",
];

const values = [
  {
    icon: Heart,
    title: "Client-Centricity",
    description: "Understanding and exceeding client expectations is at the heart of everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously exploring and implementing cutting-edge technologies for optimal solutions.",
  },
  {
    icon: Star,
    title: "Integrity & Excellence",
    description: "Upholding the highest standards of integrity and striving for excellence in all our endeavors.",
  },
];

const highlights = [
  "Commitment to excellence and innovation.",
  "Partnerships with leading Original Equipment Manufacturers (OEMs).",
  "Enabling businesses from start-ups to enterprises to thrive.",
  "ISO Certified & Industry Compliant solutions.",
];

export const metadata = {
  title: "About Us - Premier IT Service Provider",
  description: "Learn about JAYAA IT Solution's mission, values, and commitment to delivering enterprise-grade cybersecurity and IT solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>Premier IT Service Provider</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Transforming Businesses Through{" "}
                <span className="text-md-primary">Innovation</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto mb-8">
                Jayaa IT Solution is a premier IT service provider, renowned for delivering innovative, cutting-edge technology solutions to businesses globally. With a strong focus on IT security, infrastructure management, consultancy, and support, we empower organizations to meet their operational and strategic goals with precision, efficiency, and innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="h-12 px-8 bg-md-primary text-white hover:bg-md-primary/90 rounded-full"
                >
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="h-12 px-8 text-md-on-surface hover:bg-md-primary-container rounded-full"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium">
                  <span>Who We Are</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Digital. Secure.{" "}
                  <span className="text-md-primary">Resilient.</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  At Jayaa IT Solution, we are a team of dedicated IT professionals driven by a passion for leveraging technology to transform businesses.
                </p>
                <p className="text-md-on-surface-variant">
                  We take pride in empowering organizations to stay ahead in an ever-evolving digital landscape by providing innovative, secure, and scalable IT solutions.
                </p>
                <p className="text-md-on-surface-variant">
                  Trusted by industry leaders across BFSI, Healthcare, Government, and Technology.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant text-center">
                  <div className="text-3xl font-bold text-md-primary mb-1">24/7/365</div>
                  <p className="text-sm text-md-on-surface-variant">Real-Time Threat Monitoring</p>
                </div>
                <div className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant text-center">
                  <div className="text-3xl font-bold text-md-primary mb-1">50+</div>
                  <p className="text-sm text-md-on-surface-variant">Enterprise Clients Protected</p>
                </div>
                <div className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant text-center">
                  <div className="text-3xl font-bold text-md-primary mb-1">99.9%</div>
                  <p className="text-sm text-md-on-surface-variant">Compliance-Driven Uptime SLA</p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-md-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Our Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                Technology with Trust. Transformation with{" "}
                <span className="text-md-primary">Purpose.</span>
              </h2>
              <p className="text-lg text-md-on-surface-variant">
                JAYAA IT Solution Pvt. Ltd. is your trusted partner in delivering next-generation IT infrastructure and cybersecurity services. We empower enterprises with secure, scalable, and compliance-ready solutions that drive digital excellence.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <BlurFade key={feature} delay={0.1 + index * 0.1} inView>
                <div className="p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-md-primary" />
                  </div>
                  <span className="text-lg font-medium text-md-on-surface">{feature}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Flickering Grid Background */}
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#9A1B21"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={900}
          width={900}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <span>Our Core Values</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                Guiding{" "}
                <span className="text-md-primary">Principles</span>
              </h2>
              <p className="text-lg text-md-on-surface-variant">
                Our core values shape every decision we make and guide us in delivering exceptional IT solutions that drive your business forward.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <BlurFade key={value.title} delay={0.1 + index * 0.1} inView>
                <div className="p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-md-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-md-on-surface-variant">
                    {value.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.4} inView>
            <div className="text-center mt-12">
              <Button
                asChild
                className="h-12 px-8 bg-md-primary text-white hover:bg-md-primary/90 rounded-full"
              >
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
