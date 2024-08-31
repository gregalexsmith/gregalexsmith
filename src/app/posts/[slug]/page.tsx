import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  getAllPosts,
  getPostBySlug,
  PostBody,
  PostHeader,
  PostType,
} from '../../../features';
import { markdownToHtml } from '../../../helpers';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug);
  return { title: post.title };
}

async function getPostData(slug: string): Promise<PostType> {
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const content = await markdownToHtml(post.content || '');

  return { ...post, content } as unknown as PostType;
}

export default async function Post({ params }: Props) {
  const post = await getPostData(params.slug);

  if (!post?.slug) {
    notFound();
  }

  return (
    <div>
      <article className="pb-32">
        <PostHeader title={post.title} date={post.date} />
        <PostBody content={post.content} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
