import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden">  {/* Slightly shorter for better mobile */}
        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/hero.jpg"
          alt="flower design by jgnkelly"
          fill
          priority
          className="object-cover object-right"
        />

        {/* OVERLAY – keep your strong one for readability */}
        <div className="absolute inset-0 bg-background/70" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* TEXT COLUMN */}
              <div className="text-left max-w-xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-primary leading-tight">
                  A Delicate Thread Through Time
                </h1>

                <p className="text-lg md:text-xl text-secondary mb-6">
                  The world we live in is a mass of unknown wonders, sadly we have lost some knowledge from the past, it slips through our fingers unnoticed and we keep ploughing on ignorant of its loss.
                </p>

                <p className="text-lg md:text-xl text-secondary mb-6">
                  My brain feels pulled from past to present – here I try to hold onto the threads of the path and find how to weave them into a future rich with the best that humans have to offer.
                </p>

                <p className="text-lg md:text-xl text-secondary">With love from</p>
                <p className="text-lg md:text-xl text-secondary font-medium">Mirrie</p>

                {/* SMALLER BUTTONS – stacked on mobile, side-by-side on desktop */}
                <div className="mt-10 flex flex-col sm:flex-row gap-6">
                  <a
                    href="/blog?tag=untangling"
                    className="group bg-secondary text-surface px-8 py-4 rounded-xl border border-rose-gold/40 hover:border-rose-gold hover:bg-green-soft transition-all shadow-md hover:shadow-lg backdrop-blur-sm text-center font-medium"
                  >
                    Untangling Today
                  </a>

                  <a
                    href="/blog?tag=weaving"
                    className="group bg-secondary text-surface px-8 py-4 rounded-xl border border-rose-gold/40 hover:border-rose-gold hover:bg-green-soft transition-all shadow-md hover:shadow-lg backdrop-blur-sm text-center font-medium"
                  >
                    Weaving Tomorrow
                  </a>
                </div>
              </div>

              {/* SIDE IMAGE – keep if you love it, or remove for more breathing room */}
              <div className="relative h-[28rem] w-full overflow-hidden rounded-xl hidden md:block">
                <Image
                  src="/images/hero-detail.png"
                  alt="Silhouette at desk"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FEATURED THOUGHTS ================= */}
<section className="py-24 bg-cream-soft">
  <div className="max-w-6xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="mb-16 max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-green-strong mb-4">
        My Patchwork
      </h2>
      <p className="text-lg text-secondary">
        Some food for thought
      </p>
    </div>

    {/* TILE LAYOUT */}
    <div className="grid md:grid-cols-3 gap-10 items-stretch">

      {/* LEFT — TALL IMAGE */}
      <div className="relative md:col-span-1 rounded-2xl overflow-hidden min-h-[28rem]">
        <Image
          src="/images/flower-decoration.png"
          alt="A quiet visual thread"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* RIGHT — STACKED LINKS */}
      <div className="md:col-span-2 flex flex-col gap-8">

        {/* TILE 1 */}
        <article className="group bg-white p-8 rounded-2xl border border-accent hover:border-rose-gold transition shadow-sm hover:shadow-md">
          <h3 className="text-2xl font-semibold text-green-strong mb-3 group-hover:text-green-soft transition">
            We are All Under Construction
          </h3>
          <p className="text-secondary mb-4 max-w-xl">
            Understanding ourselves is a project that is often put on a backburner.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-green-soft font-medium hover:underline"
          >
            Read →
          </Link>
        </article>

        {/* TILE 2 */}
        <article className="group bg-white p-8 rounded-2xl border border-accent hover:border-rose-gold transition shadow-sm hover:shadow-md">
          <h3 className="text-2xl font-semibold text-green-strong mb-3 group-hover:text-green-soft transition">
            How AI Can Give You the Confidence of a Toddler
          </h3>
          <p className="text-secondary mb-4 max-w-xl">
            Watching kids and toddlers just bound through chaos can remind us of a freedom we have lost as adults.
          </p>
          <Link
            href="/ai-frees-the-brain"
            className="inline-flex items-center text-green-soft font-medium hover:underline"
          >
            Read →
          </Link>
        </article>

      </div>
    </div>

    {/* OPTIONAL FOOT LINK */}
    <div className="mt-16">
      <Link
        href="/blog"
        className="text-green-soft font-medium hover:underline"
      >
        View all threads →
      </Link>
    </div>

  </div>
</section>


      {/* ================= BELOW HERO ================= */}
<section className="py-20 bg-cream-soft">
  <div className="max-w-6xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-2xl mx-auto mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-green-strong mb-4">
        Latest Brain Downloads
      </h2>
      <p className="text-lg text-secondary">
        Recent thoughts from the tangle — untangling the present and weaving the future.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid gap-8 md:grid-cols-3">

      {/* CARD */}
      <article className="group bg-white rounded-2xl overflow-hidden border border-cream-muted hover:border-rose-gold transition-all shadow-sm hover:shadow-lg">
        <div className="relative h-44">
          <Image
            src="/images/untangling-thumbnail.jpg"
            alt="Untangling post thumbnail"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-strong mb-2 group-hover:text-green-soft transition">
            Self-Discovery for the AI Future
          </h3>
          <p className="text-secondary mb-4">
            Exploring how understanding ourselves can help navigate uncertainty…
          </p>
          <Link
            href="/blog/self-discovery-for-the-ai-future"
            className="inline-flex items-center text-green-soft font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      </article>

      {/* CARD */}
      <article className="group bg-white rounded-2xl overflow-hidden border border-cream-muted hover:border-rose-gold transition-all shadow-sm hover:shadow-lg">
        <div className="relative h-44">
          <Image
            src="/images/weaving-thumbnail.jpg"
            alt="Weaving post thumbnail"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-strong mb-2 group-hover:text-green-soft transition">
            What if Abundance Really Is the Answer?
          </h3>
          <p className="text-secondary mb-4">
            Musings on technological optimism and human potential…
          </p>
          <Link
            href="/blog/elon-musk-and-abundance"
            className="inline-flex items-center text-green-soft font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      </article>

      {/* OPTIONAL THIRD CARD */}
      <article className="group bg-white rounded-2xl overflow-hidden border border-cream-muted hover:border-rose-gold transition-all shadow-sm hover:shadow-lg">
        <div className="relative h-44">
          <Image
            src="/images/another-thumbnail.jpg"
            alt="Another post thumbnail"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-strong mb-2 group-hover:text-green-soft transition">
            A Third Thread
          </h3>
          <p className="text-secondary mb-4">
            A quieter reflection, still finding its shape…
          </p>
          <Link
            href="/blog/third-post"
            className="inline-flex items-center text-green-soft font-medium hover:underline"
          >
            Read more →
          </Link>
        </div>
      </article>

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <Link
        href="/blog"
        className="inline-block bg-green-soft text-surface px-10 py-4 rounded-xl font-medium hover:bg-green-strong transition"
      >
        Explore All Brain Downloads
      </Link>
    </div>

  </div>
</section>

    </>
  );
}