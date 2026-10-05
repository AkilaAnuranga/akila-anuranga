import React from 'react';
import { motion } from 'framer-motion';

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading: React.FC<{
  index: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
}> = ({ index, label, title, aside }) => (
  <div className="mb-10 grid grid-cols-1 gap-5 border-b border-line pb-6 sm:mb-16 sm:pb-8 lg:mb-20 md:grid-cols-12 md:items-end">
    <Reveal className="md:col-span-8">
      <p className="eyebrow mb-5 flex items-center gap-3">
        <span className="text-acid">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        {label}
      </p>
      <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
        {title}
      </h2>
    </Reveal>
    {aside && (
      <Reveal delay={0.1} className="text-sm leading-relaxed text-mute md:col-span-4 md:text-right">
        {aside}
      </Reveal>
    )}
  </div>
);

export const ArrowUpRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
