import type { Metadata } from 'next';
import { DangoteRefineryPage } from './DangoteRefineryPage';

export const metadata: Metadata = {
  title: 'Dangote Refinery Investor Interest | BlackCircle',
  description:
    'Register your interest in the Dangote Refinery listing and receive early insights, updates, and structured investment guidance.',
};

export default function Page() {
  return <DangoteRefineryPage />;
}
