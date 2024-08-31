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
          {allPosts.map(({ slug, title }) => (
            <div key={slug}>
              <Link
                href={`/posts/${slug}`}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                {title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
