"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Embrace Truth",
    body: "We are honest about what works, what doesn't, and why.",
  },
  {
    title: "Embrace People",
    body: "We build with care for the people we serve.",
  },
  {
    title: "Embrace Challenges",
    body: "We take on what others think is too hard, because our players deserve it.",
  },
  {
    title: "Embrace Action",
    body: "We move fast so you don't have to wait for comfort.",
  },
  {
    title: "Embrace Life",
    body: "We believe music brings fullness to life, and we build so nothing gets in its way.",
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
      {/* Top row: first 3 cards */}
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {values.slice(0, 3).map((value, i) => (
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
      {/* Bottom row: last 2 cards centered */}
      <div className="mt-5 grid gap-5 md:mx-auto md:w-2/3 md:grid-cols-2">
        {values.slice(3).map((value, i) => (
          <motion.article
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: (i + 3) * 0.1 }}
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
