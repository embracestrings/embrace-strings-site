"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyB8RtLNtgxdHRmOgyHSpjGOgVceIKH_iNr5KAZlaCE4tu2VtN_ZCi-qPGUAupOmEPz/exec";

export default function StayConnected() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitted) return;
    setSubmitted(true);
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }).toString(),
      });
    } catch {
      /* form already shows confirmation */
    }
  }

  return (
    <section id="stay-connected" className="border-t border-[#ba9e78]/25 bg-[#f2f2f3] py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6"
      >
        <h2 className="text-3xl font-medium tracking-[0.02em] text-[#16335b] sm:text-4xl">
          Stay Connected
        </h2>
        <p className="mt-6 text-sm font-light leading-relaxed text-[#16335b] sm:text-base">
          Be the first to hear about new products, thoughtful improvements, and resources to support comfort, setup, and ease in your playing.
        </p>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b] sm:text-base">
          We only send emails when we have something meaningful to share—no spam, ever.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-4"
        >
          <label className="sr-only" htmlFor="stay-connected-email">
            Email Address
          </label>
          <input
            id="stay-connected-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
            className="w-full rounded-md border border-[#16335b]/20 bg-white px-4 py-3.5 text-sm text-[#16335b] shadow-sm placeholder:text-[#16335b]/40 focus:border-[#16335b]/50 focus:outline-none focus:ring-2 focus:ring-[#ba9e78]/50 disabled:cursor-default disabled:text-[#16335b]/45 disabled:bg-[#f2f2f3]/90 disabled:border-[#16335b]/12"
          />
          <button
            type="submit"
            disabled={submitted}
            className="hover-navy mx-auto min-h-12 w-full max-w-[200px] whitespace-nowrap rounded-lg bg-[#16335b] px-6 py-3 font-medium tracking-[0.12em] text-[#f2f2f3] transition hover:bg-[#ba9e78] disabled:cursor-default disabled:opacity-100 disabled:bg-[#16335b] disabled:text-[#f2f2f3] sm:w-[200px]"
          >
            {submitted ? "Thanks for joining!" : "Join Now!"}
          </button>
          {submitted && (
            <p className="mt-3 text-center text-sm font-light text-[#16335b]/75">
              In the meantime,{" "}
              <a
                href="/about"
                className="font-medium text-[#16335b] underline decoration-[#ba9e78]/50 underline-offset-2"
              >
                learn more about us
              </a>
              .
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
