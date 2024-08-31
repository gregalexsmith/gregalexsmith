import { Metadata } from 'next';
import { links } from '@/data/profile';
import { ProjectsList } from './projects/projects-list';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Greg Smith',
};

export default async function Page() {
  return (
    <div>
      <h2 className="title3">Links</h2>
      <div className="mt-2 flex gap-3">
        {links.map((link) => (
          <a href={link.url} key={link.url} className="link">
            {link.name}
          </a>
        ))}
      </div>

      <h2 className="flex justify-between items-center mt-8">
        <span className="title3 m-0">Featured Projects</span>
        <Link href="/projects" className="link">
          View all
        </Link>
      </h2>
      <div className="mt-2">
        <ProjectsList limit={3} />
      </div>
    </div>
  );
}
