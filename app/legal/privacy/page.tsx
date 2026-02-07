import type { Metadata } from 'next';
import { PrivacyPage } from './PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'BlackCircle Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function Page() {
  return <PrivacyPage />;
}
