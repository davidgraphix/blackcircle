'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Newspaper,
} from 'lucide-react';
import {
  marketScoops,
  getFeaturedMarketScoop,
  getAllTags,
  formatMarketScoopDate,
} from '@/data/marketScoop';
import { fadeInUp, cardHover } from '@/lib/motion';

const ITEMS_PER_PAGE = 9;

export function MarketScoopHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const allTags = getAllTags();
  const featured = getFeaturedMarketScoop();

  const filteredScoops = useMemo(() => {
    return marketScoops.filter((scoop) => {
      const matchesSearch =
        searchQuery === '' ||
        scoop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scoop.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        selectedTag === 'all' || scoop.tags.includes(selectedTag);

      return matchesSearch && matchesTag && scoop.id !== featured?.id;
    });
  }, [searchQuery, selectedTag, featured?.id]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredScoops.length / ITEMS_PER_PAGE)
  );

  const paginatedScoops = filteredScoops.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTag('all');
    setCurrentPage(1);
  };

  const hasActiveFilter = searchQuery !== '' || selectedTag !== 'all';

  return (
    <div className="bg-[#f7f5ef]">
      {/* Header */}
     <section className="relative overflow-hidden border-b border-black/10 bg-[#050907] text-white">
  <img
    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=700&fit=crop"
    alt="Market intelligence"
    className="absolute inset-0 h-full w-full object-cover opacity-35"
  />
  <div className="absolute inset-0 bg-black/70" />

  <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <Newspaper className="h-3.5 w-3.5" />
        Market Intelligence
      </div>

      <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        Market Scoop
      </h1>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
        Timely analysis and structured insights on African markets,
        economic indicators, policy moves, and investment opportunities.
      </p>
    </motion.div>
  </div>
</section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Featured Article */}
        {featured && (
          <motion.article
            initial="rest"
            whileHover="hover"
            variants={cardHover}
            className="mb-8 group"
          >
            <Link
              href={`/market-scoop/${featured.slug}`}
              className="grid overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md md:grid-cols-2"
            >
              <div className="relative h-72 overflow-hidden bg-black md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop"
                  alt={featured.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Featured Scoop
                  </span>

                  <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-gray-950 transition-colors group-hover:text-primary md:text-4xl">
                    {featured.title}
                  </h2>

                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-gray-600 md:text-base">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span>{formatMarketScoopDate(featured.date)}</span>
                    <span className="text-gray-300">•</span>
                    <span>{featured.author.name}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-[#f7f5ef] px-2.5 py-1 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Filter Bar */}
        <section className="mb-7 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[1fr_260px_auto] lg:items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="h-11 w-full rounded-xl border border-black/10 bg-[#f7f5ef] pl-10 pr-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="relative">
              <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <select
                value={selectedTag}
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-11 w-full appearance-none rounded-xl border border-black/10 bg-[#f7f5ef] pl-10 pr-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                aria-label="Filter by topic"
              >
                <option value="all">All topics</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            {hasActiveFilter && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold text-gray-700 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
            <p>
              Showing{' '}
              <span className="font-semibold text-gray-900">
                {filteredScoops.length}
              </span>{' '}
              result{filteredScoops.length === 1 ? '' : 's'}
            </p>

            {selectedTag !== 'all' && (
              <p>
                Active topic:{' '}
                <span className="font-semibold text-primary">{selectedTag}</span>
              </p>
            )}
          </div>
        </section>

        {/* Articles Grid */}
        {paginatedScoops.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {paginatedScoops.map((scoop) => (
              <motion.article
                key={scoop.id}
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <Link
                  href={`/market-scoop/${scoop.slug}`}
                  className="flex h-full flex-col"
                >
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=420&fit=crop"
                      alt={scoop.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                      <span>{formatMarketScoopDate(scoop.date)}</span>
                      <span className="text-gray-300">•</span>
                      <span>{scoop.tags[0]}</span>
                    </div>

                    <h3 className="mt-3 line-clamp-2 text-base font-semibold leading-snug text-gray-950 transition-colors group-hover:text-primary">
                      {scoop.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {scoop.excerpt}
                    </p>

                    <div className="mt-auto pt-4">
                      <span className="text-sm font-semibold text-primary">
                        Read scoop →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-black/10 bg-white px-6 py-14 text-center shadow-sm">
            <p className="text-sm text-gray-600">
              No articles found matching your criteria.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 text-sm font-semibold text-primary hover:text-primary/80"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-gray-700 transition-colors hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-10 min-w-10 rounded-xl px-3 text-sm font-semibold transition-colors ${
                      currentPage === page
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white text-gray-700 hover:text-primary'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={currentPage === totalPages}
              className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-gray-700 transition-colors hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
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