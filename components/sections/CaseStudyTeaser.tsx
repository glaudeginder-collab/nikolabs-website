"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/content/case-studies";

export function CaseStudyTeaser() {
  const study = caseStudies[0];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] mb-4 block">
            Case studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2744]">
            Real problems. Real solutions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl bg-[#FAF9F6] border border-[#E2E0DA] p-8 sm:p-12 group hover:border-[#4BC4C4]/30 transition-colors duration-300"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#4BC4C4] rounded-full opacity-[0.04] blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge
                  variant="secondary"
                  className="bg-[#22D3A5]/10 text-[#22D3A5] border-[#22D3A5]/20 font-mono text-xs"
                >
                  In Development
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

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A2744] mb-4">
                {study.client} — {study.title}
              </h3>
              <p className="text-[#4A5568] text-lg mb-8 leading-relaxed">
                {study.tagline}
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] block mb-1">
                    The problem
                  </span>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] block mb-1">
                    The solution
                  </span>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              <Link
                href="/case-studies/beatmark"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-[#4BC4C4] hover:bg-[#3AAFAF] text-white border-0"
                )}
              >
                Read the full story
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-xl bg-[#FFFFFF] border border-[#E2E0DA] p-6 space-y-4">
                {/* Fake chart bars */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#4A5568]">
                    Your portfolio vs VWRL
                  </span>
                  <span className="text-xs font-mono text-[#22D3A5]">+2.4%</span>
                </div>

                {/* Mock chart */}
                <div className="flex items-end gap-2 h-32">
                  {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-1">
                      <div
                        className="rounded-sm bg-[#4BC4C4]/60"
                        style={{ height: `${h * 0.85}%` }}
                      />
                      <div
                        className="rounded-sm bg-[#22D3A5]/40"
                        style={{ height: `${h * 0.8}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#4BC4C4]" />
                    <span className="text-xs text-[#4A5568]">Portfolio</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#22D3A5]" />
                    <span className="text-xs text-[#4A5568]">VWRL ETF</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E0DA]">
                  {study.metrics?.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between py-1.5"
                    >
                      <span className="text-xs text-[#4A5568]">{m.label}</span>
                      <span className="text-xs font-mono text-[#1A2744]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coming soon overlay */}
              <div className="absolute inset-0 rounded-xl flex items-center justify-center bg-[#FAF9F6]/70 backdrop-blur-[2px]">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#4BC4C4]/20 border border-[#4BC4C4]/30 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">⚡</span>
                  </div>
                  <span className="font-mono text-sm text-[#4BC4C4]">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
