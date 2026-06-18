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

          {/* Right: navy panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex items-center justify-center rounded-2xl bg-[#16335b] px-10 py-16 sm:px-14 sm:py-20"
          >
            <div className="text-center">
              <p className="font-[var(--font-cormorant)] text-4xl font-medium leading-snug tracking-[0.02em] text-[#f2f2f3] sm:text-5xl">
                Play freely.
              </p>
              <p
                className="mt-4 text-sm font-light leading-relaxed text-[#f2f2f3]/55 sm:text-base"
                style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
              >
                We&rsquo;re here to help you get there.
              </p>
            </div>
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
