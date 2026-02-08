'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function CorporateHighlight() {
  return (
    <section className="relative h-96 md:h-[500px] bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop)',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-12 md:py-20">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
          >
            Custom training for organisations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-white/90 leading-relaxed max-w-xl"
          >
            We work with organisations to design practical, transformative training. We deliver customized, high-impact experiences that get your team investment-ready.
          </motion.p>
        </div>

        <div>
          <Link
            href="/corporate-training"
            className="inline-block text-white hover:text-primary transition-colors font-medium text-sm underline"
          >
            Learn about Corporate training
          </Link>
        </div>
      </div>
    </section>
  );
}
