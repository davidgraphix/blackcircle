'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  BookOpen,
  Play,
  Building2,
  Newspaper,
} from 'lucide-react';

const featuredContent = [
  {
    id: 'market-scoop',
    eyebrow: 'Market Scoop',
    title: 'African Eurobond Market Update',
    description: 'A concise look at recent sovereign bond movements, investor appetite, and what it means for African markets.',
    href: '/market-scoop',
    icon: Newspaper,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=420&fit=crop',
  },
  {
    id: 'guides',
    eyebrow: 'Investing Guides',
    title: 'Understanding Nigerian Financial Markets',
    description: "A practical guide to Nigeria's capital markets, instruments, participants, and investment pathways.",
    href: '/investing-guides',
    icon: BookOpen,
    image: '/investing-guides.png',
  },
  {
    id: 'training',
    eyebrow: 'Corporate Training',
    title: 'Practical market training for your team',
    description: 'Custom-designed learning programs for institutions, professionals, and market-facing teams.',
    href: '/corporate-training',
    icon: Building2,
    image: '/custom-training.png',
  },
  {
    id: 'learning',
    eyebrow: 'Learning',
    title: 'Structured learning for investors',
    description: 'Build market confidence through practical courses and guided learning paths.',
    href: '/learning',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=420&fit=crop',
  },
];

export function ServicesMatrix() {
  return (
    <section className="bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredContent.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link href={item.href}>
                <div className="group h-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>

                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                        {item.eyebrow}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-semibold leading-snug text-gray-950 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
                      {item.description}
                    </p>

                    <p className="mt-4 text-sm font-semibold text-primary">
                      Explore →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}