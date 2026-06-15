"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Difference() {
  return (
    <motion.section {...fadeUp} className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="text-center text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
        The Embrace Strings Difference
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
        True comfort isn&apos;t fixed: it&apos;s responsive. Your posture shifts constantly, influenced by daily factors like temperature, clothing, and subtle changes in your body—and most chinrests can&apos;t keep up. Fixed models force compromise, and even adjustable ones require tools, making it impossible to fine-tune during rehearsal or performance… until now.
      </p>
      <p className="mx-auto mt-5 max-w-3xl text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
        Embrace Strings chinrests are designed to unlock that comfort, every day. Whether your neck feels stiff mid-practice or you are wearing a suit jacket on concert day, effortless, tool-free adjustments let you maintain natural posture and truly Embrace the way you play.
      </p>
    </motion.section>
  );
}
