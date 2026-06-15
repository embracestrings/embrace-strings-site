import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Embrace Strings | Free Fittings, Wholesale, and Support",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="text-4xl font-medium text-[#16335b] sm:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base">
            Send us a note—we read every message and will get back to you as soon as we can.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>

          <ContactInfo />
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#ba9e78]/35 shadow-[0_16px_40px_rgba(22,51,91,0.08)] lg:sticky lg:top-24">
          <Image
            src="/violin-chinrest-contact.jpg"
            alt="Violin with Embrace Strings adjustable chinrest"
            width={1200}
            height={1400}
            className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[640px]"
          />
        </div>
      </div>
    </section>
  );
}
