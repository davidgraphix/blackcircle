'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import type { MarketScoop } from '@/types';
import { getRelatedScoops } from '@/data/marketScoop';
import { formatDate } from '@/lib/helpers';
import { fadeInUp, cardHover } from '@/lib/motion';
import { JSX } from 'react/jsx-runtime'; // Import JSX

interface MarketScoopArticleProps {
  scoop: MarketScoop;
}

export function MarketScoopArticle({ scoop }: MarketScoopArticleProps) {
  const relatedScoops = getRelatedScoops(scoop.slug, 3);

  // Generate table of contents from markdown content
  const toc = useMemo(() => {
    const headingRegex = /^##\s+(.+)$/gm;
    const items: { id: string; text: string }[] = [];
    let match;

    while ((match = headingRegex.exec(scoop.content)) !== null) {
      const text = match[1];
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      items.push({ id, text });
    }

    return items;
  }, [scoop.content]);

  // Simple markdown renderer
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    lines.forEach((line, index) => {
      // Headers
      if (line.startsWith('### ')) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        const text = line.replace('### ', '');
        elements.push(
          <h3 key={index} className="mt-8 mb-4 text-lg font-semibold text-foreground">
            {text}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
              {listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        const text = line.replace('## ', '');
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        elements.push(
          <h2 key={index} id={id} className="mt-10 mb-4 text-xl font-semibold text-foreground scroll-mt-24">
            {text}
          </h2>
        );
      }
      // List items
      else if (line.startsWith('- ')) {
        inList = true;
        const text = line.replace('- ', '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        listItems.push(text);
      }
      // Numbered list
      else if (/^\d+\.\s/.test(line)) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
              {listItems.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
          listItems = [];
        }
        inList = true;
        const text = line.replace(/^\d+\.\s/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        listItems.push(text);
      }
      // Paragraphs
      else if (line.trim()) {
        if (inList) {
          elements.push(
            <ul key={`list-${index}`} className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
              {listItems.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        const text = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p key={index} className="my-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
        );
      }
    });

    // Handle remaining list items
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="list-final" className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    }

    return elements;
  };

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = scoop.title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/market-scoop" className="hover:text-foreground transition-colors">
              Market Scoop
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground truncate max-w-[200px]">{scoop.title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Main Content */}
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-8"
          >
            {/* Article Header */}
            <header>
              <div className="flex flex-wrap gap-2 mb-4">
                {scoop.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
                {scoop.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      {scoop.author.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{scoop.author.name}</p>
                    <p className="text-xs">{scoop.author.role}</p>
                  </div>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>{formatDate(scoop.date)}</span>
              </div>

              {/* Share Buttons */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </span>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Copy link"
                >
                  <LinkIcon className="h-4 w-4" />
                </button>
              </div>
            </header>

            {/* Article Content */}
            <div className="mt-10 prose-container max-w-none">
              {renderContent(scoop.content)}
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-12 lg:mt-0">
            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="sticky top-24 bg-muted/30 rounded-lg p-6 mb-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  In this article
                </h3>
                <nav className="mt-4">
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </aside>
        </div>

        {/* Related Articles */}
        {relatedScoops.length > 0 && (
          <section className="mt-16 pt-16 border-t border-border">
            <h2 className="text-xl font-semibold text-foreground mb-8">Related Scoops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedScoops.map((related) => (
                <motion.article
                  key={related.id}
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
                  className="group bg-card border border-border rounded-lg overflow-hidden"
                >
                  <Link href={`/market-scoop/${related.slug}`} className="block p-5">
                    <p className="text-xs text-muted-foreground">{formatDate(related.date)}</p>
                    <h3 className="mt-2 text-base font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {related.excerpt}
                    </p>
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
