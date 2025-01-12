import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllPosts, getPostBySlug } from '@/data/post';
import markdownStyles from './styles.module.css';
import { PostHeader } from './post-header';

import { remark } from 'remark';
import html from 'remark-html';

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug);
  return { title: post.title };
}

async function getPostData(slug: string) {
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content || '');
  return { ...post, content };
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
        <div>
          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
