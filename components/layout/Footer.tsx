'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Youtube, Instagram, Mail } from 'lucide-react';
import { footerNavigation, socialLinks } from '@/data/navigation';
import { buttonTap } from '@/lib/motion';

const socialIcons: Record<string, React.ElementType> = {
  Twitter,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Instagram,
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#050907] text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.35fr] gap-10 lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img src="/logo.jpeg" alt="BlackCircle" className="h-12 w-auto" />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Navigate African markets with clarity. Follow market developments,
              understand investment opportunities, and build stronger financial market knowledge.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/65 transition-colors hover:border-primary hover:text-primary"
                    aria-label={`Follow BlackCircle on ${social.label}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Market Intelligence
            </h3>

            <ul className="mt-5 space-y-3">
              {footerNavigation.marketIntelligence.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>

              <div>
                <h3 className="font-serif text-xl font-semibold text-white">
                  Join the BlackCircle list
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  Market scoop, opportunities, stories, and intelligence.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Get the scoop from BlackCircle — new listings, investment opportunities,
              company stories, market moves and key developments across Nigerian and African markets.
            </p>

            {subscribed ? (
              <p className="mt-5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
                Thanks for subscribing.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <motion.button
                  type="submit"
                  whileTap={buttonTap}
                  className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Join the list →
                </motion.button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/45">
            Educational content only. Nothing on BlackCircle constitutes personalised investment advice,
            an offer, solicitation, or commitment to invest.
          </p>

          <p className="mt-3 text-xs text-white/35">
            © {new Date().getFullYear()} BlackCircle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}