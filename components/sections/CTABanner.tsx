"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTABanner() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6C63FF]/20 to-[#1C1C27] border border-[#6C63FF]/20 p-10 sm:p-16 text-center"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#6C63FF] rounded-full opacity-[0.08] blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F0FF] mb-6 leading-tight">
              Ready to stop doing<br />
              <span className="text-gradient-accent">things the slow way?</span>
            </h2>
            <p className="text-[#9090AA] text-lg max-w-xl mx-auto mb-10">
              Tell us what&apos;s slowing you down. We&apos;ll tell you how to automate it.
              First call is free. No commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-[#6C63FF] hover:bg-[#8B85FF] text-white border-0 h-12 px-8 text-base font-medium justify-center"
                )}
              >
                Book a free discovery call
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-[#2A2A3D] bg-transparent text-[#F0F0FF] hover:bg-[#13131A] h-12 px-8 text-base justify-center"
                )}
              >
                Explore services
              </Link>
            </div>

            <p className="mt-6 text-xs text-[#9090AA] font-mono">
              Typical first engagement: AgentReady from £3,500
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
