// app/blog/page.tsx
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // ← AWAIT the Promise here!
  const resolvedSearchParams = await searchParams;

  const posts = await getAllPosts();

  // Now safe to access
  const activeTag =
    typeof resolvedSearchParams.tag === 'string'
      ? resolvedSearchParams.tag
      : undefined;

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags?.includes(activeTag))
    : posts;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-green-strong">
        Brain Downloads
        {activeTag && (
          <span className="ml-4 text-2xl font-normal text-gray-600">
            — You're viewing "{activeTag}"
          </span>
        )}
      </h1>

      {activeTag && (
        <div className="mb-10 flex justify-center">
          <Link
            href="/blog"
            className="group bg-green-strong text-white px-8 py-4 rounded-xl border border-gold-soft/40 hover:border-gold-soft hover:bg-green-soft transition-all shadow-md hover:shadow-lg backdrop-blur-sm text-center font-medium"
          >
            Explore All Threads
          </Link>
        </div>
      )}


      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No posts yet in this thread... coming soon! ✨
        </p>
      ) : (
        <div className="grid gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row gap-0 bg-white rounded-2xl overflow-hidden border border-accent hover:border-gold-soft/40 transition-all shadow-sm hover:shadow-lg"
            >
              {/* Image on left - more compact */}
              <div className="relative w-full md:w-1/3 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={post.image || '/images/hero.jpg'}
                  alt={post.title as string}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text on right - trimmed padding */}
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs text-green-muted mb-2 font-medium uppercase tracking-wider font-mono">
                    <time>
                      {new Date(post.date as string).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-green-strong group-hover:text-gold-deep transition-colors leading-tight">
                    {post.title as string}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2 text-base leading-relaxed">
                    {post.excerpt as string}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-cream-muted">
                  <div className="flex flex-wrap gap-2 text-[10px]">
                    {(post.tags as string[] | undefined)?.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-cream-soft text-green-soft px-2.5 py-0.5 rounded-full font-medium border border-cream-muted">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-green-soft font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Post <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}