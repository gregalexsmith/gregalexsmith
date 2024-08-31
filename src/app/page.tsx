import { Metadata } from 'next';
import { Layout } from '../components';
import { profileData, SocialLinks } from '../features/profile';

export const metadata: Metadata = {
  title: 'Greg Smith',
};

export default async function Page() {
  return (
    <Layout>
      <div>
        <h2 className="title1">About</h2>
        <p>{profileData.about}</p>
        <SocialLinks />
      </div>
    </Layout>
  );
}
