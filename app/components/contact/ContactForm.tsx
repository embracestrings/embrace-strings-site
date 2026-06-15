"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbznGsgGbM-uqVVmEwGLbzWOFaCxoLjdf0IR24hPEjleZrtfk5C6ft8TU9kORZWEhU8/exec";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    setStatus("sending");
    try {
      await fetch(CONTACT_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setStatus("sent");
    } catch {
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl border border-[#ba9e78]/30 bg-white/50 px-6 py-10 text-center sm:px-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-2xl font-medium text-[#16335b]">Thank you!</p>
        <p className="mt-4 text-sm font-light leading-relaxed text-[#16335b]/85 sm:text-base">
          We&apos;ve received your message and will get back to you soon.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "mt-2 w-full border-0 border-b border-[#16335b]/32 bg-transparent py-2 text-[15px] leading-relaxed text-[#16335b] placeholder:text-[#16335b]/42 focus:border-b-[#ba9e78] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
        <div>
          <label htmlFor="contact-firstName" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#16335b]/75">
            First Name
          </label>
          <input id="contact-firstName" name="firstName" type="text" required autoComplete="given-name" placeholder="Required" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-lastName" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#16335b]/75">
            Last Name
          </label>
          <input id="contact-lastName" name="lastName" type="text" required autoComplete="family-name" placeholder="Required" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#16335b]/75">
          Email
        </label>
        <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-[0.14em] text-[#16335b]/75">
          Message
        </label>
        <textarea id="contact-message" name="message" rows={6} required placeholder="How can we help?" className={`${inputClass} resize-y`} />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[2.75rem] min-w-[6.5rem] items-center justify-center rounded-md border border-[#16335b] bg-[#16335b] px-8 py-3 text-sm font-semibold tracking-[0.12em] text-white transition hover:border-[#ba9e78] hover:bg-[#ba9e78] hover:text-[#16335b] disabled:cursor-wait disabled:opacity-85"
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
