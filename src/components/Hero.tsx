import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import { SiClaude, SiUipath } from 'react-icons/si';
import { HiCog } from 'react-icons/hi';
import { MdSmartToy } from 'react-icons/md';
import { FaPython } from 'react-icons/fa';
import akilaImage from '../assets/images/akila_millagahawatta.png';
import { allSkills, experiences, profile } from '../data/profile';

const ease = [0.22, 1, 0.36, 1] as const;

const RoleRotator: React.FC = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={profile.roles[idx]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="whitespace-nowrap text-acid"
        >
          "{profile.roles[idx]}"
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const floatingChips = [
  { label: 'UiPath', icon: SiUipath, className: '-left-6 top-[16%]', delay: 0 },
  { label: 'Agentic AI', icon: MdSmartToy, className: '-right-8 top-[34%]', delay: 0.8 },
  { label: 'Power Automate', icon: HiCog, className: '-left-10 bottom-[30%]', delay: 1.6 },
  { label: 'Python', icon: FaPython, className: '-right-4 bottom-[14%]', delay: 2.4 },
];

const PortraitCard: React.FC = () => (
  <div className="relative mx-auto w-full max-w-[420px]">
    <div className="dot-bg relative aspect-[4/5] overflow-hidden rounded-[28px] bg-acid">
      {/* Corner meta */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-wider text-bg/70">
        <span>ID · AAM/{profile.careerStart}</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-bg" /> online
        </span>
      </div>
      {/* Big background letters */}
      <span className="pointer-events-none absolute -left-2 top-12 select-none text-[9rem] font-bold leading-none tracking-[-0.08em] text-bg/[0.07] sm:text-[11rem]">
        AA
      </span>
      <img
        src={akilaImage}
        alt={`${profile.firstName} ${profile.middleName} ${profile.lastName}`}
        className="absolute inset-x-0 bottom-0 mx-auto h-[92%] w-auto max-w-none object-contain object-bottom"
        width={896}
        height={1152}
      />
      {/* Status strip */}
      <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-bg/80 px-4 py-3 backdrop-blur-md">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-wider text-faint">Currently</p>
          <p className="truncate text-sm font-medium text-ink">{profile.current.role}</p>
          <p className="truncate text-xs text-mute">@ {profile.current.company}</p>
        </div>
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember" />
        </span>
      </div>
    </div>

    {/* Floating tech chips (desktop only) */}
    {floatingChips.map(({ label, icon: Icon, className, delay }) => (
      <motion.div
        key={label}
        className={`absolute z-20 hidden items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-1.5 font-mono text-xs text-ink shadow-xl backdrop-blur lg:flex ${className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { delay: 0.8 + delay * 0.15 },
          scale: { delay: 0.8 + delay * 0.15 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
        }}
      >
        <Icon className="h-3.5 w-3.5 text-acid" />
        {label}
      </motion.div>
    ))}
  </div>
);

const Hero: React.FC = () => {
  const years = new Date().getFullYear() - profile.careerStart;

  const stats = [
    { value: `${years}+`, label: 'Years shipping' },
    { value: `${experiences.length}`, label: 'Companies' },
    { value: `${allSkills.length}+`, label: 'Technologies' },
  ];

  const track = (label: string) => ReactGA.event({ category: 'CTA', action: 'Click', label });

  return (
    <section id="top" className="relative overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-36 lg:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-acid/10 blur-[120px]" />

      <div className="container-x relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 flex flex-wrap gap-2"
          >
            <p className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-acid" />
              Open to automation &amp; AI projects
            </p>
            <a href="#education" className="chip border-acid/40 text-acid transition-colors hover:bg-acid hover:text-bg">
              <SiClaude className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Certified</span> Claude Code Architect — Foundation
            </a>
          </motion.div>

          <h1 className="font-semibold leading-[0.88] tracking-[-0.055em]">
            {[profile.firstName, profile.middleName].map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block text-[clamp(3.4rem,11vw,8rem)]"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease }}
                >
                  {word}
                  {i === 1 && <span className="text-acid">.</span>}
                </motion.span>
              </span>
            ))}
            <motion.span
              className="mt-3 block font-serif text-[clamp(1.6rem,4.4vw,3rem)] font-normal italic tracking-normal text-mute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {profile.lastName}
            </motion.span>
          </h1>

          {/* Terminal line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-8 inline-block max-w-full rounded-xl border border-line bg-panel px-4 py-3 font-mono text-[13px] sm:text-sm"
          >
            <p className="text-faint">
              <span className="text-acid">~/akila</span> $ whoami --role
            </p>
            <p className="mt-1 flex flex-wrap items-center gap-x-2 text-mute">
              <span className="text-faint">→</span> role: <RoleRotator />
              <span className="inline-block h-4 w-2 animate-blink bg-acid" />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-mute sm:text-xl"
          >
            I design and ship <span className="serif-em text-ink">production-ready</span> agentic-AI and automation
            workflows, built with Python, that turn complex business processes into work that{' '}
            <span className="serif-em whitespace-nowrap text-ink">just runs.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#work" className="btn-acid" onClick={() => track('Explore My Work Button')}>
              View my work
              <span aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="btn-ghost" onClick={() => track('Get In Touch Button')}>
              Get in touch
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 grid max-w-lg grid-cols-3 sm:mt-14 divide-x divide-line border-y border-line"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-3 py-4 first:pl-0 sm:px-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-wider text-faint sm:text-[11px]">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
        >
          <PortraitCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
