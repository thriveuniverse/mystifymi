import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
     <section className="relative h-96 md:h-screen max-h-screen overflow-hidden">
  {/* BACKGROUND IMAGE */}
  <Image
    src="/images/hero.jpg"
    alt="flower design by jgnkelly"
    fill
    priority
    className="object-cover object-right"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-background/70" />

  {/* CONTENT */}
  <div className="relative z-10 h-full flex items-center">
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            A Delicate Thread Through Time
          </h1>

          <p className="text-xl text-secondary mb-6">
            The world we live in is a mass of unknown wonders, sadly we have lost
            some knowledge from the past, it slips through our fingers unnoticed
            and we keep ploughing on ignorant of its loss.
          </p>

          <p className="text-xl text-secondary mb-6">
            My brain feels pulled from past to present – here I try to hold onto
            the threads of the path and find how to weave them into a future rich
            with the best that humans have to offer.
          </p>

          <p className="text-xl text-secondary">With love from</p>
          <p className="text-xl text-secondary font-medium">Mirrie</p>
        </div>

        {/* SIDE IMAGE */}
        <div className="relative h-[28rem] w-full overflow-hidden rounded-xl">
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


      {/* ================= SECTIONS / TEST BUTTONS ================= */}
      <section className="bg-background">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 py-16">
          <a
            href="/blog?tag=untangling"
            className="group bg-primary backdrop-blur-md p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all shadow-sm hover:shadow-lg"
          >
            <h2 className="text-3xl font-bold text-surface mb-4">
              Untangling Today
            </h2>
            <p className="text-lg text-surface">
              Health, lifestyle, gardening, crochet, and reflections on what
              we've lost—and how to gently reclaim it.
            </p>
          </a>

          <a
            href="/blog?tag=weaving"
            className="group bg-primary backdrop-blur-md p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all shadow-sm hover:shadow-lg"
          >
            <h2 className="text-3xl font-bold text-surface mb-4">
              Weaving Tomorrow
            </h2>
            <p className="text-lg text-surface">
              News, AI, economics, technology—and a hopeful but cautious look at
              the road ahead.
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
