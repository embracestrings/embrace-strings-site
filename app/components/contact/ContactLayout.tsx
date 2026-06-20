"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactLayout() {
  return (
    <>
      {/* ── Two-column: form + navy panel ──────────────────────── */}
      <section className="bg-[#f2f2f3] px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>

          {/* Right: team photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-[#ba9e78]/30 bg-[#d4bc99]/20 shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#ba9e78]/60">
              Team photo coming soon
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── Free Fitting + Wholesale cards ─────────────────────── */}
      <section className="bg-[#f2f2f3] px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
