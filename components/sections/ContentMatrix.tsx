'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { marketScoops } from '@/data/marketScoop';
import { stories } from '@/data/stories';
import { guides } from '@/data/guides';
import { courses } from '@/data/courses';

export function ContentMatrix() {
  const featuredScoop = marketScoops.find((s) => s.featured) || marketScoops[0];
  const featuredStory = stories.find((s) => s.featured) || stories[0];
  const featuredGuide = guides[0];
  const featuredCourse = courses.find((c) => c.featured) || courses[0];

  const contentTypes = [
    {
      label: 'Market Scoop',
      title: featuredScoop.title,
      description: featuredScoop.excerpt,
      href: `/market-scoop/${featuredScoop.slug}`,
      cta: 'Read article',
      image: '/market-scoop.png',
    },
    {
      label: 'Stories',
      title: featuredStory.title,
      description: featuredStory.description,
      href: `/stories/${featuredStory.slug}`,
      cta: 'Watch story',
      image: '/stories.png',
    },
    {
      label: 'Investing Guides',
      title: featuredGuide.title,
      description: featuredGuide.summary,
      href: `/investing-guides`,
      cta: 'Browse guides',
      image: '/investing-guides.png',
    },
    {
      label: 'Learning',
      title: featuredCourse.title,
      description: featuredCourse.description,
      href: `/learning/courses/${featuredCourse.slug}`,
      cta: 'View course',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=420&fit=crop',
    },
    {
      label: 'Corporate Training',
      title: 'Custom training for your organization',
      description:
        "Practical, market-relevant training programs tailored to your team's learning objectives.",
      href: '/corporate-training',
      cta: 'Learn more',
      image: '/custom-training.png',
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-16 border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Explore BlackCircle
          </p>
          <h2 className="mt-2 font-serif text-3xl lg:text-4xl font-semibold text-gray-950">
            Insights, guides, stories, and training in one place.
          </h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            BlackCircle connects market intelligence, structured education, and institutional training for people who want to understand African markets better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contentTypes.map((type, index) => (
            <motion.article
              key={type.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <Link href={type.href} className="block h-full">
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    {type.label}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-950 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {type.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-primary">
                    {type.cta} →
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}