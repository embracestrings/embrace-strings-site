"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "The test kit",
    body: (
      <>
        Pay a <strong className="font-medium text-[#16335b]">$25 non-refundable fee</strong> to cover shipping and
        handling. We send you a chinrest to use with your violin so you can evaluate fit, comfort, and ease of
        adjustment in your daily playing.
      </>
    ),
    image: "/adjustable-violin-chinrest.JPG",
    imageAlt: "Embrace Strings adjustable chinrest on a violin",
    textLeft: true,
  },
  {
    number: "02",
    title: "14 days of music",
    body: (
      <>
        Your trial begins when the chinrest is <strong className="font-medium text-[#16335b]">delivered</strong>—use
        that window to rehearse, perform, and adjust as often as you like. There are no tools required; small turns
        of the side dials refine height and tilt in seconds.
      </>
    ),
    image: "/embrace-violin-chinrest-side.JPG",
    imageAlt: "Side view of Embrace Strings chinrest on a violin",
    textLeft: false,
  },
  {
    number: "03",
    title: "Take it or leave it",
    body: (
      <>
        <p>At the end of your trial, choose what works best for you:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-[#ba9e78]">
          <li>
            <strong className="font-medium text-[#16335b]">Love it?</strong> Keep the chinrest. A final charge of{" "}
            <strong className="font-medium text-[#16335b]">$74</strong> applies (billed after a short grace period
            following day 14—see trial terms for exact timing).
          </li>
          <li>
            <strong className="font-medium text-[#16335b]">Not a fit?</strong> Return the chinrest using the{" "}
            <strong className="font-medium text-[#16335b]">prepaid label</strong> we provide. You will not owe the
            $74 purchase amount; only the original $25 trial fee is retained.
          </li>
        </ul>
      </>
    ),
    image: "/violin-chinrest-contact.jpg",
    imageAlt: "Embrace Strings chinrest detail",
    textLeft: true,
  },
];

export default function TrialDetails() {
  return (
    <article className="bg-[#f2f2f3] text-[#16335b]">

      {/* ── Kit intro — navy band ──────────────────────────────── */}
      <section className="bg-[#16335b] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#f2f2f3] sm:text-5xl"
          >
            Embrace Strings Chinrest Test Kit — $25
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-[#f2f2f3]/65"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Try our chinrest where it matters most: on your instrument, in real practice and performance conditions.
          </motion.p>
        </div>
      </section>

      {/* ── How it works — alternating blocks ─────────────────── */}
      <section>
        {steps.map((step, i) => (
          <div key={step.number}>
            <div className="mx-auto grid max-w-6xl items-center gap-0 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-16">

              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, x: step.textLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col justify-center ${step.textLeft ? "md:order-1" : "md:order-2"}`}
              >
                <p
                  className="font-[var(--font-cormorant)] text-6xl font-medium leading-none text-[#ba9e78]/30 sm:text-8xl"
                >
                  {step.number}
                </p>
                <h3
                  className="mt-4 font-[var(--font-cormorant)] text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl"
                >
                  {step.title}
                </h3>
                <div className="mt-5 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
                  {step.body}
                </div>
              </motion.div>

              {/* Image column */}
              <motion.div
                initial={{ opacity: 0, x: step.textLeft ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className={`${step.textLeft ? "md:order-2" : "md:order-1"} mt-10 md:mt-0`}
              >
                <div className="overflow-hidden rounded-2xl border border-[#ba9e78]/25 shadow-[0_16px_40px_rgba(22,51,91,0.08)]">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover object-center"
                  />
                </div>
              </motion.div>

            </div>

            {/* Divider between blocks */}
            {i < steps.length - 1 && (
              <div className="mx-auto max-w-6xl border-t border-[#ba9e78]/20 px-4 sm:px-6" />
            )}
          </div>
        ))}
      </section>

      {/* ── CTA — Ready to find your fit ──────────────────────── */}
      <section className="border-t border-[#ba9e78]/25 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-xl px-4 text-center sm:px-6"
        >
          <h2 className="font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#16335b] sm:text-5xl">
            Ready to find your fit?
          </h2>
          <p
            className="mt-4 text-base font-light text-[#16335b]/60"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            14 days. No tools. No commitment.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="https://buy.stripe.com/aFaeVfec14IAdL4dJSafS01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#16335b] px-8 py-3.5 font-medium tracking-[0.14em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b] sm:w-auto"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Start My Trial
            </a>
            <p
              className="text-sm font-light text-[#16335b]/75"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Review our{" "}
              <a
                href="/Chinrest Testing Terms and Conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#16335b] underline decoration-[#ba9e78]/50 underline-offset-2 transition hover:text-[#ba9e78]"
              >
                Trial Terms
              </a>{" "}
              before purchasing.
            </p>
          </div>
        </motion.div>
      </section>


    </article>
  );
}
