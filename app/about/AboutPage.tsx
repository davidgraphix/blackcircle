import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Globe2,
  LineChart,
  Linkedin,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

const whatWeDo = [
  {
    title: 'Market Scoop',
    description:
      'Timely insight and commentary on market moves, company activity, listings, investment themes and opportunities shaping Nigerian and African markets.',
    icon: LineChart,
  },
  {
    title: 'Research',
    description:
      'Market notes, company briefs, sector reviews and practical analysis designed to help investors understand what is happening and why it matters.',
    icon: BarChart3,
  },
  {
    title: 'Market Guides',
    description:
      'Clear, practical guides that help readers understand financial instruments, investment strategies, risks, and market behaviour.',
    icon: BookOpen,
  },
  {
    title: 'Institutional Programmes',
    description:
      'Bespoke learning programmes for financial institutions, regulators, fintechs, law firms, corporates and professional teams.',
    icon: Building2,
  },
];

const audiences = [
  {
    title: 'Individual Investors',
    description:
      'For people who want to understand investing, financial instruments, market behaviour and long-term wealth creation.',
  },
  {
    title: 'Professionals & Advisers',
    description:
      'For finance, law, accounting, consulting and business professionals who need sharper market context and practical financial-market knowledge.',
  },
  {
    title: 'Institutions & Market Operators',
    description:
      'For banks, asset managers, fintechs, corporates, regulators and market-facing teams building capacity and making better-informed decisions.',
  },
  {
    title: 'Diaspora & Africa-Focused Audiences',
    description:
      'For Africans abroad and global audiences who want a clearer, more grounded understanding of African markets and opportunities.',
  },
];

const teamMembers = [
  {
    name: 'Team Member One',
    role: 'Founder / Lead',
    description:
      'Leads BlackCircle’s market vision, research direction, partnerships and institutional strategy.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop',
  },
  {
    name: 'Team Member Two',
    role: 'Research & Editorial',
    description:
      'Supports research, market commentary, editorial planning and financial-market content development.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
  },
  {
    name: 'Team Member Three',
    role: 'Learning & Content',
    description:
      'Supports learning resources, institutional programmes and simplified market education for users.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f7f5ef]">
      {/* Hero */}

      <section className="relative overflow-hidden border-b border-black/10 bg-[#050907] text-white">
  <img
    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
    alt="African financial markets and city skyline"
    className="absolute inset-0 h-full w-full object-cover opacity-30"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />

  <div className="absolute inset-0 opacity-[0.08]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:72px_72px]" />
  </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              About BlackCircle
            </div>

            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Connecting African markets.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              BlackCircle exists to make African markets easier to understand.
              Through research, commentary, data, and educational resources, we
              provide the context people need to navigate investment
              opportunities with greater clarity and confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/market-scoop"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Market Scoop
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/corporate-training"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                Institutional Programmes
              </Link>
            </div>
          </div>
        </div>
</section>



      {/* Why BlackCircle */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Why BlackCircle exists
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950 lg:text-4xl">
              Better information should connect more people to better
              opportunities across African markets.
            </h2>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#f7f5ef] p-6 shadow-sm lg:p-8">
            <div className="flex gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-sm">
                <Globe2 className="h-7 w-7" />
              </span>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-gray-950">
                  We make market knowledge easier to follow.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                  African markets are active, complex, and underexplained.
                  Companies list, capital moves, rates shift, investors react
                  and opportunities emerge — but the information is often
                  scattered, technical, or disconnected from the people who need it.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                  BlackCircle brings structure, research, and plain-language
                  context to help people understand what is happening and why it
                  matters.
                </p>
              </div>
            </div>
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

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950 lg:text-4xl">
              Research, stories, guides, and programmes for African market
              understanding.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Who We Serve */}
      <section className="border-b border-black/10 bg-[#050907] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Users className="h-3.5 w-3.5" />
              Who we serve
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white lg:text-5xl">
              Built for people who need to understand, participate in, and
              shape African markets.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              BlackCircle serves individual investors, market professionals,
              institutions and diaspora audiences who need practical, credible
              and context-rich knowledge of African financial markets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-lg font-semibold text-white">
                  {audience.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              The people behind BlackCircle
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950 lg:text-4xl">
              Founder-led and supported by a small team across market content,
              research, learning and platform development.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-3xl border border-black/10 bg-[#f7f5ef] shadow-sm"
              >
                <div className="h-64 overflow-hidden bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover opacity-95"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-950">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {member.role}
                      </p>
                    </div>

                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-gray-700">
                      <Linkedin className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Replace the placeholder names, roles, descriptions, and images once
            the client sends the real team details.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f5ef]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Start exploring
                </div>

                <h2 className="mt-4 font-serif text-3xl font-semibold text-gray-950">
                  Understand the pulse of African markets.
                </h2>
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