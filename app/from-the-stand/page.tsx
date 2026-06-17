"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "finding-your-fit",
    category: "Setup",
    title: "Finding Your Fit",
    excerpt:
      "Your chinrest should disappear into your playing — not something you think about, just something that works. Here's how to find the right height and position for your body.",
    date: "June 2026",
  },
  {
    slug: "why-your-setup-changes-every-day",
    category: "Performance",
    title: "Why Your Setup Changes Every Day",
    excerpt:
      "A cold rehearsal hall, a long drive, a rough night of sleep — your body is never the same twice. Your instrument setup shouldn't pretend otherwise.",
    date: "May 2026",
  },
  {
    slug: "why-we-started-embrace-strings",
    category: "Founders",
    title: "Why We Started Embrace Strings",
    excerpt:
      `I'm 6'5". Holding a violin was always a negotiation. After a neck injury in college, I decided there had to be a better way — and spent the next few years building it.`,
    date: "April 2026",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function FromTheStandPage() {
  return (
    <main className="min-h-screen bg-[#f2f2f3]">

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pb-12 pt-20 text-center sm:px-6 sm:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#ba9e78]"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          From the Stand
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="text-6xl font-medium tracking-[0.02em] text-[#16335b] sm:text-7xl"
          style={{ fontFamily: "var(--font-cormorant, serif)" }}
        >
          From the Stand
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-[#16335b]/60"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          Thoughts from the stand — on playing, building, and everything in between.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.28 }}
          className="mx-auto mt-8 h-px w-16 origin-center bg-[#ba9e78]/50"
        />
      </section>

      {/* Cards grid */}
      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
            >
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: "easeOut" }}>
              <Link
                href={`/from-the-stand/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ba9e78]/20 bg-white shadow-[0_4px_20px_rgba(22,51,91,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(22,51,91,0.11)]"
              >
                {/* Placeholder image strip */}
                <div className="h-44 w-full bg-[#e8e4de] transition-colors duration-300 group-hover:bg-[#ddd8d0]" />

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ba9e78]"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    {post.category}
                  </p>
                  <h2
                    className="mb-3 text-2xl font-medium leading-snug tracking-[0.01em] text-[#16335b] group-hover:text-[#ba9e78] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-cormorant, serif)" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="flex-1 text-sm font-light leading-relaxed text-[#16335b]/60"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    className="mt-5 text-xs font-light text-[#16335b]/40"
                    style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                  >
                    {post.date}
                  </p>
                </div>
              </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
