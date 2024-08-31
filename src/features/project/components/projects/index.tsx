import { projectsData } from '../../data';

export const Projects = () => {
  return (
    <div className="">
      {projectsData.map((project) => (
        <div key={project.title} className="mb-8">
          <h3 className="text-2xl font-bold leading-tight tracking-tighter">
            {project.title}
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: project.description }}
            className="mb-1"
          />
          <div className="flex gap-2">
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
  );
};
