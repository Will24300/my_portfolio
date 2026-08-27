import React, { ReactNode } from 'react';
import { Terminal, Minus, Square, X } from 'lucide-react';

interface TerminalWindowProps {
  /** Title shown in the window header bar (e.g., "about.md", "projects.sh") */
  title?: string;
  
  /** Current working directory path prompt (e.g. "visitor@alex-dev:~") */
  path?: string;

  /** Content inside the terminal body */
  children: ReactNode;

  /** Optional additional class names for styling */
  className?: string;

  /** Optional action badge or right header content */
  rightHeader?: ReactNode;

  /** Glow effect option */
  glow?: boolean;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = 'bash',
  path = 'visitor@portfolio:~',
  children,
  className = '',
  rightHeader,
  glow = false,
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden bg-term-card border border-term-border shadow-term-window transition-all duration-300 ${
        glow ? 'border-term-accent/50 shadow-term-glow' : 'hover:border-term-border/80'
      } ${className}`}
    >
      {/* Terminal Window Header Bar */}
      <div className="bg-term-header px-4 py-2.5 flex items-center justify-between border-b border-term-border/70 select-none">
        {/* Left: Window Control Traffic Light Buttons */}
        <div className="flex items-center space-x-2">
          <button
            aria-label="Close terminal window"
            className="w-3 h-3 rounded-full bg-term-red hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <X className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            aria-label="Minimize terminal window"
            className="w-3 h-3 rounded-full bg-term-yellow hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <Minus className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            aria-label="Maximize terminal window"
            className="w-3 h-3 rounded-full bg-term-green hover:opacity-80 transition-opacity flex items-center justify-center group"
          >
            <Square className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Center: Window Title & Prompt Path */}
        <div className="flex items-center space-x-2 text-xs font-mono text-term-muted truncate mx-2">
          <Terminal className="w-3.5 h-3.5 text-term-accent flex-shrink-0" />
          <span className="text-term-accent font-semibold">{path}</span>
          <span className="text-term-border">/</span>
          <span className="text-term-text truncate">{title}</span>
        </div>

        {/* Right: Optional header element (e.g., status or close button) */}
        <div className="flex items-center space-x-2 text-xs text-term-muted">
          {rightHeader || (
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-term-bg/60 text-[10px] text-term-muted border border-term-border/40">
              UTF-8
            </span>
          )}
        </div>
      </div>

      {/* Terminal Window Body Content */}
      <div className="p-4 md:p-6 font-mono text-sm leading-relaxed overflow-x-auto text-term-text">
        {children}
      </div>
    </div>
  );
};
