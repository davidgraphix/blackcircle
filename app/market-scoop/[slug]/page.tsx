import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { marketScoops, getMarketScoopBySlug } from '@/data/marketScoop';
import { MarketScoopArticle } from './MarketScoopArticle';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return marketScoops.map((scoop) => ({
    slug: scoop.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const scoop = getMarketScoopBySlug(slug);

  if (!scoop) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: scoop.title,
    description: scoop.excerpt,
    openGraph: {
      title: scoop.title,
      description: scoop.excerpt,
      type: 'article',
      publishedTime: scoop.date,
      authors: [scoop.author.name],
    },
  };
}

export default async function MarketScoopDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const scoop = getMarketScoopBySlug(slug);

  if (!scoop) {
    notFound();
  }

  return <MarketScoopArticle scoop={scoop} />;
}
