"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  Shield,
  Cloud,
  Cpu,
  Users,
  FileSearch,
  FileCheck,
  Lock,
  Mail,
  Code,
  Globe,
  Zap,
  AlertTriangle,
  Search,
  GraduationCap,
  Monitor,
  ChevronDown,
} from "lucide-react";
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
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blog" },
];

// Services data for mega menu
const serviceCategories = [
  {
    title: "Core Services",
    items: [
      {
        icon: Shield,
        title: "Zero Trust Security",
        description: "Comprehensive Security Framework",
        href: "/services/zero-trust",
        color: "text-red-600",
        bgColor: "bg-red-500/10",
      },
      {
        icon: Cloud,
        title: "Digital Transformation",
        description: "Modernize & Streamline Operations",
        href: "/services/digital-transformation",
        color: "text-amber-600",
        bgColor: "bg-amber-500/10",
      },
      {
        icon: Cpu,
        title: "Advanced IT Solutions",
        description: "Cutting-Edge Technology Solutions",
        href: "/services/advanced-it",
        color: "text-orange-600",
        bgColor: "bg-orange-500/10",
      },
      {
        icon: Users,
        title: "Professional Services",
        description: "Expert Consulting & Support",
        href: "/services/professional",
        color: "text-red-600",
        bgColor: "bg-red-500/10",
      },
    ],
  },
];

