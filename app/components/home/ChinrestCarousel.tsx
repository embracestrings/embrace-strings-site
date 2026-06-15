"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const slides = [
  { name: "Original", href: "/chinrest/original" },
  { name: "Bean", href: "/chinrest/bean" },
  { name: "Morawetz", href: "/chinrest/morawetz" },
  { name: "Tall", href: "/chinrest/tall" },
];

export default function ChinrestCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function goTo(i: number) {
    const total = slides.length;
    const next = ((i % total) + total) % total;
    setIndex(next);
    const el = carouselRef.current;
    if (el) {
      const width = el.clientWidth;
      el.scrollTo({ left: next * width, behavior: "smooth" });
    }
  }

  return (
    <section
      id="our-chinrests"
      className="border-t border-[#ba9e78]/25 bg-[#f2f2f3]/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto mt-10 max-w-2xl md:max-w-5xl"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous chinrest"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ba9e78]/50 bg-white/80 text-[#16335b] shadow-sm transition hover:border-[#ba9e78] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f2f3]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <div
              ref={carouselRef}
              className="flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto scroll-smooth touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="region"
              aria-roledescription="carousel"
              aria-label="Our chinrest models"
            >
              {slides.map((slide, i) => (
                <article
                  key={slide.name}
                  className="shrink-0 basis-full snap-center snap-always px-1 sm:px-0"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}`}
                >
                  <div className="grid gap-8 rounded-2xl border border-[#ba9e78]/30 bg-white/70 p-6 shadow-[0_16px_40px_rgba(22,51,91,0.08)] sm:p-8 md:grid-cols-2 md:items-center md:gap-10">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-medium tracking-[0.02em] text-[#16335b] sm:text-3xl">
                        {slide.name}
                      </h3>
                      <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/75 sm:text-base">
                        Product description and specifications will appear here.
                      </p>
                      <Link
                        href={slide.href}
                        className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#16335b] px-6 py-3 text-center font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] hover:text-[#16335b] sm:w-auto sm:self-start"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="group min-w-0 overflow-hidden rounded-xl border border-[#ba9e78]/25 shadow-[0_16px_40px_rgba(22,51,91,0.08)]">
                      <Image
                        src="/adjustable-violin-chinrest.JPG"
                        alt={`Embrace Strings ${slide.name} chinrest on a violin, side view`}
                        width={900}
                        height={675}
                        className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next chinrest"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ba9e78]/50 bg-white/80 text-[#16335b] shadow-sm transition hover:border-[#ba9e78] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f2f3]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Chinrest slides">
            {slides.map((slide, i) => (
              <button
                key={slide.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${slide.name} slide`}
                aria-current={i === index}
                className={`h-2.5 w-2.5 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78] focus-visible:ring-offset-2 ${
                  i === index ? "bg-[#16335b]" : "bg-[#ba9e78]/45 hover:bg-[#ba9e78]/70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
