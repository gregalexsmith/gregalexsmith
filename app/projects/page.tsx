import { ProjectsList } from './projects-list';

export const metadata = {
  title: 'Projects - Greg Smith',
};

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="title1 mb-10">Projects</h2>
      <div className="">
        <ProjectsList />
      </div>
    </div>
  );
}
