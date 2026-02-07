import type { Metadata } from 'next';
import { GuidesLibrary } from './GuidesLibrary';

export const metadata: Metadata = {
  title: 'Investing Guides',
  description:
    'Comprehensive guides on investment fundamentals, tailored for the Nigerian and African market context.',
};

export default function InvestingGuidesPage() {
  return <GuidesLibrary />;
}
