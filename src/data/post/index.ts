import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    content,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by latest date
    .sort((post1, post2) =>
      post1.date && post2.date && new Date(post1.date) > new Date(post2.date)
        ? -1
        : 1,
    );
  return posts;
}
