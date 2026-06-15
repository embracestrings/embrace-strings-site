"use client";

import { motion } from "framer-motion";

const sentences = [
  "When you play with an Embrace Strings chinrest, you feel comfortable.",
  "You feel confident.",
  "You feel free.",
];

export default function TheFeeling() {
  return (
    <section className="bg-[#16335b] py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.5 }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {sentences.map((sentence) => (
            <motion.p
              key={sentence}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-[var(--font-cormorant)] text-2xl font-medium leading-relaxed text-[#f2f2f3] sm:text-3xl md:text-4xl"
            >
              <span className="text-[#ba9e78]">{sentence}</span>
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
