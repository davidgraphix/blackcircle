'use client';

import React from "react"

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeInUp } from '@/lib/motion';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
  animate?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, container = true, animate = true, ...props }, ref) => {
    const Wrapper = animate ? motion.section : 'section';
    const animationProps = animate
      ? {
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: true, margin: '-100px' },
          variants: fadeInUp,
        }
      : {};

    return (
      <Wrapper
        ref={ref as any}
        className={cn('py-16 md:py-24', className)}
        {...animationProps}
        {...props}
      >
        {container ? (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        ) : (
          children
        )}
      </Wrapper>
    );
  }
);
Section.displayName = 'Section';

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

function SectionHeader({ title, description, align = 'left', className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">{title}</h2>
      {description && (
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}

export { Section, SectionHeader };
