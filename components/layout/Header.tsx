'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNavigation } from '@/data/navigation';
import { menuSlide } from '@/lib/motion';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="BlackCircle" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-xs font-medium rounded-md transition-colors',
                  pathname === item.href
                    ? 'bg-white text-black'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 bg-black/50 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuSlide}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-16 bottom-0 z-50 w-full max-w-sm bg-foreground text-background lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-6">

                {/* Nav Links */}
                <div className="flex flex-col gap-1">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'px-4 py-3 text-base font-medium rounded-lg transition-all',
                        pathname === item.href
                          ? 'bg-background text-foreground'
                          : 'text-background/80 hover:text-background hover:bg-background/10 hover:translate-x-1'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                {/* <div className="mt-6 pt-6 border-t border-background/10 flex flex-col gap-3"> */}

                  {/* Sign In */}
                  {/* <Link
                    href="/auth/sign-in"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-center text-background border border-background/20 rounded-lg hover:bg-background/10 transition-colors"
                  >
                    Sign In
                  </Link> */}

                  {/* Join */}
                  {/* <Link
                    href="/auth/join"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-center bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors"
                  >
                    Join
                  </Link> */}

                {/* </div> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}