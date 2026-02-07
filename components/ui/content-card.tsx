'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { cardHover } from '@/lib/motion';

interface ContentCardProps {
  title: string;
  description?: string;
  href: string;
  image?: string;
  meta?: string;
  tags?: string[];
  badge?: string;
  className?: string;
  variant?: 'default' | 'featured' | 'compact';
}

export function ContentCard({
  title,
  description,
  href,
  image,
  meta,
  tags,
  badge,
  className,
  variant = 'default',
}: ContentCardProps) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className={cn(
        'group bg-card border border-border rounded-lg overflow-hidden',
        className
      )}
    >
      <Link href={href} className="block h-full">
        {image && (
          <div className={cn(
            'relative bg-muted overflow-hidden',
            variant === 'featured' ? 'aspect-[16/9]' : 'aspect-[4/3]'
          )}>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent z-10" />
            {badge && (
              <span className="absolute top-3 left-3 z-20 px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                {badge}
              </span>
            )}
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className={cn(
          'p-5',
          variant === 'compact' && 'p-4'
        )}>
          {meta && (
            <p className="text-xs text-muted-foreground mb-2">{meta}</p>
          )}
          <h3 className={cn(
            'font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance',
            variant === 'featured' ? 'text-xl' : 'text-base'
          )}>
            {title}
          </h3>
          {description && (
            <p className={cn(
              'mt-2 text-muted-foreground line-clamp-2 text-pretty',
              variant === 'compact' ? 'text-sm' : 'text-sm'
            )}>
              {description}
            </p>
          )}
          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
