"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const audiences = [
  {
    title: "For Professionals",
    body: "Built for long rehearsals, performances, and the subtle posture changes that happen throughout the day. Embrace Strings allows professionals to quickly dial in comfort without interrupting focus, offering a setup that is practical, responsive, and refined. Whether you perform, teach, or rehearse daily, this chinrest provides the versatility serious musicians expect from their equipment.",
  },
  {
    title: "For Teachers",
    body: "Placeholder description for teachers and studio leaders. Copy will describe how Embrace Strings supports students with adjustable fit across growing players and lesson routines.",
  },
  {
    title: "For Students",
    body: "As your body and technique develop, your setup should evolve with you. Embrace Strings adapts over time, allowing students to refine fit gradually rather than being locked into a fixed solution. The same responsive comfort trusted by professionals supports healthy alignment at every stage of growth.",
  },
  {
    title: "For Schools & Universities",
    body: "Placeholder description for schools and university programs. Copy will outline ensemble adoption, program support, and consistent setup across classrooms and performance groups.",
  },
  {
    title: "For Hobbyists",
    body: "Placeholder description for adult hobbyists and returning players. Copy will emphasize comfort, ease of adjustment, and enjoyment without the demands of a professional schedule.",
  },
];

export default function ForPlayers() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % audiences.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section id="for-players" className="border-t border-[#ba9e78]/25 bg-[#f2f2f3]/50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl"
        >
          An Embrace That Grows With You
        </motion.h2>

        <div
          className="relative mx-auto mt-10 max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[22rem] overflow-hidden rounded-2xl border border-[#ba9e78]/30 bg-white/70 shadow-[0_16px_40px_rgba(22,51,91,0.08)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex min-h-[22rem] flex-col p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium tracking-[0.02em] text-[#16335b] sm:text-xl">
                  {audiences[index].title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
                  {audiences[index].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2" aria-label="Audience slides">
            {audiences.map((audience, i) => (
              <button
                key={audience.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${audience.title}`}
                aria-current={i === index}
                className={`h-2.5 w-2.5 rounded-full border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78] focus-visible:ring-offset-2 ${
                  i === index ? "border-[#ba9e78] bg-[#ba9e78]" : "border-[#ba9e78]/45 bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
