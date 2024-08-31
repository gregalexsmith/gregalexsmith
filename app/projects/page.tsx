import Head from 'next/head';
import { projects } from '@/data/project';
import ImageGallery from './project-image-gallery';

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
            <div
              key={project.title}
              className="mb-6 card-surface rounded-lg p-4 sm:p-6"
            >
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
              <ImageGallery project={project} />
              {/* {project.images && (
                <div className="flex justify-items-start gap-3 py-4">
                  {project.images.map((img) => (
                    <div key={img} className="relative h-[140px] flex-[100px]">
                      <Image
                        key={img}
                        src={img}
                        className="object-cover object-top rounded-lg"
                        fill
                        alt={project.title}
                      />
                    </div>
                  ))}
                </div>
              )} */}
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
