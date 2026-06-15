"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    quote: "“A voice found in comfort…”",
    body: "This is a thoughtful, well-crafted product that has enabled me to speak my musical voice with new comfort and ease. It has drastically improved the performing lives of myself and my students!",
    author: "— Ben Cantrell",
  },
  {
    quote: "“A setup that finally works with my body…”",
    body: "My comfort changes day to day, and this chinrest adjusts just as easily. I feel less tension and more freedom every time I play.",
    author: "— Advanced Student",
  },
  {
    quote: "“The most comfortable chinrest I’ve used…”",
    body: "Being able to adjust my chinrest in seconds has completely changed my practice. Everything feels more natural and effortless now.",
    author: "— Viola Teacher",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-[#ba9e78]/25 bg-[#f2f2f3]/50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl"
        >
          Client Reviews
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-3 md:items-stretch">
          {reviews.map((review, i) => (
            <motion.article
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="flex min-h-0 flex-col rounded-2xl border border-[#ba9e78]/40 bg-white p-6 shadow-sm sm:p-7"
            >
              <h3 className="text-lg font-medium leading-snug text-[#ba9e78] sm:text-xl">
                {review.quote}
              </h3>
              <p className="mt-4 flex-1 text-left text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
                {review.body}
              </p>
              <p className="mt-6 text-left text-sm font-medium text-[#16335b]/75">{review.author}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
