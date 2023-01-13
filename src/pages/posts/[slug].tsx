import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '../../components';
import {
  getAllPosts,
  getPostBySlug,
  PostBody,
  PostHeader,
  PostType
} from '../../features';
import { markdownToHtml } from '../../helpers';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <div>
        {/* <Header /> */}
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article className="pb-32">
              <Head>
                <title>{post.title} | Next.js Blog Example with Markdown</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader title={post.title} date={post.date} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </div>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
