'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  GraduationCap,
  BarChart3,
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { fadeInUp, staggerContainer, buttonTap } from '@/lib/motion';

const offerings = [
  {
    icon: GraduationCap,
    title: 'Financial Literacy Programs',
    description:
      'Foundational courses covering personal finance, savings, investments, and retirement planning for employees at all levels.',
  },
  {
    icon: TrendingUp,
    title: 'Market Analysis Training',
    description:
      'Advanced programs for finance teams on analyzing Nigerian and African markets, including equities, fixed income, and FX.',
  },
  {
    icon: BarChart3,
    title: 'Investment Committee Workshops',
    description:
      'Specialized training for board members and investment committees on portfolio management and risk oversight.',
  },
  {
    icon: Briefcase,
    title: 'Custom Solutions',
    description:
      'Tailored programs designed around your organization\'s specific needs, industry context, and learning objectives.',
  },
];

const benefits = [
  'Improved financial decision-making across your organization',
  'Enhanced employee engagement and retention',
  'Better understanding of market dynamics affecting your business',
  'Practical skills applicable to daily work contexts',
  'Certificates of completion for participants',
  'Ongoing support and refresher materials',
];

const clients = [
  'Financial Services Firms',
  'Pension Fund Administrators',
  'Asset Management Companies',
  'Corporate Treasury Teams',
  'HR & Employee Benefits Teams',
  'Professional Associations',
];

export function CorporateTrainingPage() {
  return (
    <>
      {/* Hero Section - Dark theme */}
      <section className="relative bg-foreground overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance font-serif"
            >
              Learning that meets the market
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-xl text-white/80 leading-relaxed max-w-2xl text-pretty"
            >
              Every programme is designed in collaboration with your team.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10">
              <motion.div whileTap={buttonTap}>
                <Link
                  href="/contact?subject=corporate"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start the conversation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-background py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Training can be delivered as:</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>In-person workshops</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Virtual instructor-led sessions</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Blended programmes supported by our learning platform.</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Working alongside leading institutions</h2>
          <div className="flex flex-wrap gap-4">
            {['Assets managers', 'Banks', 'Fintech companies', 'Regulatory bodies and others'].map((item) => (
              <div key={item} className="px-6 py-3 border border-border rounded-full text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Grid Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">We cover a wide range of market topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <offering.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                  {offering.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Why Partner with BlackCircle?"
              description="Our training programs deliver measurable impact for your organization."
            />
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Who We Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {clients.map((client) => (
                <span
                  key={client}
                  className="px-4 py-2 bg-muted text-sm text-muted-foreground rounded-full"
                >
                  {client}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <Users className="h-10 w-10 text-primary" />
                <div>
                  <div className="text-2xl font-semibold text-card-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Professionals trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
            Ready to invest in your team?
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Let&apos;s discuss how BlackCircle can help build financial capability across your organization.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileTap={buttonTap}>
              <Link
                href="/contact?subject=corporate"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div whileTap={buttonTap}>
              <Link
                href="/learning"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-transparent border border-border rounded-lg hover:bg-muted transition-colors"
              >
                View Course Catalog
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
