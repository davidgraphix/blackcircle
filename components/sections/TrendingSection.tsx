'use client';

import Link from 'next/link';
import Image from 'next/image';
import { marketScoops } from '@/data/marketScoop';
import { stories } from '@/data/stories';

export function TrendingSection() {
  // Get trending content
  const trendingArticles = marketScoops.slice(0, 3);
  const trendingStories = stories.slice(0, 2);

  return (
    <div className="space-y-6">
      {/* Trending Articles */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Trending in Markets</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {trendingArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/market-scoop/${article.slug}`}
              className="block p-4 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <span className="text-lg font-bold text-gray-400 flex-shrink-0">{index + 1}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{article.tags[0]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Stories */}
      <div className="space-y-3">
        {trendingStories.map((story) => (
          <Link
            key={story.id}
            href={`/stories/${story.slug}`}
            className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all group"
          >
            <div className="relative h-40 bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                {story.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">Documentaries & Stories</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Portfolio Box */}
      {/* <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-sm font-bold text-gray-900 mb-2">Portfolio</h4>
        <p className="text-xs text-gray-700 leading-relaxed mb-3">
          You already know what you want out of your portfolio. BlackCircle Investor can help you double-check your investing instincts with exclusive ratings & analysis.
        </p>
        <Link
          href="/learning"
          className="inline-flex items-center justify-center w-full px-3 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Free 7-Day Trial
        </Link>
      </div> */}
    </div>
  );
}
