import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Users, Award } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const stats = [
  { value: "4+", label: "Years Combined Experience" },
  { value: "3", label: "Industry Experts" },
  { value: "100%", label: "Client Success Rate" },
];

export const metadata = {
  title: "Our Team - Expert IT Professionals & Leaders",
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
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium border border-md-primary/20 mb-6">
                <span>Our Leadership Team</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface leading-[1.1] tracking-tight mb-6">
                The Minds Behind{" "}
                <span className="gradient-text">JAYAA IT Solution</span>
              </h1>

              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-8">
                Our exceptional team combines decades of industry experience with cutting-edge expertise to deliver innovative IT solutions that drive business transformation.
              </p>
            </BlurFade>

            {/* Team Stats */}
            <BlurFade delay={0.2} inView>
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-md-surface border border-md-outline-variant text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-md-primary mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-md-on-surface-variant">{stat.label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Expert Team CTA */}
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
                <span>Work With Us</span>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Work with Our{" "}
                <span className="text-white/90">Expert Team</span>?
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let our experienced professionals guide your organization through digital transformation with innovative IT solutions tailored to your unique needs.
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
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </ShimmerButton>
                <Link
                  href="/about"
                  className="h-14 px-10 rounded-full text-base font-medium border border-white/30 text-white hover:bg-white/10 flex items-center justify-center gap-2 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
