"use client";

import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const quoteWords =
  "Embrace means [placeholder — founder's note on what Embrace means goes here].".split(" ");

export default function FounderNote() {
  return (
    <section className="bg-[#f2f2f3] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className="text-xs font-medium uppercase tracking-[0.28em] text-[#ba9e78] sm:text-sm"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          From the Founder
        </p>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-6 font-[var(--font-cormorant)] text-3xl font-medium italic leading-snug tracking-[0.01em] text-[#ba9e78] sm:text-4xl lg:text-5xl"
        >
          {quoteWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.blockquote>

        <p
          className="mt-8 text-sm font-light tracking-[0.08em] text-[#16335b]/70 sm:text-base"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          — Turner Rey, Founder &amp; CEO
        </p>
      </div>
    </section>
  );
}
