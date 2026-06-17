"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const chinrestDropdown = [
  { label: "Chinrests", href: "/chinrest" },
  { label: "Setup", href: "/setup" },
  { label: "Testing", href: "/testing" },
];

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Chinrests", href: "/chinrest", dropdown: chinrestDropdown },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const rightLinks = [
  { label: "Notes", href: "/notes" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chinrestOpen, setChinrestOpen] = useState(false);
  const [chinrestHover, setChinrestHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setChinrestHover(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setChinrestOpen(false);
    setChinrestHover(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  function onDropdownEnter() {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setChinrestHover(true);
  }
  function onDropdownLeave() {
    hoverTimeout.current = setTimeout(() => setChinrestHover(false), 120);
  }

  const dropdownVisible = chinrestHover;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/55 backdrop-blur-sm" : "bg-white/45 backdrop-blur"
      }`}
    >
      <nav className="relative w-full">
        <div className="relative flex min-h-16 w-full items-center justify-between px-4 sm:px-6 md:min-h-20 lg:px-0 lg:py-2">

          {/* ── Left nav ──────────────────────────────────────────── */}
          <div className="relative z-10 flex min-h-0 min-w-0 flex-1 items-center gap-2 lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:z-20 lg:flex-none lg:max-w-[40%] lg:pl-4 xl:pl-6">
            {/* Mobile hamburger */}
            <button
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ba9e78]/40 bg-[#f2f2f3] text-[#16335b] transition hover:border-[#ba9e78]/70 lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>

            {/* Desktop left links */}
            <ul
              className="hidden min-w-0 flex-nowrap items-center justify-start gap-x-4 gap-y-1 font-display text-[14px] font-medium tracking-[0.12em] lg:flex xl:gap-x-6 xl:text-[16px]"
              style={{ fontFamily: "var(--font-cormorant, serif)" }}
              aria-label="Primary navigation"
            >
              {leftLinks.map((link) =>
                link.dropdown ? (
                  <li
                    key={link.href}
                    className="relative flex items-center gap-1"
                    ref={dropdownRef}
                    onMouseEnter={onDropdownEnter}
                    onMouseLeave={onDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`inline-block border-b-[3px] pb-0.5 transition-colors duration-200 ${
                        isActive(link.href)
                          ? "border-[#ba9e78] text-[#ba9e78]"
                          : "border-transparent text-[#16335b] hover:text-[#ba9e78]"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <span className={`text-[#16335b] transition-colors duration-200 ${dropdownVisible ? "text-[#ba9e78]" : ""}`}>
                      <svg
                        className={`h-3 w-3 transition-transform duration-200 ${dropdownVisible ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>

                    {/* Hover dropdown */}
                    <ul
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max list-none py-1.5 font-display text-[14px] font-medium tracking-[0.15em] bg-[#f2f2f3]/88 backdrop-blur-md border border-[#ba9e78]/35 rounded-lg shadow-[0_16px_40px_rgba(22,51,91,0.08)] transition-all duration-200 xl:text-[16px] ${
                        dropdownVisible
                          ? "opacity-100 visible pointer-events-auto"
                          : "opacity-0 invisible pointer-events-none"
                      }`}
                      style={{ fontFamily: "var(--font-cormorant, serif)" }}
                      onMouseEnter={onDropdownEnter}
                      onMouseLeave={onDropdownLeave}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block px-5 py-1.5 text-center whitespace-nowrap transition-colors duration-150 ${
                              pathname === item.href || (item.href !== "/chinrest" && pathname.startsWith(item.href))
                                ? "text-[#ba9e78]"
                                : "text-[#16335b] hover:text-[#ba9e78]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-block border-b-[3px] pb-0.5 transition-colors duration-200 ${
                        isActive(link.href)
                          ? "border-[#ba9e78] text-[#ba9e78]"
                          : "border-transparent text-[#16335b] hover:text-[#ba9e78]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ── Center: Logo ───────────────────────────────────────── */}
          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center lg:z-40">
            <Link
              href="/"
              className="pointer-events-auto inline-flex items-center gap-2 md:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ba9e78] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f2f3]"
              aria-label="Embrace Strings — home"
            >
              <Image
                src="/embrace-strings-brandmark.png"
                alt=""
                width={160}
                height={160}
                className="h-[3.2rem] w-auto shrink-0 object-contain md:h-[4rem]"
                priority
              />
              <span
                className="flex min-w-0 flex-col items-start gap-0.5 text-left font-medium leading-none text-[#16335b] translate-y-[0.23rem] md:translate-y-[0.28rem]"
                style={{ fontFamily: "var(--font-cormorant, serif)" }}
              >
                <span className="text-[16px] tracking-[0.12em] md:text-[20px]">EMBRACE</span>
                <span className="text-[16px] tracking-[0.12em] md:text-[20px]">STRINGS</span>
              </span>
            </Link>
          </div>

          {/* ── Right nav ──────────────────────────────────────────── */}
          <div className="relative z-10 flex min-h-0 min-w-0 flex-1 items-center justify-end gap-2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:flex-none lg:pr-4 xl:pr-6">
            {/* Mobile spacer */}
            <span className="inline-block h-10 w-10 shrink-0 lg:hidden" aria-hidden="true" />

            {/* Desktop right links */}
            <ul
              className="hidden flex-nowrap items-center gap-x-4 font-display text-[14px] font-medium tracking-[0.12em] lg:flex xl:gap-x-6 xl:text-[16px]"
              style={{ fontFamily: "var(--font-cormorant, serif)" }}
            >
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-block border-b-[3px] pb-0.5 transition-colors duration-200 ${
                      isActive(link.href)
                        ? "border-[#ba9e78] text-[#ba9e78]"
                        : "border-transparent text-[#16335b] hover:text-[#ba9e78]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Mobile menu ────────────────────────────────────────────── */}
        <div
          className={`absolute inset-x-0 top-full z-40 mt-2 px-4 pb-2 sm:px-6 lg:hidden transition-all duration-300 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="rounded-2xl border border-[#ba9e78]/25 bg-white p-4 shadow-[0_16px_40px_rgba(22,51,91,0.08)]">
            <ul
              className="space-y-3 text-center text-[15px] font-medium tracking-[0.15em]"
              style={{ fontFamily: "var(--font-cormorant, serif)" }}
            >
              {[...leftLinks, ...rightLinks].map((link) =>
                link.dropdown ? (
                  <li key={link.href}>
                    <button
                      onClick={() => setChinrestOpen((o) => !o)}
                      className="block w-full text-center rounded-sm py-1 text-[#16335b] hover:text-[#ba9e78] transition-colors"
                    >
                      {link.label}
                    </button>
                    <ul
                      className={`overflow-hidden transition-all duration-200 ${
                        chinrestOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block w-full text-center rounded-sm py-1 text-[#16335b]/75 hover:text-[#ba9e78] transition-colors text-[12px]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block w-full text-center rounded-sm py-1 transition-colors ${
                        isActive(link.href)
                          ? "text-[#ba9e78] underline decoration-[#ba9e78] decoration-[3px] underline-offset-[0.35rem] bg-[#ba9e78]/16"
                          : "text-[#16335b] hover:text-[#ba9e78]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Gold rule */}
      <div className="h-px w-full bg-[#ba9e78]/35" />
    </header>
  );
}
