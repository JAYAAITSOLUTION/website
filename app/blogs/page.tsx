import Link from "next/link";
import { FileText, Sparkles, ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  "All",
  "Cybersecurity",
  "Digital Transformation",
  "Cloud Computing",
  "Compliance",
  "Industry Insights",
];

const featuredPost = {
  title: "The Future of Zero Trust Architecture in Enterprise Security",
  excerpt: "Explore how Zero Trust is reshaping the cybersecurity landscape and why organizations are rapidly adopting this security model.",
  category: "Cybersecurity",
  readTime: "8 min read",
  date: "Coming Soon",
};

const recentPosts = [
  {
    title: "RBI Cybersecurity Guidelines: What Banks Need to Know",
    excerpt: "A comprehensive guide to understanding and implementing RBI's cybersecurity framework.",
    category: "Compliance",
    readTime: "6 min read",
  },
  {
    title: "Cloud Migration Best Practices for Healthcare",
    excerpt: "Key considerations and strategies for secure cloud adoption in the healthcare sector.",
    category: "Cloud Computing",
    readTime: "5 min read",
  },
  {
    title: "AI-Powered Threat Detection: A Game Changer",
    excerpt: "How artificial intelligence is revolutionizing the way we detect and respond to cyber threats.",
    category: "Cybersecurity",
    readTime: "7 min read",
  },
];

export const metadata = {
  title: "Blog | JAYAA IT Solution",
  description: "Insights, articles, and updates on cybersecurity, IT solutions, and digital transformation.",
};

export default function BlogPage() {
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
          <BlurFade delay={0.1} inView>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium border border-md-primary/20 mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Blog</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6 leading-[1.1] tracking-tight">
                Insights & <span className="gradient-text">Updates</span>
              </h1>
              <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Stay informed with the latest trends, insights, and best practices
                in cybersecurity and IT transformation.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-md-outline-variant">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1} inView>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? "bg-md-primary text-md-on-primary"
                      : "bg-md-surface-container text-md-on-surface-variant hover:bg-md-primary-container hover:text-md-on-primary-container border border-md-outline-variant"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-primary-container text-md-on-primary-container mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Featured Post</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="relative rounded-3xl overflow-hidden bg-md-surface-container border border-md-outline-variant shadow-lg">
              <div className="grid lg:grid-cols-2">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-md-primary-container to-md-secondary-container/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-md-surface flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <FileText className="w-10 h-10 text-md-primary" />
                    </div>
                    <p className="text-md-on-surface-variant">Featured Image</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-md-primary-container text-md-on-primary-container text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-md-on-surface-variant flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-md-on-surface mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-md-on-surface-variant mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-md-primary-container flex items-center justify-center">
                      <User className="w-5 h-5 text-md-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-md-on-surface">JAYAA IT Team</p>
                      <p className="text-sm text-md-on-surface-variant">{featuredPost.date}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-fit h-12 px-6 rounded-full border-md-outline text-md-on-surface hover:bg-md-primary-container hover:text-md-on-primary-container hover:border-transparent transition-all duration-300"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Coming Soon State */}
      <section className="py-20 lg:py-32 bg-md-surface-container relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 rounded-3xl bg-md-primary-container flex items-center justify-center mx-auto mb-6 animate-float">
                <FileText className="w-12 h-12 text-md-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Blog Coming Soon
              </h2>
              <p className="text-md-on-surface-variant mb-8 leading-relaxed">
                We&apos;re working on insightful articles about cybersecurity,
                digital transformation, and IT best practices. Stay tuned for
                valuable content from our experts.
              </p>
            </div>
          </BlurFade>

          {/* Recent Posts Preview */}
          <BlurFade delay={0.2} inView>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-md-surface border border-md-outline-variant hover:border-md-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded-full bg-md-primary-container text-md-on-primary-container text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-md-on-surface-variant flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-md-on-surface mb-2 group-hover:text-md-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-md-on-surface-variant line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-secondary-container text-md-on-secondary-container mb-6">
                <Calendar className="w-4 h-4" />
                <span>Newsletter</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                Stay <span className="gradient-text">Updated</span>
              </h2>
              <p className="text-md-on-surface-variant mb-8">
                Subscribe to our newsletter to receive the latest insights and updates directly in your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-full border-md-outline bg-md-surface focus-visible:ring-md-primary flex-1"
                />
                <Button
                  type="submit"
                  className="h-12 px-6 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </BlurFade>
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
                <span>Get in Touch</span>
              </div>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Have a <span className="text-white/90">Question</span>?
              </h2>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Our team is here to help. Reach out to us for any inquiries about
                our services or cybersecurity in general.
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
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </ShimmerButton>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
