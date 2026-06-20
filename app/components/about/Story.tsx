"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="about-story">
      <div className="bg-[#eceae6] py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">

          {/* Left: all paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-5 text-sm font-light leading-relaxed text-[#16335b]/80 sm:text-base"
          >
            <p>
              For a long time, I thought discomfort was just part of playing. At six foot five, I never felt like
              standard setups were built for my body, and I spent years trying different chinrests, shoulder rests,
              and posture adjustments that never fully solved the problem. Some changes helped a little, but nothing
              ever felt quite right.
            </p>
            <p>
              Over time, mild neck and back pain became normal. I stopped expecting comfort and assumed that was
              simply the tradeoff for playing seriously.
            </p>
            <p>
              That belief changed during my freshman year of college while preparing for orchestra auditions. I was
              practicing three to four hours a day with a setup that wasn&apos;t working for my body, and eventually
              the tension caught up with me. I lost mobility in my neck and upper back for months, and playing began
              to feel physically limiting in a way it never should.
            </p>
            <p>
              As I worked through that experience, I realized I wasn&apos;t alone. Fixed chinrests forced compromise,
              and even adjustable ones required tools and interruption, making real-time adjustment impractical
              during rehearsals, lessons, and performances. Comfort existed in theory, but rarely when it was actually
              needed.
            </p>
            <p>
              Embrace Strings grew out of the belief that musicians deserve equipment that adapts to their needs every
              day. When a setup can respond to the body in real time, tension fades, posture improves, and musicians
              are free to focus on expression rather than discomfort. My goal is to continue helping musicians play
              naturally, fully enjoying the music they create, and feeling supported every step of the way—so they can
              fully Embrace the way they play.
            </p>
            <p className="font-[var(--font-cormorant)] text-lg italic tracking-[0.04em] text-[#ba9e78] sm:text-xl">
              — Turner Rey, Founder &amp; CEO
            </p>
          </motion.div>

          {/* Right: photo + placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden rounded-2xl border border-[#ba9e78]/30 shadow-[0_16px_40px_rgba(22,51,91,0.08)]">
              <Image
                src="/turner-chinrest-about-embrace.jpg"
                alt="Turner Rey with violin and Embrace Strings chinrest"
                width={1200}
                height={900}
                className="h-auto w-full object-cover object-center"
              />
            </div>
            <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#ba9e78]/30 bg-[#d4bc99]/20 shadow-[0_16px_40px_rgba(22,51,91,0.08)]">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#ba9e78]/60">
                Photo coming soon
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
