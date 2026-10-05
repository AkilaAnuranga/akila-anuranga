import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems, profile } from '../data/profile';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['top', ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-[1240px] items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? 'border-line bg-bg/75 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-acid font-mono text-[13px] font-semibold text-bg transition-transform duration-300 group-hover:-rotate-6">
            AA
          </span>
          <span className="font-mono text-sm text-ink">
            akila<span className="text-faint">/</span>
            <span className="text-mute">anuranga</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${
                  active === item.id ? 'text-ink' : 'text-mute hover:text-ink'
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-panel-2"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative font-mono text-[10px] text-faint">0{i + 1}</span>
                <span className="relative">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-acid sm:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1'}`} />
            <span className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1'}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-3xl border border-line bg-bg/95 p-3 backdrop-blur-xl md:hidden"
          >
            <ul>
              {navItems.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between rounded-2xl px-4 py-4 transition-colors hover:bg-panel"
                  >
                    <span className="text-3xl font-semibold tracking-tight">{item.label}</span>
                    <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${profile.email}`} className="btn-acid mt-2 w-full" onClick={() => setOpen(false)}>
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
