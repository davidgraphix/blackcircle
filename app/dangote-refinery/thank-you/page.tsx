import type { Metadata } from 'next';
import { ThankYouPage } from './ThankYouPage';

export const metadata: Metadata = {
  title: 'Interest Recorded | Dangote Refinery | BlackCircle',
  description: 'Your interest in the Dangote Refinery has been recorded. You will receive early insights and updates.',
};

export default function Page() {
  return <ThankYouPage />;
}
