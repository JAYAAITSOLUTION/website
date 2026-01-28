"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, Sparkles, ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogCardSkeleton } from "@/components/blog/BlogCardSkeleton";
import { Blog } from "@/lib/blog";
import { useAnalytics } from "@/hooks/use-analytics";

const categories = [
  "All",
  "Cybersecurity",
  "Digital Transformation",
  "Cloud Computing",
  "Compliance",
  "Industry Insights",
];

function BlogPageContent() {
  const [blogs, setBlogs] = useState<(Blog & { _id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { trackPageView, trackCustomEvent } = useAnalytics();

  useEffect(() => {
    trackPageView("/blogs");
  }, [trackPageView]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/blog", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }

        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    trackCustomEvent("blog_category_filter", {
      category: category,
      previous_category: selectedCategory,
    });
  };

  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter((blog) => blog.category === selectedCategory);

  const featuredPost = blogs.length > 0 ? blogs[0] : null;

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
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
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
      {featuredPost && !loading && (
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Animated Grid Pattern Background */}
          <AnimatedGridPattern
            numSquares={25}
            maxOpacity={0.08}
            duration={4}
            repeatDelay={0.5}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <BlurFade delay={0.1} inView>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-primary-container text-md-on-primary-container mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Featured Post</span>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <Link href={`/blogs/${featuredPost._id}`}>
                <div className="relative rounded-3xl overflow-hidden bg-md-surface-container border border-md-outline-variant shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="grid lg:grid-cols-2 items-stretch">
                    <div className="relative aspect-[16/9] lg:aspect-[1980/1080] w-full min-h-[300px]">
                      {featuredPost.image ? (
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-md-primary-container to-md-secondary-container/30 flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-20 h-20 rounded-2xl bg-md-surface flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <FileText className="w-10 h-10 text-md-primary" />
                            </div>
                            <p className="text-md-on-surface-variant">Featured Image</p>
                          </div>
                        </div>
                      )}
                    </div>
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
                        {featuredPost.description}
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-md-primary-container flex items-center justify-center overflow-hidden">
                          {featuredPost.authorImage ? (
                            <Image
                              src={featuredPost.authorImage}
                              alt={featuredPost.author}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          ) : (
                            <User className="w-5 h-5 text-md-primary" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-md-on-surface">{featuredPost.author}</p>
                          <p className="text-sm text-md-on-surface-variant">
                            {new Date(featuredPost.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
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
              </Link>
            </BlurFade>
          </div>
        </section>
      )}

      {/* Blog Grid Section */}
      <section className="py-20 lg:py-32 bg-md-surface-container relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-primary-container text-md-on-primary-container mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Latest Articles</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-md-error-container flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-md-error" />
                </div>
                <h3 className="text-xl font-semibold text-md-on-surface mb-2">Error Loading Blogs</h3>
                <p className="text-md-on-surface-variant">{error}</p>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-3xl bg-md-primary-container flex items-center justify-center mx-auto mb-6 animate-float">
                  <FileText className="w-12 h-12 text-md-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-md-on-surface mb-4">
                  {selectedCategory === "All" ? "No Blogs Yet" : "No Blogs in This Category"}
                </h2>
                <p className="text-md-on-surface-variant mb-8 leading-relaxed max-w-xl mx-auto">
                  {selectedCategory === "All"
                    ? "We're working on insightful articles about cybersecurity, digital transformation, and IT best practices. Stay tuned for valuable content from our experts."
                    : `No blogs found in "${selectedCategory}" category. Try selecting a different category.`}
                </p>
                {selectedCategory !== "All" && (
                  <Button
                    onClick={() => setSelectedCategory("All")}
                    className="h-12 px-6 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90"
                  >
                    View All Blogs
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <Link key={blog._id} href={`/blogs/${blog._id}`}>
                    <BlogCard blog={blog} />
                  </Link>
                ))}
              </div>
            )}
          </BlurFade>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
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
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
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

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPageContent />
    </Suspense>
  );
}
