"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SetupHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[min(72vh,520px)] w-full sm:min-h-[420px] lg:min-h-[460px]">
        <Image
          src="/adjustable-violin-chinrest.JPG"
          alt="Embrace Strings adjustable chinrest on a violin"
          fill
          priority
          className="object-cover object-[50%_32%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16335b]/75 via-[#16335b]/40 to-[#16335b]/25" />

        <div className="relative flex min-h-[min(72vh,520px)] items-center justify-center px-4 py-20 sm:min-h-[420px] lg:min-h-[460px]">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mt-4 font-[var(--font-cormorant)] text-4xl font-medium leading-tight tracking-[0.02em] text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
            >
              Your Setup, Your Way
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-white/65 sm:text-base"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Adjust your Embrace Strings chinrest for natural posture, comfort, and freedom of movement.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="bg-[#f2f2f3] px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-[#ba9e78]/35 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
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
      </div>
    </section>
  );
}
