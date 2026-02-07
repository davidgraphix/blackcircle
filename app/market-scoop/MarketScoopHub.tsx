'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { marketScoops, getFeaturedMarketScoop, getAllTags } from '@/data/marketScoop';
import { formatShortDate } from '@/lib/helpers';
import { fadeInUp, cardHover } from '@/lib/motion';

const ITEMS_PER_PAGE = 6;

export function MarketScoopHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const allTags = getAllTags();
  const featured = getFeaturedMarketScoop();

  const filteredScoops = useMemo(() => {
    return marketScoops.filter((scoop) => {
      const matchesSearch =
        searchQuery === '' ||
        scoop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scoop.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => scoop.tags.includes(tag));

      return matchesSearch && matchesTags && scoop.id !== featured?.id;
    });
  }, [searchQuery, selectedTags, featured?.id]);

  const totalPages = Math.ceil(filteredScoops.length / ITEMS_PER_PAGE);
  const paginatedScoops = filteredScoops.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
              Market Scoop
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Timely analysis and insights on African markets, economic indicators, and investment opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        {featured && (
          <motion.article
            initial="rest"
            whileHover="hover"
            variants={cardHover}
            className="mb-12 group"
          >
            <Link
              href={`/market-scoop/${featured.slug}`}
              className="block bg-card border border-border rounded-lg overflow-hidden"
            >
              <div className="p-6 md:p-8 lg:p-10">
                <span className="inline-flex px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  Featured
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance">
                  {featured.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl text-pretty">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>{formatShortDate(featured.date)}</span>
                  <span>•</span>
                  <span>{featured.author.name}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 text-sm bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedScoops.map((scoop) => (
            <motion.article
              key={scoop.id}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group bg-card border border-border rounded-lg overflow-hidden"
            >
              <Link href={`/market-scoop/${scoop.slug}`} className="block p-5">
                <p className="text-xs text-muted-foreground">
                  {formatShortDate(scoop.date)}
                </p>
                <h3 className="mt-2 text-base font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2 text-balance">
                  {scoop.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3 text-pretty">
                  {scoop.excerpt}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {scoop.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {paginatedScoops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTags([]);
              }}
              className="mt-4 text-sm font-medium text-primary hover:text-primary/80"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
