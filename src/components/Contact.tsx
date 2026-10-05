import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data/profile';
import { ArrowUpRight, Reveal } from './ui';

const channels = [
  { label: 'Email', command: 'mail', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', command: 'call', value: profile.phone, href: profile.phoneLink },
  {
    label: 'LinkedIn',
    command: 'connect',
    value: 'in/akila-anuranga',
    href: profile.linkedin,
  },
  {
    label: 'Location',
    command: 'locate',
    value: profile.location,
    href: 'https://maps.google.com/?q=Colombo,Sri+Lanka',
  },
];

const socials = [
  { name: 'LinkedIn', icon: FaLinkedin, href: profile.linkedin },
  { name: 'GitHub', icon: FaGithub, href: profile.github },
  { name: 'WhatsApp', icon: FaWhatsapp, href: profile.whatsapp },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      ReactGA.event({ category: 'Contact', action: 'Copy', label: 'Email' });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full bg-acid/[0.07] blur-[120px]" />

      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow mb-5 flex sm:mb-8 items-center gap-3">
            <span className="text-acid">04</span>
            <span className="h-px w-8 bg-line-strong" />
            Contact
          </p>
          <h2 className="max-w-5xl text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
            Let's automate <span className="serif-em text-acid">something</span> great together.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:mt-24 lg:gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ul className="border-t border-line">
              {channels.map((c) => (
                <li key={c.label} className="border-b border-line">
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => ReactGA.event({ category: 'Contact', action: 'Click', label: c.label })}
                    className="group flex items-center gap-4 py-6 transition-colors sm:gap-6"
                  >
                    <span className="w-20 shrink-0 font-mono text-xs text-faint sm:w-24">
                      <span className="text-acid">$</span> {c.command}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-lg text-mute transition-colors group-hover:text-ink sm:text-2xl">
                      {c.value}
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-mute transition-all duration-300 group-hover:rotate-45 group-hover:border-acid group-hover:bg-acid group-hover:text-bg">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="dot-bg flex h-full flex-col justify-between gap-10 rounded-3xl bg-acid p-7 text-bg sm:p-9">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-bg/60">Start a project</p>
                <p className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Have a process that should run itself?
                </p>
                <p className="mt-3 text-bg/70">
                  Tell me about it and let’s map out what can be automated.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    onClick={() => ReactGA.event({ category: 'Contact', action: 'Click', label: 'Email CTA' })}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-bg px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Send an email <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center rounded-full border border-bg/25 px-5 py-3.5 font-mono text-xs transition-colors hover:bg-bg/10"
                    aria-live="polite"
                  >
                    {copied ? '✓ copied' : 'copy address'}
                  </button>
                </div>

                <div className="flex gap-2">
                  {socials.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      onClick={() => ReactGA.event({ category: 'Social Media', action: 'Click', label: name })}
                      className="grid h-11 w-11 place-items-center rounded-full border border-bg/25 transition-colors hover:bg-bg hover:text-acid"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
