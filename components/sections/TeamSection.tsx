"use client";

import { motion } from "framer-motion";
import { team } from "@/content/team";
import { TeamMemberCard } from "@/components/common/TeamMemberCard";

export function TeamSection() {
  return (
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
            THE TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2744] mb-4">
            Human-led. AI-powered.
          </h2>
          <p className="text-[#4A5568] max-w-xl mx-auto">
            Nico leads every engagement. Our AI agents do the heavy lifting —
            architecture, code, product, data. All working together, all the time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
