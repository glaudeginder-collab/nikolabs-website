"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { services } from "@/content/services";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Formspree endpoint — replace with real one
    try {
      const res = await fetch("https://formspree.io/f/PLACEHOLDER_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please email us directly.");
      }
    } catch {
      alert("Something went wrong. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-[#22D3A5]/10 border border-[#22D3A5]/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-[#F0F0FF] mb-4">
            Message sent
          </h2>
          <p className="text-[#9090AA] mb-8">
            Thanks for reaching out. We&apos;ll be in touch within 1 business day.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-[#2A2A3D] text-[#F0F0FF] hover:bg-[#13131A] bg-transparent"
            )}
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#6C63FF] mb-4 block">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F0F0FF] mb-6 leading-tight">
              Let&apos;s talk about what you want to build
            </h1>
            <p className="text-lg text-[#9090AA] leading-relaxed">
              Tell us what&apos;s slowing you down. We&apos;ll respond within 1 business day
              with our initial thoughts and, if it&apos;s a fit, a proposed next step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-[#13131A] border border-[#2A2A3D] p-8 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#F0F0FF] mb-2 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-[#1C1C27] border border-[#2A2A3D] rounded-lg px-4 py-3 text-[#F0F0FF] placeholder:text-[#9090AA]/50 focus:outline-none focus:border-[#6C63FF]/50 focus:ring-1 focus:ring-[#6C63FF]/30 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#F0F0FF] mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full bg-[#1C1C27] border border-[#2A2A3D] rounded-lg px-4 py-3 text-[#F0F0FF] placeholder:text-[#9090AA]/50 focus:outline-none focus:border-[#6C63FF]/50 focus:ring-1 focus:ring-[#6C63FF]/30 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#F0F0FF] mb-2 font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full bg-[#1C1C27] border border-[#2A2A3D] rounded-lg px-4 py-3 text-[#F0F0FF] placeholder:text-[#9090AA]/50 focus:outline-none focus:border-[#6C63FF]/50 focus:ring-1 focus:ring-[#6C63FF]/30 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#F0F0FF] mb-2 font-medium">
                    Which service are you interested in?
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-[#1C1C27] border border-[#2A2A3D] rounded-lg px-4 py-3 text-[#F0F0FF] focus:outline-none focus:border-[#6C63FF]/50 focus:ring-1 focus:ring-[#6C63FF]/30 transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1C1C27]">
                      Not sure yet
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#1C1C27]">
                        {s.emoji} {s.name} — {s.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#F0F0FF] mb-2 font-medium">
                    Tell us about your problem *
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="What are you trying to automate, build, or fix? The more detail, the better."
                    rows={5}
                    className="w-full bg-[#1C1C27] border border-[#2A2A3D] rounded-lg px-4 py-3 text-[#F0F0FF] placeholder:text-[#9090AA]/50 focus:outline-none focus:border-[#6C63FF]/50 focus:ring-1 focus:ring-[#6C63FF]/30 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full bg-[#6C63FF] hover:bg-[#8B85FF] text-white border-0 h-12 text-base font-medium disabled:opacity-50 justify-center"
                  )}
                >
                  {submitting ? "Sending..." : "Send message"}
                </button>

                <p className="text-xs text-[#9090AA] text-center">
                  We respond within 1 business day. No spam, ever.
                </p>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick booking */}
              <div className="rounded-2xl bg-[#13131A] border border-[#2A2A3D] p-6">
                <h3 className="font-semibold text-[#F0F0FF] mb-2">
                  Prefer to book a call?
                </h3>
                <p className="text-sm text-[#9090AA] mb-4">
                  30-minute discovery call, free. No commitment. Pick a time
                  that works for you.
                </p>
                {/* Cal.com embed — replace href with real link */}
                <a
                  href="https://cal.com/nikolabs/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full border-[#2A2A3D] text-[#F0F0FF] hover:bg-[#1C1C27] bg-transparent justify-center"
                  )}
                >
                  📅 Book on Cal.com
                </a>
              </div>

              {/* What to expect */}
              <div className="rounded-2xl bg-[#13131A] border border-[#2A2A3D] p-6">
                <h3 className="font-semibold text-[#F0F0FF] mb-4">
                  What happens next
                </h3>
                <ol className="space-y-4">
                  {[
                    "We review your message and research your business",
                    "Within 1 day: a personal reply from the relevant team member",
                    "If it's a fit: a 30-min call to understand the problem properly",
                    "Within a week: a scoped proposal with timeline and fixed price",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#6C63FF]/20 text-[#6C63FF] text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-[#9090AA]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Services summary */}
              <div className="rounded-2xl bg-[#13131A] border border-[#2A2A3D] p-6">
                <h3 className="font-semibold text-[#F0F0FF] mb-4">
                  Starting points
                </h3>
                <div className="space-y-3">
                  {services.map((s) => (
                    <div
                      key={s.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{s.emoji}</span>
                        <span className="text-sm text-[#F0F0FF]">{s.name}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-[#2A2A3D] text-[#9090AA] font-mono text-xs"
                      >
                        {s.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
