import React from 'react';
import { allSkills } from '../data/profile';

const Marquee: React.FC = () => {
  const items = [...allSkills, ...allSkills];

  return (
    <div className="relative border-y border-line bg-panel/60 py-5" aria-label="Technologies I work with">
      <div className="fade-x group flex overflow-hidden">
        <ul className="flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
          {items.map(({ name, icon: Icon }, i) => (
            <li
              key={`${name}-${i}`}
              className="flex items-center gap-3 px-6 text-mute transition-colors hover:text-ink sm:px-8"
              aria-hidden={i >= allSkills.length}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap font-mono text-sm">{name}</span>
              <span className="ml-6 text-faint sm:ml-8">/</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
