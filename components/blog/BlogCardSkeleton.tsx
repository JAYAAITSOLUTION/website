"use client";

import React from "react";
import { Clock, User } from "lucide-react";

export const BlogCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col h-full rounded-2xl bg-md-surface border border-md-outline-variant overflow-hidden">
      {/* Image Skeleton */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-md-surface-container animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-md-surface-container via-md-surface-container-high to-md-surface-container animate-shimmer" />
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col flex-grow p-6">
        {/* Category & Read Time Skeleton */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-20 h-5 rounded-full bg-md-surface-container animate-pulse" />
          <div className="w-16 h-4 rounded bg-md-surface-container animate-pulse" />
        </div>

        {/* Title Skeleton */}
        <div className="w-full h-6 rounded bg-md-surface-container animate-pulse mb-2" />
        <div className="w-3/4 h-6 rounded bg-md-surface-container animate-pulse mb-4" />

        {/* Description Skeleton */}
        <div className="space-y-2 flex-grow">
          <div className="w-full h-4 rounded bg-md-surface-container animate-pulse" />
          <div className="w-full h-4 rounded bg-md-surface-container animate-pulse" />
          <div className="w-2/3 h-4 rounded bg-md-surface-container animate-pulse" />
        </div>

        {/* Author Skeleton */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-md-outline-variant">
          <div className="w-10 h-10 rounded-full bg-md-surface-container animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="w-24 h-4 rounded bg-md-surface-container animate-pulse" />
            <div className="w-16 h-3 rounded bg-md-surface-container animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
