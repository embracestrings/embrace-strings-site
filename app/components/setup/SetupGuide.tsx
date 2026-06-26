"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Attach the Chinrest Clamp Barrels",
    body: (
      <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
        Screw the clamp barrels onto the chinrest. These barrels are what secure the chinrest to your instrument, so make sure they are firmly in place before moving on.
      </p>
    ),
    image: "/adjustable-violin-chinrest.JPG",
    imageAlt: "Embrace Strings adjustable chinrest",
  },
  {
    number: "02",
    title: "Position and Secure the Chinrest",
    body: (
      <>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
          Place the chinrest to the left of the tailpiece and tighten the clamp using the tightener until snug.
        </p>
        <aside className="mt-5 rounded-r-lg border-l-4 border-[#ba9e78] bg-[#f2f2f3]/60 px-4 py-3 text-[#16335b]/90">
          <p className="font-medium text-[#16335b]">Important:</p>
          <p className="mt-1 text-sm font-light leading-relaxed sm:text-base">
            Don&apos;t overtighten — this could damage your instrument. The chinrest should sit firmly but without forcing your instrument.
          </p>
        </aside>
      </>
    ),
    image: "/embrace-violin-chinrest-side.JPG",
    imageAlt: "Chinrest mounted on a violin, side view",
  },
  {
    number: "03",
    title: "Set Your Shoulder and Instrument",
    body: (
      <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
        Place your instrument on your shoulder and look straight ahead — don&apos;t worry about your chin yet. Adjust your shoulder rest so the instrument sits comfortably on your collarbone. The instrument should come out at roughly a 45° angle and stay in place with just your shoulder and left hand. This ensures that your chinrest fills in the natural space between your chin and the instrument, rather than forcing your neck into tension.
      </p>
    ),
    image: "/turner-chinrest-about-embrace.jpg",
    imageAlt: "Turner Rey playing violin with Embrace Strings chinrest",
  },
  {
    number: "04",
    title: "Adjust Height and Tilt",
    body: (
      <>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">Use the top dials to set the chinrest&apos;s height and tilt:</p>
        <ul className="mt-3 list-none space-y-3 pl-0 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
          <li className="flex gap-2"><span className="shrink-0 text-[#ba9e78]" aria-hidden="true">♪</span>Fill the gap between your chin and the instrument comfortably.</li>
          <li className="flex gap-2"><span className="shrink-0 text-[#ba9e78]" aria-hidden="true">♪</span>Chinrest should be at the same angle as your jawline.</li>
          <li className="flex gap-2"><span className="shrink-0 text-[#ba9e78]" aria-hidden="true">♪</span>Ideally, it rests about 2 fingers below your head, allowing your head&apos;s natural weight to help secure the instrument.</li>
          <li className="flex gap-2"><span className="shrink-0 text-[#ba9e78]" aria-hidden="true">♪</span>Think of the chinrest as a pillow for your jaw, helping you Embrace the instrument.</li>
        </ul>
      </>
    ),
    image: "/violin-chinrest-contact.jpg",
    imageAlt: "Detail view of Embrace Strings chinrest",
  },
  {
    number: "05",
    title: "Lock the Chinrest in Place",
    body: (
      <>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">Once the height and tilt feel right, use the center dial to stabilize the chinrest:</p>
        <p className="mt-3 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">Turn until it cannot easily rotate.</p>
        <p className="mt-3 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">You do not need to overtighten — firm is enough.</p>
      </>
    ),
    image: null,
    imageAlt: "",
  },
  {
    number: "06",
    title: "Tips and Troubleshooting",
    body: (
      <ul className="mt-4 list-none space-y-3 pl-0 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
        <li className="flex gap-2"><span className="shrink-0 text-[#ba9e78]" aria-hidden="true">♪</span>If the top part of the chinrest comes off, simply pull it back down onto the threaded rod and retighten the top dial.</li>
        <li className="flex gap-2"><span className="shrink-0 text-[#ba9e78]" aria-hidden="true">♪</span>Always unlock the center dial before making further adjustments.</li>
        <li className="flex gap-2"><span className="shrink-0 text-[#ba9e78]" aria-hidden="true">♪</span>After playing, it&apos;s best practice to unlock the center dial to prolong the life of your chinrest.</li>
      </ul>
    ),
    image: null,
    imageAlt: "",
  },
];

export default function SetupGuide() {
  return (
    <section id="setup-guide" className="bg-[#f2f2f3]">
      {steps.map((step, i) => {
        const textLeft = i % 2 === 0;
        return (
          <div key={step.number}>
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-16">

              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, x: textLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col justify-center ${textLeft ? "md:order-1" : "md:order-2"}`}
              >
                <p className="font-[var(--font-cormorant)] text-6xl font-medium leading-none text-[#ba9e78]/25 sm:text-8xl">
                  {step.number}
                </p>
                <h2 className="mt-4 font-[var(--font-cormorant)] text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
                  {step.title}
                </h2>
                {step.body}
              </motion.div>

              {/* Image column */}
              <motion.div
                initial={{ opacity: 0, x: textLeft ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className={`${textLeft ? "md:order-2" : "md:order-1"} mt-6 md:mt-0`}
              >
                {step.image ? (
                  <div className="overflow-hidden rounded-2xl border border-[#ba9e78]/25 shadow-[0_16px_40px_rgba(22,51,91,0.08)]">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-[#ba9e78]/20 bg-[#e8e4de]">
                    <span className="font-[var(--font-cormorant)] text-5xl font-medium text-[#ba9e78]/40">
                      {step.number}
                    </span>
                  </div>
                )}
              </motion.div>

            </div>

            {i < steps.length - 1 && (
              <div className="mx-auto max-w-6xl border-t border-[#ba9e78]/20 px-4 sm:px-6" />
            )}
          </div>
        );
      })}
    </section>
  );
}
