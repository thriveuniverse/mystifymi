import remarkGfm from 'remark-gfm';
import createNextMdx from '@next/mdx';

const withMDX = createNextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'], // enables .mdx files
};

export default withMDX(nextConfig);
