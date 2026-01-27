"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-md-surface relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-md-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-md-tertiary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade delay={0.1} inView>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-md-on-surface mb-6">
              Ready to Secure Your{" "}
              <span className="text-md-primary">Digital Future</span>?
            </h2>
            <p className="text-lg text-md-on-surface-variant mb-10 max-w-2xl mx-auto">
              Partner with JAYAA IT Solution for enterprise-grade cybersecurity
              and IT transformation. Let&apos;s discuss how we can protect and
              optimize your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShimmerButton
                className="h-14 px-8 rounded-full text-base font-medium"
                shimmerColor="#ffffff"
                background="#6750A4"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ShimmerButton>
            </div>

            <p className="mt-6 text-sm text-md-on-surface-variant">
              Free security assessment for new clients. No commitment required.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
