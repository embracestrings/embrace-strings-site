"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <div className="mt-0 grid gap-6 sm:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl border border-[#16335b] bg-[#f2f2f3] p-8 sm:p-10"
      >
        <h2 className="font-[var(--font-cormorant)] text-2xl font-medium tracking-[0.02em] text-[#16335b] sm:text-3xl">
          Free Fitting
        </h2>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
          Not sure if Embrace Strings is right for you? We offer free video consultations to help find your
          perfect setup—no obligation.
        </p>
        <p className="mt-4 text-sm text-[#16335b]/75">
          <a
            href="/setup#setup-struggles"
            className="font-medium text-[#16335b] underline decoration-[#ba9e78]/50 underline-offset-2 transition hover:text-[#ba9e78]"
          >
            Schedule a free fitting
          </a>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="rounded-2xl border border-[#16335b] bg-[#f2f2f3] p-8 sm:p-10"
      >
        <h2 className="font-[var(--font-cormorant)] text-2xl font-medium tracking-[0.02em] text-[#16335b] sm:text-3xl">
          Wholesale Inquiries
        </h2>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
          Interested in carrying Embrace Strings products? Email us for retailer and distributor details.
        </p>
        <p className="mt-4 text-sm text-[#16335b]/75">
          <a
            href="mailto:wholesale@embracestrings.com"
            className="break-all font-medium text-[#16335b] underline decoration-[#ba9e78]/50 underline-offset-2 transition hover:text-[#ba9e78]"
          >
            wholesale@embracestrings.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}
