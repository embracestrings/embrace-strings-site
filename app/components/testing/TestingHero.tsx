"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TestingHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[min(72vh,520px)] w-full sm:min-h-[420px] lg:min-h-[460px]">
        <Image
          src="/embrace-violin-chinrest-side.JPG"
          alt="Embrace Strings chinrest on a violin"
          fill
          priority
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16335b]/75 via-[#16335b]/40 to-[#16335b]/25" />
        {/* Seamless fade into navy section below */}
        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#16335b] to-transparent" />
        <div className="relative flex min-h-[min(72vh,520px)] items-center justify-center px-4 py-20 sm:min-h-[420px] lg:min-h-[460px]">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xs font-medium uppercase tracking-[0.28em] text-white/90 sm:text-sm"
            >
              14-Day Trial
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mt-4 text-4xl font-medium leading-tight tracking-[0.02em] text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
            >
              Find Your Fit
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
