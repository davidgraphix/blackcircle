'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, buttonTap } from '@/lib/motion';
import { InvestorInterestForm } from './InvestorInterestForm';

export function DangoteRefineryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-balance"
            >
              Dangote Refinery: Nigeria&apos;s Next Market Moment
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg md:text-xl text-gray-600 text-balance max-w-3xl mx-auto"
            >
              Track your interest in one of Africa&apos;s most anticipated capital market opportunities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Description & Value Props */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Description Section */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters</h2>
              <p className="text-gray-700 leading-relaxed text-pretty">
                The Dangote Refinery represents a transformational investment for Nigeria&apos;s economy. As one of Africa&apos;s largest industrial projects, its capital market listing is a significant milestone for Nigerian and diaspora investors seeking exposure to critical infrastructure and energy security. BlackCircle is organizing structured investor interest to ensure informed participation in this historic opportunity.
              </p>
            </motion.div>

            {/* Value Proposition */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-gray-900 mb-6">What You Get</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                      <span className="text-sm font-semibold text-blue-600">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Early Updates</h4>
                    <p className="text-sm text-gray-600 mt-1">Be first to receive announcements and timelines for the listing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                      <span className="text-sm font-semibold text-blue-600">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Insights & Analysis</h4>
                    <p className="text-sm text-gray-600 mt-1">Access independent analysis on the opportunity and market context.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                      <span className="text-sm font-semibold text-blue-600">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Structured Guidance</h4>
                    <p className="text-sm text-gray-600 mt-1">Educational resources to help you make informed investment decisions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InvestorInterestForm />
          </motion.div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Important Disclaimer</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              This is an expression of interest only and does not constitute an offer, solicitation, or commitment to invest. BlackCircle does not guarantee access to any offering. All investments carry risk, including potential loss of principal. Past performance is not indicative of future results. Please consult with a qualified financial advisor before making any investment decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
