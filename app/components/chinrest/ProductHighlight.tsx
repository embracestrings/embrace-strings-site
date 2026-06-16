"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const models = [
  { name: "Original", href: "/chinrest/original" },
  { name: "Bean", href: "/chinrest/bean" },
  { name: "Morawetz", href: "/chinrest/morawetz" },
  { name: "Tall", href: "/chinrest/tall" },
];

export default function ProductHighlight() {
  return (
    <section id="product-highlight" className="border-y border-[#ba9e78]/30 bg-[#f2f2f3]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
            Our Chinrests
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:gap-x-12">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              <Link
                href={model.href}
                className="group block overflow-hidden rounded-2xl border border-[#ba9e78]/35 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)] transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f2f3]"
                aria-label={`View ${model.name} chinrest`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/adjustable-violin-chinrest.JPG"
                    alt={`Embrace Strings ${model.name} chinrest`}
                    fill
                    className="object-cover object-[50%_32%] transition-transform duration-500 ease-out group-hover:scale-[1.08] group-focus-visible:scale-[1.08]"
                  />
                </div>
                <div className="border-t border-[#ba9e78]/35 px-5 py-5 sm:px-6 sm:py-6">
                  <h3 className="text-xl font-medium tracking-[0.02em] text-[#16335b] sm:text-2xl">
                    {model.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
