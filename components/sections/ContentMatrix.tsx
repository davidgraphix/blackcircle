'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cardHover } from '@/lib/motion';

const contentTypes = [
  {
    title: 'Market Scoop',
    description: 'Timely analysis on markets, economic indicators, and key developments shaping African finance.',
    href: '/market-scoop',
    cta: 'View latest market scoop',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=300&fit=crop',
  },
  {
    title: 'Stories',
    description: 'Documentary-style content exploring the people, trends, and developments shaping African finance.',
    href: '/stories',
    cta: 'Watch Stories',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    title: 'Investing Guides',
    description: 'Comprehensive guides on investment fundamentals, tailored for the African market context.',
    href: '/investing-guides',
    cta: 'down concepts, instruments,',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  },
];

export function ContentMatrix() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentTypes.map((type) => (
            <motion.article
              key={type.title}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group bg-card border border-border rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-muted">
                <img
                  src={type.image || "/placeholder.svg"}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground">{type.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
                <Link
                  href={type.href}
                  className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {type.cta}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
