import type { Metadata } from 'next';
import { TermsPage } from './TermsPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'BlackCircle Terms of Service - The terms and conditions governing your use of our platform.',
};

export default function Page() {
  return <TermsPage />;
}
