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
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4BC4C4]/15 to-[#F0EFEC] border border-[#4BC4C4]/20 p-10 sm:p-16 text-center"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#4BC4C4] rounded-full opacity-[0.08] blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2744] mb-6 leading-tight">
              Ready to stop doing<br />
              <span className="text-gradient-accent">things the slow way?</span>
            </h2>
            <p className="text-[#4A5568] text-lg max-w-xl mx-auto mb-10">
              Tell us what&apos;s slowing you down. We&apos;ll tell you how to automate it.
              First call is free. No commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-[#4BC4C4] hover:bg-[#3AAFAF] text-white border-0 h-12 px-8 text-base font-medium justify-center"
                )}
              >
                Book a free discovery call
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-[#E2E0DA] bg-transparent text-[#1A2744] hover:bg-[#F0EFEC] h-12 px-8 text-base justify-center"
                )}
              >
                Explore services
              </Link>
            </div>

            <p className="mt-6 text-xs text-[#4A5568] font-mono">
              Typical first engagement: AgentReady from £3,500
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
