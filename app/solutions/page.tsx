import Link from "next/link";
import { Shield, Lock, Eye, FileCheck, Server, Network, Fingerprint, Key, Monitor, AlertTriangle, Database, Code, ArrowRight, Sparkles, CheckCircle2, TrendingUp, Quote } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const solutions = [
  { icon: Shield, title: "Threat Detection & Response", description: "AI-powered threat detection with 24/7 SOC monitoring" },
  { icon: Lock, title: "Data Loss Prevention", description: "Comprehensive DLP across endpoints and cloud services" },
  { icon: Eye, title: "Security Monitoring", description: "Real-time visibility with advanced SIEM solutions" },
  { icon: FileCheck, title: "Compliance Management", description: "Streamlined compliance for RBI, SEBI, HIPAA, GDPR" },
  { icon: Server, title: "Cloud Security", description: "Secure multi-cloud security posture management" },
  { icon: Network, title: "Network Security", description: "Next-gen firewalls and network segmentation" },
  { icon: Fingerprint, title: "Identity & Access Management", description: "Zero Trust identity and privileged access management" },
  { icon: Key, title: "Encryption Services", description: "End-to-end encryption for data at rest and in transit" },
  { icon: Monitor, title: "Endpoint Protection", description: "Advanced EDR solutions for all devices" },
  { icon: AlertTriangle, title: "Vulnerability Management", description: "Continuous scanning and remediation" },
  { icon: Database, title: "Database Security", description: "Protection for critical business databases" },
  { icon: Code, title: "Application Security", description: "Secure SDLC and application penetration testing" },
];

const howItWorks = [
  {
    step: "01",
    title: "Assessment",
    description: "We conduct a comprehensive security assessment to understand your current posture and identify vulnerabilities.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our experts design a tailored security strategy aligned with your business objectives and compliance requirements.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We deploy and configure security solutions with minimal disruption to your business operations.",
  },
];

const testimonials = [
  {
    quote: "JAYAA IT Solution transformed our security posture. Their expertise in Zero Trust architecture helped us achieve compliance and protect our critical assets.",
    author: "Rajesh Kumar",
    role: "CIO, Leading Bank",
  },
  {
    quote: "The team's professionalism and technical depth exceeded our expectations. They delivered a comprehensive security solution on time and within budget.",
    author: "Priya Sharma",
    role: "CTO, Healthcare Provider",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Security Solutions" },
  { value: 99, suffix: "%", label: "Threat Detection" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 24, suffix: "/7", label: "SOC Monitoring" },
];

export const metadata = {
  title: "Solutions | JAYAA IT Solution",
  description: "Explore our comprehensive range of cybersecurity and IT solutions designed to protect your enterprise.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Flickering Grid Background */}
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#9A1B21"
          maxOpacity={0.12}
          flickerChance={0.1}
          height={1000}
          width={1000}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-md-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-md-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium border border-md-primary/20">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Solutions</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface leading-[1.1] tracking-tight">
                  Security{" "}
                  <span className="gradient-text">Solutions</span>
                </h1>

                <p className="text-lg text-md-on-surface-variant max-w-xl leading-relaxed">
                  Comprehensive cybersecurity solutions designed to protect your
                  organization from evolving threats while maintaining compliance.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <ShimmerButton
                    className="h-14 px-8 rounded-full text-base font-medium"
                    shimmerColor="#ffffff"
                    background="#9A1B21"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </ShimmerButton>
                  <Link
                    href="#solutions"
                    className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-md-outline text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container hover:border-transparent transition-all duration-300 text-base"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </BlurFade>

            {/* Security Dashboard */}
            <BlurFade delay={0.3} direction="left" inView>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-md-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-md-secondary/10 rounded-full blur-3xl" />

                <div className="relative bg-md-surface-container/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-md-outline-variant">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-md-primary flex items-center justify-center">
                        <Shield className="w-5 h-5 text-md-on-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-md-on-surface text-sm">Security Dashboard</h3>
                        <p className="text-xs text-md-on-surface-variant">Live Monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Protected
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/30 transition-colors duration-300"
                      >
                        <div className="text-2xl font-bold text-md-primary">
                          <NumberTicker value={stat.value} />
                          <span className="text-lg">{stat.suffix}</span>
                        </div>
                        <p className="text-xs text-md-on-surface-variant mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-md-primary-container to-md-secondary-container/30 border border-md-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-md-primary" />
                        <span className="text-sm font-medium text-md-on-surface">Security Score</span>
                      </div>
                      <span className="text-lg font-bold text-md-primary">98/100</span>
                    </div>
                    <div className="h-2 bg-md-surface rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-gradient-to-r from-md-primary to-md-secondary rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-md-surface rounded-2xl p-4 shadow-xl border border-md-outline-variant animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-md-primary-container flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-md-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-md-on-surface-variant">Threats Blocked</p>
                      <p className="text-sm font-semibold text-md-on-surface">2,847 Today</p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Solutions Bento Grid */}
      <section id="solutions" className="py-20 lg:py-32 relative overflow-hidden">
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.08}
          duration={4}
          repeatDelay={0.5}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-primary-container text-md-on-primary-container mb-6">
                <span>Solutions Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                15+ Monitoring{" "}
                <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-md-on-surface-variant text-lg">
                End-to-end security solutions covering every aspect of your
                digital infrastructure.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <BlurFade key={solution.title} delay={0.1 + index * 0.05} inView>
                <div className="group relative p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
                  <BorderBeam
                    size={60}
                    duration={4}
                    colorFrom="#9A1B21"
                    colorTo="#7A5C00"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="w-12 h-12 rounded-xl bg-md-primary-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-md-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-md-on-surface mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-md-on-surface-variant">
                    {solution.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-[#1a1a2e] dark:bg-[#0f0c0c] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-md-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-md-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>How It Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Our{" "}
                <span className="text-white/80">3-Step Process</span>
              </h2>
              <p className="text-white/60 text-lg">
                A streamlined approach to securing your organization
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <BlurFade key={step.step} delay={0.1 + index * 0.1} inView>
                <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-md-primary/50 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-white/10 mb-4 group-hover:text-md-primary/30 transition-colors duration-300">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-md-primary to-md-secondary flex items-center justify-center mb-6">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Flickering Grid Background */}
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#9A1B21"
          maxOpacity={0.08}
          flickerChance={0.1}
          height={800}
          width={800}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-secondary-container text-md-on-secondary-container mb-6">
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                What Our{" "}
                <span className="gradient-text">Clients Say</span>
              </h2>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <div className="group p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                  <Quote className="w-10 h-10 text-md-primary/30 mb-4" />
                  <p className="text-md-on-surface-variant mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-md-primary-container flex items-center justify-center">
                      <span className="text-md-primary font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-md-on-surface">{testimonial.author}</p>
                      <p className="text-sm text-md-on-surface-variant">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#9A1B21] via-[#c41e25] to-[#7A5C00]">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade inView>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>Get Started Today</span>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Secure Your{" "}
                <span className="text-white/90">Enterprise</span>?
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Get a comprehensive security assessment and discover how our solutions
                can protect your organization from evolving threats.
              </p>
            </BlurFade>

            <BlurFade inView delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton
                  className="h-14 px-10 rounded-full text-base font-medium"
                  shimmerColor="#ffffff"
                  background="rgba(255,255,255,0.2)"
                  borderRadius="9999px"
                >
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-white"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </ShimmerButton>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.4}>
              <p className="mt-8 text-sm text-white/60">
                Free security assessment for new clients. No commitment required.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
