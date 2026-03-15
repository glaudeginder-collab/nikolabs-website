"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/95 backdrop-blur-md border-b border-[#2A2A3D]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#6C63FF] flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="font-semibold text-[#F0F0FF] group-hover:text-white transition-colors">
              Niko Labs
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#F0F0FF] bg-[#1C1C27]"
                    : "text-[#9090AA] hover:text-[#F0F0FF] hover:bg-[#13131A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "bg-[#6C63FF] hover:bg-[#8B85FF] text-white border-0 text-sm"
              )}
            >
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#9090AA] hover:text-[#F0F0FF] hover:bg-[#13131A] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#13131A] border-t border-[#2A2A3D]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#F0F0FF] bg-[#1C1C27]"
                    : "text-[#9090AA] hover:text-[#F0F0FF] hover:bg-[#1C1C27]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-[#6C63FF] hover:bg-[#8B85FF] text-white border-0 justify-center"
                )}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
