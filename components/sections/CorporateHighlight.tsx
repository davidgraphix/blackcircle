'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { buttonTap } from '@/lib/motion';

export function CorporateHighlight() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Custom training for organisations
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl text-pretty">
              We work with organisations to design practical, transformative training. We deliver customized, high-impact experiences that get your team investment-ready.
            </p>
            <motion.div whileTap={buttonTap} className="mt-6">
              <Link
                href="/corporate-training"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Corporate Training
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <div className="relative w-full md:w-96 h-80 rounded-lg overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Corporate Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
