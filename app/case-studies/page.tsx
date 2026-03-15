"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/content/case-studies";
import { CTABanner } from "@/components/sections/CTABanner";

const statusConfig = {
  live: { label: "Live", color: "text-[#22D3A5] bg-[#22D3A5]/10 border-[#22D3A5]/20" },
  "in-development": {
    label: "In Development",
    color: "text-[#4BC4C4] bg-[#4BC4C4]/10 border-[#4BC4C4]/20",
  },
  "coming-soon": {
    label: "Coming Soon",
    color: "text-[#4A5568] bg-[#4A5568]/10 border-[#4A5568]/20",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] mb-4 block">
              Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2744] mb-6 leading-tight">
              What we&apos;ve built
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Real projects. Real problems solved. We&apos;re building our portfolio —
              more case studies coming as we complete engagements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {caseStudies.map((study, i) => {
            const status = statusConfig[study.status];
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E2E0DA] p-8 sm:p-10 hover:border-[#4BC4C4]/30 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge
                        variant="secondary"
                        className={`font-mono text-xs border ${status.color}`}
                      >
                        {status.label}
                      </Badge>
                      {study.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-[#E2E0DA] text-[#4A5568] text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold text-[#1A2744]">
                      {study.client}
                    </h2>
                    <p className="text-[#4BC4C4] font-mono text-sm mt-1">
                      {study.title}
                    </p>
                  </div>
                  <Link
                    href={`/case-studies/${study.id}`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "border-[#E2E0DA] text-[#1A2744] hover:bg-[#F0EFEC] bg-transparent shrink-0"
                    )}
                  >
                    View details
                  </Link>
                </div>

                <p className="text-[#4A5568] text-lg mb-6 leading-relaxed">
                  {study.tagline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] block mb-2">
                      Problem
                    </span>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] block mb-2">
                      Solution
                    </span>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {study.services && (
                  <div className="mt-6 pt-6 border-t border-[#E2E0DA] flex items-center gap-2">
                    <span className="text-xs text-[#4A5568]">Built with:</span>
                    {study.services.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="bg-[#F0EFEC] text-[#4A5568] text-xs"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Coming soon placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-dashed border-[#E2E0DA] p-10 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#F0EFEC] flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🔒</span>
            </div>
            <h3 className="text-[#1A2744] font-semibold mb-2">More coming soon</h3>
            <p className="text-sm text-[#4A5568] max-w-sm mx-auto">
              We&apos;re currently heads-down on client work. Case studies are published
              with client permission after delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
