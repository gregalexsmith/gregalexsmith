import { profileData } from '../../data';

export const SocialLinks = () => {
  return (
    <div className="mt-2 flex gap-3">
      {profileData.links.map((link) => (
        <a href={link.url} key={link.url} className="link">
          {link.name}
        </a>
      ))}
    </div>
  );
};
