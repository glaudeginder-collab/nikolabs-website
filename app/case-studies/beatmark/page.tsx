"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/content/case-studies";
import { CTABanner } from "@/components/sections/CTABanner";

export default function BeatMarkPage() {
  const study = caseStudies.find((s) => s.id === "beatmark")!;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/case-studies"
              className="text-sm text-[#9090AA] hover:text-[#F0F0FF] transition-colors mb-8 inline-flex items-center gap-2"
            >
              ← Back to case studies
            </Link>

            <div className="flex flex-wrap items-center gap-2 mt-6 mb-6">
              <Badge
                variant="secondary"
                className="bg-[#22D3A5]/10 text-[#22D3A5] border border-[#22D3A5]/20 font-mono text-xs"
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F0FF] mb-6 leading-tight">
              {study.client}
            </h1>
            <p className="text-xl text-[#9090AA] max-w-2xl leading-relaxed">
              {study.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual mock */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl bg-[#13131A] border border-[#2A2A3D] p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C63FF] rounded-full opacity-[0.04] blur-[80px]" />

            {/* Mock dashboard */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-semibold text-[#F0F0FF]">Portfolio Overview</h3>
                  <p className="text-xs text-[#9090AA] font-mono">vs VWRL Global ETF</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#9090AA] bg-[#1C1C27] px-3 py-1 rounded-lg">
                    YTD
                  </span>
                  <span className="text-xs font-mono text-[#9090AA] bg-[#1C1C27] px-3 py-1 rounded-lg">
                    1Y
                  </span>
                  <span className="text-xs font-mono text-white bg-[#6C63FF] px-3 py-1 rounded-lg">
                    3Y
                  </span>
                </div>
              </div>

              {/* Big numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                <div className="rounded-xl bg-[#1C1C27] p-4">
                  <p className="text-xs text-[#9090AA] mb-1">Your return</p>
                  <p className="text-2xl font-bold text-[#F0F0FF]">+18.4%</p>
                  <p className="text-xs text-[#22D3A5]">3-year annualised</p>
                </div>
                <div className="rounded-xl bg-[#1C1C27] p-4">
                  <p className="text-xs text-[#9090AA] mb-1">VWRL return</p>
                  <p className="text-2xl font-bold text-[#F0F0FF]">+16.1%</p>
                  <p className="text-xs text-[#22D3A5]">3-year annualised</p>
                </div>
                <div className="rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/20 p-4">
                  <p className="text-xs text-[#9090AA] mb-1">Alpha generated</p>
                  <p className="text-2xl font-bold text-[#22D3A5]">+2.3%</p>
                  <p className="text-xs text-[#6C63FF]">You&apos;re beating it</p>
                </div>
              </div>

              {/* Chart */}
              <div className="flex items-end gap-1.5 h-24 mb-4">
                {[30, 45, 40, 60, 55, 70, 65, 80, 72, 90, 82, 100, 95, 110, 105, 120].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col gap-0.5 items-end">
                    <div
                      className="w-full rounded-sm bg-[#6C63FF]/70"
                      style={{ height: `${(h / 120) * 80}%` }}
                    />
                    <div
                      className="w-full rounded-sm bg-[#22D3A5]/40"
                      style={{ height: `${(h * 0.92 / 120) * 80}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#6C63FF]" />
                  <span className="text-xs text-[#9090AA]">Your portfolio</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#22D3A5]/70" />
                  <span className="text-xs text-[#9090AA]">VWRL benchmark</span>
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center bg-[#0A0A0F]/70 backdrop-blur-[3px]">
              <div className="w-14 h-14 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-[#F0F0FF] font-semibold text-lg mb-1">BeatMark</p>
              <p className="text-[#9090AA] text-sm mb-4">In development</p>
              <Badge className="bg-[#22D3A5]/10 text-[#22D3A5] border border-[#22D3A5]/20">
                Coming soon
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#6C63FF] block mb-4">
                The problem
              </span>
              <p className="text-[#9090AA] leading-relaxed">{study.problem}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#6C63FF] block mb-4">
                The solution
              </span>
              <p className="text-[#9090AA] leading-relaxed">{study.solution}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 rounded-xl bg-[#13131A] border border-[#2A2A3D] p-8"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#6C63FF] block mb-4">
              Key metrics
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {study.metrics?.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-bold text-[#F0F0FF] mb-1">{m.value}</p>
                  <p className="text-sm text-[#9090AA]">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact?service=datasignal"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#6C63FF] hover:bg-[#8B85FF] text-white border-0 justify-center"
              )}
            >
              Build something similar
            </Link>
            <Link
              href="/case-studies"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-[#2A2A3D] text-[#F0F0FF] hover:bg-[#13131A] bg-transparent justify-center"
              )}
            >
              ← All case studies
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
