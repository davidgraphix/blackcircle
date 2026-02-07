'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Download, ArrowRight, BookOpen, Sparkles, Award } from 'lucide-react';
import { guides, guideCategories, getGuidesByCategory } from '@/data/guides';
import { fadeInUp, cardHover } from '@/lib/motion';

const categoryIcons = {
  'start-here': BookOpen,
  intermediate: Sparkles,
  advanced: Award,
};

export function GuidesLibrary() {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
              Investing Guides
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Comprehensive guides on investment fundamentals, tailored for the Nigerian and African
              market context. Start from the basics or jump to advanced topics.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        {guideCategories.map((category) => {
          const categoryGuides = getGuidesByCategory(category.id);
          const Icon = categoryIcons[category.id];

          return (
            <section key={category.id} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{category.label}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryGuides.map((guide) => (
                  <motion.article
                    key={guide.id}
                    initial="rest"
                    whileHover="hover"
                    variants={cardHover}
                    className="group bg-card border border-border rounded-lg p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance">
                          {guide.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 text-pretty">
                          {guide.summary}
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {guide.readTime} min read
                          </span>
                        </div>
                      </div>
                      <button
                        className="flex-shrink-0 p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                        aria-label={`Download ${guide.title}`}
                      >
                        <Download className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                    <Link
                      href={`/investing-guides/${guide.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Read guide
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
