import { Metadata } from 'next';
import { profileData } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Greg Smith',
};

export default async function Page() {
  return (
    <div>
      <h2 className="title1">About</h2>
      <p>{profileData.about}</p>
      <div className="mt-2 flex gap-3">
        {profileData.links.map((link) => (
          <a href={link.url} key={link.url} className="link">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
