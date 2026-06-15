"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="about-story" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-4xl font-medium sm:text-5xl"
      >
        Our Story
      </motion.h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 text-sm leading-relaxed text-[#16335b]/85 sm:text-base"
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
          <p className="font-medium text-[#16335b]">— Turner Rey, Founder & CEO</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-xl border border-[#ba9e78]/35 shadow-[0_16px_40px_rgba(22,51,91,0.08)]"
        >
          <Image
            src="/turner-chinrest-about-embrace.jpg"
            alt="Turner with violin and Embrace Strings chinrest"
            width={1200}
            height={900}
            className="h-[280px] w-full object-cover object-center sm:h-[360px] lg:h-[420px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
