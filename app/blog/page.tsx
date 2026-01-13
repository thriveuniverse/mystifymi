// app/blog/page.tsx
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

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
      className="group bg-primary/90 text-surface px-8 py-4 rounded-xl border border-rose-gold/40 hover:border-rose-gold hover:bg-green-soft transition-all shadow-md hover:shadow-lg backdrop-blur-sm text-center font-medium"
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
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-cream-soft p-6 rounded-xl border border-cream-muted hover:border-rose-gold transition-all shadow-sm hover:shadow-md"
            >
              <h2 className="text-2xl font-bold mb-3 text-green-strong group-hover:text-green-soft">
                {post.title as string}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt as string}</p>
              <div className="flex flex-wrap gap-2">
                {(post.tags as string[] | undefined)?.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-green-muted/30 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {new Date(post.date as string).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}