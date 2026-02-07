import type { Metadata } from 'next';
import { AboutPage } from './AboutPage';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about BlackCircle\'s mission to democratize financial education and market insights for African investors.',
};

export default function Page() {
  return <AboutPage />;
}
