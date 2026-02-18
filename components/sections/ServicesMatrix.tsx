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
import { fadeInUp, cardHover } from '@/lib/motion';

const services = [
  {
    id: 'market-scoop',
    title: 'Market Scoop',
    description: 'Timely analysis and insights on African markets',
    href: '/market-scoop',
    icon: Newspaper,
    gradient: 'from-blue-500/20 to-blue-600/20',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 'stories',
    title: 'Stories',
    description: 'Documentary-style content exploring African finance',
    href: '/stories',
    icon: Play,
    gradient: 'from-purple-500/20 to-purple-600/20',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 'guides',
    title: 'Investing Guides',
    description: 'Comprehensive guides on investment fundamentals',
    href: '/investing-guides',
    icon: BookOpen,
    gradient: 'from-green-500/20 to-green-600/20',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 'learning',
    title: 'Learning',
    description: 'Structured courses to build investment knowledge',
    href: '/learning',
    icon: TrendingUp,
    gradient: 'from-orange-500/20 to-orange-600/20',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 'corporate',
    title: 'Corporate Training',
    description: 'Custom training programs for organizations',
    href: '/corporate-training',
    icon: Building2,
    gradient: 'from-red-500/20 to-red-600/20',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
];

export function ServicesMatrix() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - 3 columns for desktop, responsive for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index < 3; // First 3 items are larger
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${isLarge ? 'md:col-span-1' : 'md:col-span-1'}`}
              >
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative bg-card border border-border rounded-lg overflow-hidden h-full hover:border-primary transition-colors duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Image Background */}
                    <div className="relative h-40 bg-muted overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                          <Icon className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2 flex-1">
                        {service.description}
                      </p>
                      <div className="mt-3 text-xs font-semibold text-primary">
                        Explore →
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
