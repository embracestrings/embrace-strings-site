"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "The test kit",
    body: (
      <>
        Pay a <strong className="font-medium text-[#16335b]">$25 non-refundable fee</strong> to cover shipping and
        handling. We send you a chinrest to use with your violin so you can evaluate fit, comfort, and ease of
        adjustment in your daily playing.
      </>
    ),
  },
  {
    title: "14 days of music",
    body: (
      <>
        Your trial begins when the chinrest is <strong className="font-medium text-[#16335b]">delivered</strong>—use
        that window to rehearse, perform, and adjust as often as you like. There are no tools required; small turns
        of the side dials refine height and tilt in seconds.
      </>
    ),
  },
  {
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
  },
];

export default function TrialDetails() {
  return (
    <article className="bg-white text-[#16335b]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-2xl font-medium tracking-[0.02em] text-[#16335b] sm:text-3xl">
            Embrace Strings Chinrest Test Kit — $25
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm font-light leading-relaxed text-[#16335b]/85 sm:text-base">
            Try our chinrest where it matters most: on your instrument, in real practice and performance conditions.
            The test kit program gives you <strong className="font-medium text-[#16335b]">14 days</strong> to decide
            if Embrace Strings is right for you—with clear pricing and a straightforward return path if it is not.
          </p>
        </motion.header>

        <div className="mt-12 border-t border-[#ba9e78]/25 pt-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg font-medium tracking-[0.02em] text-[#16335b] sm:text-xl"
          >
            How it works
          </motion.h3>
          <ol className="mt-6 space-y-8 text-sm font-light leading-relaxed text-[#16335b]/85 sm:text-base">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ba9e78]/50 bg-[#f2f2f3]/80 text-xs font-semibold tracking-wide text-[#16335b]"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium text-[#16335b]">{step.title}</p>
                  <div className="mt-2">{step.body}</div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col gap-4 sm:mx-auto sm:max-w-md"
        >
          <a
            href="https://buy.stripe.com/aFaeVfec14IAdL4dJSafS01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#16335b] px-6 py-3.5 text-center font-medium tracking-[0.14em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b]"
          >
            Start My Trial
          </a>
          <p className="text-center text-sm font-light text-[#16335b]/75">
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
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-14"
        >
          <div className="overflow-hidden rounded-2xl border border-[#ba9e78]/25 shadow-[0_16px_40px_rgba(22,51,91,0.08)]">
            <Image
              src="/adjustable-violin-chinrest.JPG"
              alt="Close-up of the Embrace Strings adjustable chinrest mounted on a violin"
              width={1200}
              height={800}
              className="h-auto w-full object-cover object-center"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs font-light leading-relaxed text-[#16335b]/65 sm:text-sm">
            For full program rules, shipping details, and billing timing, review the trial terms document above or
            reach us at{" "}
            <a
              href="mailto:info@embracestrings.com"
              className="font-medium text-[#16335b] underline decoration-[#ba9e78]/50 underline-offset-2 transition hover:text-[#ba9e78]"
            >
              info@embracestrings.com
            </a>
            .
          </figcaption>
        </motion.figure>
      </div>
    </article>
  );
}
