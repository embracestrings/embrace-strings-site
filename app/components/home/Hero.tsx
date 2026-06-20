"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const line1 = "A world where no musician is held back";
const line2 = "from fully Embracing their music.";

const wordVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <motion.span
      className="block"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
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
    </motion.span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden lg:h-[90vh]">
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
          <h1 className="max-w-4xl font-[var(--font-cormorant)] text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <AnimatedLine text={line1} delay={0.2} />
            <AnimatedLine text={line2} delay={0.2 + line1.split(" ").length * 0.08} />
          </h1>
        </div>
      </div>
    </section>
  );
}
