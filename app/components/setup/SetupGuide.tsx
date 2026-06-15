"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Attach the Chinrest Clamp Barrels",
    body: (
      <p className="mt-3">
        Screw the clamp barrels onto the chinrest. These barrels are what secure the chinrest to your instrument, so make sure they are firmly in place before moving on.
      </p>
    ),
  },
  {
    title: "2. Position and Secure the Chinrest",
    body: (
      <>
        <p className="mt-3">
          Place the chinrest to the left of the tailpiece and tighten the clamp using the tightener until snug.
        </p>
        <aside className="mt-4 rounded-r-lg border-l-4 border-[#ba9e78] bg-[#f2f2f3]/60 px-4 py-3 text-[#16335b]/90">
          <p className="font-medium text-[#16335b]">Important:</p>
          <p className="mt-1">
            Don&apos;t overtighten — this could damage your instrument. The chinrest should sit firmly but without forcing your instrument.
          </p>
        </aside>
      </>
    ),
  },
  {
    title: "3. Set Your Shoulder and Instrument",
    body: (
      <p className="mt-3">
        Place your instrument on your shoulder and look straight ahead — don&apos;t worry about your chin yet. Adjust your shoulder rest so the instrument sits comfortably on your collarbone. The instrument should come out at roughly a 45° angle and stay in place with just your shoulder and left hand. This ensures that your chinrest fills in the natural space between your chin and the instrument, rather than forcing your neck into tension.
      </p>
    ),
  },
  {
    title: "4. Adjust Height and Tilt",
    body: (
      <>
        <p className="mt-3">Use the top dials to set the chinrest&apos;s height and tilt:</p>
        <ul className="mt-3 list-none space-y-3 pl-0">
          <li>
            <span className="text-[#ba9e78]" aria-hidden="true">— </span>Fill the gap between your chin and the instrument comfortably.
          </li>
          <li>
            <span className="text-[#ba9e78]" aria-hidden="true">— </span>Chinrest should be at the same angle as your jawline.
          </li>
          <li>
            <span className="text-[#ba9e78]" aria-hidden="true">— </span>Ideally, it rests about 2 fingers below your head, allowing your head&apos;s natural weight to help secure the instrument.
          </li>
          <li>
            <span className="text-[#ba9e78]" aria-hidden="true">— </span>Think of the chinrest as a pillow for your jaw, helping you Embrace the instrument.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Lock the Chinrest in Place",
    body: (
      <>
        <p className="mt-3">Once the height and tilt feel right, use the center dial to stabilize the chinrest:</p>
        <p className="mt-3">Turn until it cannot easily rotate.</p>
        <p className="mt-3">You do not need to overtighten — firm is enough.</p>
      </>
    ),
  },
  {
    title: "6. Tips and Troubleshooting",
    body: (
      <ul className="mt-3 list-disc space-y-3 pl-5 marker:text-[#ba9e78]">
        <li>If the top part of the chinrest comes off, simply pull it back down onto the threaded rod and retighten the top dial.</li>
        <li>Always unlock the center dial before making further adjustments.</li>
        <li>After playing, it&apos;s best practice to unlock the center dial to prolong the life of your chinrest.</li>
      </ul>
    ),
  },
];

export default function SetupGuide() {
  return (
    <section id="setup-guide" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-4xl font-medium"
      >
        How to Use Your Chinrest:
      </motion.h2>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="mx-auto mt-8 w-full max-w-6xl rounded-2xl border border-[#ba9e78]/35 bg-white px-6 py-10 shadow-[0_16px_40px_rgba(22,51,91,0.08)] sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        aria-labelledby="setup-guide-title"
      >
        <header className="border-b border-[#ba9e78]/25 pb-8 text-center">
          <h3 id="setup-guide-title" className="text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-[2rem]">
            Chinrest Setup Guide
          </h3>
          <p className="mx-auto mt-5 max-w-none text-left text-sm leading-relaxed text-[#16335b]/85 sm:text-[15px] lg:text-base">
            Follow these steps to adjust your Embrace Strings chinrest for natural posture, comfort, and effortless play. Take your time, and remember: small adjustments make a big difference.
          </p>
        </header>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-[#16335b]/85 sm:text-[15px] lg:text-base">
          {steps.map((step, i) => (
            <motion.section
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            >
              <h4 className="text-lg font-medium tracking-[0.02em] text-[#16335b]">{step.title}</h4>
              {step.body}
            </motion.section>
          ))}
        </div>
      </motion.article>

      <div className="mt-8 flex justify-center">
        <a
          href="/Chinrest Setup Document.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b]"
        >
          Download Setup Guide (PDF)
        </a>
      </div>
    </section>
  );
}
