import React, { useState, useEffect } from 'react';
import { GitBranch, Terminal, ShieldCheck, Heart } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-16 bg-term-header border-t border-term-border text-xs font-mono select-none">
      {/* Tmux / Vim Status Bar Strip */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-term-muted">
        
        {/* Left Status Segment */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-term-accent text-term-bg font-bold text-[11px]">
            NORMAL
          </span>

          <span className="flex items-center space-x-1 text-term-cyan">
            <GitBranch className="w-3.5 h-3.5" />
            <span>main*</span>
          </span>

          <span className="hidden sm:inline border-r border-term-border h-3" />

          <span className="hidden sm:inline text-term-text">
            utf-8 [unix]
          </span>
        </div>

        {/* Center: Copyright & Personal Info */}
        <div className="flex items-center space-x-2 text-center text-term-text">
          <span>© {new Date().getFullYear()} {profileData.name}.</span>
          <span className="text-term-muted hidden sm:inline">Built with React & Tailwind CSS.</span>
        </div>

        {/* Right Status Segment */}
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1 text-term-accent">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SSL SECURE</span>
          </span>

          <span className="border-r border-term-border h-3" />

          <span className="text-term-amber font-mono">
            {timeStr || '12:00:00'}
          </span>
        </div>

      </div>
    </footer>
  );
};
