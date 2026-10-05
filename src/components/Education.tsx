import React from 'react';
import ReactGA from 'react-ga4';
import { certifications, education, learning } from '../data/profile';
import { ArrowUpRight, Reveal, SectionHeading } from './ui';

const Education: React.FC = () => (
  <section id="education" className="section">
    <div className="container-x">
      <SectionHeading
        index="03"
        label="Education & Certifications"
        title={
          <>
            Built on solid <span className="serif-em text-acid">foundations.</span>
          </>
        }
        aside={<p>Formal engineering training, industry certification, and a habit of never stopping learning.</p>}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {certifications.map(({ name, level, url, issuer, description, icon: Icon }) => (
          <Reveal key={name} className="lg:col-span-12">
            <article className="group relative overflow-hidden rounded-3xl border border-acid/40 bg-panel p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-acid/10 blur-3xl" />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-acid text-bg transition-transform duration-500 group-hover:rotate-[-8deg] sm:h-20 sm:w-20">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
                    <span className="text-mute">Certification</span>
                    <span className="text-faint">·</span>
                    <span className="text-mute">{issuer}</span>
                    <span className="rounded-full bg-ember/15 px-2 py-0.5 text-ember">New</span>
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {name} <span className="serif-em text-acid">— {level}</span>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute sm:text-base">{description}</p>
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => ReactGA.event({ category: 'Certification', action: 'Verify', label: name })}
                  className="btn-acid shrink-0 self-start md:self-center"
                >
                  <span aria-hidden="true">✓</span> Verify credential
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}

        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.08} className="lg:col-span-4">
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-line-strong sm:p-8">
              <div className="flex items-center justify-between font-mono text-xs text-faint">
                <span>{edu.period}</span>
                <span>{edu.location}</span>
              </div>

              <div className="my-10 flex items-end gap-3">
                <span className="text-7xl font-semibold leading-none tracking-[-0.05em] text-ink transition-colors group-hover:text-acid sm:text-8xl">
                  {edu.metric}
                </span>
                <span className="pb-2 font-mono text-xs uppercase tracking-wider text-mute">{edu.metricLabel}</span>
              </div>

              <h3 className="text-xl font-semibold leading-snug tracking-tight">{edu.degree}</h3>
              <p className="mt-1 text-acid">{edu.institution}</p>
              <p className="mt-4 text-sm leading-relaxed text-mute">{edu.description}</p>
            </article>
          </Reveal>
        ))}

        {/* Learning log terminal */}
        <Reveal delay={0.16} className="lg:col-span-4">
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-[#080907]">
            <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-faint">learning.log</span>
            </div>
            <div className="flex-1 p-5 font-mono text-[13px] leading-relaxed sm:p-6">
              <p className="text-faint">
                <span className="text-acid">~/akila</span> $ tail -f learning.log
              </p>
              <ul className="mt-4 space-y-4">
                {learning.map((item) => (
                  <li key={item.topic}>
                    <p className="flex items-center gap-2 text-ink">
                      <span className="text-acid">●</span>
                      {item.topic}
                    </p>
                    <p className="pl-5 text-mute">{item.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 text-faint">
                <span className="text-ember">◌</span> watching for new tech
                <span className="inline-block h-3.5 w-1.5 animate-blink bg-acid" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Education;
