'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen,
  PlayCircle,
  FileText,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { guides } from '@/data/guides';

type GuideCategory = 'all' | 'start-here' | 'intermediate' | 'professional';

const categories: {
  label: string;
  value: GuideCategory;
  description: string;
}[] = [
  {
    label: 'All Guides',
    value: 'all',
    description: 'Complete library',
  },
  {
    label: 'Start Here',
    value: 'start-here',
    description: 'Beginner-friendly',
  },
  {
    label: 'Intermediate',
    value: 'intermediate',
    description: 'Build confidence',
  },
  {
    label: 'Professional',
    value: 'professional',
    description: 'Advanced insight',
  },
];

function getGuideType(guide: any) {
  return guide.type || guide.format || 'text';
}

function getTimeLabel(guide: any) {
  const type = getGuideType(guide);
  const time =
    guide.readTime ||
    guide.watchTime ||
    guide.duration ||
    guide.estimatedTime ||
    '8 min';

  return type === 'video' ? `${time} watch` : `${time} read`;
}

export function GuidesLibrary() {
  const [activeCategory, setActiveCategory] = useState<GuideCategory>('all');

  const filteredGuides = useMemo(() => {
    if (activeCategory === 'all') return guides;

    return guides.filter((guide: any) => guide.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#f7f5ef]">
      {/* Hero */}
      <section className="border-b border-black/10 bg-[#050907] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              Investing Guides
            </div>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Practical guides for understanding African markets.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Clear, structured explainers to help you understand investing,
              markets, risk, instruments, and opportunities across Nigeria and Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Browse by level
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                      : 'border-black/10 bg-[#f7f5ef] text-gray-900 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white'
                  }`}
                >
                  <span className="block text-sm font-semibold">
                    {category.label}
                  </span>
                  <span
                    className={`mt-1 block text-xs ${
                      isActive ? 'text-primary-foreground/75' : 'text-gray-500'
                    }`}
                  >
                    {category.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Guide Count */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-600">
              Showing{' '}
              <span className="font-semibold text-gray-950">
                {filteredGuides.length}
              </span>{' '}
              guide{filteredGuides.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide: any, index: number) => {
            const guideType = getGuideType(guide);
            const isVideo = guideType === 'video';

            return (
              <motion.article
                key={guide.id || guide.slug || guide.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <Link
                  href={guide.href || `/investing-guides/${guide.slug}`}
                  className="flex h-full flex-col"
                >
                  {/* Top visual/type strip */}
                  <div
                    className={`relative flex h-32 items-center justify-center overflow-hidden ${
                      isVideo
                        ? 'bg-gradient-to-br from-black to-emerald-950'
                        : 'bg-gradient-to-br from-[#f7f5ef] to-white'
                    }`}
                  >
                    <div
                      className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        isVideo
                          ? 'bg-white/10 text-white backdrop-blur'
                          : 'border border-black/10 bg-white text-gray-700'
                      }`}
                    >
                      {isVideo ? (
                        <PlayCircle className="h-3.5 w-3.5" />
                      ) : (
                        <FileText className="h-3.5 w-3.5" />
                      )}
                      {isVideo ? 'Video' : 'Text'}
                    </div>

                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl ${
                        isVideo
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {isVideo ? (
                        <PlayCircle className="h-7 w-7" />
                      ) : (
                        <FileText className="h-7 w-7" />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        {guide.category
                          ?.replace('-', ' ')
                          ?.replace(/\b\w/g, (char: string) =>
                            char.toUpperCase()
                          ) || 'Guide'}
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-[#f7f5ef] px-2.5 py-1 text-xs font-medium text-gray-600">
                        <Clock className="h-3.5 w-3.5" />
                        {getTimeLabel(guide)}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold leading-snug text-gray-950 transition-colors group-hover:text-primary">
                      {guide.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {guide.summary || guide.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        {isVideo ? 'Watch guide' : 'Read guide'}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {filteredGuides.length === 0 && (
          <div className="mt-6 rounded-2xl border border-black/10 bg-white px-6 py-14 text-center shadow-sm">
            <p className="text-sm text-gray-600">
              No guides found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}