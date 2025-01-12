import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/data/post';

export const metadata: Metadata = {
  title: 'Posts - Greg Smith',
};

export default async function PostsIndex() {
  const allPosts = getAllPosts();

  return (
    <div>
      <h2 className="title1">Posts</h2>

      {allPosts && (
        <div>
          {allPosts.map(({ slug, title, excerpt }) => (
            <div key={slug} className="mb-6">
              <Link href={`/posts/${slug}`} className="link text-lg">
                {title}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {excerpt}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
