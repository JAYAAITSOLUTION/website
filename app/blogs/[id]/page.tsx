import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { Metadata } from "next";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  description?: string;
  tags?: string[];
  category?: string;
  readTime?: string;
  authorImage?: string;
  authorRole?: string;
}

const getBlog = async (id: string) => {
  try {
    if (!ObjectId.isValid(id)) {
      return null;
    }
    const { db } = await connectToDatabase();
    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(id) });
    return blog as Blog | null;
  } catch (error) {
    console.error("Error fetching blog from MongoDB:", error);
    return null;
  }
};

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description || blog.content.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.description || blog.content.substring(0, 160),
      images: blog.image ? [blog.image] : [],
    },
  };
}

const BlogPostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  const markdownComponents: Components = {
    h1: ({ ...props }) => <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6 text-md-on-surface tracking-tight" {...props} />,
    h2: ({ ...props }) => <h2 className="text-3xl font-bold mt-8 mb-5 text-md-on-surface" {...props} />,
    h3: ({ ...props }) => <h3 className="text-2xl font-bold mt-6 mb-4 text-md-on-surface" {...props} />,
    h4: ({ ...props }) => <h4 className="text-xl font-semibold mt-5 mb-3 text-md-on-surface" {...props} />,
    p: ({ ...props }) => <p className="mb-4 text-md-on-surface-variant leading-relaxed" {...props} />,
    a: ({ ...props }) => <a className="text-md-primary hover:underline" {...props} />,
    ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 pl-6 space-y-2 text-md-on-surface-variant" {...props} />,
    ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 pl-6 space-y-2 text-md-on-surface-variant" {...props} />,
    li: ({ ...props }) => <li {...props} />,
    strong: ({ ...props }) => <strong className="font-semibold text-md-on-surface" {...props} />,
    blockquote: ({ ...props }) => <blockquote className="border-l-4 border-md-primary pl-4 py-2 mb-6 italic text-md-on-surface-variant bg-md-surface-container/50 rounded-r-md" {...props} />,
    code: ({ ...props }) => <code className="bg-md-surface-container text-md-primary px-1.5 py-0.5 rounded text-sm font-mono" {...props} />,
    pre: ({ ...props }) => <pre className="bg-md-surface-container-lowest rounded-md p-4 my-6 overflow-x-auto text-sm" {...props} />,
    hr: ({ ...props }) => <hr className="my-8 border-t border-md-outline-variant" {...props} />,
    img: ({ ...props }) => (
      <span className="flex justify-center my-8">
        <Image
          src={props.src as string}
          alt={props.alt || ""}
          width={800}
          height={450}
          className="rounded-lg shadow-md"
        />
      </span>
    ),
  };

  return (
    <article className="min-h-screen bg-md-surface">
      {/* Hero with gradient orbs */}
      <section className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-md-surface-container to-md-surface">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-md-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-md-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Category badge */}
            {blog.category && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-md-primary-container text-md-on-primary-container mb-6">
                {blog.category}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-md-on-surface mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-md-primary-container flex items-center justify-center overflow-hidden">
                  {blog.authorImage ? (
                    <Image src={blog.authorImage} alt={blog.author} width={48} height={48} className="object-cover" />
                  ) : (
                    <User className="w-6 h-6 text-md-primary" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-md-on-surface font-medium">{blog.author}</p>
                  {blog.authorRole && <p className="text-md-on-surface-variant text-sm">{blog.authorRole}</p>}
                </div>
              </div>

              <span className="text-md-on-surface-variant">|</span>

              <span className="text-md-on-surface-variant flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>

              {blog.readTime && (
                <>
                  <span className="text-md-on-surface-variant">|</span>
                  <span className="text-md-on-surface-variant flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured image overlay */}
      {blog.image && (
        <section className="relative -mt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image src={blog.image} alt={blog.title} width={1200} height={675} className="w-full object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* Content section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm bg-md-surface-container text-md-on-surface-variant">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Markdown content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                components={markdownComponents}
              >
                {blog.content}
              </ReactMarkdown>
            </div>

            {/* Back button */}
            <div className="mt-12 pt-8 border-t border-md-outline-variant">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-md-primary hover:text-md-on-primary font-medium transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BlogPostPage;
