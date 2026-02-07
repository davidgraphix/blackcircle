import type { Metadata } from 'next';
import { ContactPage } from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with BlackCircle. We\'d love to hear from you about partnerships, feedback, or general inquiries.',
};

export default function Page() {
  return <ContactPage />;
}
