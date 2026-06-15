"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { src: "/terra_nova_violins_logo.jpg", alt: "Terra Nova Violins" },
  { src: "/westbank_string_shop_logo.jpg", alt: "Westbank String Shop" },
  { src: "/texas_violin_shop_logo.png", alt: "Texas Violin Shop" },
  { src: "/lisle_violin_shop_logo.avif", alt: "Lisle Violin Shop" },
  { src: "/sams_strings_logo.png", alt: "Sam's Strings" },
];

function LogoList({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : "Shop partner logos"}
    >
      {partners.map((partner) => (
        <li key={partner.src} className="list-none">
          <div className="flex h-16 w-[11rem] items-center justify-center rounded-lg border border-[#ba9e78]/30 bg-white px-3 shadow-sm sm:h-20 sm:w-52">
            <Image
              src={partner.src}
              alt={ariaHidden ? "" : partner.alt}
              width={280}
              height={100}
              className="max-h-12 w-auto max-w-[10.25rem] object-contain object-center sm:max-h-14 sm:max-w-[11.5rem]"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ShopPartners() {
  return (
    <section id="shop-partners" className="border-t border-[#ba9e78]/25 bg-[#f2f2f3]/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-4 pb-2 pt-12 text-center sm:px-6 sm:pb-4 sm:pt-16"
      >
        <h2 className="text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
          Shop Partners
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
          Try an Embrace Strings chinrest in person at one of our partner shops.
        </p>
      </motion.div>

      <div className="relative overflow-hidden border-y border-[#ba9e78]/20 bg-[#f2f2f3] py-8 sm:py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f2f2f3] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f2f2f3] to-transparent sm:w-20" />
        <div className="overflow-hidden">
          <div className="shop-marquee-inner">
            <LogoList />
            <LogoList ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
