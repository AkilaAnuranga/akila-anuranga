import React, { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const useLocalTime = () => {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', {
      timeZone: profile.timezone,
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const t = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return time;
};

const Footer: React.FC = () => {
  const time = useLocalTime();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-x py-10">
        <div className="grid gap-6 font-mono text-xs text-faint sm:grid-cols-3 sm:items-center">
          <p>
            © {year} {profile.firstName} {profile.middleName}
          </p>
          <p className="flex items-center gap-2 sm:justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-acid" />
            Colombo, LK — {time} (GMT+5:30)
          </p>
          <a href="#top" className="group flex items-center gap-2 text-mute transition-colors hover:text-acid sm:justify-end">
            back to top
            <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
