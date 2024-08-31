import Head from 'next/head';
import { Projects } from '../../features';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Greg Smith</title>
      </Head>
      <div>
        <h2 className="title1">Projects</h2>
        <Projects />
      </div>
    </>
  );
}
