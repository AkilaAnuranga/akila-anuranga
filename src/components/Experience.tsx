import React from 'react';
import { motion } from 'framer-motion';
import { experiences, type Experience as Exp } from '../data/profile';
import { SectionHeading } from './ui';

// Short, stable pseudo commit hash for each role (decorative)
const shortHash = (input: string) => {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(8, '0').slice(0, 7);
};

const Commit: React.FC<{ exp: Exp; index: number }> = ({ exp, index }) => (
  <motion.li
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    className="relative grid grid-cols-1 gap-4 pb-8 pl-10 sm:pb-14 last:pb-0 md:grid-cols-12 md:gap-8 md:pl-0"
  >
    {/* Period column (desktop) */}
    <div className="hidden pt-1 md:col-span-3 md:block">
      <p className="font-mono text-sm text-ink">{exp.period}</p>
      <p className="mt-1 font-mono text-xs text-faint">commit {shortHash(exp.company)}</p>
    </div>

    {/* Graph node */}
    <div className="absolute left-0 top-1 md:static md:col-span-1 md:flex md:justify-center">
      <span
        className={`relative z-10 grid h-[22px] w-[22px] place-items-center rounded-full border-2 ${
          exp.current ? 'border-acid bg-bg' : 'border-line-strong bg-bg'
        }`}
      >
        <span className={`h-2 w-2 rounded-full ${exp.current ? 'bg-acid' : 'bg-faint'}`} />
        {exp.current && <span className="absolute inset-0 animate-ping-slow rounded-full border border-acid" />}
      </span>
    </div>

    {/* Card */}
    <article className="group rounded-3xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-line-strong sm:p-8 md:col-span-8">
      <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-[11px]">
        {exp.current ? (
          <span className="rounded-full bg-acid px-2.5 py-1 font-medium text-bg">HEAD → current</span>
        ) : (
          <span className="rounded-full border border-line px-2.5 py-1 text-mute">merged</span>
        )}
        <span className="text-faint md:hidden">
          {exp.period} · {shortHash(exp.company)}
        </span>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{exp.position}</h3>
      <p className="mt-1 text-lg">
        <span className="text-faint">@</span> <span className="text-acid">{exp.company}</span>
      </p>

      <p className="mt-5 leading-relaxed text-mute">{exp.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <li key={tag} className="chip group-hover:border-line-strong">
            <span className="text-faint">#</span>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  </motion.li>
);

const Experience: React.FC = () => (
  <section id="work" className="section">
    <div className="container-x">
      <SectionHeading
        index="01"
        label="Experience"
        title={
          <>
            A decade of <span className="serif-em text-acid">shipping</span>
            <br className="hidden sm:block" /> real software.
          </>
        }
        aside={
          <p className="font-mono text-xs">
            <span className="text-acid">$</span> git log --oneline --career
          </p>
        }
      />

      <ol className="relative">
        {/* Branch line */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[10px] top-2 w-px bg-gradient-to-b from-acid via-line-strong to-transparent md:left-[calc(29.1667%-0.4167rem)]"
        />
        {experiences.map((exp, i) => (
          <Commit key={exp.company} exp={exp} index={i} />
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
