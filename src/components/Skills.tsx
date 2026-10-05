import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { allSkills, stack } from '../data/profile';
import { SectionHeading } from './ui';

/* ─── Isometric layer diagram ─────────────────────────────────── */
const CX = 200;
const HW = 150; // half width of a plate
const HD = 75; // half depth (2:1 isometric)
const T = 14; // plate thickness
const GAP = 62;
const TOP = 100;

const IsoStack: React.FC<{ active: number; onHover: (i: number) => void }> = ({ active, onHover }) => (
  <svg viewBox="0 0 560 460" className="h-auto w-full" role="img" aria-label="Diagram of the five layers of my stack">
    {stack
      .map((layer, i) => ({ layer, i, y: TOP + i * GAP }))
      .reverse()
      .map(({ layer, i, y }) => {
        const isActive = i === active;
        const top = `${CX},${y - HD} ${CX + HW},${y} ${CX},${y + HD} ${CX - HW},${y}`;
        const left = `${CX - HW},${y} ${CX},${y + HD} ${CX},${y + HD + T} ${CX - HW},${y + T}`;
        const right = `${CX},${y + HD} ${CX + HW},${y} ${CX + HW},${y + T} ${CX},${y + HD + T}`;
        return (
          <motion.g
            key={layer.id}
            animate={{ y: isActive ? -14 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            onMouseEnter={() => onHover(i)}
            className="cursor-pointer"
          >
            <polygon
              points={left}
              fill={isActive ? '#a9cc2a' : '#10120e'}
              stroke="rgb(237 234 224 / 0.14)"
              strokeWidth="1"
              style={{ transition: 'fill .3s' }}
            />
            <polygon
              points={right}
              fill={isActive ? '#8fb01c' : '#0e100c'}
              stroke="rgb(237 234 224 / 0.14)"
              strokeWidth="1"
              style={{ transition: 'fill .3s' }}
            />
            <polygon
              points={top}
              fill={isActive ? '#d4ff3a' : active > i ? 'rgb(26 29 23 / 0.72)' : '#1a1d17'}
              stroke={isActive ? '#d4ff3a' : 'rgb(237 234 224 / 0.22)'}
              strokeWidth="1"
              style={{ transition: 'fill .3s, stroke .3s' }}
            />
            {/* Etched grid on the top face */}
            {[0.25, 0.5, 0.75].flatMap((t) => [
              [CX - t * HW, y - HD + t * HD, CX + HW - t * HW, y + t * HD],
              [CX + t * HW, y - HD + t * HD, CX - HW + t * HW, y + t * HD],
            ]).map(([x1, y1, x2, y2]) => (
              <line
                key={`${x1}-${y1}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isActive ? 'rgb(12 13 11 / 0.16)' : 'rgb(237 234 224 / 0.06)'}
                strokeWidth="1"
              />
            ))}
            <text
              x={CX}
              y={y + 5}
              textAnchor="middle"
              fontFamily="Geist Mono, monospace"
              fontSize="14"
              fontWeight="600"
              fill={isActive ? '#0c0d0b' : 'rgb(237 234 224 / 0.35)'}
            >
              {layer.level}
            </text>
            {/* Leader + label */}
            <line
              x1={CX + HW + 8}
              y1={y}
              x2={CX + HW + 40}
              y2={y}
              stroke={isActive ? '#d4ff3a' : 'rgb(237 234 224 / 0.18)'}
              strokeDasharray="3 3"
            />
            <text
              x={CX + HW + 48}
              y={y + 4}
              fontFamily="Geist Mono, monospace"
              fontSize="13"
              fill={isActive ? '#d4ff3a' : 'rgb(237 234 224 / 0.4)'}
            >
              {layer.id}
            </text>
          </motion.g>
        );
      })}
  </svg>
);

/* ─── Section ─────────────────────────────────────────────────── */
const Skills: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="stack" className="section overflow-x-clip bg-panel/40">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="container-x relative">
        <SectionHeading
          index="02"
          label="Tech stack"
          title={
            <>
              The <span className="serif-em text-acid">stack</span> I build on,
              <br className="hidden sm:block" /> layer by layer.
            </>
          }
          aside={
            <p>
              {allSkills.length} technologies across {stack.length} layers — from the infrastructure that ships
              code to the AI agents that run the business.
            </p>
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-[max(7rem,calc(50vh-11rem))]">
              <IsoStack active={active} onHover={setActive} />
            </div>
          </div>

          <ol className="divide-y divide-line border-y border-line lg:col-span-7">
            {stack.map((layer, i) => {
              const isActive = i === active;
              return (
                <li
                  key={layer.id}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  tabIndex={0}
                  className="group relative py-7 outline-none sm:py-9"
                >
                  <span
                    className={`absolute left-0 top-0 h-px bg-acid transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                  <div className="mb-5 flex items-baseline gap-4">
                    <span
                      className={`font-mono text-sm transition-colors ${isActive ? 'text-acid' : 'text-faint'}`}
                    >
                      {layer.level}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-2xl font-semibold tracking-tight transition-colors sm:text-3xl ${
                          isActive ? 'text-ink' : 'text-mute'
                        }`}
                      >
                        {layer.name}
                      </h3>
                      <p className="mt-1 text-sm text-faint">{layer.caption}</p>
                    </div>
                    <span className="hidden font-mono text-xs text-faint sm:block">
                      {String(layer.skills.length).padStart(2, '0')}
                    </span>
                  </div>
                  <ul className="flex flex-wrap gap-2 sm:pl-10">
                    {layer.skills.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-all duration-300 ${
                          isActive
                            ? 'border-line-strong bg-panel-2 text-ink'
                            : 'border-line bg-panel/50 text-mute'
                        }`}
                      >
                        <Icon className={`h-4 w-4 transition-colors ${isActive ? 'text-acid' : ''}`} />
                        {name}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Skills;
