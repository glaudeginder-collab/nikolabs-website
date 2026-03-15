"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { team } from "@/content/team";
import { TeamMemberCard } from "@/components/common/TeamMemberCard";
import { CTABanner } from "@/components/sections/CTABanner";

const values = [
  {
    icon: "⚡",
    title: "Speed without compromise",
    description:
      "We move fast because we've done this before. Quick doesn't mean cutting corners — it means experience.",
  },
  {
    icon: "🔬",
    title: "Working output, always",
    description:
      "We don't deliver slide decks. Every engagement ends with something real, tested, and handed over with documentation.",
  },
  {
    icon: "🤝",
    title: "Direct access",
    description:
      "No account managers, no layers. You work directly with the people building your system.",
  },
  {
    icon: "🎯",
    title: "SME-first thinking",
    description:
      "Enterprise tools, SME context. We know how smaller businesses actually operate, and we build accordingly.",
  },
];

export default function AboutPage() {
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
              About
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2744] mb-6 leading-tight">
              We started Niko Labs Ltd because the gap was obvious
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Enterprises were deploying AI teams of 10, 20, 50 people. SMEs
              were watching from the sidelines — not because they didn&apos;t need it,
              but because there was no accessible entry point. We built one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-y border-[#E2E0DA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[#1A2744] mb-6">
                The mission
              </h2>
              <div className="space-y-4 text-[#4A5568] leading-relaxed">
                <p>
                  Niko Labs Ltd exists to give growing businesses access to the kind
                  of AI-powered systems that used to require a dedicated internal
                  tech team.
                </p>
                <p>
                  We&apos;re not consultants who hand you a strategy document and
                  disappear. We build the thing. We hand it over. You own it.
                </p>
                <p>
                  Our engagements are designed to be fast, focused, and finite.
                  No retainers, no lock-in. Just working output.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Weeks", value: "4", desc: "Typical delivery time" },
                { label: "Services", value: "4", desc: "Delivery models" },
                { label: "Focus", value: "SME", desc: "Growing businesses only" },
                { label: "Output", value: "100%", desc: "Working, every time" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-[#F0EFEC] border border-[#E2E0DA] p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#1A2744] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#4A5568]">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] mb-4 block">
              How we work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2744]">
              Our values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E2E0DA] p-8 hover:border-[#4BC4C4]/30 transition-colors duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-[#1A2744] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#4A5568] leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-y border-[#E2E0DA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] mb-4 block">
              The team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2744] mb-4">
              Who you&apos;re working with
            </h2>
            <p className="text-[#4A5568] max-w-xl mx-auto">
              Experienced practitioners, not graduates. Every person on your project has shipped real systems in production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <TeamMemberCard member={member} showBio={true} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#4BC4C4] hover:bg-[#3AAFAF] text-white border-0"
              )}
            >
              Work with us
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
