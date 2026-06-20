"use client";

import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const mainWords =
  "We built Embrace to remove the barriers between a musician and their music — in setup, in practice, in performance. Once free from limitations, the music inside you can finally come out.".split(" ");
const closingWords = ["Play", "freely."];

export default function FounderNote() {
  return (
    <section className="bg-[#f2f2f3] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl text-center">
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
          className="mt-6 font-[var(--font-cormorant)] text-xl font-medium leading-relaxed tracking-[0.01em] text-[#ba9e78] sm:text-2xl lg:text-3xl"
        >
          {mainWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {closingWords.map((word, i) => (
            <motion.span
              key={`closing-${i}`}
              variants={wordVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.blockquote>

        <div className="mt-8">
          <p
            className="text-4xl text-[#ba9e78] sm:text-5xl"
            style={{ fontFamily: "var(--font-pinyon-script, cursive)" }}
          >
            Turner Rey
          </p>
          <p
            className="mt-1 text-xs font-light tracking-[0.12em] text-[#16335b]/55 sm:text-sm"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Founder &amp; CEO, Embrace Strings
          </p>
        </div>
      </div>
    </section>
  );
}
