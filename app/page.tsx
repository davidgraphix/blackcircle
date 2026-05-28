'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Clock,
  Compass,
  FileText,
  GraduationCap,
  LineChart,
  Newspaper,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

import { marketScoops } from '@/data/marketScoop';
import { stories } from '@/data/stories';
import { guides } from '@/data/guides';
import { courses } from '@/data/courses';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export default function HomePage() {
  const featuredScoop = marketScoops.find((item) => item.featured) || marketScoops[0];
  const latestScoops = marketScoops.filter((item) => item.id !== featuredScoop?.id).slice(0, 3);

  const featuredStory = stories.find((item: any) => item.featured) || stories[0];
  const featuredGuide = guides[0];
  const featuredCourse = courses.find((item: any) => item.featured) || courses[0];

  const marketThemes = [
    'Treasury Bills',
    'Inflation',
    'FX Dynamics',
    'NGX Equities',
    'Eurobonds',
    'Capital Markets',
  ];

  const ecosystemCards = [
    {
      title: 'Market Scoop',
      description:
        'Timely market intelligence, policy commentary, and investment explainers across Nigeria and Africa.',
      href: '/market-scoop',
      icon: Newspaper,
      cta: 'Read insights',
    },
    {
      title: 'Investing Guides',
      description:
        'Evergreen resources that help beginners and professionals understand instruments, risk, and market structure.',
      href: '/investing-guides',
      icon: BookOpen,
      cta: 'Browse guides',
    },
    {
      title: 'Corporate Training',
      description:
        'Custom market education programs for banks, fintechs, institutions, regulators, and professional teams.',
      href: '/corporate-training',
      icon: Building2,
      cta: 'Train your team',
    },
  ];

  const stats = [
    {
      value: 'Nigeria-first',
      label: 'Market lens',
    },
    {
      value: 'Africa-aware',
      label: 'Regional context',
    },
    {
      value: 'Institutional',
      label: 'Research tone',
    },
    {
      value: 'Education-led',
      label: 'Built for clarity',
    },
  ];

  return (
    <main className="bg-[#f7f5ef]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10 bg-[#f7f5ef] text-[#111111]">
        <div className="absolute inset-0 opacity-[0.97]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />
<div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                African Market Intelligence
              </div>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[0.96] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
                Navigate African markets with clarity.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
                Intelligence, education, and market insights built for Africa’s next generation
                of investors, professionals, and institutions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/market-scoop"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Read Market Scoop
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/investing-guides"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-primary hover:text-primary shadow-sm"
                >
                  Browse Investing Guides
                </Link>
              </div>

              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-4 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-[#111111]">{stat.value}</p>
                    <p className="mt-1 text-xs text-black/45">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl border border-black/10 bg-white/80 p-4 shadow-2xl shadow-black/5 backdrop-blur"
            >
              <div className="rounded-2xl border border-black/10 bg-[#fcfbf8] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Market Pulse
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-semibold text-[#111111]">
                      What we’re watching
                    </h2>
                  </div>

                  <span className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Live themes
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  {latestScoops.map((item, index) => (
                    <Link
                      href={`/market-scoop/${item.slug}`}
                      key={item.id}
                      className="group rounded-2xl border border-black/10 bg-white p-4 transition-all hover:-translate-y-1 hover:border-primary/40 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black/10 text-xs font-semibold text-black/70">
                          {index + 1}
                        </span>

                        <div>
                          <h3 className="text-sm font-semibold leading-snug text-[#111111] transition-colors group-hover:text-primary">
                            {item.title}
                          </h3>

                          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-black/45">
                            <span>{formatDate(item.date)}</span>
                            <span>•</span>
                            <span>{item.tags[0]}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {marketThemes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60 shadow-sm"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED EDITORIAL */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Featured Intelligence
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-gray-950 lg:text-4xl">
                The latest from BlackCircle.
              </h2>
            </div>

            <Link
              href="/market-scoop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              View all Market Scoop
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="group overflow-hidden rounded-3xl border border-black/10 bg-[#f7f5ef] shadow-sm"
            >
              <Link
                href={`/market-scoop/${featuredScoop.slug}`}
                className="grid h-full grid-cols-1 md:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative min-h-[320px] overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop"
                    alt={featuredScoop.title}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-between p-6 lg:p-8">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      <Newspaper className="h-3.5 w-3.5" />
                      Featured Scoop
                    </div>

                    <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight text-gray-950 transition-colors group-hover:text-primary lg:text-4xl">
                      {featuredScoop.title}
                    </h3>

                    <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-gray-600">
                      {featuredScoop.excerpt}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span>{formatDate(featuredScoop.date)}</span>
                      <span className="text-gray-300">•</span>
                      <span>{featuredScoop.author?.name || 'BlackCircle Research Desk'}</span>
                    </div>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read full analysis
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>

            <div className="grid gap-5">
              {latestScoops.slice(0, 2).map((item, index) => (
                <motion.article
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <Link href={`/market-scoop/${item.slug}`}>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      <LineChart className="h-3.5 w-3.5" />
                      {item.tags[0]}
                    </div>

                    <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-gray-950 transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {item.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="text-xs text-gray-500">{formatDate(item.date)}</span>
                      <span className="text-sm font-semibold text-primary">Read →</span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="border-b border-black/10 bg-[#f7f5ef]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              The BlackCircle Ecosystem
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950 lg:text-5xl">
              One platform for insight, education, and institutional learning.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              BlackCircle brings together market intelligence, investing education, and
              corporate training in one coherent experience for people and institutions
              following African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {ecosystemCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <Link href={card.href} className="block h-full">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>

                    <h3 className="mt-6 text-xl font-semibold text-gray-950">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {card.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {card.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE MATRIX */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Featured Content
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-gray-950 lg:text-4xl">
                Explore the ideas shaping African markets.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:grid-rows-2">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="group overflow-hidden rounded-3xl border border-black/10 bg-[#050907] text-white shadow-sm lg:col-span-2 lg:row-span-2"
            >
              <Link href={`/stories/${featuredStory.slug}`} className="flex h-full flex-col">
                <div className="relative h-72 overflow-hidden bg-black lg:h-full lg:min-h-[360px]">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=700&fit=crop"
                    alt={featuredStory.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary backdrop-blur">
                      <PlayCircle className="h-3.5 w-3.5" />
                      Story
                    </div>

                    <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white">
                      {featuredStory.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/65">
                      {featuredStory.description || featuredStory.excerpt}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Watch story
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="group rounded-3xl border border-black/10 bg-[#f7f5ef] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md lg:col-span-2"
            >
              <Link href="/investing-guides" className="block">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  <FileText className="h-3.5 w-3.5" />
                  Investing Guide
                </div>

                <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-gray-950 group-hover:text-primary">
                  {featuredGuide.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {featuredGuide.summary || featuredGuide.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Browse guides
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <Link href={`/learning/courses/${featuredCourse.slug}`} className="block">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-gray-950 group-hover:text-primary">
                  {featuredCourse.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                  {featuredCourse.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{featuredCourse.duration || 'Self-paced'}</span>
                </div>
              </Link>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <Link href="/corporate-training" className="block">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </span>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-gray-950 group-hover:text-primary">
                  Practical market training for your team
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                  Custom programs for institutions and market-facing professionals.
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-primary">
                  Request proposal →
                </span>
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      {/* WHY BLACKCIRCLE */}
      <section className="border-b border-white/10 bg-[#050907] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Why BlackCircle
              </div>

              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white lg:text-5xl">
                Financial intelligence with discipline, clarity, and African context.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                BlackCircle is built to feel like a trusted guide: serious enough for
                institutions, clear enough for learners, and relevant to the realities of African markets.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Clear market context',
                  description:
                    'We explain what matters in markets without turning every update into noise.',
                  icon: Compass,
                },
                {
                  title: 'Structured education',
                  description:
                    'Guides and learning paths help users build knowledge step by step.',
                  icon: BookOpen,
                },
                {
                  title: 'Institutional relevance',
                  description:
                    'Training and insights are designed for professionals and organisations.',
                  icon: Building2,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING + CORPORATE */}
      <section className="border-b border-black/10 bg-[#f7f5ef]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm lg:p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <GraduationCap className="h-3.5 w-3.5" />
              Learning Centre
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-gray-950">
              Build stronger market knowledge through structured learning.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              From beginner-friendly investing foundations to advanced market themes,
              BlackCircle’s learning experience is designed to help users understand before they act.
            </p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f5ef] p-4">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-sm">
                  <TrendingUp className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-gray-950">
                    {featuredCourse.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                    {featuredCourse.description}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/learning"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore learning
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border border-black/10 bg-[#050907] p-6 text-white shadow-sm lg:p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <Building2 className="h-3.5 w-3.5" />
              Corporate Training
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white">
              Practical financial markets training for your team.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/60">
              We design training programs for banks, asset managers, fintechs,
              regulators, corporates, and market-facing teams that need stronger financial market understanding.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {['Capital markets', 'Fixed income', 'Macro analysis', 'ESG & sustainability'].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            <Link
              href="/corporate-training"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request training
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      {/* <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#050907] p-6 text-white shadow-sm lg:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  <BarChart3 className="h-3.5 w-3.5" />
                  Stay updated
                </div>

                <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white lg:text-4xl">
                  Join the BlackCircle list.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
                  Get the scoop on investments, market intelligence, company stories,
                  transactions, conversations, and opportunities across Nigerian and African markets.
                </p>
              </div>

              <form className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-4 shadow-sm">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 flex-1 rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Join list
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-xs text-white/40">
                  Educational updates only. No spam. No personalised investment advice.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}