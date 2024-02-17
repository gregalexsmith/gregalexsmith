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
          <h2 className="title1">Posts</h2>

          {allPosts && (
            <div>
              {allPosts.map(({ slug, title }) => (
                <div key={slug}>
                  <Link
                    as={`/posts/${slug}`}
                    href="/posts/[slug]"
                    className="text-blue-700 hover:underline dark:text-blue-500 "
                  >
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
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
