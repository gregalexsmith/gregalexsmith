import { links } from '../../data/profile';

export const metadata = {
  title: 'About - Greg Smith',
};

export default function AboutPage() {
  return (
    <div>
      <h2 className="title1">About</h2>
      <p>
        I&apos;m a developer and creative with a passion for building engaging
        experiences on the web. I value thoughtful UX and design, scalable code,
        open collaboration, continuous learning and improving products and
        processes with great teams.
      </p>
      <div className="mt-2 flex gap-3">
        {links.map((link) => (
          <a href={link.url} key={link.url} className="link">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
