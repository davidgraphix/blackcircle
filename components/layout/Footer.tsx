'use client';

import React from "react"

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
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
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background">
                <span className="text-sm font-bold text-foreground">BC</span>
              </div>
              <span className="text-lg font-semibold">BlackCircle</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Navigate African markets with confidence. Learn, follow the pulse, and invest smarter.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/60 hover:text-background transition-colors"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Learn
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.learn.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-background/70">
              Get weekly market insights delivered to your inbox.
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm text-secondary">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4">
                <div className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2.5 text-sm bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
                  />
                  <motion.button
                    type="submit"
                    whileTap={buttonTap}
                    className="w-full px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-background/60">
              &copy; {new Date().getFullYear()} BlackCircle. All rights reserved.
            </p>
            <p className="text-xs text-background/60 max-w-md">
              Educational content only. Not personalized investment advice. Always conduct your own research before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
