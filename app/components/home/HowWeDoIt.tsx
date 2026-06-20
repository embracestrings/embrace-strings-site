"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    label: "Chinrest",
    description: "Tool-free adjustment, built for every setup.",
    href: "/chinrest",
    image: "/adjustable-violin-chinrest.JPG",
    imagePosition: "object-[50%_32%]",
  },
  {
    label: "Setup",
    description: "Your fit, dialed in step by step.",
    href: "/setup",
    image: "/violin-chinrest-contact.jpg",
    imagePosition: "object-center",
  },
  {
    label: "About",
    description: "The story behind Embrace Strings.",
    href: "/about",
    image: "/turner-chinrest-about-embrace.jpg",
    imagePosition: "object-center",
  },
];

export default function HowWeDoIt() {
  return (
    <section className="bg-[#f2f2f3] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#16335b] sm:text-5xl"
        >
          How We Embrace.
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
              <Link
                href={card.href}
                className="group block overflow-hidden rounded-2xl border border-[#ba9e78]/25 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(22,51,91,0.18)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className={`object-cover ${card.imagePosition} transition-transform duration-500 ease-out group-hover:scale-[1.08]`}
                  />
                </div>
                <div className="px-6 py-6">
                  <h3 className="font-[var(--font-cormorant)] text-2xl font-medium tracking-[0.02em] text-[#16335b] transition-colors duration-300 group-hover:text-[#ba9e78]">
                    {card.label}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-[#16335b]/80">
                    {card.description}
                  </p>
                </div>
              </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
