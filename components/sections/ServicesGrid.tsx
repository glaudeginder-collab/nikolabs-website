"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/common/ServiceCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function ServicesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#4BC4C4] mb-4 block">
            What we build
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2744] mb-4">
            Four ways to transform your business
          </h2>
          <p className="text-[#4A5568] max-w-xl mx-auto">
            Whether you need a quick win or a full system overhaul, we have a
            delivery model that fits.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
