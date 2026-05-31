import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Market Scoop', href: '/market-scoop' },
  { label: 'Investing Guides', href: '/investing-guides' },
  { label: 'Institutional Programmes', href: '/corporate-training' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  marketIntelligence: [
    { label: 'Market Scoop', href: '/market-scoop' },
    { label: 'Investing Guides', href: '/investing-guides' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Institutional Programmes', href: '/corporate-training' },
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