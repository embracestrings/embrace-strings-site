export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1
        className="text-5xl md:text-7xl font-medium text-[#1a2744] mb-4"
        style={{ fontFamily: "var(--font-cormorant, serif)" }}
      >
        Embrace Strings
      </h1>
      <p className="tracking-widest uppercase text-sm text-[#ba9e78] mb-8">
        Musician Ergonomics
      </p>
      <p className="max-w-xl text-[#3d4f6b] leading-relaxed">
        Tool-free adjustable chinrests for violinists and violists — designed
        for comfort, fit, and uncompromised sound.
      </p>
    </section>
  );
}
