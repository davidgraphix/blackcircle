'use client';

import { Section, SectionHeader } from '@/components/ui/section';

export function WhatIsBlackCircle() {
  return (
    <Section className="bg-muted/30">
      <SectionHeader title="What is BlackCircle?" />
      <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <p>
          BlackCircle is an education and insights platform built for anyone who wants to understand 
          and participate in African markets. We believe that financial knowledge should be accessible, 
          practical, and rooted in local context.
        </p>
        <p>
          Whether you&apos;re just starting your investment journey or looking to deepen your market 
          knowledge, we provide the tools and insights you need. From daily market commentary to 
          structured courses, our content is designed by practitioners who understand the unique 
          dynamics of African economies.
        </p>
        <p>
          Our focus begins with Nigeria — one of Africa&apos;s largest and most dynamic markets — with 
          plans to expand coverage across the continent.
        </p>
      </div>
    </Section>
  );
}
