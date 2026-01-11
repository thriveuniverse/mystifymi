// app/blog/[slug]/page.tsx
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote-client/rsc';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  console.log('Looking for:', fullPath); // keep for debug
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return { content, frontmatter: data };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;                // ← Await here!
  const slug = resolvedParams.slug;                   // ← Now safe

  const post = getPost(slug);

  if (!post) {
    return <div className="py-20 text-center text-2xl">Post not found 😔</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose prose-lg prose-headings:text-green-strong">
      <h1 className="text-4xl font-bold mb-8">{post.frontmatter.title as string}</h1>
      
      <div className="text-gray-600 mb-12 flex items-center gap-4">
        <time>{new Date(post.frontmatter.date as string).toLocaleDateString()}</time>
        <span>•</span>
        <div>
          Tags: {(post.frontmatter.tags as string[] | undefined)?.join(', ') || 'None'}
        </div>
      </div>

      <MDXRemote source={post.content} />
    </article>
  );
}