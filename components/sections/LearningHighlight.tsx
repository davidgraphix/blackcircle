'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { getFeaturedCourses } from '@/data/courses';
import { cardHover } from '@/lib/motion';

const levelColors = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-blue-100 text-blue-800',
  Advanced: 'bg-purple-100 text-purple-800',
};

export function LearningHighlight() {
  const featuredCourses = getFeaturedCourses(2);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Learn how African markets really work</h2>
          <p className="mt-3 text-muted-foreground max-w-8xl">
            Whether you're investing independently or building capacity within a corporate role, understanding local markets requires market-specific knowledge grounded in how things work in practice.
          </p>
        </div>

        {/* Course Cards - Horizontal Layout */}
        <div className="space-y-6 mb-8">
          {featuredCourses.map((course) => (
            <motion.article
              key={course.id}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group flex flex-col md:flex-row gap-6 items-start"
            >
              <Link href={`/learning/courses/${course.slug}`} className="flex-shrink-0 md:flex-shrink-0">
                <div className="w-40 h-32 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=160&fit=crop"
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="flex-1 flex flex-col justify-start">
                <Link href={`/learning/courses/${course.slug}`} className="block">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </Link>

                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded ${levelColors[course.level]}`}>
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </span>
                  </div>
                  <Link
                    href={`/learning/courses/${course.slug}`}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View course <ArrowRight className="inline-block ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Courses Link */}
        <div className="text-center">
          <Link
            href="/learning"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors underline"
          >
            View all courses
          </Link>
        </div>
      </div>
    </section>
  );
}
