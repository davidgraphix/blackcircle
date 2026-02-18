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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
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
                <section key={category.id} className={selectedCategory === category.id ? 'block' : 'hidden'}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    {category.label}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {categoryGuides.map((guide, index) => (
                      <motion.article
                        key={guide.id}
                        initial="rest"
                        whileHover="hover"
                        variants={cardHover}
                        className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors flex flex-col"
                      >
                        <div className="relative bg-muted h-48 overflow-hidden">
                          <img
                            src={`https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&v=${index}`}
                            alt={guide.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {index % 3 === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance">
                            {guide.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 text-pretty">
                            {guide.summary}
                          </p>
                          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {guide.readTime} min {index % 3 === 0 ? 'watch' : 'read'}
                            </span>
                          </div>
                          <Link
                            href={`/investing-guides/${guide.slug}`}
                            className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 mt-auto"
                          >
                            {index % 3 === 0 ? 'Watch now' : 'Read guide'}
                            <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
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
