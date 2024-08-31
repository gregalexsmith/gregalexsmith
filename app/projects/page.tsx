import Head from 'next/head';
import { projects } from '@/data/project';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Greg Smith</title>
      </Head>
      <div>
        <h2 className="title1 mb-10">Projects</h2>
        <div className="">
          {projects.map((project) => (
            <div key={project.title} className="mb-12">
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: project.description }}
                className="mb-1"
              />
              <div className="flex gap-3">
                {project.links &&
                  project.links.map(
                    (link) =>
                      link.url && (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          className="link"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      ),
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
