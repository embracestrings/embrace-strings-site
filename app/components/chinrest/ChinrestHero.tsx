"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChinrestHero() {
  return (
    <section className="relative w-full">
      <div className="relative mt-4 w-full min-h-[420px] overflow-hidden lg:min-h-[520px]">
        <Image
          src="/embrace-violin-chinrest-side.JPG"
          alt="Embrace Strings adjustable chinrest on a violin, side view"
          fill
          priority
          className="object-cover object-[center_11%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/45" />

        <div className="relative mx-auto flex min-h-[420px] max-w-6xl items-center px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl min-w-0"
          >
            <h1 className="text-4xl font-medium leading-[1.1] tracking-[0.02em] text-white sm:text-5xl lg:text-6xl">
              Built to Adjust.
              <br />
              Designed to Embrace.
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