// Solutions data for mega menu - split into two columns
const solutionCategories = [
  {
    title: "Data & Email Security",
    items: [
      {
        icon: FileSearch,
        title: "Data Classification",
        description: "Automated sensitive data identification",
        href: "/solutions",
      },
      {
        icon: FileCheck,
        title: "Document Rights Management",
        description: "Advanced DRM controls",
        href: "/solutions",
      },
      {
        icon: Lock,
        title: "Data Loss Prevention",
        description: "Prevent unauthorized transmission",
        href: "/solutions",
      },
      {
        icon: Mail,
        title: "DMARC Email Protection",
        description: "Prevent email spoofing & phishing",
        href: "/solutions",
      },
    ],
  },
  {
    title: "Security & Testing",
    items: [
      {
        icon: Globe,
        title: "Attack Surface Management",
        description: "Monitor external attack vectors",
        href: "/solutions",
      },
      {
        icon: Zap,
        title: "Breach & Attack Simulation",
        description: "Continuous security validation",
        href: "/solutions",
      },
      {
        icon: AlertTriangle,
        title: "Red Teaming",
        description: "Advanced threat simulation",
        href: "/solutions",
      },
      {
        icon: Search,
        title: "VA & Penetration Testing",
        description: "Vulnerability assessment",
        href: "/solutions",
      },
    ],
  },
  {
    title: "Management & Training",
    items: [
      {
        icon: Code,
        title: "Source Code Review",
        description: "Quarterly security analysis",
        href: "/solutions",
      },
      {
        icon: Shield,
        title: "API Security",
        description: "Comprehensive threat protection",
        href: "/solutions",
      },
      {
        icon: GraduationCap,
        title: "Security Awareness",
        description: "Training & education",
        href: "/solutions",
      },
      {
        icon: Monitor,
        title: "Managed Services",
        description: "24/7 security operations",
        href: "/solutions",
      },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

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
          <nav className="hidden lg:flex items-center gap-6">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2",
                  isScrolled
                    ? "text-md-on-surface hover:text-md-primary"
                    : "text-md-on-surface hover:text-md-primary",
                  activeDropdown === 'services' && "text-md-primary"
                )}
              >
                Services
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'services' && "rotate-180"
                )} />
              </button>

              {/* Services Mega Menu */}
              {activeDropdown === 'services' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  onMouseEnter={() => handleDropdownEnter('services')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-md-surface rounded-2xl shadow-2xl border border-md-outline-variant overflow-hidden min-w-[600px] p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="col-span-2">
                          <h3 className="text-xs font-semibold text-md-on-surface-variant uppercase tracking-wider mb-4">
                            {category.title}
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            {category.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-md-primary-container transition-colors group"
                              >
                                <div className={cn(
                                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                  item.bgColor
                                )}>
                                  <item.icon className={cn("w-5 h-5", item.color)} />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-md-on-surface group-hover:text-md-primary transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-md-on-surface-variant mt-0.5">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-md-outline-variant">
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-md-primary hover:text-md-primary/80 transition-colors"
                      >
                        View All Services
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-2",
                  isScrolled
                    ? "text-md-on-surface hover:text-md-primary"
                    : "text-md-on-surface hover:text-md-primary",
                  activeDropdown === 'solutions' && "text-md-primary"
                )}
              >
                Solutions
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === 'solutions' && "rotate-180"
                )} />
              </button>

              {/* Solutions Mega Menu */}
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                  onMouseEnter={() => handleDropdownEnter('solutions')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-md-surface rounded-2xl shadow-2xl border border-md-outline-variant overflow-hidden min-w-[800px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {solutionCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="text-xs font-semibold text-md-on-surface-variant uppercase tracking-wider mb-4">
                            {category.title}
                          </h3>
                          <div className="space-y-2">
                            {category.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-md-primary-container transition-colors group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-md-primary-container flex items-center justify-center flex-shrink-0 group-hover:bg-md-primary/20 transition-colors">
                                  <item.icon className="w-4 h-4 text-md-primary" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-md-on-surface group-hover:text-md-primary transition-colors leading-tight">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-md-on-surface-variant mt-0.5">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-md-outline-variant">
                      <Link
                        href="/solutions"
                        className="flex items-center justify-center gap-2 text-sm font-medium text-md-primary hover:text-md-primary/80 transition-colors"
                      >
                        Explore All Solutions
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Regular Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 py-2",
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
            <ShimmerButton
              className="h-10 px-6 rounded-full text-sm font-medium"
              shimmerColor="#ffffff"
              background="#9A1B21"
            >
              <Link href="/contact">Consult with us</Link>
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
              className="w-[360px] bg-md-surface border-l border-md-outline-variant overflow-y-auto"
            >
              <div className="flex flex-col gap-6 mt-8 pb-8">
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

                {/* Mobile Services Section */}
                <div className="space-y-3">
                  <h3 className="px-4 text-xs font-semibold text-md-on-surface-variant uppercase tracking-wider">
                    Services
                  </h3>
                  <nav className="flex flex-col gap-1">
                    {serviceCategories.map((category) =>
                      category.items.map((item) => (
                        <SheetClose asChild key={item.title}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-md-on-surface hover:text-md-primary hover:bg-md-primary-container rounded-xl transition-colors"
                          >
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", item.bgColor)}>
                              <item.icon className={cn("w-4 h-4", item.color)} />
                            </div>
                            {item.title}
                          </Link>
                        </SheetClose>
                      ))
                    )}
                    <SheetClose asChild>
                      <Link
                        href="/services"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-md-primary hover:text-md-primary/80 transition-colors"
                      >
                        View All Services
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </SheetClose>
                  </nav>
                </div>

                {/* Mobile Solutions Section */}
                <div className="space-y-3">
                  <h3 className="px-4 text-xs font-semibold text-md-on-surface-variant uppercase tracking-wider">
                    Solutions
                  </h3>
                  <nav className="flex flex-col gap-1">
                    {solutionCategories.flatMap((cat) => cat.items).slice(0, 6).map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-md-on-surface hover:text-md-primary hover:bg-md-primary-container rounded-xl transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-md-primary-container flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-md-primary" />
                          </div>
                          <span className="truncate">{item.title}</span>
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Link
                        href="/solutions"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-md-primary hover:text-md-primary/80 transition-colors"
                      >
                        Explore All Solutions
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
                    </SheetClose>
                  </nav>
                </div>

                <div className="border-t border-md-outline-variant pt-4">
                  <nav className="flex flex-col gap-1">
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
                  </nav>
                </div>

                <ShimmerButton
                  className="h-12 rounded-full text-base font-medium"
                  shimmerColor="#ffffff"
                  background="#9A1B21"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Consult with us
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
