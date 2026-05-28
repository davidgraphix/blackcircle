import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Compass,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';

const values = [
  {
    title: 'Clarity over noise',
    description:
      'We simplify market information without watering it down, helping users understand what matters and why.',
    icon: Compass,
  },
  {
    title: 'Education before action',
    description:
      'BlackCircle is built around informed participation, not hype, speculation, or impulsive decisions.',
    icon: BookOpen,
  },
  {
    title: 'Trust and discipline',
    description:
      'Our tone, structure, and content are designed to feel credible, consistent, and institutionally responsible.',
    icon: ShieldCheck,
  },
];

const whatWeDo = [
  {
    title: 'Market intelligence',
    description:
      'Timely insights, explainers, and commentary on African markets, economics, policy, and investment themes.',
    icon: BarChart3,
  },
  {
    title: 'Investing education',
    description:
      'Structured guides and learning resources that help individuals and professionals build market confidence.',
    icon: BookOpen,
  },
  {
    title: 'Corporate training',
    description:
      'Custom training programs for institutions, teams, and professionals working across finance and adjacent sectors.',
    icon: Building2,
  },
];

const audiences = [
  'Retail and aspiring investors',
  'African diaspora audiences',
  'Finance, law, accounting, and business professionals',
  'Banks, asset managers, fintechs, regulators, and corporates',
];

export default function AboutPage() {
  return (
    <main className="bg-[#f7f5ef]">
      {/* Hero */}
      <section className="border-b border-black/10 bg-[#050907] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              About BlackCircle
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building the front page of African market intelligence.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
              BlackCircle is a modern, Africa-focused digital hub helping people
              understand, navigate, and participate in financial markets with
              more confidence — starting with Nigeria and expanding across the
              continent and diaspora.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/market-scoop"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Market Scoop
              </Link>

              <Link
                href="/corporate-training"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                Corporate Training
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 lg:p-6">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Our positioning
              </p>

              <h2 className="mt-4 font-serif text-2xl font-semibold text-white">
                Serious like a financial institution. Clear like a good teacher.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                BlackCircle is not trying to be flashy or gimmicky. The brand
                combines financial credibility, editorial discipline, and
                accessible education for people who want to understand African
                markets properly.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">Nigeria</p>
                <p className="mt-1 text-xs text-white/50">Starting market</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">Africa</p>
                <p className="mt-1 text-xs text-white/50">Continental focus</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">Diaspora</p>
                <p className="mt-1 text-xs text-white/50">Global audience</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">Markets</p>
                <p className="mt-1 text-xs text-white/50">Core language</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Why we exist
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950">
              To make African markets more understandable, accessible, and actionable.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-gray-600 sm:text-base">
            <p>
              Financial markets can feel distant, technical, and intimidating —
              especially across emerging markets where information is often
              fragmented, jargon-heavy, or difficult to interpret.
            </p>

            <p>
              BlackCircle exists to close that gap. We help individuals,
              professionals, institutions, and diaspora audiences understand how
              markets work, what is changing, and how to think about opportunities
              with structure and discipline.
            </p>

            <p>
              Our goal is not to create noise. It is to become a trusted guide for
              market learning, insight, and participation across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-b border-black/10 bg-[#f7f5ef]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              What we do
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-gray-950">
              One ecosystem for insights, learning, and institutional training.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              BlackCircle brings together content, education, and corporate
              learning in a unified experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {whatWeDo.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Our principles
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950">
              Designed for trust, clarity, and long-term credibility.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              The platform is being built as a serious market-intelligence
              ecosystem, not just a static website.
            </p>
          </div>

          <div className="space-y-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="flex gap-4 rounded-2xl border border-black/10 bg-[#f7f5ef] p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-primary shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="font-semibold text-gray-950">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="border-b border-black/10 bg-[#050907] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Globe2 className="h-3.5 w-3.5" />
              Who we serve
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white">
              Built for the people and institutions participating in Africa’s financial future.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/60">
              BlackCircle speaks to both individual learners and professional
              market participants, while maintaining one coherent brand and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-sm font-semibold text-white">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f5ef]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <Target className="h-3.5 w-3.5" />
                  Start exploring
                </div>

                <h2 className="mt-4 font-serif text-3xl font-semibold text-gray-950">
                  Understand the pulse of African markets.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
                  Read the latest market insights, browse practical investing guides,
                  or speak with us about training for your organisation.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/market-scoop"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Read Market Scoop
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-black hover:text-white"
                >
                  Contact BlackCircle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}