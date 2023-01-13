import type { ReactNode } from 'react';
import { NavSimple, SingleColumn } from '@gregalexsmith/components';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
  children?: ReactNode;
  breadcrumbs?: ReactNode;
  title?: ReactNode;
};

const websiteTitle = 'Greg Smith';

export const Layout = ({ children, breadcrumbs }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>{websiteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SingleColumn className="max-w-3xl">
        <header>
          <NavSimple title={<Link href="/">{websiteTitle}</Link>}>
            <div className="flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/projects">Projects</Link>
            </div>
          </NavSimple>
        </header>
      </SingleColumn>

      <main>
        <SingleColumn className="max-w-3xl">
          {breadcrumbs && <div className="mb-2">{breadcrumbs}</div>}
          {children}
        </SingleColumn>
      </main>
    </div>
  );
};
