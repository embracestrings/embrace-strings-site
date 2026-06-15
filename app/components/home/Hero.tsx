"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const headline =
  "A world where no musician is held back from giving everything to their music.";

const wordVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const words = headline.split(" ");

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden lg:h-[90vh]">
        {/* Background media — swap this Image for a <video> to go video-ready */}
        <motion.div style={{ y }} className="absolute inset-0 h-[125%] w-full">
          <Image
            src="/embrace-violin-chinrest-side.JPG"
            alt="Embrace Strings adjustable chinrest on a violin, side view"
            fill
            priority
            className="object-cover object-[center_11%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
            className="max-w-4xl font-[var(--font-cormorant)] text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mr-[0.3em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + words.length * 0.08 + 0.4 }}
            className="mt-6 font-[var(--font-cormorant)] text-lg italic tracking-[0.04em] text-[#ba9e78] sm:text-xl"
          >
            We build for the player.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
