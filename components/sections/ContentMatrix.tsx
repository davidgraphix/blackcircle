'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cardHover } from '@/lib/motion';
import { marketScoops } from '@/data/marketScoop';
import { stories } from '@/data/stories';
import { guides } from '@/data/guides';
import { courses } from '@/data/courses';

export function ContentMatrix() {
  // Get featured content from each section
  const featuredScoop = marketScoops.find((s) => s.featured) || marketScoops[0];
  const featuredStory = stories.find((s) => s.featured) || stories[0];
  const featuredGuide = guides.find((g) => g.category === 'start-here') || guides[0];
  const featuredCourse = courses.find((c) => c.featured) || courses[0];
  
  const contentTypes = [
    {
      label: 'Market Scoop',
      title: featuredScoop.title,
      description: featuredScoop.excerpt,
      href: `/market-scoop/${featuredScoop.slug}`,
      cta: 'Read article',
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=300&fit=crop',
    },
    {
      label: 'Stories',
      title: featuredStory.title,
      description: featuredStory.description,
      href: `/stories/${featuredStory.slug}`,
      cta: 'Watch story',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
    {
      label: 'Investing Guides',
      title: featuredGuide.title,
      description: featuredGuide.summary,
      href: `/investing-guides/${featuredGuide.slug}`,
      cta: 'Read guide',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    },
    {
      label: 'Learning',
      title: featuredCourse.title,
      description: featuredCourse.description,
      href: `/learning/courses/${featuredCourse.slug}`,
      cta: 'View course',
      image: 'https://images.unsplash.com/photo-1516534775068-bb57e39b7224?w=400&h=300&fit=crop',
    },
    {
      label: 'Corporate Training',
      title: 'Custom training for your organization',
      description: 'We design and deliver practical, transformative training programs tailored to your team\'s learning objectives.',
      href: '/corporate-training',
      cta: 'Learn more',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
     {
      label: 'Community',
      title: 'Join our community of investors',
      description: 'Connect with like-minded investors, share insights, and stay updated on the latest market trends.',
      href: '/community',
      cta: 'Join now',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section className="bg-black py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-5">
          {contentTypes.map((type) => (
            <motion.article
              key={type.label}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group bg-card border border-white rounded-lg overflow-hidden flex flex-col h-full hover:border-primary transition-colors"
            >
              {/* Image */}
              <div className="relative h-62 overflow-hidden bg-muted">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-3 flex flex-col flex-1">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                  {type.label}
                </span>
                <h3 className="text-sm font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                  {type.description}
                </p>
                <Link
                  href={type.href}
                  className="mt-2.5 inline-block text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {type.cta} →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
