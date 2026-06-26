"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="border-t border-[#ba9e78]/25 bg-[#f2f2f3] py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6"
      >
        <h2 className="font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#16335b] sm:text-5xl">
          Ready to find your fit?
        </h2>
        <p
          className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/60 sm:text-base"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          Try our chinrest for 14 days — no tools, no commitment.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
          <Link
            href="/testing"
            className="hover-white inline-flex w-full items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] sm:w-auto"
          >
            Start a 14-Day Trial
          </Link>
          <Link
            href="/chinrest"
            className="inline-flex w-full items-center justify-center rounded-lg border border-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#16335b] transition hover:border-[#ba9e78] hover:text-[#ba9e78] sm:w-auto"
          >
            Explore Our Chinrests
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
