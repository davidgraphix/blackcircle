'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, buttonTap } from '@/lib/motion';
import { Download, ArrowRight } from 'lucide-react';

export function ThankYouPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Success Indicator */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6"
          >
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          {/* Main Message */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance"
          >
            Your Interest Has Been Recorded
          </motion.h1>

          {/* Follow-up Text */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-pretty"
          >
            Thank you for registering your interest in the Dangote Refinery listing. You&apos;ll receive early
            notifications about timeline announcements, listing updates, and exclusive insights to help you make
            informed investment decisions.
          </motion.p>

          {/* Download CTA */}
          <motion.div variants={fadeInUp} className="mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors group"
            >
              <Download className="w-5 h-5" />
              <span>Download: What You Need to Know Before Investing</span>
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          {/* Next Steps */}
          <motion.div variants={fadeInUp} className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-8">What Happens Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-semibold mb-3">
                  1
                </div>
                <h3 className="font-semibold text-gray-900">Stay Updated</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Receive timely updates as the listing process progresses
                </p>
              </div>
              <div className="text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-semibold mb-3">
                  2
                </div>
                <h3 className="font-semibold text-gray-900">Learn & Analyze</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Access exclusive analysis and structured investment guidance
                </p>
              </div>
              <div className="text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-semibold mb-3">
                  3
                </div>
                <h3 className="font-semibold text-gray-900">Prepare & Decide</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Make informed decisions when the offering becomes available
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileTap={buttonTap}>
              <Link
                href="/market-scoop"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Market Scoop
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileTap={buttonTap}>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Join Community
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div variants={fadeInUp} className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-xs text-gray-600 leading-relaxed">
              This is an expression of interest only and does not constitute an offer, solicitation, or commitment to
              invest. BlackCircle does not guarantee access to any offering. All investments carry risk, including
              potential loss of principal.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
