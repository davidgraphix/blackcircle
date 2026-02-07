import type { Metadata } from 'next';
import { StoriesHub } from './StoriesHub';

export const metadata: Metadata = {
  title: 'Stories',
  description:
    'Watch documentary-style content exploring the people, trends, and developments shaping African finance and investment.',
};

export default function StoriesPage() {
  return <StoriesHub />;
}
