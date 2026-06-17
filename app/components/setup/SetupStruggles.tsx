"use client";

import { motion } from "framer-motion";

export default function SetupStruggles() {
  return (
    <section id="setup-struggles" className="bg-[#f2f2f3] px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#ba9e78]/25 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
      >
        {/* Header */}
        <div className="px-8 pb-8 pt-12 text-center sm:px-12 sm:pt-16">
          <p
            className="text-xs font-medium uppercase tracking-[0.28em] text-[#ba9e78]"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Free Consultation
          </p>
          <h2 className="mt-3 font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#16335b] sm:text-5xl">
            Setup Struggles?
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#16335b]/65 sm:text-base"
            style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
          >
            Book a free 15-minute video consultation with Turner. We&apos;ll look at your setup together and find a path toward pain-free playing.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-[#ba9e78]/40" />
        </div>

        {/* Calendar embed */}
        <div className="px-4 pb-10 sm:px-8 sm:pb-12">
          <div className="overflow-hidden rounded-xl border border-[#ba9e78]/20">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0DZMmGgpFNXI0-vM9ALQWFzu9WHFqN9mbt0CfHGlA0Ryd0h4Wa6gnGl9bm22-rdNJpWu4Emfvb?gv=true"
              className="block h-[clamp(26rem,72vh,37.5rem)] w-full border-0 sm:h-[600px]"
              width="100%"
              height="600"
              title="Book a free video consultation with Embrace Strings"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
