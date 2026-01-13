import Image from "next/image";

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
                    className="group bg-primary/90 text-surface px-8 py-4 rounded-xl border border-rose-gold/40 hover:border-rose-gold hover:bg-green-soft transition-all shadow-md hover:shadow-lg backdrop-blur-sm text-center font-medium"
                  >
                    Untangling Today
                  </a>

                  <a
                    href="/blog?tag=weaving"
                    className="group bg-primary/90 text-surface px-8 py-4 rounded-xl border border-rose-gold/40 hover:border-rose-gold hover:bg-green-soft transition-all shadow-md hover:shadow-lg backdrop-blur-sm text-center font-medium"
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

      
    </>
  );
}