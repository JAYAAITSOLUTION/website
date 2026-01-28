import Link from "next/link";
import { Linkedin, Twitter, Mail, Award, Users, TrendingUp, Sparkles, ArrowRight, Target, Lightbulb, Heart, Shield } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";

const leadership = [
  {
    name: "Rajesh Kumar",
    role: "Chief Executive Officer",
    bio: "20+ years of experience in enterprise IT and cybersecurity. Former CISO at Fortune 500 companies.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Expert in cloud architecture and digital transformation. Led multiple large-scale transformation projects.",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    role: "Chief Information Security Officer",
    bio: "CISSP certified security leader with expertise in Zero Trust architecture and threat intelligence.",
    initials: "AP",
  },
  {
    name: "Sneha Reddy",
    role: "VP of Operations",
    bio: "15+ years in IT service delivery and managed services. Expert in building high-performance teams.",
    initials: "SR",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 25, suffix: "+", label: "Certifications" },
  { value: 15, suffix: "+", label: "Years Average Experience" },
  { value: 100, suffix: "%", label: "Certified Professionals" },
];

const certifications = [
  "CISSP", "CISM", "CEH", "OSCP", "AWS Solutions Architect", "Azure Security Engineer",
  "GCP Professional", "ISO 27001 Lead Auditor", "PCI DSS Implementer", "ITIL Expert"
];

const cultureValues = [
  { icon: Target, title: "Excellence", description: "We strive for excellence in everything we do" },
  { icon: Lightbulb, title: "Innovation", description: "We embrace new ideas and technologies" },
  { icon: Heart, title: "Collaboration", description: "We work together to achieve common goals" },
  { icon: Shield, title: "Integrity", description: "We uphold the highest ethical standards" },
];

export const metadata = {
  title: "Our Team | JAYAA IT Solution",
  description: "Meet the leadership team behind JAYAA IT Solution - experienced professionals dedicated to your security.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-md-surface-container overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-md-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-md-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <BlurFade delay={0.1} inView>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium border border-md-primary/20">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Team</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface leading-[1.1] tracking-tight">
                  Meet Our{" "}
                  <span className="gradient-text">Leadership</span>
                </h1>

                <p className="text-lg text-md-on-surface-variant max-w-xl leading-relaxed">
                  Our team of certified professionals brings decades of combined
                  experience in cybersecurity, IT infrastructure, and digital
                  transformation.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <ShimmerButton
                    className="h-14 px-8 rounded-full text-base font-medium"
                    shimmerColor="#ffffff"
                    background="#9A1B21"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Work With Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </ShimmerButton>
                </div>
              </div>
            </BlurFade>

            {/* Team Stats Dashboard */}
            <BlurFade delay={0.3} direction="left" inView>
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-md-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-md-secondary/10 rounded-full blur-3xl" />

                <div className="relative bg-md-surface-container/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-md-outline-variant">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-md-primary flex items-center justify-center">
                        <Users className="w-5 h-5 text-md-on-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-md-on-surface text-sm">Team Overview</h3>
                        <p className="text-xs text-md-on-surface-variant">Key Metrics</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Growing
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
                        <span className="text-sm font-medium text-md-on-surface">Team Satisfaction</span>
                      </div>
                      <span className="text-lg font-bold text-md-primary">4.8/5.0</span>
                    </div>
                    <div className="h-2 bg-md-surface rounded-full overflow-hidden">
                      <div className="h-full w-[96%] bg-gradient-to-r from-md-primary to-md-secondary rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-md-surface rounded-2xl p-4 shadow-xl border border-md-outline-variant animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-md-primary-container flex items-center justify-center">
                      <Award className="w-4 h-4 text-md-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-md-on-surface-variant">Certified</p>
                      <p className="text-sm font-semibold text-md-on-surface">25+ Experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-primary-container text-md-on-primary-container mb-6">
                <span>Leadership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                Executive <span className="gradient-text">Team</span>
              </h2>
              <p className="text-md-on-surface-variant text-lg">
                Experienced leaders driving innovation and excellence in cybersecurity.
              </p>
            </div>
          </BlurFade>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {leadership.map((member, index) => (
              <BlurFade key={member.name} delay={0.1 + index * 0.1} inView>
                <div className="group relative p-8 rounded-3xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <BorderBeam
                    size={100}
                    duration={6}
                    colorFrom="#9A1B21"
                    colorTo="#7A5C00"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-md-primary to-md-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-md-on-surface mb-1">
                        {member.name}
                      </h3>
                      <p className="text-md-primary font-medium mb-3">{member.role}</p>
                      <p className="text-md-on-surface-variant text-sm mb-4">
                        {member.bio}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-md-surface-variant flex items-center justify-center text-md-on-surface-variant hover:bg-md-primary hover:text-md-on-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-md-surface-variant flex items-center justify-center text-md-on-surface-variant hover:bg-md-primary hover:text-md-on-primary transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-md-surface-variant flex items-center justify-center text-md-on-surface-variant hover:bg-md-primary hover:text-md-on-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section - Dark */}
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
                <span>Our Culture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                What We <span className="text-white/80">Value</span>
              </h2>
              <p className="text-white/60 text-lg">
                Our culture is built on these core principles that guide everything we do.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <BlurFade key={value.title} delay={0.1 + index * 0.1} inView>
                <div className="group p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-md-primary/50 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-md-primary to-md-secondary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/60">{value.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-secondary-container text-md-on-secondary-container mb-6">
                <span>Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
                Certifications & <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-md-on-surface-variant text-lg">
                Our team holds industry-leading certifications across cybersecurity and cloud technologies.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {certifications.map((cert, index) => (
              <BlurFade key={cert} delay={0.1 + index * 0.05} inView>
                <div className="group p-4 rounded-2xl bg-md-surface-container border border-md-outline-variant hover:border-md-primary/50 hover:shadow-md transition-all duration-300 text-center">
                  <div className="w-10 h-10 rounded-xl bg-md-primary-container flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-md-primary" />
                  </div>
                  <p className="text-sm font-medium text-md-on-surface">{cert}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
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
                <span>Join Our Team</span>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Want to Join Our{" "}
                <span className="text-white/90">Team</span>?
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                We&apos;re always looking for talented individuals who are passionate about
                cybersecurity and digital transformation. Join us in our mission to
                secure the digital world.
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
                    View Open Positions
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </ShimmerButton>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.4}>
              <p className="mt-8 text-sm text-white/60">
                Send your resume to careers@jayaait.com
              </p>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
