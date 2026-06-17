"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "When does my 14-day trial begin?",
    a: "Your trial clock starts when the package is delivered to the address on your order (per carrier tracking). That way you get the full two weeks of playing time on your own violin.",
  },
  {
    q: "What if I need help using the chinrest?",
    a: "If you are having trouble using the chinrest, we are here to help. In the email we sent, you can schedule a free 30 minute online fitting with a fitting professional from the Embrace team.",
  },
  {
    q: "If I love the chinrest, how do I pay for it?",
    a: "If you love the chinrest, simply keep it! If we haven't received a tracking scan for your return by the 18th day after delivery (14 days for the trial + 3 days for shipping), we will process the remaining balance to the card on file.",
  },
  {
    q: "Is the $25 trial fee refundable?",
    a: "The $25 fee covers the cost of two-way shipping and the maintenance of the chinrest between players. Because of this, it is non-refundable, regardless of whether you choose to keep or return the chinrest.",
  },
  {
    q: "How do I return the chinrest if it is not for me?",
    a: "Use the prepaid return label included with your kit. Pack the chinrest securely, drop it off with the carrier shown on the label, and keep your receipt until the return is processed. Initiate the return before your trial end date so you stay within program eligibility.",
  },
];

export default function TestingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-y border-[#ba9e78]/30 bg-[#f2f2f3]/50">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl"
        >
          FAQs
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm font-light text-[#16335b]/75 sm:text-base">
          Quick answers about timing, billing, and returns for the chinrest test kit.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl divide-y divide-[#16335b]/15 overflow-hidden rounded-2xl border border-[#ba9e78]/30 bg-white/80 shadow-sm"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="p-4 sm:p-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 text-left text-sm font-medium text-[#16335b] sm:text-base"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 pr-2">{faq.q}</span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ba9e78]/50 text-lg leading-none text-[#ba9e78]"
                    aria-hidden="true"
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="inline-block"
                    >
                      +
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
