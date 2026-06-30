"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import YourEmbrace from "./YourEmbrace";
import EmbeddedCheckoutButton from "@/app/components/checkout/EmbeddedCheckout";

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductPageProps = {
  name: string;
  identity: string;
  opener: string;
  descriptionRest: string;
  whoItsFor: string;
  specHeight: string;
  specMaterial: string;
  specInstruments: string;
  features: ProductFeature[];
  stripeProductId?: string;
};

export default function ProductPage({
  name,
  identity,
  opener,
  descriptionRest,
  whoItsFor,
  specHeight,
  specMaterial,
  specInstruments,
  features,
  stripeProductId,
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
      <section className="bg-[#f2f2f3] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">

          {/* Part 1 — Opener */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-[var(--font-cormorant)] text-2xl font-medium leading-snug tracking-[0.01em] text-[#16335b] sm:text-3xl"
          >
            {opener}
          </motion.p>

          {/* Part 2 — Remaining description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-8 text-sm font-light leading-relaxed text-[#16335b]/65 sm:text-base"
          >
            {descriptionRest}
          </motion.p>

          {/* Part 3 — Who it's for callout */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-10 rounded-r-xl border-l-4 border-[#ba9e78] bg-[#f2f2f3]/80 px-5 py-4 text-left shadow-sm"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ba9e78]">
              Who it&rsquo;s for
            </p>
            <p className="mt-1.5 text-sm font-light leading-relaxed text-[#16335b] sm:text-base">
              {whoItsFor}
            </p>
          </motion.div>

          {/* Part 4 — Spec grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.12 }}
            className="mt-10 grid grid-cols-3 divide-x divide-[#ba9e78]/25"
          >
            {[
              { label: "Height Range", value: specHeight },
              { label: "Material", value: specMaterial },
              { label: "Instruments", value: specInstruments },
            ].map((spec) => (
              <motion.div
                key={spec.label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="px-3 py-1 text-center first:pl-0 last:pr-0"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#16335b]/40 sm:text-[10px]">
                  {spec.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-[#16335b] sm:text-base">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Part 5 — Trial + Purchase buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
          >
            <Link
              href="/testing"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] sm:w-auto"
              style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
            >
              Start a 14-Day Trial
            </Link>
            {stripeProductId && (
              <EmbeddedCheckoutButton
                productId={stripeProductId}
                buttonLabel="Purchase — $99"
              />
            )}
          </motion.div>

        </div>
      </section>

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

      {/* ── Your Embrace ─────────────────────────────────────── */}
      <YourEmbrace />

    </>
  );
}
