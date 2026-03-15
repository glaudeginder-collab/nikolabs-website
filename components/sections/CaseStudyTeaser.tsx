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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#13131A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#6C63FF] mb-4 block">
            Case studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0FF]">
            Real problems. Real solutions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl bg-[#1C1C27] border border-[#2A2A3D] p-8 sm:p-12 group hover:border-[#6C63FF]/30 transition-colors duration-300"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#6C63FF] rounded-full opacity-[0.03] blur-[80px] pointer-events-none" />

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
                    className="border-[#2A2A3D] text-[#9090AA] text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F0F0FF] mb-4">
                {study.client} — {study.title}
              </h3>
              <p className="text-[#9090AA] text-lg mb-8 leading-relaxed">
                {study.tagline}
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#6C63FF] block mb-1">
                    The problem
                  </span>
                  <p className="text-[#9090AA] text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#6C63FF] block mb-1">
                    The solution
                  </span>
                  <p className="text-[#9090AA] text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              <Link
                href="/case-studies/beatmark"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-[#6C63FF] hover:bg-[#8B85FF] text-white border-0"
                )}
              >
                Read the full story
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-xl bg-[#13131A] border border-[#2A2A3D] p-6 space-y-4">
                {/* Fake chart bars */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#9090AA]">
                    Your portfolio vs VWRL
                  </span>
                  <span className="text-xs font-mono text-[#22D3A5]">+2.4%</span>
                </div>

                {/* Mock chart */}
                <div className="flex items-end gap-2 h-32">
                  {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-1">
                      <div
                        className="rounded-sm bg-[#6C63FF]/60"
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
                    <div className="w-3 h-3 rounded-sm bg-[#6C63FF]" />
                    <span className="text-xs text-[#9090AA]">Portfolio</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#22D3A5]" />
                    <span className="text-xs text-[#9090AA]">VWRL ETF</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2A3D]">
                  {study.metrics?.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between py-1.5"
                    >
                      <span className="text-xs text-[#9090AA]">{m.label}</span>
                      <span className="text-xs font-mono text-[#F0F0FF]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coming soon overlay */}
              <div className="absolute inset-0 rounded-xl flex items-center justify-center bg-[#0A0A0F]/60 backdrop-blur-[2px]">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">⚡</span>
                  </div>
                  <span className="font-mono text-sm text-[#6C63FF]">
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
