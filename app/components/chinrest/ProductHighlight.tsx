"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const models = [
  {
    name: "Original",
    identity: "Classic",
    href: "/chinrest/original",
    image: "/adjustable-violin-chinrest.JPG",
    imagePos: "object-[50%_32%]",
  },
  {
    name: "Bean",
    identity: "Open",
    href: "/chinrest/bean",
    image: "/adjustable-violin-chinrest.JPG",
    imagePos: "object-[50%_32%]",
  },
  {
    name: "Morawetz",
    identity: "Exact",
    href: "/chinrest/morawetz",
    image: "/adjustable-violin-chinrest.JPG",
    imagePos: "object-[50%_32%]",
  },
  {
    name: "Tall",
    identity: "Necessary",
    href: "/chinrest/tall",
    image: "/adjustable-violin-chinrest.JPG",
    imagePos: "object-[50%_32%]",
  },
];

export default function ProductHighlight() {

  return (
    <>
      <section id="product-highlight" className="border-y border-[#ba9e78]/30 bg-[#f2f2f3]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-[var(--font-cormorant)] text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
              Our Chinrests
            </h2>
          </motion.div>

          {/* 2×2 card grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10"
          >
            {models.map((model) => (
              <motion.div
                key={model.name}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Card */}
                <Link
                  href={model.href}
                  className="group block overflow-hidden rounded-2xl border border-[#ba9e78]/35 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(22,51,91,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f2f3]"
                  aria-label={`View ${model.name} chinrest`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={model.image}
                      alt={`Embrace Strings ${model.name} chinrest`}
                      fill
                      className={`object-cover ${model.imagePos} transition-transform duration-500 ease-out group-hover:scale-[1.08] group-focus-visible:scale-[1.08]`}
                    />
                  </div>
                  <div className="border-t border-[#ba9e78]/25 px-5 py-5 sm:px-6 sm:py-5">
                    <h3 className="font-[var(--font-cormorant)] text-2xl font-medium tracking-[0.02em] text-[#16335b]">
                      {model.name}
                    </h3>
                    <p className="mt-0.5 font-[var(--font-cormorant)] text-base italic tracking-[0.06em] text-[#ba9e78]">
                      {model.identity}
                    </p>
                  </div>
                </Link>

                {/* Sub-buttons */}
                <div className="mt-3 flex gap-3">
                  <Link
                    href={model.href}
                    className="flex-1 rounded-lg bg-[#16335b] px-4 py-2 text-center text-xs font-medium tracking-[0.1em] text-[#f2f2f3] transition hover:bg-[#1c3e6e]"
                  >
                    Standard
                  </Link>
                  <Link
                    href={`${model.href}#your-embrace`}
                    className="flex-1 rounded-lg border border-[#16335b]/30 bg-transparent px-4 py-2 text-center text-xs font-medium tracking-[0.1em] text-[#16335b] transition-[color,border-color] duration-200 hover:border-[#ba9e78] hover:text-[#ba9e78]"
                  >
                    Custom
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  );
}
