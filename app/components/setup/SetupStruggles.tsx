"use client";

import { motion } from "framer-motion";

export default function SetupStruggles() {
  return (
    <div id="setup-struggles" className="mt-12 border-t border-[#ba9e78]/25 pt-12 sm:mt-16 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-1 text-center sm:px-0"
      >
        <h2 className="text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">Setup Struggles?</h2>
        <p className="mt-5 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
          At Embrace Strings, we believe comfort is personal. That&apos;s why we offer{" "}
          <strong className="font-semibold text-[#16335b]">free video consultations</strong> to the string community. From jaw alignment to shoulder tension, let&apos;s take 15 minutes to look at your setup together and find a path toward pain-free playing.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="mx-auto mt-8 w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-[#ba9e78]/25 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)] sm:mt-10 sm:max-w-4xl sm:rounded-2xl"
      >
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0DZMmGgpFNXI0-vM9ALQWFzu9WHFqN9mbt0CfHGlA0Ryd0h4Wa6gnGl9bm22-rdNJpWu4Emfvb?gv=true"
          className="block h-[clamp(26rem,72vh,37.5rem)] w-full max-w-full border-0 sm:h-[600px]"
          width="100%"
          height="600"
          title="Book a free video consultation with Embrace Strings"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  );
}
