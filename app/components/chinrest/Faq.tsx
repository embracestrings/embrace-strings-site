"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Will this chinrest fit my body type?",
    a: "Yes! Embrace Strings chinrests are fully adjustable in height and tilt, designed to accommodate players of all sizes, shapes, and playing styles. Whether you're petite or tall, beginner or professional, you can easily find a fit that feels natural and supports your posture.",
  },
  {
    q: "Do I need tools to adjust it?",
    a: "No tools are needed. Every adjustment is made with simple side dials, so you can change height or tilt in seconds—even during rehearsal, lessons, or performance. Comfort and posture adjustments are effortless and immediate.",
  },
  {
    q: "How often should I adjust my Embrace Strings Chinrest?",
    a: "As often as your body needs! Posture, clothing, and playing style can shift from day to day, or even during practice. Quick, tool-free adjustments make it easy to respond instantly and maintain natural posture every time you play.",
  },
  {
    q: "Can I adjust it during performance?",
    a: "Absolutely. The intuitive, side-dial system is designed for effortless adjustments, so you can tweak height or tilt between pieces, without interrupting your flow or needing a tool.",
  },
  {
    q: "Is it compatible with all violins and violas?",
    a: "Yes! Embrace Strings chinrests are designed to fit standard violin and viola models. If you have a unique or antique instrument, contact us—we'll help ensure a perfect fit.",
  },
  {
    q: "Why choose Embrace Strings over other adjustable chinrests?",
    a: "Unlike other adjustable chinrests that require tools and time-consuming tweaks, Embrace Strings gives you effortless, immediate control over height and tilt. That means you can maintain comfort, posture, and freedom of expression every time you play—without compromise.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-y border-[#ba9e78]/30">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl divide-y divide-[#16335b]/20 overflow-hidden rounded-2xl border border-[#ba9e78]/30 bg-white/70 shadow-sm"
        >
          {faqs.map((faq) => (
            <details key={faq.q} className="group p-4 sm:p-5">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-medium text-[#16335b] marker:hidden [&::-webkit-details-marker]:hidden sm:text-base">
                <span className="min-w-0">{faq.q}</span>
                <svg
                  className="h-5 w-5 shrink-0 text-[#ba9e78] transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
                {faq.q === "Is it compatible with all violins and violas?" ? (
                  <>
                    Yes! Embrace Strings chinrests are designed to fit standard violin and viola models. If you have a unique or antique instrument,{" "}
                    <a
                      href="/contact"
                      className="font-medium text-[#16335b] underline decoration-[#ba9e78]/60 underline-offset-2 transition hover:text-[#ba9e78]"
                    >
                      contact us
                    </a>
                    —we&apos;ll help ensure a perfect fit.
                  </>
                ) : (
                  faq.a
                )}
              </p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
