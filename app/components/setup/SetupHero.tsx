"use client";

import { motion } from "framer-motion";

export default function SetupHero() {
  return (
    <section id="setup-hero" className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-medium sm:text-5xl"
      >
        Find Your Perfect Fit
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#16335b]/80 sm:text-base"
      >
        Learn how to adjust your Embrace Strings chinrest for natural posture, comfort, and freedom of movement.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-xl border border-[#ba9e78]/35 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
      >
        <video
          className="w-full"
          controls
          playsInline
          preload="metadata"
          aria-label="Embrace Strings adjustable violin chinrest setup video"
        >
          <source src="/Chinrest Setup Video.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </motion.div>
    </section>
  );
}
