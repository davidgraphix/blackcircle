import type { Metadata } from 'next';
import { SignInPage } from './SignInPage';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your BlackCircle account to access courses, saved content, and community features.',
};

export default function Page() {
  return <SignInPage />;
}
