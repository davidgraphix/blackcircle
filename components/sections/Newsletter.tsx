'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { buttonTap } from '@/lib/motion';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">Newsletter</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Get updates on new insights, stories, guides, and courses delivered to your inbox.
          </p>
          
          {status === 'success' ? (
            <div className="mt-8 flex items-center justify-center gap-2 py-4 px-6 bg-green-50 text-green-800 rounded-lg">
              <Check className="h-5 w-5" />
              <span className="font-medium">Thanks for subscribing! Check your inbox to confirm.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-3 text-sm bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileTap={buttonTap}
                  className="px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </motion.button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
