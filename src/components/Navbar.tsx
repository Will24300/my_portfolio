import React, { useState } from 'react';
import { Terminal, Menu, X, Command } from 'lucide-react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onOpenCli?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCli }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: '~/about', href: '#about' },
    { label: '~/skills', href: '#skills' },
    { label: '~/projects', href: '#projects' },
    { label: '~/experience', href: '#experience' },
    { label: '~/contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-term-bg/90 backdrop-blur-md border-b border-term-border/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Prompt */}
          <a
            href="#"
            className="flex items-center space-x-2.5 text-term-accent font-mono font-bold hover:text-term-text transition-colors group"
          >
            {profileData.avatarUrl ? (
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="w-7 h-7 rounded-full border border-term-accent object-cover group-hover:scale-105 transition-transform"
              />
            ) : (
              <Terminal className="w-5 h-5 text-term-accent group-hover:animate-pulse" />
            )}
            <span className="text-sm sm:text-base">
              <span className="text-term-cyan">visitor</span>
              <span className="text-term-muted">@</span>
              <span className="text-term-accent">{profileData.name.toLowerCase().replace(/\s+/g, '')}</span>
              <span className="text-term-text">:~$</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-mono">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-term-muted hover:text-term-accent transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-term-accent transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons: CLI Trigger & Status */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono bg-term-accent/10 text-term-accent border border-term-accent/30">
              <span className="w-1.5 h-1.5 rounded-full bg-term-accent animate-pulse mr-1.5" />
              ONLINE
            </span>

            {onOpenCli && (
              <button
                onClick={onOpenCli}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-term-header hover:bg-term-surface border border-term-border text-xs font-mono text-term-accent hover:border-term-accent transition-all shadow-sm group"
                title="Launch Interactive Terminal CLI"
              >
                <Command className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                <span>$ cli</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-2">
            {onOpenCli && (
              <button
                onClick={onOpenCli}
                className="p-2 rounded text-term-accent bg-term-header border border-term-border text-xs font-mono"
                aria-label="Open CLI"
              >
                <Command className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-term-muted hover:text-term-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-term-surface border-b border-term-border px-4 pt-2 pb-6 space-y-3 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-term-muted hover:text-term-accent py-2 border-b border-term-border/40"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between text-xs text-term-muted">
            <span>STATUS: ONLINE</span>
            <span className="text-term-accent">SYSTEM: NORMAL</span>
          </div>
        </div>
      )}
    </header>
  );
};
