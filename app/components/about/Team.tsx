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
            className="group overflow-hidden rounded-xl border border-[#ba9e78]/35 bg-white shadow-[0_16px_40px_rgba(22,51,91,0.08)] transition hover:shadow-md"
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
              </div>
              <div className="border-t border-[#ba9e78]/35 bg-[#16335b] px-4 py-4 text-center">
                <h3 className="text-xl font-medium leading-snug text-[#ba9e78]">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ba9e78]">{member.role}</p>
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
