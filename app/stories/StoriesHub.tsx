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
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Stories</h1>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stories Grid with Featured & Popular Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* First Story - Large */}
          {featured && (
            <motion.article
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="md:col-span-1 group"
            >
              <Link
                href={`/stories/${featured.slug}`}
                className="block bg-card border border-border rounded-lg overflow-hidden h-full"
              >
                <div className="aspect-square bg-muted relative flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white fill-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground text-sm group-hover:text-primary transition-colors text-balance">
                    {featured.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{featured.duration}</p>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Middle stories - 2 stacked */}
          <div className="md:col-span-1 grid grid-cols-1 gap-6">
            {otherStories.slice(0, 2).map((story) => (
              <motion.article
                key={story.id}
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="group bg-card border border-border rounded-lg overflow-hidden"
              >
                <Link href={`/stories/${story.slug}`} className="block">
                  <div className="aspect-square bg-muted relative flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop"
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-card-foreground text-xs group-hover:text-primary transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Right side - Popular stories */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Popular stories</h3>
            <div className="space-y-3">
              {otherStories.slice(2, 5).map((story, index) => (
                <Link
                  key={story.id}
                  href={`/stories/${story.slug}`}
                  className="group flex gap-3 pb-3 border-b border-border last:border-b-0 hover:opacity-80 transition-opacity"
                >
                  <div className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors min-w-6">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {story.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{story.duration}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Rest of Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherStories.slice(5).map((story) => (
            <motion.article
              key={story.id}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group bg-card border border-border rounded-lg overflow-hidden"
            >
              <Link href={`/stories/${story.slug}`} className="block">
                <div className="aspect-video bg-muted relative flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{story.duration}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
