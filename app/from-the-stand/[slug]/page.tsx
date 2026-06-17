import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const posts: Record<
  string,
  { category: string; title: string; date: string; excerpt: string; body: string }
> = {
  "finding-your-fit": {
    category: "Setup",
    title: "Finding Your Fit",
    date: "June 2026",
    excerpt:
      "Your chinrest should disappear into your playing — not something you think about, just something that works.",
    body: `Your chinrest should disappear into your playing. Not something you think about, not something you adjust mid-rehearsal — just something that works.

Finding that fit takes a little patience, but the path is simpler than most players expect.

Start with height. If your shoulder rest puts your shoulder pad somewhere near your collarbone, you want a chinrest that closes the remaining gap without forcing your head to drop or your neck to cramp. The Embrace Strings Original sits at 0.9″ to 1.5″ — a range wide enough to cover most players without extra hardware.

Next, think about position. Where does your jaw naturally land when you play? Most players end up somewhere between the center of the instrument and the tailpiece. Our Bean model opens that space significantly, which can be a revelation for players with wider jaw placement.

Finally, listen to what your body is telling you. Tension in the back of your neck usually means your chinrest is too low. Pressure on your collarbone usually means it's too high or too far to the left. Neither of those is a you problem — it's a setup problem. And setup is adjustable.

That's the whole point.`,
  },
  "why-your-setup-changes-every-day": {
    category: "Performance",
    title: "Why Your Setup Changes Every Day",
    date: "May 2026",
    excerpt:
      "A cold rehearsal hall, a long drive, a rough night of sleep — your body is never the same twice.",
    body: `A cold rehearsal hall, a long drive, a rough night of sleep — your body is never the same twice. Your instrument setup shouldn't pretend otherwise.

This is something players figure out eventually, usually after years of unexplained discomfort. The setup that worked perfectly in last night's quartet feels off today. You've changed nothing. But you have — you just can't see it.

Muscle tension is dynamic. Posture shifts with stress, with weather, with how much you've been sitting. A chinrest set for a relaxed Thursday evening can feel like a vice on a tense Friday morning before a performance.

Adjustable hardware matters for this reason. Not because you'll be turning a hex key every day — most players find a range and stay in it. But when something feels wrong, having the option to make a small, tool-free adjustment in the moment is the difference between a productive rehearsal and a miserable one.

The Embrace Strings chinrest was designed with this reality in mind. Not adjustable as a feature. Adjustable because your body is.`,
  },
  "why-we-started-embrace-strings": {
    category: "Founders",
    title: "Why We Started Embrace Strings",
    date: "April 2026",
    excerpt:
      `I'm 6'5". Holding a violin was always a negotiation. After a neck injury in college, I decided there had to be a better way.`,
    body: `I'm 6'5". Holding a violin was always a negotiation.

Most violin hardware is designed for an average body that I've never had. Chinrests that sit too low, shoulder rests that don't quite reach — there's this constant background calculation that goes into playing when the instrument doesn't fit. I got used to it. Then in college, I stopped being able to ignore it.

A neck injury forced me to take a hard look at my setup. My teacher pointed me toward some adjustment options, and I started experimenting. What I found was that small changes made dramatic differences — but the tools to make those changes were clunky, required a luthier's hex key, and didn't stay put. For a working musician, that's not a real solution.

So I started designing one. The first version of the Embrace Strings chinrest was built for me, frankly. A platform that adjusts tool-free, stays locked under playing pressure, and fits a range of bodies rather than one idealized one.

Declan McPhillips joined as Director of Engineering and made it manufacturable. We ran fittings, collected feedback, iterated through more versions than I can count. What you see now is the result of that process — but the reason it exists is simple. String players deserve an instrument that fits.

That's why we started Embrace Strings.

— Turner Rey, CEO`,
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return { title: `${post.title} | From the Stand | Embrace Strings` };
}

export default async function FromTheStandPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#f2f2f3]">
      <article className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">

        {/* Back */}
        <Link
          href="/from-the-stand"
          className="mb-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#16335b]/45 hover:text-[#ba9e78] transition-colors"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
          From the Stand
        </Link>

        {/* Header */}
        <p
          className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ba9e78]"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {post.category}
        </p>
        <h1
          className="text-5xl font-medium leading-tight tracking-[0.01em] text-[#16335b] sm:text-6xl"
          style={{ fontFamily: "var(--font-cormorant, serif)" }}
        >
          {post.title}
        </h1>
        <p
          className="mt-4 text-sm font-light text-[#16335b]/40"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {post.date}
        </p>

        <div className="my-8 h-px w-full bg-[#ba9e78]/25" />

        {/* Placeholder image */}
        <div className="mb-10 h-56 w-full rounded-xl bg-[#e8e4de] sm:h-72" />

        {/* Body */}
        <div
          className="space-y-6 text-base font-light leading-relaxed text-[#16335b]/80"
          style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
        >
          {post.body.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

      </article>
    </main>
  );
}
