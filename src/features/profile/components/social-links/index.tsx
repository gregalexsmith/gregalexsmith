import { Link } from '@gregalexsmith/components';
import { profileData } from '../../data';

export const SocialLinks = () => {
  return (
    <div className="mt-2 flex gap-3">
      {profileData.links.map((link) => (
        <Link href={link.url} key={link.url} className="text-blue-700">
          {link.name}
        </Link>
      ))}
    </div>
  );
};
