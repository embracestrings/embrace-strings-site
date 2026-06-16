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
  identity: string;
  description: string;
  whoItsFor: string;
  specs: string;
  features: ProductFeature[];
};

export default function ProductPage({
  name,
  identity,
  description,
  whoItsFor,
  specs,
  features,
}: ProductPageProps) {
  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.03, 0.94]);
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative w-full">
        <div className="relative w-full min-h-[420px] overflow-hidden lg:min-h-[520px]">
          <Image
            src="/adjustable-violin-chinrest.JPG"
            alt={`Embrace Strings ${name} chinrest on a violin`}
            fill
            priority
            className="object-cover object-[50%_32%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/55" />

          <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6 lg:min-h-[520px]">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-[var(--font-cormorant)] text-5xl font-medium tracking-[0.02em] text-white sm:text-6xl lg:text-7xl"
            >
              {name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mt-3 font-[var(--font-cormorant)] text-xl italic tracking-[0.08em] text-[#ba9e78] sm:text-2xl"
            >
              {identity}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Description ──────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-[#f2f2f3] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-base font-light leading-relaxed text-[#16335b]/85 sm:text-lg">
            {description}
          </p>
          <p className="mt-6 text-base italic text-[#16335b]/70 sm:text-lg">
            {whoItsFor}
          </p>
          <p className="mt-4 text-xs tracking-[0.08em] text-[#16335b]/50 sm:text-sm">
            {specs}
          </p>
        </div>
      </motion.section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section
        ref={featuresRef}
        className="border-y border-[#ba9e78]/25 bg-[#f2f2f3]"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-16">
          {/* Image — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:sticky md:top-32 md:self-start"
          >
            <motion.div
              style={{ rotate, scale, y: imgY }}
              className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-[#ba9e78]/30 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
            >
              <Image
                src="/adjustable-violin-chinrest.JPG"
                alt={`Embrace Strings ${name} chinrest, detail view`}
                fill
                className="object-cover object-[50%_32%]"
              />
            </motion.div>
          </motion.div>

          {/* Feature callouts — slide in from right */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-10"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              >
                <h3 className="font-[var(--font-cormorant)] text-2xl font-medium tracking-[0.02em] text-[#16335b]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
                  {feature.body}
                </p>
                {i < features.length - 1 && (
                  <div className="mt-8 h-px w-full bg-[#ba9e78]/25" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-t border-[#ba9e78]/25 bg-[#f2f2f3]"
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
