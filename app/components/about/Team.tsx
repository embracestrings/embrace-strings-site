"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Turner Rey",
    role: "CEO",
    image: "/turner-embrac-founder-headshot.jpg",
    href: "https://www.linkedin.com/in/turnerrey/",
  },
  {
    name: "Declan McPhillips",
    role: "Director of Engineering",
    image: "/declan-embrace-strings-engineer.jpg",
    href: "https://www.linkedin.com/in/declan-mcphillips-772671327/",
  },
  {
    name: "Akemi Nunez",
    role: "Marketing Intern",
    image: "/akemi-headshot.jpg",
    href: "https://www.linkedin.com/in/akeminunez/",
  },
  {
    name: "Brooke Eppley",
    role: "Marketing Intern",
    image: "/brooke-headshot.jpg",
    href: "https://www.linkedin.com/in/brooke-eppley/",
  },
];

export default function Team() {
  return (
    <section id="about-team" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-4xl font-medium"
      >
        Our Team
      </motion.h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, i) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-xl border border-[#ba9e78]/35 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(22,51,91,0.18)]"
          >
            <a
              href={member.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f2f3]"
              aria-label={`${member.name}, ${member.role} — LinkedIn profile`}
            >
              <div className="relative aspect-[4/5] w-full max-h-[22rem] overflow-hidden sm:aspect-auto sm:h-64 sm:max-h-none">
                <Image
                  src={member.image}
                  alt=""
                  fill
                  className="object-cover object-[50%_28%] transition-transform duration-500 ease-out group-hover:scale-[1.08] sm:object-[50%_32%] lg:object-[50%_40%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16335b]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-3 top-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-[#f2f2f3] text-[#16335b] opacity-0 shadow-[0_8px_20px_rgba(22,51,91,0.25)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </div>
              <div className="border-t border-[#ba9e78]/35 bg-[#16335b] px-4 py-4 text-center transition-colors duration-300 group-hover:bg-[#1c3e6e]">
                <h3 className="text-xl font-medium leading-snug text-white transition-colors duration-300 group-hover:text-[#ba9e78]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ba9e78]">{member.role}</p>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
