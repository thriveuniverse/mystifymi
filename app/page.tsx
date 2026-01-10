import Image from "next/image";

export default function Home() {
  return (
    <section className="relative h-96 md:h-screen max-h-screen overflow-hidden">
      {/* HERO IMAGE */}
      <Image
        src="/images/hero.jpg"
        alt="flower design by jgnkelly with woman at desk"
        fill
        priority
        className="object-cover object-right"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/40" />

      {/* HERO TEXT */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="text-center text-primary max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
  Hello, I'm Mirrie
</h1>

<p className="text-xl text-secondary">
  English mum in France • perpetual work in progress • untangling the
  knotted wool one thought at a time
</p>

<p className="mt-8 text-lg text-secondary">
  Site under gentle reconstruction — come back soon ✨
</p>
        </div>
      </div>
    </section>
  );
}
