"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Play, Quote, TrendingUp, Clock } from "lucide-react";

const testimonials = [
  {
    quote:
      "JAYAA IT transformed our security posture completely. Their zero trust implementation reduced our attack surface by 85% and helped us achieve ISO 27001 certification in record time.",
    author: "Rajesh Kumar",
    role: "CISO",
    company: "Leading Private Bank",
    icon: TrendingUp,
    metric: "85%",
    metricLabel: "Attack Surface Reduced",
  },
  {
    quote:
      "The 24/7 SOC service has been a game-changer. We've detected and blocked threats that would have gone unnoticed with our previous setup. Their team's expertise is unmatched.",
    author: "Priya Sharma",
    role: "Head of IT",
    company: "Healthcare Network",
    icon: Clock,
    metric: "99.9%",
    metricLabel: "Uptime Achieved",
  },
];

export function Testimonials() {
  const testimonial1 = testimonials[0];
  const testimonial2 = testimonials[1];
  const Icon1 = testimonial1.icon;
  const Icon2 = testimonial2.icon;

  return (
    <section className="py-20 lg:py-32 bg-md-surface relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-md-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BlurFade inView>
            <div className="section-label mx-auto w-fit mb-6">
              <span>Why Businesses Choose Us</span>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              Trusted by{" "}
              <span className="gradient-text">Industry Leaders</span>
            </h2>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="text-lg text-md-on-surface-variant">
              See how organizations across BFSI, Healthcare, and Government
              sectors have transformed their security with JAYAA IT.
            </p>
          </BlurFade>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Testimonial */}
          <BlurFade inView delay={0.3}>
            <div className="bg-md-surface-container rounded-3xl p-8 border border-md-outline-variant h-full">
              <Quote className="w-10 h-10 text-md-primary/30 mb-6" />
              <p className="text-md-on-surface text-lg leading-relaxed mb-8">
                {testimonial1.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-md-primary-container flex items-center justify-center">
                  <span className="text-md-primary font-bold">
                    {testimonial1.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-md-on-surface">
                    {testimonial1.author}
                  </p>
                  <p className="text-sm text-md-on-surface-variant">
                    {testimonial1.role}, {testimonial1.company}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-md-outline-variant">
                <div className="flex items-center gap-3">
                  <Icon1 className="w-5 h-5 text-md-primary" />
                  <span className="text-2xl font-bold text-md-primary">
                    {testimonial1.metric}
                  </span>
                  <span className="text-sm text-md-on-surface-variant">
                    {testimonial1.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Center - Video Card */}
          <BlurFade inView delay={0.4}>
            <div className="relative bg-gradient-to-br from-md-primary to-md-secondary rounded-3xl p-8 h-full min-h-[400px] flex flex-col justify-between overflow-hidden group cursor-pointer">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  Customer Story
                </p>
              </div>

              <div className="relative z-10">
                <h3 className="text-white text-2xl font-bold mb-2">
                  How We Secured a Fortune 500 Company
                </h3>
                <p className="text-white/70">
                  Watch how our comprehensive security transformation helped
                  reduce incidents by 95%.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Right Testimonial */}
          <BlurFade inView delay={0.5}>
            <div className="bg-md-surface-container rounded-3xl p-8 border border-md-outline-variant h-full">
              <Quote className="w-10 h-10 text-md-primary/30 mb-6" />
              <p className="text-md-on-surface text-lg leading-relaxed mb-8">
                {testimonial2.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-md-primary-container flex items-center justify-center">
                  <span className="text-md-primary font-bold">
                    {testimonial2.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-md-on-surface">
                    {testimonial2.author}
                  </p>
                  <p className="text-sm text-md-on-surface-variant">
                    {testimonial2.role}, {testimonial2.company}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-md-outline-variant">
                <div className="flex items-center gap-3">
                  <Icon2 className="w-5 h-5 text-md-primary" />
                  <span className="text-2xl font-bold text-md-primary">
                    {testimonial2.metric}
                  </span>
                  <span className="text-sm text-md-on-surface-variant">
                    {testimonial2.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
