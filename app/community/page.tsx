import type { Metadata } from 'next';
import { CommunityPage } from './CommunityPage';

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Join the BlackCircle community. Connect with fellow investors, share insights, and grow together in African markets.',
};

export default function Page() {
  return <CommunityPage />;
}
