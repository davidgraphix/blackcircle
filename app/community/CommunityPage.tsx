'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  MessageSquare,
  Calendar,
  Trophy,
  ArrowRight,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { fadeInUp, staggerContainer, buttonTap } from '@/lib/motion';

const communityFeatures = [
  {
    icon: MessageSquare,
    title: 'Discussion Forums',
    description:
      'Engage in thoughtful discussions about market trends, investment strategies, and economic developments.',
  },
  {
    icon: Calendar,
    title: 'Live Events',
    description:
      'Join webinars, Q&A sessions, and virtual meetups with market experts and fellow community members.',
  },
  {
    icon: Trophy,
    title: 'Learning Challenges',
    description:
      'Participate in community challenges to test your knowledge and compete with peers.',
  },
  {
    icon: Users,
    title: 'Networking',
    description:
      'Connect with like-minded individuals passionate about African markets and investment.',
  },
];

const upcomingEvents = [
  {
    title: 'Monthly Market Review: February 2026',
    date: 'Feb 5, 2026',
    time: '6:00 PM WAT',
    type: 'Webinar',
  },
  {
    title: 'Treasury Bills Deep Dive',
    date: 'Feb 12, 2026',
    time: '5:30 PM WAT',
    type: 'Workshop',
  },
  {
    title: 'Community AMA with Equity Analysts',
    date: 'Feb 20, 2026',
    time: '7:00 PM WAT',
    type: 'Q&A Session',
  },
];

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/blackcircle', followers: '12.5K' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/blackcircle', followers: '8.2K' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@blackcircle', followers: '5.1K' },
];

export function CommunityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,128,128,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Community
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance"
            >
              Learn and grow together
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty"
            >
              Join a community of investors, analysts, and market enthusiasts who are passionate 
              about African markets. Share insights, ask questions, and build lasting connections.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.div whileTap={buttonTap}>
                <Link
                  href="/auth/join"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Join the Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileTap={buttonTap}>
                <a
                  href="https://twitter.com/blackcircle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-transparent border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <Twitter className="mr-2 h-5 w-5" />
                  Follow on Twitter
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="What You Get"
          description="Be part of a vibrant community of African market enthusiasts."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Events & Social Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="bg-card border border-border rounded-lg p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-accent rounded mb-2">
                        {event.type}
                      </span>
                      <h3 className="font-medium text-card-foreground">{event.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {event.date} at {event.time}
                      </p>
                    </div>
                    <Calendar className="h-5 w-5 text-muted-foreground shrink-0" />
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/events"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Follow Us</h2>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <social.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-card-foreground">{social.label}</h3>
                      <p className="text-sm text-muted-foreground">{social.followers} followers</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground text-balance">
            Ready to join the conversation?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-pretty">
            Create your free account and become part of the BlackCircle community today.
          </p>
          <motion.div whileTap={buttonTap} className="mt-8">
            <Link
              href="/auth/join"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary bg-primary-foreground rounded-lg hover:bg-primary-foreground/90 transition-colors"
            >
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
