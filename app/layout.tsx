import type { ReactNode } from 'react';
import Link from 'next/link';
import { SingleColumn } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Greg Smith',
  description: 'Personal website of Greg Smith',
};

type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <div className="min-h-screen">
          <SingleColumn className="max-w-3xl">
            <header className="text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center">
                <h1 className="flex-grow py-3 text-lg font-bold">
                  <Link href="/">Greg Smith</Link>
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
            <SingleColumn className="max-w-3xl pb-12">{children}</SingleColumn>
          </main>
        </div>
      </body>
    </html>
  );
}
