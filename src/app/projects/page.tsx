import Head from 'next/head';
import { Layout } from '../../components';
import { Projects } from '../../features';

export default function ProjectsPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects - Greg Smith</title>
        </Head>
        <div>
          <h2 className="title1">Projects</h2>
          <Projects />
        </div>
      </Layout>
    </>
  );
}
