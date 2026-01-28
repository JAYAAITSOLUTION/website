"use client";

import React from "react";
import Image from "next/image";
import { Blog } from "@/lib/blog";
import { useAnalytics } from "@/hooks/use-analytics";
import { Clock, User } from "lucide-react";

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { trackCustomEvent } = useAnalytics();

  const trimText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const handleBlogCardClick = () => {
    trackCustomEvent("blog_interaction", {
      blog_title: blog.title,
      blog_category: blog.category,
      blog_author: blog.author,
      interaction_type: "blog_card_click",
      blog_read_time: blog.readTime,
      blog_date: blog.date,
    });
  };

  const handleBlogCardHover = () => {
    trackCustomEvent("blog_interaction", {
      blog_title: blog.title,
      blog_category: blog.category,
      blog_author: blog.author,
      interaction_type: "blog_card_hover",
      blog_read_time: blog.readTime,
      blog_date: blog.date,
    });
  };

  return (
    <div
      className="group flex flex-col h-full rounded-2xl bg-md-surface border border-md-outline-variant 
                 hover:border-md-primary/50 hover:shadow-lg transition-all duration-300 
                 hover:-translate-y-1 cursor-pointer overflow-hidden"
      onClick={handleBlogCardClick}
      onMouseEnter={handleBlogCardHover}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-md-primary-container to-md-secondary-container/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-md-surface flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-md-primary">
                {blog.title.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Category & Read Time */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 rounded-full bg-md-primary-container text-md-on-primary-container text-xs font-medium">
            {blog.category}
          </span>
          <span className="text-xs text-md-on-surface-variant flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-md-on-surface mb-2 group-hover:text-md-primary transition-colors line-clamp-2">
          {trimText(blog.title, 70)}
        </h3>

        {/* Description */}
        <p className="text-sm text-md-on-surface-variant line-clamp-3 flex-grow">
          {trimText(blog.description, 120)}
        </p>

        {/* Author & Date */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-md-outline-variant">
          <div className="w-10 h-10 rounded-full bg-md-primary-container flex items-center justify-center overflow-hidden">
            {blog.authorImage ? (
              <Image
                src={blog.authorImage}
                alt={blog.author}
                width={40}
                height={40}
                className="object-cover"
              />
            ) : (
              <User className="w-5 h-5 text-md-primary" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-md-on-surface truncate">
              {trimText(blog.author, 20)}
            </p>
            <p className="text-xs text-md-on-surface-variant">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
