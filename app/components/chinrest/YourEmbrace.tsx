"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    label: "Your Name",
    price: "+$125",
    description:
      "Your name, engraved on the front of your chinrest. Clean, elegant, and entirely yours.",
    leadTime: "2–4 week lead time for custom orders.",
  },
  {
    label: "Music Notes Design",
    price: "+$125",
    description:
      "A flowing music note pattern across the surface of your chinrest. Subtle, beautiful, and unmistakably musical.",
    leadTime: "2–4 week lead time for custom orders.",
  },
  {
    label: "Custom Design",
    price: "Contact us",
    description:
      "Have something specific in mind? We'll work with you to design it, draft it, and print it. Premium pricing, personal process.",
    leadTime: "Lead time varies — contact us to begin.",
  },
];

export default function YourEmbrace() {
  const [name, setName] = useState("");

  return (
    <section id="your-embrace" className="border-t border-[#ba9e78]/25 bg-[#f2f2f3] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#16335b] sm:text-5xl">
            Your Embrace
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#16335b]/65 sm:text-base">
            Every chinrest can be personalized. Yours should feel like it was made for you.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.div
              key={card.label}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
              }}
              className="flex flex-col rounded-2xl border border-[#16335b]/20 bg-[#f2f2f3] p-6 sm:p-7"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ba9e78]">
                {card.label}
              </p>
              <p className="mt-3 font-[var(--font-cormorant)] text-3xl font-medium text-[#16335b] sm:text-4xl">
                {card.price}
              </p>
              <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-[#16335b]/80">
                {card.description}
              </p>
              <p className="mt-5 text-xs text-[#16335b]/40">
                {card.leadTime}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Live engraving preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl border border-[#ba9e78]/30 bg-white"
        >
          <div className="grid gap-0 md:grid-cols-2">

            {/* Input side */}
            <div className="flex flex-col justify-center px-8 py-10 sm:px-10">
              <label
                htmlFor="engraving-preview"
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ba9e78]"
              >
                Preview your engraving
              </label>
              <input
                id="engraving-preview"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
                maxLength={30}
                className="mt-3 w-full rounded-lg border border-[#16335b]/20 bg-[#f2f2f3] px-4 py-3 text-sm text-[#16335b] placeholder:text-[#16335b]/30 focus:border-[#ba9e78]/60 focus:outline-none focus:ring-2 focus:ring-[#ba9e78]/30"
              />
              <p className="mt-4 text-xs font-light text-[#16335b]/40">
                This is an approximation of how your engraving will appear.
              </p>
            </div>

            {/* Preview side */}
            <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#f2f2f3]/60 md:min-h-[260px]">
              <div className="relative h-44 w-56 overflow-hidden rounded-2xl bg-[#d4bc99]/30 shadow-inner sm:h-52 sm:w-64">
                <Image
                  src="/adjustable-violin-chinrest.JPG"
                  alt="Chinrest engraving preview"
                  fill
                  className="object-cover object-[50%_40%] opacity-60"
                />
                {/* Engraved name overlay */}
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <span
                    className="text-center font-[var(--font-cormorant)] text-xl font-medium italic tracking-[0.12em] text-[#f2f2f3] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-all duration-150 sm:text-2xl"
                    aria-live="polite"
                    aria-label={name ? `Engraving preview: ${name}` : "Engraving preview"}
                  >
                    {name || (
                      <span className="text-[#f2f2f3]/40 text-base tracking-widest">
                        Your name here
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
        >
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b] sm:w-auto"
          >
            Inquire About Customization
          </Link>
          <Link
            href="/chinrest"
            className="inline-flex w-full items-center justify-center rounded-lg border border-[#16335b] px-8 py-3 font-medium tracking-[0.12em] text-[#16335b] transition hover:border-[#ba9e78] hover:text-[#ba9e78] sm:w-auto"
          >
            Compare All Chinrests
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
