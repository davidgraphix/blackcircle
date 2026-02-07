import type { Metadata } from 'next';
import { JoinPage } from './JoinPage';

export const metadata: Metadata = {
  title: 'Join',
  description: 'Create your BlackCircle account and start your journey to understanding African markets.',
};

export default function Page() {
  return <JoinPage />;
}
