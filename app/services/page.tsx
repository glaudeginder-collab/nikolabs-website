"use client";

import { motion } from "framer-motion";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/common/ServiceCard";
import { CTABanner } from "@/components/sections/CTABanner";

export default function ServicesPage() {
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
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2744] mb-6 leading-tight">
              Built for businesses that move fast
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed max-w-2xl">
              Every service is designed for SMEs who want enterprise-grade AI
              without the enterprise overhead. Pick the model that fits your
              timeline and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] border-y border-[#E2E0DA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "01",
                title: "Discovery call",
                desc: "Free 30-minute call. We understand your problem and match you to the right service.",
              },
              {
                step: "02",
                title: "Scoped proposal",
                desc: "Clear scope, fixed price, defined timeline. No hidden fees or scope creep.",
              },
              {
                step: "03",
                title: "Build & handover",
                desc: "We build it, test it, document it, and hand it over. You own it completely.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="font-mono text-3xl text-[#4BC4C4]/30 font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1A2744] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A5568]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl bg-[#FFFFFF] border border-[#E2E0DA] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-sm text-[#1A2744] font-medium">
                Not sure which service fits?
              </p>
              <p className="text-sm text-[#4A5568] mt-1">
                Start with AgentReady. It&apos;s our lightest engagement — an audit +
                roadmap + 3 implemented items. Many clients expand from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
