// app/about/page.tsx
export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center md:text-left">
        Who is Mirrie?
      </h1>

      <div className="prose prose-lg prose-headings:text-forest-800 prose-p:text-gray-800 leading-relaxed max-w-none">
        <p>
          About me – this is a tough page to write because I am still discovering the answers.
        </p>

        <p>
          One would really think that by my experienced age I would have the answers—but my experience has taught me one main thing: that <em>continual learning</em> is a constant in my life.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">A Second Chance</h2>

        <p>
          I originally had a blog that “got lost”. In the chaos of life I forgot to renew the domain, and I didn’t have a proper backup.
        </p>

        <p>
          My husband offered to get it back for me but in a rare moment of clarity I realised that anything left that long and forgotten had reached the end of its natural life.
        </p>

        <p>
          I had also, for some reason that I don’t remember, bought the URL <strong>mystifymi.com</strong> — so this is my replacement, my second chance.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-6">What I Know About Me</h2>

        <p>
          What do I know about me? I started in maths and worked in business, became a mum (note the spelling – I’m English), swapped to English teaching…
        </p>

        <p>
          But it doesn’t seem to matter what I do, my life evolves around <strong>communication and support</strong>.
        </p>

        <p>
          In my first job I supported from the bottom, later on I supported my own team, more top down. Now as a teacher I support students, and as a mum and wife… well, it never stops.
        </p>

        <p className="mt-10 italic text-center text-gray-600 border-t pt-8">
          Site and me under gentle reconstruction — continual growth is guaranteed ✨
        </p>
      </div>
    </div>
  );
}