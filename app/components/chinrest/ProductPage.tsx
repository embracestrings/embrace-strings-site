"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductPageProps = {
  name: string;
  tagline: string;
  intro: string;
  features: ProductFeature[];
};

export default function ProductPage({ name, tagline, intro, features }: ProductPageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full">
        <div className="relative mt-4 w-full min-h-[380px] overflow-hidden lg:min-h-[480px]">
          <Image
            src="/adjustable-violin-chinrest.JPG"
            alt={`Embrace Strings ${name} chinrest on a violin`}
            fill
            priority
            className="object-cover object-[50%_32%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/50" />

          <div className="relative mx-auto flex min-h-[380px] max-w-6xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6 lg:min-h-[480px]">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-medium tracking-[0.02em] text-white sm:text-5xl lg:text-6xl"
            >
              {name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="mt-4 max-w-xl text-sm font-light text-white/90 sm:text-base"
            >
              {tagline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-16"
      >
        <p className="text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
          {intro}
        </p>
      </motion.section>

      {/* Interactive scroll feature section */}
      <section
        ref={scrollRef}
        className="relative border-y border-[#ba9e78]/25 bg-[#f2f2f3]/40"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:items-center md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <motion.div
              style={{ rotate, scale, y }}
              className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-[#ba9e78]/30 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
            >
              <Image
                src="/adjustable-violin-chinrest.JPG"
                alt={`Embrace Strings ${name} chinrest, detail view`}
                fill
                className="object-cover object-[50%_32%]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              >
                <h3 className="text-2xl font-medium tracking-[0.02em] text-[#16335b]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
                  {feature.body}
                </p>
                <div className="mt-6 h-px w-full bg-[#ba9e78]/25" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-t border-[#ba9e78]/25 bg-white/60"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-12 text-center sm:flex-row sm:justify-center sm:gap-6 sm:px-6 sm:py-14">
          <Link
            href="/testing"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b] sm:w-auto"
          >
            Start a 14-Day Trial
          </Link>
          <Link
            href="/chinrest"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b] sm:w-auto"
          >
            Compare All Chinrests
          </Link>
        </div>
      </motion.section>
    </>
  );
}
