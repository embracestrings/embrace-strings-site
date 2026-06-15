"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Comfort First",
    body: "Every design decision starts with the player's body. Ergonomics aren't an afterthought—they're the reason Embrace Strings exists.",
  },
  {
    title: "Player Focused",
    body: "Our products are shaped by real feedback from real musicians, tested in lessons, rehearsals, and performances before they ever ship.",
  },
  {
    title: "Built to Last",
    body: "We use durable materials and thoughtful construction so your chinrest holds up to daily adjustment, year after year.",
  },
];

export default function Values() {
  return (
    <section id="about-values" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-4xl font-medium"
      >
        Our Mission &amp; Values
      </motion.h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {values.map((value, i) => (
          <motion.article
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            className="rounded-xl border border-[#ba9e78]/35 bg-white/50 p-6"
          >
            <h3 className="text-2xl font-medium">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#16335b]/80">{value.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
