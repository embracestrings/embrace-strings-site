"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[min(72vh,520px)] w-full sm:min-h-[420px] lg:min-h-[520px]">
        <Image
          src="/turner-chinrest-about-embrace.jpg"
          alt="Turner Rey playing violin with Embrace Strings chinrest"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16335b]/75 via-[#16335b]/40 to-[#16335b]/25" />

        <div className="relative flex min-h-[min(72vh,520px)] items-center justify-center px-4 py-20 sm:min-h-[420px] lg:min-h-[520px]">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mt-4 font-[var(--font-cormorant)] text-4xl font-medium leading-tight tracking-[0.02em] text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
            >
              Built by Musicians.{" "}
              <br className="hidden sm:block" />
              For Musicians.
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
