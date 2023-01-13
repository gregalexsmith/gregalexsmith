import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../../components';
import { getAllPosts, PostType } from '../../features';

type Props = {
  allPosts: PostType[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Posts - Greg Smith</title>
        </Head>
        <div>
          <section className="mt-8 mb-8 flex flex-col items-center md:flex-row md:justify-between">
            <h2 className="text-5xl font-bold leading-tight tracking-tighter">
              Posts.
            </h2>
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
      </Layout>
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
