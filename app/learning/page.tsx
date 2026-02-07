import type { Metadata } from 'next';
import { LearningHub } from './LearningHub';

export const metadata: Metadata = {
  title: 'Learning',
  description:
    'Structured courses to build your investment knowledge from the ground up. Learn at your own pace with expert-led content.',
};

export default function LearningPage() {
  return <LearningHub />;
}
