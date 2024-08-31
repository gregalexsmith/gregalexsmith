import { projects } from '@/data/project';
import ImageGallery from './project-image-gallery';

type ProjectsListProps = {
  limit?: number;
};

export const ProjectsList = ({ limit }: ProjectsListProps) => {
  const projectsToDisplay = limit ? projects.slice(0, limit) : projects;

  return projectsToDisplay.map((project) => (
    <div
      key={project.title}
      className="mb-6 card-surface rounded-lg p-4 sm:p-6"
    >
      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
      <ImageGallery project={project} />
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
  ));
};
