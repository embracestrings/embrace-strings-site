"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function TrialAndFeedback() {
  return (
    <>
      <motion.section {...fadeUp} id="trial-program" className="border-t border-[#ba9e78]/25 bg-[#f2f2f3]">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-14">
          <h2 className="text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
            Not sure yet? Try it first.
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
            We know that finding the right chinrest is a deeply personal process. To help you play with greater intentionality and comfort, we offer a 14-day trial program.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/testing"
              className="inline-flex items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78]"
            >
              Test a Chinrest
            </Link>
          </div>
        </div>
      </motion.section>

    </>
  );
}
