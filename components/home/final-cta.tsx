"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const indicators = [
  { text: "READY", delay: 0 },
  { text: "TRANSFORM", delay: 0.5 },
  { text: "CONNECTING...", delay: 1 },
];

export function FinalCTA() {
  return (
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

          {/* Animated Indicators */}
          <BlurFade inView>
            <div className="flex justify-center gap-4 mb-8">
              {indicators.map((indicator, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <AnimatedShinyText className="text-sm font-medium text-white">
                    {indicator.text}
                  </AnimatedShinyText>
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your{" "}
              <span className="text-white/90">Business</span>?
            </h2>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who trust JAYAA IT Solution for their digital transformation journey.
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
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ShimmerButton>
              <Button
                asChild
                variant="ghost"
                className="h-14 px-10 text-white hover:bg-white/10 border border-white/30 rounded-full text-base"
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
