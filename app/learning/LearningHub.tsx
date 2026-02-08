'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Search } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    let result = selectedLevel === 'All' ? courses : courses.filter((course) => course.level === selectedLevel);
    if (searchQuery) {
      result = result.filter((course) => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  }, [selectedLevel, searchQuery]);

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Learn African markets, step by step</h1>
            
            {/* Search Bar */}
            <div className="mt-6 relative max-w-md">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search keywords and topics"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <motion.article
              key={course.id}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group bg-card border border-border rounded-lg overflow-hidden flex flex-col"
            >
              <Link href={`/learning/courses/${course.slug}`} className="block flex-1 flex flex-col">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors text-balance">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {course.level} • {course.duration}
                  </p>
                </div>
              </Link>
              <div className="px-4 pb-4 border-t border-border">
                <button className="w-full text-center text-sm font-medium text-foreground bg-muted rounded px-3 py-2 hover:bg-muted/80 transition-colors">
                  {selectedLevel !== course.level && course.level === 'Intermediate' ? 'Continue course' : 'View course'}
                </button>
              </div>
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
