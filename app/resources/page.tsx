// app/resources/page.tsx
export default function ResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-green-strong text-center">
        Collected Threads
      </h1>

      <div className="prose prose-lg mb-16 text-center">
        <p>There are so many quotes that describe my life:</p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Chaos is proof that you are truly living</li>
          <li>Your mess is part of your journey</li>
          <li>Messy roads often lead to beautiful places</li>
          <li>Embrace the storm because calm never taught you much</li>
        </ul>

        <p>
          In honour of the threads that have led me to this point, I thought I would pull it all together. 
          The only word the internet would understand is “Resources”, so here they are — with an explanation for each. 
          I hope you’re inspired by the diversity and challenges.
        </p>
      </div>

      {/* Project Sections – alternating image/text */}
      <div className="space-y-16 md:space-y-24">

        {/* 1. Thrive Clan – text left, image right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-strong">The Thrive Clan</h2>
            <p className="mb-4">
              <a href="https://thethriveclan.com" className="text-green-soft hover:underline font-medium">
                thethriveclan.com
              </a>
            </p>
            <p>
              Created after inspiration from my husband who hates subscriptions and feels chained by every website asking for sign-up. We wanted to capture AI and create one-off guides that SMEs could buy to take their business to the next level (or the first level). It’s about empowering the “little people” to be as free as the established.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/thrive-clan-screenshot.webp"  // ← Replace with real screenshot
              alt="The Thrive Clan website screenshot"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* 2. Gout Universe – image left, text right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gout-proofing-screenshot.webp"
              alt="Gout Universe website screenshot"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 text-green-strong">The Gout Universe</h2>
            <p className="mb-4">
              <a href="https://goutproofing.com" className="text-green-soft hover:underline font-medium">
                goutproofing.com
              </a>
            </p>
            <p>
              Just after Thrive Clan, my husband managed to self-induce gout after a knee injury, reduced mobility, and lifestyle changes. While researching, I asked Grok how many questions were in our main gout conversation — over 400 at the time (thank you Elon). The result is shared through these sites.
            </p>
          </div>
        </div>

        {/* 3. Little House France – text left, image right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-strong">Little House France</h2>
            <p className="mb-4">
              <a href="https://littlehousefrance.com" className="text-green-soft hover:underline font-medium">
                littlehousefrance.com
              </a>
            </p>
            <p>
              We bought a fabulous house that felt perfect for our family, but the garden was a little small. Searching for extra land, we found the perfect place — with a little house attached. It had a soul, like great people had lived there. The loft was full of old possessions and at least one mouse (we gave each other a shock). This became “Little House” — a future guest house once renovations finish, sharing the wonders of the Voie Verte across the Montagne Noire.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/little-house-france-screenshot.webp"
              alt="Little House France website screenshot"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* 4. AudStudio – image left, text right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/audstudio-screenshot.webp"
              alt="AudStudio website screenshot"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 text-green-strong">AudStudio</h2>
            <p className="mb-4">
              <a href="https://audstudio.com" className="text-green-soft hover:underline font-medium">
                audstudio.com
              </a>
            </p>
            <p>
              A few years back I created this site with a friend about learning languages through listening. The project hit snags — my partner got ill and could no longer continue. The shine faded, but the resources are still free. If you (or anyone you know) is interested in English listening materials, feel free to explore what we started.
            </p>
          </div>
        </div>
      </div>

      {/* Social links at bottom */}
      <div className="mt-16 prose prose-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-strong">Places I can be found</h2>
        <ul className="list-none space-y-4">
          <li>
            X: <a href="https://x.com/mirrie_kelly" className="text-green-soft hover:underline">@mirrie_kelly</a>
          </li>
          <li>
            Substack: <a href="https://mirriemusing.substack.com" className="text-green-soft hover:underline">@mirriemusing</a>
          </li>
        </ul>
      </div>
    </div>
  );
}