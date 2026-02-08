'use client';

import { useState } from "react"

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
  const [selectedCategory, setSelectedCategory] = useState<string>('start-here');

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
                Category
              </h3>
              <div className="space-y-2">
                {guideCategories.map((category) => {
                  const Icon = categoryIcons[category.id];
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3">
            {guideCategories.map((category) => {
              const categoryGuides = getGuidesByCategory(category.id);

              return (
                <section key={category.id}>
                  {selectedCategory === category.id && (
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                      {category.label}
                    </h2>
                  )}

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
      </div>
    </div>
  );
}
