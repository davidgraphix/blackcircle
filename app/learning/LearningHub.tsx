'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, BarChart, ArrowRight } from 'lucide-react';
import { courses } from '@/data/courses';
import { fadeInUp, cardHover } from '@/lib/motion';
import type { Course } from '@/types';

const levels: Course['level'][] = ['Beginner', 'Intermediate', 'Advanced'];

const levelColors = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-blue-100 text-blue-800',
  Advanced: 'bg-purple-100 text-purple-800',
};

export function LearningHub() {
  const [selectedLevel, setSelectedLevel] = useState<Course['level'] | 'All'>('All');

  const filteredCourses = useMemo(() => {
    if (selectedLevel === 'All') return courses;
    return courses.filter((course) => course.level === selectedLevel);
  }, [selectedLevel]);

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Learning</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Structured courses to build your investment knowledge from the ground up. Learn at
              your own pace with expert-led content.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedLevel('All')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedLevel === 'All'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All Courses
          </button>
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedLevel === level
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <motion.article
              key={course.id}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group bg-card border border-border rounded-lg overflow-hidden"
            >
              <Link href={`/learning/courses/${course.slug}`} className="block">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <BarChart className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded ${levelColors[course.level]}`}
                    >
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 text-pretty">
                    {course.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View course
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found for this level.</p>
          </div>
        )}
      </div>
    </div>
  );
}
