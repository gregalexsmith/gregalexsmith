import type { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SingleColumn } from '../single-column';

type LayoutProps = {
  children?: ReactNode;
  breadcrumbs?: ReactNode;
  title?: ReactNode;
};

const websiteTitle = 'Greg Smith';

export const Layout = ({ children, breadcrumbs }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Head>
        <title>{websiteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SingleColumn className="max-w-3xl">
        <header>
          <div className="flex items-center">
            <h1 className="flex-grow py-3 text-lg font-bold text-neutral-600">
              <Link href="/">{websiteTitle}</Link>
            </h1>
            <div className="flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/posts">Posts</Link>
            </div>
          </div>
        </header>
      </SingleColumn>

      <main>
        <SingleColumn className="max-w-3xl pb-12">
          {breadcrumbs && <div className="mb-2">{breadcrumbs}</div>}
          {children}
        </SingleColumn>
      </main>
    </div>
  );
};
