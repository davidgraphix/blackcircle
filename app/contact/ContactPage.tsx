'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Building2,
  Handshake,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { buttonTap } from '@/lib/motion';

const contactOptions = [
  {
    title: 'General enquiries',
    description: 'Questions about BlackCircle, content, partnerships, or media.',
    icon: MessageSquare,
  },
  {
    title: 'Corporate training',
    description: 'Speak to us about training programs for your team or institution.',
    icon: Building2,
  },
  {
    title: 'Partnerships',
    description: 'Explore collaboration opportunities with BlackCircle.',
    icon: Handshake,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    reason: 'General enquiry',
    name: '',
    email: '',
    message: '',
    website: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection
    if (formData.website) return;

    setSubmitted(true);
  };

  return (
    <main className="bg-[#f7f5ef]">
      {/* Hero */}
      <section className="border-b border-black/10 bg-[#050907] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Mail className="h-3.5 w-3.5" />
              Contact BlackCircle
            </div>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Speak with us.
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              For general enquiries, corporate training, partnerships, or support,
              send us a message and we’ll route it properly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Layout */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left column */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Direct email
              </p>

              <div className="mt-4 flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>

                <div>
                  <h2 className="text-lg font-semibold text-gray-950">
                    hello@blackcircle.africa
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Use this email for direct enquiries, corporate conversations,
                    and partnership requests.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {contactOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <article
                    key={option.title}
                    className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
                  >
                    <div className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f7f5ef] text-primary">
                        <Icon className="h-5 w-5" />
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold text-gray-950">
                          {option.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#050907] p-6 text-white shadow-sm">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-primary">
                  <HelpCircle className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Not sure who to contact?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    Choose “General enquiry” in the form and we’ll route your message
                    to the right person.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm lg:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </span>

                <h2 className="mt-5 font-serif text-3xl font-semibold text-gray-950">
                  Message received.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                  Thanks for reaching out. The BlackCircle team will review your
                  message and respond as soon as possible.
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
                    Send a message
                  </p>

                  <h2 className="mt-3 font-serif text-3xl font-semibold text-gray-950">
                    How can we help?
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Fill the form below and we’ll get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="reason"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Reason for contact
                    </label>
                    <select
                      id="reason"
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({ ...formData, reason: e.target.value })
                      }
                      className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option>General enquiry</option>
                      <option>Corporate training</option>
                      <option>Partnerships</option>
                      <option>Support</option>
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-gray-900"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="Your name"
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

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f5ef] px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us what you need..."
                    />
                  </div>

                  {/* Honeypot */}
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
                    Send message
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