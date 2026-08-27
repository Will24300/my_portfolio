import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal as TerminalIcon, FileText, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { Typewriter } from './Typewriter';
import { TerminalWindow } from './TerminalWindow';

interface HeroProps {
  onOpenCli?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCli }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-term-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Greeting, Name, Typewriter Title, Pitch, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* System init prompt badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-term-header border border-term-border text-xs font-mono text-term-accent">
              <span className="text-term-cyan">visitor@portfolio:~$</span>
              <span>whoami</span>
            </div>

            {/* Name Heading with Enlarged GitHub Avatar Picture */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {profileData.avatarUrl && (
                <div className="relative group flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl p-1 bg-gradient-to-r from-term-accent via-term-cyan to-term-amber shadow-term-glow">
                    <img
                      src={profileData.avatarUrl}
                      alt={profileData.name}
                      className="w-full h-full object-cover rounded-xl bg-term-card"
                    />
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-term-accent border-2 border-term-bg rounded-full shadow-term-glow"
                    title="System Status: Online"
                  />
                </div>
              )}
              <div className="space-y-1">
                <div className="text-xs text-term-muted font-mono">// DEVELOPER IDENTIFIER</div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono leading-tight">
                  <span className="block text-term-text">Hi, I'm</span>
                  <span className="block text-term-accent text-glow">{profileData.name}</span>
                </h1>
              </div>
            </div>

            {/* Typewriter Role Title */}
            <div className="text-lg sm:text-xl md:text-2xl font-mono text-term-cyan flex items-center min-h-[2.5rem]">
              <span className="text-term-muted mr-2">&gt;</span>
              <Typewriter words={profileData.roleTitles} typingSpeed={70} deletingSpeed={35} />
            </div>

            {/* One-Line Pitch */}
            <p className="text-base sm:text-lg text-term-muted font-mono leading-relaxed max-w-2xl">
              {profileData.pitch}
            </p>

            {/* Terminal-prompt-style CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 font-mono">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded bg-term-accent hover:bg-term-accentHover text-term-bg font-bold shadow-term-glow transition-all duration-200 group"
              >
                <span>$ view --projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded bg-term-card hover:bg-term-header border border-term-border text-term-text hover:border-term-accent transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-term-amber" />
                <span>$ cat contact.txt</span>
              </a>

              {onOpenCli && (
                <button
                  onClick={onOpenCli}
                  className="inline-flex items-center space-x-2 px-4 py-3 rounded bg-term-bg border border-term-border text-term-cyan hover:border-term-cyan hover:bg-term-header transition-all duration-200"
                >
                  <TerminalIcon className="w-4 h-4 text-term-cyan" />
                  <span>$ open --cli</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Right Column: Mini Interactive / Terminal Preview Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <TerminalWindow
              title="system_status.sh"
              path="alex@node-01:~"
              glow={true}
              className="text-xs sm:text-sm font-mono shadow-2xl"
            >
              <div className="space-y-2">
                <div className="text-term-muted"># System Information & Environment</div>
                
                <div className="flex items-center justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-muted">OS:</span>
                  <span className="text-term-text">Linux / Developer Kernel 6.8</span>
                </div>

                <div className="flex items-center justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-muted">SHELL:</span>
                  <span className="text-term-cyan">zsh 5.9 (x86_64-apple-darwin)</span>
                </div>

                <div className="flex items-center justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-muted">UPTIME:</span>
                  <span className="text-term-accent">99.98%</span>
                </div>

                <div className="flex items-center justify-between border-b border-term-border/40 pb-1.5">
                  <span className="text-term-muted">PRIMARY STACK:</span>
                  <span className="text-term-amber">TS / React / Node / Go</span>
                </div>

                <div className="pt-2">
                  <div className="text-term-muted mb-1">$ status --current</div>
                  <div className="bg-term-bg p-2.5 rounded border border-term-border/60 text-term-accent font-semibold flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-term-accent animate-ping" />
                    <span>{profileData.status}</span>
                  </div>
                </div>

                <div className="pt-2 text-term-muted flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-term-cyan" /> React 19 + TypeScript
                  </span>
                  <span>Press <kbd className="px-1 py-0.5 rounded bg-term-header border border-term-border text-term-accent">$ cli</kbd> for interactive shell</span>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
