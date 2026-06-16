"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function TrialAndFeedback() {
  return (
    <>
      <motion.section {...fadeUp} id="trial-program" className="border-t border-[#ba9e78]/25 bg-[#f2f2f3]">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-14">
          <h2 className="text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
            Not Ready To Purchase? Test Our Chinrest!
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
            We know that finding the right chinrest is a deeply personal process. To help you play with greater intentionality and comfort, we offer a 14-day trial program.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/testing"
              className="inline-flex items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="chinrest-feedback"
        className="border-t border-[#ba9e78]/25 bg-[#f2f2f3]"
        aria-labelledby="chinrest-feedback-heading"
      >
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <div className="rounded-2xl border border-[#ba9e78]/30 bg-[#f2f2f3]/50 p-6 shadow-sm sm:p-8">
            <h2 id="chinrest-feedback-heading" className="text-2xl font-medium tracking-[0.02em] text-[#16335b] sm:text-3xl">
              Leave a Review
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#16335b]/85 sm:text-base">
              If you have tried or are using an Embrace Strings chinrest, we would love your feedback—what is working well, what is not, and anything that would help us support players better. A short survey helps us hear from you in one place.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 text-center font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b]"
              >
                Take Feedback Survey
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
