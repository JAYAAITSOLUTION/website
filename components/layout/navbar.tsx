"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/zero-trust", label: "Zero Trust Security" },
      { href: "/services/digital-transformation", label: "Digital Transformation" },
      { href: "/services/advanced-it", label: "Advanced IT Solutions" },
      { href: "/services/professional", label: "Professional Services" },
    ],
  },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/blogs", label: "Blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-md-surface/95 backdrop-blur-md border-b border-md-outline-variant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-40 h-12 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo-jayaa.png"
                alt="JAYAA IT Solution"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium text-md-on-surface hover:text-md-primary bg-transparent hover:bg-md-primary-container data-[state=open]:bg-md-primary-container rounded-full">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-md-surface-container rounded-2xl">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-md-primary-container hover:text-md-on-primary-container"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {child.label}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        "text-md-on-surface hover:text-md-primary hover:bg-md-primary-container"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="h-11 px-6 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
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
                  {navLinks.map((link) =>
                    link.children ? (
                      <div key={link.href} className="flex flex-col gap-2">
                        <span className="px-4 py-2 text-sm font-semibold text-md-on-surface-variant">
                          {link.label}
                        </span>
                        {link.children.map((child) => (
                          <SheetClose asChild key={child.href}>
                            <Link
                              href={child.href}
                              className="px-6 py-2 text-sm text-md-on-surface hover:text-md-primary hover:bg-md-primary-container rounded-full transition-colors"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ) : (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="px-4 py-2 text-sm font-medium text-md-on-surface hover:text-md-primary hover:bg-md-primary-container rounded-full transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </nav>

                <Button
                  asChild
                  className="h-12 rounded-full bg-md-primary text-md-on-primary hover:bg-md-primary/90 mt-4"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
