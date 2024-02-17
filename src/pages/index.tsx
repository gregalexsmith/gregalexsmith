import Head from 'next/head';
import { Layout } from '../components';
import { getAllPosts } from '../features';
import { profileData, SocialLinks } from '../features/profile';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Greg Smith</title>
        </Head>
        <div>
          <h2 className="title1">About</h2>
          <p>{profileData.about}</p>
          <SocialLinks />
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
