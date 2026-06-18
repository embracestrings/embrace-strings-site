"use client";

import { motion } from "framer-motion";

const headline = "No limitations. No compromises. Simply Embracing your Music.";

const wordVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function WhatEmbraceMeans() {
  const words = headline.split(" ");

  return (
    <section className="bg-[#f2f2f3] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.07 }}
          className="font-[var(--font-cormorant)] text-3xl font-medium leading-tight tracking-[0.01em] text-[#16335b] sm:text-4xl lg:text-5xl"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
