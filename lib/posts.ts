// lib/posts.ts
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// Define the metadata shape from frontmatter
interface PostMetadata {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  [key: string]: any; // for any extra fields
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Return an ARRAY of posts
export function getAllPosts(): (PostMetadata & { slug: string })[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    } as PostMetadata & { slug: string };
  });

  // Sort by date descending
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}