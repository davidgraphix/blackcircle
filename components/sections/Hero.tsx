'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, buttonTap } from '@/lib/motion';

export function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[600px] flex items-center justify-start overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          // backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-0 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl lg:text-5xl font-bold text-white leading-tight text-balance font-serif"
          >
            Navigate African markets <br />with confidence
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl text-pretty"
          >
            Clear learning, market insights, and practical guidance for African finance.
          </motion.p>

          {/* <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileTap={buttonTap}>
              <Link
                href="/auth/join"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
            <motion.div whileTap={buttonTap}>
              <Link
                href="/market-scoop"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-colors"
              >
                See Market Scoop
              </Link>
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
