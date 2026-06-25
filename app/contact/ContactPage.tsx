'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { buttonTap } from '@/lib/motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    reason: 'General enquiries',
    name: '',
    email: '',
    message: '',
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
              For general enquiries, institutional programmes, partnerships, or
              support, send us a message and we’ll route it properly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Contact details */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Contact details
              </p>

              <div className="mt-5 space-y-4">
  <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-[#f7f5ef] p-4">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-sm">
      <Mail className="h-5 w-5" />
    </span>

    <div>
      <p className="text-sm font-semibold text-gray-950">Email</p>
      <p className="mt-1 text-sm leading-relaxed text-gray-600">
        hello@blackcircle.africa
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-[#f7f5ef] p-4">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-sm">
      <Phone className="h-5 w-5" />
    </span>

    <div>
      <p className="text-sm font-semibold text-gray-950">Phone number</p>
      <p className="mt-1 text-sm leading-relaxed text-gray-600">
        +234 815 695 9350
      </p>
    </div>
  </div>

  <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-[#f7f5ef] p-4">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-sm">
      <MapPin className="h-5 w-5" />
    </span>

    <div>
      <p className="text-sm font-semibold text-gray-950">Contact address</p>
      <p className="mt-1 text-sm leading-relaxed text-gray-600">
        3rd Floor, Mansard Place<br />
        927/928 Bishop Aboyade Cole Street<br />
        Victoria Island, Lagos
      </p>
    </div>
  </div>
</div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#050907] p-6 text-white shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-white">
                Need guidance?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Choose the most relevant reason in the form and we’ll direct your
                enquiry to the right channel.
              </p>
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
                      className="mb-2 block text-base font-semibold text-gray-900"
                    >
                      Reason for contact
                    </label>
                    <select
                      id="reason"
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({ ...formData, reason: e.target.value })
                      }
                      className="h-13 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 py-3 text-base text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option>General enquiries</option>
                      <option>Institutional Programmes</option>
                      <option>Partnerships</option>
                      <option>Support</option>
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-base font-semibold text-gray-900"
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
                        className="h-13 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 py-3 text-base text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-base font-semibold text-gray-900"
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
                        className="h-13 w-full rounded-xl border border-black/10 bg-[#f7f5ef] px-4 py-3 text-base text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-base font-semibold text-gray-900"
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
                      className="w-full resize-none rounded-xl border border-black/10 bg-[#f7f5ef] px-4 py-3 text-base text-gray-950 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us what you need..."
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