'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import { stories, getFeaturedStory } from '@/data/stories';
import { fadeInUp, cardHover } from '@/lib/motion';

export function StoriesHub() {
  const featured = getFeaturedStory();
  const otherStories = stories.filter((story) => story.id !== featured?.id);

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Stories</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Documentary-style content exploring the people, trends, and developments shaping
              African finance and investment.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Story */}
        {featured && (
          <motion.article
            initial="rest"
            whileHover="hover"
            variants={cardHover}
            className="mb-12 group"
          >
            <Link
              href={`/stories/${featured.slug}`}
              className="block bg-card border border-border rounded-lg overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-foreground/5" />
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-primary-foreground group-hover:bg-primary transition-colors">
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                </div>
                <span className="absolute bottom-4 right-4 px-2 py-1 text-xs font-medium bg-foreground/80 text-background rounded">
                  {featured.duration}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-flex px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  Featured
                </span>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance">
                  {featured.title}
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">{featured.subtitle}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl text-pretty">
                  {featured.description}
                </p>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherStories.map((story) => (
            <motion.article
              key={story.id}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group bg-card border border-border rounded-lg overflow-hidden"
            >
              <Link href={`/stories/${story.slug}`} className="block">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 relative flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/80 text-background group-hover:bg-primary transition-colors">
                    <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 text-xs font-medium bg-foreground/80 text-background rounded flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {story.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance">
                    {story.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{story.subtitle}</p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 text-pretty">
                    {story.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
