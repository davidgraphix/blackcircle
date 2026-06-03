'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  MonitorPlay,
  Users,
} from 'lucide-react';
import { buttonTap } from '@/lib/motion';

const formats = [
  {
    title: 'In-person workshops',
    description:
      'High-impact sessions for leadership teams, investment teams, and market-facing professionals.',
    icon: Users,
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=420&fit=crop',
  },
  {
    title: 'Virtual instructor-led training',
    description:
      'Live, structured training delivered remotely for distributed teams across locations.',
    icon: MonitorPlay,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&h=420&fit=crop',
  },
  {
    title: 'Blended learning',
    description:
      'A mix of live sessions, guided materials, assignments, and follow-up learning support.',
    icon: GraduationCap,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=420&fit=crop',
  },
];

export default function CorporateTrainingPage() {
  const [formData, setFormData] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    phone: '',
    trainingType: 'In-person workshop',
    audienceSize: '',
    comments: '',
    website: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) return;

    setSubmitted(true);
  };

  return (
    <main className="bg-[#f7f5ef]">
      {/* Hero */}
      <section className="border-b border-black/10 bg-[#050907] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Building2 className="h-3.5 w-3.5" />
              Institutional Programmes
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Financial markets knowledge for teams that need practical insight
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
              BlackCircle develops bespoke learning programmes for banks, asset
              managers, regulators, fintechs, law firms and corporate teams.
              Built by practitioners, grounded in African markets, and designed
              for real-world application.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#training-enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request a proposal
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 lg:p-6">
            <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&h=900&fit=crop"
                alt="Institutional financial markets training"
                className="h-full min-h-[380px] w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Practitioner-led
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-white">
                  Practitioner insight. Market context. Real-world application.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              How we help
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-gray-950">
              From market concepts to real-world judgement.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-gray-600 sm:text-base">
            <p>
              We design bespoke learning programmes for financial institutions,
              regulators, corporates, and professional teams seeking a deeper
              understanding of capital markets and investing.
            </p>

            <p>
              Programmes are tailored to each audience&apos;s experience level,
              objectives, and operating environment, helping participants interpret
              market developments, evaluate opportunities, and make more informed
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="border-b border-black/10 bg-[#f7f5ef]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Training formats
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-gray-950">
              Flexible delivery for different teams and learning needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {formats.map((format) => {
              const Icon = format.icon;

              return (
                <article
                  key={format.title}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="relative h-40 overflow-hidden bg-black">
                    <img
                      src={format.image}
                      alt={format.title}
                      className="h-full w-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="mt-5 text-lg font-semibold text-gray-950">
                      {format.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {format.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="training-enquiry" className="bg-[#f7f5ef]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-16">
          <div>
            <div className="sticky top-24 rounded-3xl border border-black/10 bg-[#050907] p-6 text-white shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <ClipboardList className="h-3.5 w-3.5" />
                Request a proposal
              </div>

              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-white">
                Tell us what your team needs to learn.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Share a few details with us and we&apos;ll recommend a structured
                programme aligned with your team&apos;s objectives.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-semibold text-white">
                  Prefer email?
                </p>
                <p className="mt-1 text-sm text-white/60">
                  hello@blackcircle.africa
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm lg:p-8">
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </span>

                <h2 className="mt-5 font-serif text-3xl font-semibold text-gray-950">
                  Proposal request received.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                  Thank you. BlackCircle will review your training needs and
                  respond with next steps.
                </p>

                <Link
                  href="/market-scoop"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Explore Market Scoop
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Enquiry form
                  </p>

                  <h2 className="mt-3 font-serif text-3xl font-semibold text-gray-950">
                    Training enquiry
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Complete the form and we&apos;ll recommend a structured next step.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="organization"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Company or institution name"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contactPerson"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Contact person
                      </label>
                      <input
                        id="contactPerson"
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactPerson: e.target.value,
                          })
                        }
                        className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Phone number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="+234..."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="audienceSize"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Expected attendees
                      </label>
                      <input
                        id="audienceSize"
                        type="text"
                        required
                        value={formData.audienceSize}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            audienceSize: e.target.value,
                          })
                        }
                        className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="e.g. 25 people"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="trainingType"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Type of training
                    </label>
                    <select
                      id="trainingType"
                      value={formData.trainingType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          trainingType: e.target.value,
                        })
                      }
                      className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option>In-person workshop</option>
                      <option>Virtual instructor-led session</option>
                      <option>Blended learning</option>
                      <option>Executive briefing</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="comments"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Additional comments
                    </label>
                    <textarea
                      id="comments"
                      rows={6}
                      value={formData.comments}
                      onChange={(e) =>
                        setFormData({ ...formData, comments: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f5ef] px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us about your goals, topics of interest, timeline, or audience profile..."
                    />
                  </div>

                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    className="hidden"
                    aria-hidden="true"
                  />

                  <motion.button
                    type="submit"
                    whileTap={buttonTap}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                  >
                    Submit enquiry
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}