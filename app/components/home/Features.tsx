"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
          Why Embrace Strings?
        </h2>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
          The fully adjustable, tool-free chinrest for violin and viola.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <motion.article
          {...fadeUp}
          className="flex min-w-0 flex-col rounded-2xl border border-[#ba9e78]/30 bg-white/60 p-6 shadow-sm transition hover:shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ba9e78]/60 bg-[#f2f2f3]">
              <Image
                src="/chinrest_icon_navy.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain object-center"
              />
            </div>
            <h3 className="min-w-0 flex-1 text-xl font-medium leading-snug tracking-[0.02em] text-[#16335b]">
              Full Adjustability
            </h3>
          </div>
          <p className="mt-4 w-full break-words text-sm font-light leading-relaxed text-[#16335b]/75">
            Embrace Strings chinrests are fully adjustable in both height and tilt, so your setup adapts to you—not the other way around. From day to day changes in posture, a suit jacket, or simply how you’re feeling that day, the chinrest adjusts effortlessly to keep your posture natural.
          </p>
          <div className="mt-6 h-px w-full bg-[#ba9e78]/25" />
        </motion.article>

        <motion.article
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="flex min-w-0 flex-col rounded-2xl border border-[#ba9e78]/30 bg-white/60 p-6 shadow-sm transition hover:shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ba9e78]/60 bg-[#f2f2f3] text-[#16335b]">
              <svg viewBox="0 0 24 24" className="h-9 w-9 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="7.5" y="2" width="9" height="5.5" rx="1.2" />
                <line x1="12" y1="7.5" x2="12" y2="16" />
                <line x1="9" y1="16" x2="15" y2="16" />
                <line x1="10" y1="16" x2="10" y2="20" />
                <line x1="14" y1="16" x2="14" y2="20" />
                <line x1="8.5" y1="20" x2="15.5" y2="20" />
              </svg>
            </div>
            <h3 className="min-w-0 flex-1 text-xl font-medium leading-snug tracking-[0.02em] text-[#16335b]">
              Tool Free Use
            </h3>
          </div>
          <p className="mt-4 w-full break-words text-sm font-light leading-relaxed text-[#16335b]/75">
            Adjustments can be made quickly and easily, without the need for tools. Whether during rehearsal, a lesson, a performance, or simply as you fine-tune your setup over time, you can explore what feels best, respond to changes in your playing, and stay comfortable without frustration or guesswork.
          </p>
          <div className="mt-6 h-px w-full bg-[#ba9e78]/25" />
        </motion.article>

        <motion.article
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="flex min-w-0 flex-col rounded-2xl border border-[#ba9e78]/30 bg-white/60 p-6 shadow-sm transition hover:shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ba9e78]/60 bg-[#f2f2f3]">
              <Image
                src="/embrace-strings-brandmark.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain object-center"
              />
            </div>
            <h3 className="min-w-0 flex-1 text-xl font-medium leading-snug tracking-[0.02em] text-[#16335b]">
              Crafted with Care
            </h3>
          </div>
          <p className="mt-4 w-full break-words text-sm font-light leading-relaxed text-[#16335b]/75">
            Designed by musicians, for musicians. With a premium material, intentional design, and practical use, our chinrest is built to help you Embrace your fit.
          </p>
          <div className="mt-6 h-px w-full bg-[#ba9e78]/25" />
        </motion.article>
      </div>
    </section>
  );
}
