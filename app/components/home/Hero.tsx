"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// "Embracing" is the anchor — assign stagger indices to all other words in reading order,
// then compute explicit delays so they animate around it.
// Reading order (excluding "Embracing"): A(0) world(1) where(2) no(3) musician(4) is(5)
// held(6) back(7) [br] from(8) fully(9) [Embracing — anchor] their(10) music.(11)

const STAGGER = 0.08;
const START = 0.15;

type Token = { word: string; delay: number } | null | "mobile-br"; // null = <br>, "mobile-br" = mobile-only <br>

const line1: Token[] = [
  { word: "A",          delay: START + 0 * STAGGER },
  { word: "world",      delay: START + 1 * STAGGER },
  { word: "where",      delay: START + 2 * STAGGER },
  { word: "no",         delay: START + 3 * STAGGER },
  { word: "musician",   delay: START + 4 * STAGGER },
  { word: "is",         delay: START + 5 * STAGGER },
  { word: "held",       delay: START + 6 * STAGGER },
  { word: "back",       delay: START + 7 * STAGGER },
];

const line2: Token[] = [
  { word: "from",       delay: START + 8  * STAGGER },
  { word: "fully",      delay: START + 9  * STAGGER },
  { word: "Embracing",  delay: 0 }, // anchor — animates immediately
  "mobile-br",
  { word: "their",      delay: START + 10 * STAGGER },
  { word: "music.",     delay: START + 11 * STAGGER },
];

const allTokens: Token[] = [...line1, null, ...line2];

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
          <h1 className="font-[var(--font-cormorant)] text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {allTokens.map((token, i) => {
              if (token === null) return <br key={`br-${i}`} />;
              if (token === "mobile-br") return <br key={`mbr-${i}`} className="sm:hidden" />;

              if (token.word === "Embracing") {
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: token.delay }}
                    className="mr-[0.3em] inline-block"
                  >
                    {token.word}
                  </motion.span>
                );
              }

              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: token.delay }}
                  className="mr-[0.3em] inline-block"
                >
                  {token.word}
                </motion.span>
              );
            })}
          </h1>
        </div>
      </div>
    </section>
  );
}
