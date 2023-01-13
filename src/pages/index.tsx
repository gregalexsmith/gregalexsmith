import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts, PostType } from '../features';

type Props = {
  allPosts: PostType[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <div className="layout">
        <Head>
          <title>Next.js Blog Example with Markdown</title>
        </Head>
        <div>
          <section className="mt-16 mb-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
              Blog.
            </h1>
            <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
              A statically generated blog example using{' '}
              <a
                href="https://nextjs.org/"
                className="underline transition-colors duration-200 hover:text-blue-600">
                Next.js
              </a>{' '}
              and Markdown
            </h4>
          </section>

          {allPosts && (
            <div>
              {allPosts.map(({ slug, title }) => (
                <div key={slug}>
                  <Link
                    as={`/posts/${slug}`}
                    href="/posts/[slug]"
                    className="hover:underline">
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
};
