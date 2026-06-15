"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const lines = [
  "Fullness of movement.",
  "Comfort in your music.",
  "The freedom to give everything.",
];

export default function WhatEmbraceMeans() {
  return (
    <section className="bg-[#f2f2f3] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#16335b] sm:text-5xl">
            What it means to Embrace.
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            {lines.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.25 }}
                className="text-xl font-light leading-relaxed text-[#16335b]/85 sm:text-2xl"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#ba9e78]/30 shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
        >
          <Image
            src="/adjustable-violin-chinrest.JPG"
            alt="Close-up of the Embrace Strings adjustable chinrest"
            fill
            className="object-cover object-[50%_32%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
