"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
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

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center px-6 text-center font-[var(--font-cormorant)] text-4xl font-medium text-white sm:text-5xl md:text-6xl"
        >
          Built to Adjust. Designed to Embrace.
        </motion.h1>

        <Image
          src="/embrace-strings-logo-white.png"
          alt="Embrace Strings"
          width={240}
          height={90}
          className="absolute bottom-4 right-4 z-10 h-auto w-auto max-w-[min(34vw,11rem)] object-contain object-right-bottom sm:bottom-6 sm:right-6 md:max-w-[12rem] lg:max-w-[14rem]"
        />
      </div>
    </section>
  );
}
