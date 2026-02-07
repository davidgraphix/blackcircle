'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Clock } from 'lucide-react';
import type { Story } from '@/types';
import { getMoreStories } from '@/data/stories';
import { fadeInUp, cardHover } from '@/lib/motion';

interface StoryDetailProps {
  story: Story;
}

export function StoryDetail({ story }: StoryDetailProps) {
  const moreStories = getMoreStories(story.slug, 3);

  // Simple content renderer for story narrative
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      // Bold text
      if (paragraph.startsWith('**') && paragraph.includes('**')) {
        const text = paragraph.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>');
        return (
          <p
            key={index}
            className="my-4 text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        );
      }
      return (
        <p key={index} className="my-4 text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav
            className="flex items-center gap-2 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/stories" className="hover:text-foreground transition-colors">
              Stories
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground truncate max-w-[200px]">{story.title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.article initial="hidden" animate="visible" variants={fadeInUp}>
          {/* Video Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-lg overflow-hidden relative flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Video content placeholder</p>
            </div>
            <span className="absolute bottom-4 right-4 px-3 py-1.5 text-sm font-medium bg-foreground/80 text-background rounded flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {story.duration}
            </span>
          </div>

          {/* Story Header */}
          <header className="mt-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
              {story.title}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">{story.subtitle}</p>
          </header>

          {/* Story Content */}
          <div className="mt-8 max-w-none">{renderContent(story.content)}</div>
        </motion.article>

        {/* More Stories */}
        {moreStories.length > 0 && (
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="text-xl font-semibold text-foreground mb-8">More Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreStories.map((related) => (
                <motion.article
                  key={related.id}
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
                  className="group bg-card border border-border rounded-lg overflow-hidden"
                >
                  <Link href={`/stories/${related.slug}`} className="block">
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 relative flex items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/80 text-background group-hover:bg-primary transition-colors">
                        <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                      </div>
                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 text-xs font-medium bg-foreground/80 text-background rounded">
                        {related.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {related.description}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
