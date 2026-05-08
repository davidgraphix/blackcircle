import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Market Scoop', href: '/market-scoop' },
  // { label: 'Stories', href: '/stories' },
  { label: 'Investing Guides', href: '/investing-guides' },
  // { label: 'Learning Center', href: '/learning' },
  { label: 'Corporate Training', href: '/corporate-training' },
  { label: 'Community', href: '/community' },
  // { label: 'Dangote Refinery', href: '/dangote-refinery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  learn: [
    { label: 'Market Scoop', href: '/market-scoop' },
    // { label: 'Stories', href: '/stories' },
    { label: 'Investing Guides', href: '/investing-guides' },
    // { label: 'Learning Center', href: '/learning' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Corporate Training', href: '/corporate-training' },
    { label: 'Community', href: '/community' },
    // { label: 'Dangote Refinery', href: '/dangote-refinery' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
  ],
};

export const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/blackcircle' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/blackcircle' },
  { label: 'YouTube', href: 'https://youtube.com/@blackcircle' },
  { label: 'Instagram', href: 'https://instagram.com/blackcircle' },
];
