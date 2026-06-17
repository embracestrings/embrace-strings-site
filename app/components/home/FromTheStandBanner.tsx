"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "finding-your-fit",
    category: "Setup",
    title: "Finding Your Fit",
    excerpt: "Your chinrest should disappear into your playing — not something you think about, just something that works.",
    href: "/from-the-stand/finding-your-fit",
  },
  {
    slug: "why-your-setup-changes",
    category: "Performance",
    title: "Why Your Setup Changes Every Day",
    excerpt: "A cold rehearsal hall, a long drive, a rough night of sleep — your body is never the same twice.",
    href: "/from-the-stand/why-your-setup-changes-every-day",
  },
  {
    slug: "why-we-started",
    category: "Founders",
    title: "Why We Started Embrace Strings",
    excerpt: `I'm 6'5". Holding a violin was always a negotiation. After a neck injury in college, I decided there had to be a better way.`,
    href: "/from-the-stand/why-we-started-embrace-strings",
  },
];

const doubled = [...posts, ...posts];

export default function FromTheStandBanner() {
  return (
    <section className="bg-[#16335b] py-16 sm:py-24 overflow-hidden">

      {/* Headline */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#ba9e78]"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          Latest Thoughts
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="text-4xl font-medium tracking-[0.02em] text-[#f2f2f3] sm:text-5xl"
          style={{ fontFamily: "var(--font-cormorant, serif)" }}
        >
          From the Stand
        </motion.h2>
      </div>

      {/* Scrolling strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="relative mt-10"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#16335b] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#16335b] to-transparent sm:w-24" />

        <div className="from-the-stand-marquee">
          {doubled.map((post, i) => (
            <motion.div
              key={`${post.slug}-${i}`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mx-3 shrink-0"
            >
              <Link
                href={post.href}
                className="group flex h-full w-[320px] flex-col rounded-2xl border border-[#ba9e78]/20 bg-[#f2f2f3] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)]"
              >
                <p
                  className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ba9e78]"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  {post.category}
                </p>
                <h3
                  className="mb-3 text-xl font-medium leading-snug tracking-[0.01em] text-[#16335b] group-hover:text-[#ba9e78] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-cormorant, serif)" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed text-[#16335b]/60"
                  style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
                >
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Read all link */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
        className="mt-10 text-center"
      >
        <Link
          href="/from-the-stand"
          className="text-sm font-medium tracking-[0.1em] text-[#f2f2f3]/70 transition-colors duration-200 hover:text-[#ba9e78]"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          Read all posts →
        </Link>
      </motion.div>

    </section>
  );
}
