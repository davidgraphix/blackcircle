import React from "react"
import type { Metadata, Viewport } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SiteLayout } from '@/components/layout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'BlackCircle | Navigate African Markets with Confidence',
    template: '%s | BlackCircle',
  },
  description:
    'Learn, follow the pulse, and invest smarter across Africa. Market insights, structured courses, and investment education starting with Nigeria.',
  keywords: [
    'African markets',
    'Nigerian stocks',
    'investment education',
    'treasury bills',
    'NGX',
    'financial literacy',
    'Africa investing',
  ],
  authors: [{ name: 'BlackCircle' }],
  creator: 'BlackCircle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blackcircle.com',
    siteName: 'BlackCircle',
    title: 'BlackCircle | Navigate African Markets with Confidence',
    description:
      'Learn, follow the pulse, and invest smarter across Africa. Market insights, structured courses, and investment education starting with Nigeria.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BlackCircle - African Markets Education Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlackCircle | Navigate African Markets with Confidence',
    description:
      'Learn, follow the pulse, and invest smarter across Africa. Market insights, structured courses, and investment education.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: '#1a5f5f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        <SiteLayout>{children}</SiteLayout>
        <Analytics />
      </body>
    </html>
  );
}
