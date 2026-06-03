'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Building2,
  Compass,
  LineChart,
  Newspaper,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { marketScoops } from '@/data/marketScoop';
import { stories } from '@/data/stories';

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
  const featuredScoop =
    marketScoops.find((item) => item.featured) || marketScoops[0];

  const latestScoops = marketScoops
    .filter((item) => item.id !== featuredScoop?.id)
    .slice(0, 3);

  const featuredStory =
    stories.find((item: any) => item.featured) || stories[0];

  const storyItems = stories
    .filter((item: any) => item.id !== featuredStory?.id)
    .slice(0, 4);

  const marketThemes = ['Research', 'Intelligence', 'Markets', 'Macro'];

  const ecosystemCards = [
    {
      title: 'Market Scoop',
      description:
        'Timely insight on markets, companies, sectors, and investment themes across Africa.',
      href: '/market-scoop',
      icon: Newspaper,
      cta: 'Explore',
    },
    {
      title: 'Market Guides',
      description:
        'Clear, practical guides on financial instruments, markets, and the forces shaping local markets.',
      href: '/investing-guides',
      icon: BookOpen,
      cta: 'Explore',
    },
    {
      title: 'Institutional Programmes',
      description:
        'Tailored market briefings and structured programmes for institutions and professional teams following domestic markets.',
      href: '/corporate-training',
      icon: Building2,
      cta: 'Discuss a Programme',
    },
  ];

  return (
    <main className="bg-[#f7f5ef]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10 bg-[#f7f5ef] text-[#111111]">
        <div className="absolute inset-0 opacity-[0.1]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* Left Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                African Market Intelligence
              </div>

              <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[0.96] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
                Intelligence for African Capital Markets
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
                BlackCircle delivers clear, research-driven perspectives and
                market insights on African markets.
              </p>

              {/* Hero Image directly under hero text */}
              <div className="mt-7 overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-3 shadow-sm backdrop-blur">
                <div className="relative h-56 overflow-hidden rounded-2xl bg-black sm:h-64 lg:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=700&fit=crop"
                    alt="African capital markets"
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Small terminal overlay */}
                  <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-black/45 px-3 py-2 backdrop-blur">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                      Research Signal
                    </p>
                    <p className="mt-1 text-xs text-white/75">
                      Macro • Markets • Policy
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      Research-led, market-aware
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85">
                      Restrained market intelligence for professionals, investors,
                      and institutions following Africa’s financial systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/market-scoop"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Market Scoop
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/investing-guides"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111111] shadow-sm transition-colors hover:border-primary hover:text-primary"
                >
                  See Market Guides
                </Link>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {marketThemes.map((theme) => (
                  <div
                    key={theme}
                    className="rounded-2xl border border-black/10 bg-white/80 p-2 text-center shadow-sm backdrop-blur"
                  >
                    <p className="text-sm font-semibold text-[#111111]">
                      {theme}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>


            {/* Right Market Intelligence Panel */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl border border-black/10 bg-white/85 p-4 shadow-2xl shadow-black/5 backdrop-blur"
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

                {/* Mini Market Metrics */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { label: 'NGX ASI', value: '+0.42%', tone: 'text-emerald-700' },
                    { label: 'T-Bills', value: '19.5%', tone: 'text-[#111111]' },
                    { label: 'Inflation', value: '28.9%', tone: 'text-amber-700' },
                    { label: 'FX Watch', value: 'Active', tone: 'text-primary' },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-black/10 bg-white p-3 shadow-sm"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/45">
                        {metric.label}
                      </p>
                      <p className={`mt-1 text-lg font-semibold ${metric.tone}`}>
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trending List */}
                <div className="mt-5 grid gap-3">
                  {latestScoops.map((item, index) => (
                    <Link
                      href={`/market-scoop/${item.slug}`}
                      key={item.id}
                      className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40"
                    >
                      <div className="flex items-start gap-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f7f5ef] text-xs font-semibold text-black/60">
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

                {/* Research Themes */}
                {/* <div className="mt-5 border-t border-black/10 pt-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
        Research themes
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {marketThemes.map((theme) => (
          <span
            key={theme}
            className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/60 shadow-sm"
          >
            {theme}
          </span>
        ))}
      </div>
    </div> */}

                {/* Bottom briefing note */}
                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Today’s Briefing
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">
                    Watch policy direction, liquidity conditions, FX pressure, and investor
                    positioning across local markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* MARKET TICKER STRIP */}
      <section className="border-b border-black/10 bg-[#050907] text-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            <span className="font-bold uppercase tracking-[0.18em] text-primary">
              Market Watch
            </span>

            {[
              ['NGX ASI', '+0.42%'],
              ['T-Bill 364D', '19.5%'],
              ['Inflation', '28.9%'],
              ['Eurobonds', 'Mixed'],
              ['FX Liquidity', 'Active'],
              ['Banking Sector', 'Positive'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-white/45">{label}</span>
                <span className="font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PUBLICATION */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Market Scoop
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-gray-950 lg:text-4xl">
                Commentary &amp; Analysis
              </h2>
            </div>

            <Link
              href="/market-scoop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              View all Publications
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
                      Featured Publication
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
                      <span>
                        {featuredScoop.author?.name ||
                          'BlackCircle Research Desk'}
                      </span>
                    </div>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read analysis
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
                      <span className="text-xs text-gray-500">
                        {formatDate(item.date)}
                      </span>
                      <span className="text-sm font-semibold text-primary">
                        Read →
                      </span>
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              The BlackCircle Platform
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950 lg:text-5xl">
              One Platform for African Market Intelligence
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Research, analysis, and tools designed to support better decision-making.
            </p>

            <div className="mt-7 overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-sm">
              <div className="relative h-72 overflow-hidden rounded-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=650&fit=crop"
                  alt="African market intelligence platform"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
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
                  <Link href={card.href} className="flex gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-950">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {card.description}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        {card.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Stories
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-gray-950 lg:text-4xl">
              Explore the ideas shaping African markets.
            </h2>
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
              <Link
                href={`/stories/${featuredStory.slug}`}
                className="flex h-full flex-col"
              >
                <div className="relative h-72 overflow-hidden bg-black lg:h-full lg:min-h-[420px]">
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

            {storyItems.map((story: any, index: number) => (
              <motion.article
                key={story.id || story.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-3xl border border-black/10 bg-[#f7f5ef] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <Link href={`/stories/${story.slug}`} className="block">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    <PlayCircle className="h-3.5 w-3.5" />
                    Story
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-snug text-gray-950 group-hover:text-primary">
                    {story.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {story.description || story.excerpt}
                  </p>

                  <span className="mt-5 inline-flex text-sm font-semibold text-primary">
                    Explore story →
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BLACKCIRCLE */}
      <section className="bg-[#050907] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Why BlackCircle
              </div>

              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white lg:text-5xl">
                Financial Intelligence with discipline, clarity, and conviction.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                We bring structure, context, and judgment to financial markets,
                helping individuals and institutions understand what matters and why.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Market Context',
                  description:
                    'We provide context that helps investors understand what matters and why.',
                  icon: Compass,
                },
                {
                  title: 'Research Depth',
                  description:
                    'Analysis grounded in data, market structure, and practical investment experience.',
                  icon: BookOpen,
                },
                {
                  title: 'Institutional Relevance',
                  description:
                    'Market insights designed for professionals and organizations.',
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
    </main>
  );
}