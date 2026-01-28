"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-md-surface/80 backdrop-blur-xl border-b border-md-outline-variant shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-36 h-10 lg:w-40 lg:h-12 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo-jayaa.png"
                alt="JAYAA IT Solution"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isScrolled
                    ? "text-md-on-surface hover:text-md-primary"
                    : "text-md-on-surface hover:text-md-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/solutions"
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                isScrolled
                  ? "text-md-on-surface-variant hover:text-md-primary"
                  : "text-md-on-surface-variant hover:text-md-primary"
              )}
            >
              See Demo
            </Link>
            <ShimmerButton
              className="h-10 px-6 rounded-full text-sm font-medium"
              shimmerColor="#ffffff"
              background="#9A1B21"
            >
              <Link href="/contact">Contact Us</Link>
            </ShimmerButton>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-md-primary-container"
              >
                <Menu className="h-5 w-5 text-md-on-surface" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-md-surface border-l border-md-outline-variant"
            >
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative w-36 h-10">
                    <Image
                      src="/logo-jayaa.png"
                      alt="JAYAA IT Solution"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="px-4 py-3 text-sm font-medium text-md-on-surface hover:text-md-primary hover:bg-md-primary-container rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      href="/solutions"
                      className="px-4 py-3 text-sm font-medium text-md-on-surface-variant hover:text-md-primary hover:bg-md-primary-container rounded-xl transition-colors"
                    >
                      See Demo
                    </Link>
                  </SheetClose>
                </nav>

                <ShimmerButton
                  className="h-12 rounded-full text-base font-medium mt-4"
                  shimmerColor="#ffffff"
                  background="#9A1B21"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </ShimmerButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
