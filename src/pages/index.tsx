import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components';
import { getAllPosts, PostType } from '../features';
import { profileData, SocialLinks } from '../features/profile';

type Props = {
  allPosts: PostType[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Greg Smith</title>
        </Head>
        <div>
          <h2 className="mt-8 mb-4 text-4xl font-bold leading-tight tracking-tighter">
            About
          </h2>
          <p>{profileData.about}</p>
          <SocialLinks />

          <h2 className="mt-8 mb-4 text-4xl font-bold leading-tight tracking-tighter">
            Posts
          </h2>
          {allPosts && (
            <div>
              {allPosts.map(({ slug, title }) => (
                <div key={slug}>
                  <Link
                    as={`/posts/${slug}`}
                    href="/posts/[slug]"
                    className="text-blue-700 hover:underline dark:text-blue-500"
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
