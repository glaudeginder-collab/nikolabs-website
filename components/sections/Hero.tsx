"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(108,99,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF] rounded-full opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#22D3A5] rounded-full opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#22D3A5] animate-pulse" />
            <span className="text-sm font-mono text-[#9090AA]">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            Your competitors are hiring AI teams.{" "}
            <span className="text-gradient-accent">You just found yours.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-lg sm:text-xl text-[#9090AA] leading-relaxed max-w-2xl mb-10"
          >
            Niko Labs is an AI agent-driven consultancy for growing businesses.
            We build the automations, tools, and data systems that used to
            require a 10-person tech team —{" "}
            <span className="text-[#F0F0FF]">delivered in weeks, not quarters.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#6C63FF] hover:bg-[#8B85FF] text-white border-0 h-12 px-8 text-base font-medium justify-center"
              )}
            >
              Start a project
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-[#2A2A3D] bg-transparent text-[#F0F0FF] hover:bg-[#13131A] hover:border-[#6C63FF]/40 h-12 px-8 text-base justify-center"
              )}
            >
              See what we build →
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-16 pt-8 border-t border-[#2A2A3D] flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-[#F0F0FF]">4 weeks</div>
              <div className="text-sm text-[#9090AA] leading-tight">
                Average<br />delivery
              </div>
            </div>
            <div className="w-px h-8 bg-[#2A2A3D] hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-[#F0F0FF]">SME</div>
              <div className="text-sm text-[#9090AA] leading-tight">
                Focused<br />specialists
              </div>
            </div>
            <div className="w-px h-8 bg-[#2A2A3D] hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-[#22D3A5]">100%</div>
              <div className="text-sm text-[#9090AA] leading-tight">
                Working<br />output
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
