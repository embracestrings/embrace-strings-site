"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const shops = [
  {
    name: "Terra Nova Violins",
    address: "6983 Blanco Road, San Antonio, TX 78216",
    phone: "(210) 349-4700",
  },
  {
    name: "Terra Nova Violins",
    address: "7795 Burnet Road, Austin, TX 78757",
    phone: "(512) 640-4072",
  },
  {
    name: "Westbank Violin Shop",
    address: "6301 Menchaca Rd, Austin, TX 78745",
    phone: null,
  },
];

const MAP_QUERY =
  "Terra+Nova+Violins+San+Antonio+OR+Terra+Nova+Violins+Austin+OR+Westbank+Violin+Shop+Austin";

export default function ShopMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
  const mapSrc = `https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${MAP_QUERY}&zoom=8`;

  return (
    <section className="border-t border-[#ba9e78]/25 bg-[#f2f2f3] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-[var(--font-cormorant)] text-4xl font-medium tracking-[0.02em] text-[#16335b] sm:text-5xl">
            Find Us In Person
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#16335b]/65 sm:text-base">
            Want to try an Embrace Strings chinrest before you buy? Visit one of our partner shops.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-10 w-full overflow-hidden rounded-2xl border border-[#ba9e78]/30 shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
        >
          {apiKey ? (
            <iframe
              title="Embrace Strings partner shop locations"
              src={mapSrc}
              width="100%"
              height="450"
              className="block border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-[450px] w-full items-center justify-center bg-[#e5e5e7] text-sm text-[#16335b]/40">
              Map unavailable — add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment.
            </div>
          )}
        </motion.div>

        {/* Shop cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-8 grid gap-5 sm:grid-cols-3"
        >
          {shops.map((shop) => (
            <motion.div
              key={shop.address}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="rounded-xl border border-[#ba9e78]/30 bg-white px-5 py-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-[#16335b]">{shop.name}</p>
              <p className="mt-1.5 text-xs font-light leading-relaxed text-[#16335b]/60">
                {shop.address}
              </p>
              {shop.phone && (
                <p className="mt-1.5 text-xs text-[#16335b]/60">{shop.phone}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-8 text-center text-sm font-light text-[#16335b]/50"
        >
          Are you a shop owner interested in carrying Embrace Strings?{" "}
          <Link
            href="/contact"
            className="font-medium text-[#ba9e78] underline-offset-2 hover:underline"
          >
            Get in touch
          </Link>
        </motion.p>

      </div>
    </section>
  );
}
