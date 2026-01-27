import { FileText } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Blog | JAYAA IT Solution",
  description: "Insights, articles, and updates on cybersecurity, IT solutions, and digital transformation.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-md-surface">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                <span>Blog</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6">
                Insights & <span className="text-md-primary">Updates</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto">
                Stay informed with the latest trends, insights, and best practices
                in cybersecurity and IT transformation.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Empty State */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-md-primary-container flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-md-primary" />
              </div>
              <h2 className="text-2xl font-bold text-md-on-surface mb-3">
                Coming Soon
              </h2>
              <p className="text-md-on-surface-variant mb-6">
                We are working on insightful articles about cybersecurity,
                digital transformation, and IT best practices. Check back soon!
              </p>
              <Button
                asChild
                className="h-12 px-8 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90"
              >
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
