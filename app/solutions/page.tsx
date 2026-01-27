import { Shield, Lock, Eye, FileCheck, Server, Network, Fingerprint, Key, Monitor, AlertTriangle, Database, Code } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

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

const challenges = [
  "Ransomware and malware attacks",
  "Insider threats and data breaches",
  "Compliance with evolving regulations",
  "Cloud security complexity",
  "Remote workforce security",
  "Third-party vendor risks",
];

export const metadata = {
  title: "Solutions | JAYAA IT Solution",
  description: "Explore our comprehensive range of cybersecurity and IT solutions designed to protect your enterprise.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Our Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Security <span className="text-md-primary">Solutions</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your
                organization from evolving threats while maintaining compliance.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                15+ Monitoring <span className="text-md-primary">Solutions</span>
              </h2>
              <p className="text-md-on-surface-variant">
                End-to-end security solutions covering every aspect of your
                digital infrastructure.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <BlurFade key={solution.title} delay={0.1 + index * 0.05} inView>
                <div className="group p-6 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 h-full">
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

      {/* Challenges Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface">
                  Challenges We <span className="text-md-primary">Address</span>
                </h2>
                <p className="text-md-on-surface-variant">
                  Modern enterprises face complex security challenges. Our
                  solutions are designed to address these critical issues and
                  protect your business.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="grid gap-4">
                {challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-md-surface border border-md-outline-variant"
                  >
                    <AlertTriangle className="w-5 h-5 text-md-tertiary flex-shrink-0" />
                    <span className="text-md-on-surface">{challenge}</span>
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
