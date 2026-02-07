'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Clock,
  CheckCircle2,
  BookOpen,
  Play,
  User,
} from 'lucide-react';
import type { Course } from '@/types';
import { fadeInUp, buttonTap } from '@/lib/motion';

interface CourseDetailProps {
  course: Course;
}

const levelColors = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-blue-100 text-blue-800',
  Advanced: 'bg-purple-100 text-purple-800',
};

export function CourseDetail({ course }: CourseDetailProps) {
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
            <Link href="/learning" className="hover:text-foreground transition-colors">
              Learning
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground truncate max-w-[200px]">{course.title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            {/* Course Header */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`px-3 py-1 text-sm font-medium rounded ${levelColors[course.level]}`}>
                {course.level}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {course.duration}
              </span>
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground leading-tight text-balance">
              {course.title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
              {course.description}
            </p>

            {/* Learning Outcomes */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                What you&apos;ll learn
              </h2>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Curriculum */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Course Curriculum
              </h2>
              <div className="mt-6 space-y-4">
                {course.modules.map((module, moduleIndex) => (
                  <div
                    key={moduleIndex}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    <div className="bg-muted/30 px-5 py-4">
                      <h3 className="font-semibold text-foreground">
                        Module {moduleIndex + 1}: {module.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {module.lessons.length} lessons
                      </p>
                    </div>
                    <ul className="divide-y divide-border">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lessonIndex}
                          className="px-5 py-3 flex items-center gap-3 text-sm"
                        >
                          <Play className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 mt-10 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              {/* Enrollment Card */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-card-foreground">Ready to start?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Begin your learning journey today with this comprehensive course.
                </p>
                <motion.button
                  whileTap={buttonTap}
                  className="mt-6 w-full px-4 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Enroll Now
                </motion.button>
                <p className="mt-4 text-xs text-center text-muted-foreground">
                  Free access for community members
                </p>
              </div>

              {/* Instructor Card */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-sm font-semibold text-card-foreground uppercase tracking-wider mb-4">
                  Your Instructor
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <User className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{course.instructor.name}</p>
                    <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {course.instructor.bio}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
