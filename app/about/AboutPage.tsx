'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  TrendingUp,
  Globe,
  Award,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { fadeInUp, staggerContainer, buttonTap } from '@/lib/motion';

const values = [
  {
    icon: BookOpen,
    title: 'Education First',
    description: 'We believe informed investors make better decisions. Our content prioritizes understanding over speculation.',
  },
  {
    icon: Globe,
    title: 'African Context',
    description: 'Generic financial advice often misses local nuances. We build content rooted in African market realities.',
  },
  {
    icon: Heart,
    title: 'Accessibility',
    description: 'Financial knowledge shouldn\'t be gatekept. We strive to make market insights available to everyone.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Our content is created by practitioners with real market experience, ensuring practical relevance.',
  },
];

const team = [
  {
    name: 'Adaeze Okonkwo',
    role: 'Co-Founder & Head of Content',
    bio: 'Former fixed income analyst with 8 years experience in Nigerian capital markets.',
  },
  {
    name: 'Chidi Nnamdi',
    role: 'Co-Founder & Head of Research',
    bio: 'Former equity research lead at a leading Nigerian asset management firm.',
  },
  {
    name: 'Olumide Adeyemi',
    role: 'Head of Education',
    bio: 'Curriculum development specialist with background in financial training.',
  },
];

const stats = [
  { value: '10,000+', label: 'Active Learners' },
  { value: '50+', label: 'Educational Resources' },
  { value: '500+', label: 'Corporate Trainees' },
  { value: '3', label: 'Years Building' },
];

export function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,128,128,0.03),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance"
            >
              Democratizing financial education for Africa
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty"
            >
              BlackCircle was founded on a simple belief: that every African should have access to 
              quality financial education and market insights, regardless of their starting point.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-card-foreground">Our Mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To empower individuals and organizations with the knowledge and tools they need 
              to navigate African markets with confidence. We make complex financial concepts 
              accessible and actionable.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <Eye className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-card-foreground">Our Vision</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A continent where financial literacy is the norm, not the exception. Where every 
              market participant — from first-time investors to seasoned professionals — has 
              access to quality insights and education.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeader
          title="What We Stand For"
          description="The principles that guide everything we do at BlackCircle."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent shrink-0">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <SectionHeader
          title="The Team"
          description="Meet the people behind BlackCircle."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
            Join us on this journey
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Whether you&apos;re an individual investor or a corporate team, we&apos;re here to support 
            your financial education journey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileTap={buttonTap}>
              <Link
                href="/learning"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Start Learning
              </Link>
            </motion.div>
            <motion.div whileTap={buttonTap}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-transparent border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
