'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Terms of Service</h1>
            <p className="mt-4 text-muted-foreground">Last updated: January 30, 2026</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 prose prose-neutral max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using BlackCircle (&quot;the Service&quot;), you accept and agree to be bound 
                  by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="leading-relaxed">
                  BlackCircle provides educational content, market insights, and learning resources related 
                  to African financial markets. Our Service includes articles, videos, courses, guides, 
                  and community features.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                <p className="leading-relaxed mb-4">When you create an account with us, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Promptly update any changes to your information</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Educational Disclaimer</h2>
                <p className="leading-relaxed">
                  <strong>Important:</strong> All content provided through BlackCircle is for educational 
                  and informational purposes only. Our content does not constitute personalized investment 
                  advice, financial advice, trading advice, or any other sort of advice. You should not 
                  make any investment decision based solely on the information provided through our Service.
                </p>
                <p className="leading-relaxed mt-4">
                  Always conduct your own research and consult with qualified financial professionals 
                  before making investment decisions. Past performance is not indicative of future results.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on BlackCircle, including text, graphics, logos, images, videos, and software, 
                  is the property of BlackCircle or its content suppliers and is protected by intellectual 
                  property laws. You may not reproduce, distribute, modify, or create derivative works without 
                  our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. User Conduct</h2>
                <p className="leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Service for any unlawful purpose</li>
                  <li>Share your account credentials with others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Post false, misleading, or harmful content in community spaces</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Use automated systems to access the Service without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  To the fullest extent permitted by law, BlackCircle shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to 
                  loss of profits, data, or other intangible losses, resulting from your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will provide notice of 
                  significant changes by posting the new Terms on this page. Your continued use of the 
                  Service after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Termination</h2>
                <p className="leading-relaxed">
                  We may terminate or suspend your account and access to the Service immediately, without 
                  prior notice, for conduct that we believe violates these Terms or is harmful to other 
                  users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">10. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  Federal Republic of Nigeria, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@blackcircle.com" className="text-primary hover:underline">
                    legal@blackcircle.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-border">
            <Link
              href="/legal/privacy"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Privacy Policy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
