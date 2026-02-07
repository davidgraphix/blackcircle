'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { buttonTap } from '@/lib/motion';

export function CommunityInvite() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Join a thoughtful community
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Connect with fellow investors, share insights, and learn together. Our community 
              brings together retail investors, professionals, students, and diaspora Africans 
              passionate about understanding African markets.
            </p>
            <motion.div whileTap={buttonTap} className="mt-6">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Join for free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
